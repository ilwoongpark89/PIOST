'use strict';

/*
 * Visitor tracking beacon endpoint (POST /api/track).
 * - First page of a session  → a full visit (geo / IP / UA / referrer / device).
 * - Every navigation          → a page view (with session id, for journeys).
 * - Engaged time per page      → durationOnly beacon (flushed on hide/unload).
 * All keys are namespaced `piost:` so this Redis is isolated from any other
 * project that may share the same Upstash instance.
 * Mirrors the mftel-website analytics model.
 */

const redis = require('./_redis');

const P = 'piost:';

module.exports = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method !== 'POST') {
        res.status(405).json({ success: false });
        return;
    }
    try {
        if (!redis.configured()) {
            res.status(200).json({ success: false, error: 'Redis not configured' });
            return;
        }

        // Client-supplied signals (body may be absent for old callers).
        let meta = {};
        try { meta = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); } catch { meta = {}; }

        const pvPath = cleanPath(meta.path);
        const sid = String(meta.sid || '').substring(0, 64);

        // Engaged-time beacon: accumulate dwell (not a new page view).
        if (meta.durationOnly) {
            // Floor to an integer — Redis HINCRBY/INCRBY reject fractional increments.
            const ms = Math.floor(Math.min(Math.max(Number(meta.ms) || 0, 0), 30 * 60 * 1000)); // clamp 0..30min
            if (ms > 0) {
                const cmds = [
                    ['HINCRBY', P + 'dwell_ms', pvPath, ms],
                    ['INCRBY', P + 'total_dwell_ms', ms],
                ];
                if (sid) cmds.push(['HINCRBY', P + 'sess:' + sid + ':m', 'ms', ms]);
                await redis.pipeline(cmds);
            }
            res.status(200).json({ success: true, duration: true });
            return;
        }

        // Every navigation is a page view.
        const cmds = [
            ['HINCRBY', P + 'pageviews', pvPath, 1],
            ['INCR', P + 'total_pageviews'],
        ];
        // Append to the session journey (ordered path list, 1h TTL).
        if (sid) {
            cmds.push(['RPUSH', P + 'sess:' + sid, pvPath]);
            cmds.push(['LTRIM', P + 'sess:' + sid, 0, 49]);
            cmds.push(['EXPIRE', P + 'sess:' + sid, 3600]);
        }

        if (meta.pageviewOnly) {
            await redis.pipeline(cmds);
            res.status(200).json({ success: true, pageview: true });
            return;
        }

        // ── First page of the session → a full visit ────────────────────────
        const fwd = req.headers['x-forwarded-for'];
        const ip = (fwd ? String(fwd).split(',')[0] : (req.headers['x-real-ip'] || 'unknown')).trim();

        const country = req.headers['x-vercel-ip-country'] || '';
        const cityRaw = req.headers['x-vercel-ip-city'] || '';
        const region = req.headers['x-vercel-ip-country-region'] || '';
        let location = {
            country: country || 'Unknown',
            city: cityRaw ? safeDecode(cityRaw) : 'Unknown',
            region: region || 'Unknown',
        };
        // Fallback geolocation for local dev (no Vercel headers).
        if (!country) {
            try {
                const geo = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city`).then((r) => r.json());
                if (geo && geo.status === 'success') {
                    location = { country: geo.country || 'Unknown', city: geo.city || 'Unknown', region: geo.regionName || 'Unknown' };
                }
            } catch { /* geolocation failed, use defaults */ }
        }

        // Normalize referrer to host; drop our own domain → treat as direct.
        let referrerHost = '';
        if (meta.referrer) {
            try {
                const host = new URL(meta.referrer).hostname.replace(/^www\./, '');
                if (!host.includes('piost')) referrerHost = host;
            } catch { /* malformed referrer, ignore */ }
        }

        const ua = req.headers['user-agent'] || 'Unknown';
        const timestamp = new Date().toISOString();
        const visit = {
            ip: ip.substring(0, 10) + '***', // partial IP for privacy
            country: location.country,
            city: location.city,
            region: location.region,
            timestamp,
            userAgent: String(ua).substring(0, 180),
            referrer: referrerHost,
            path: String(meta.path || '').substring(0, 80),
            language: String(meta.language || '').substring(0, 12),
            screen: String(meta.screen || '').substring(0, 12),
        };
        const today = timestamp.split('T')[0];

        cmds.push(['INCR', P + 'total_visits']);
        cmds.push(['INCR', P + 'daily:' + today]);
        cmds.push(['HINCRBY', P + 'countries', location.country, 1]);
        // Unique visitors via HyperLogLog (probabilistic; stores no raw IP).
        cmds.push(['PFADD', P + 'uniq:all', ip]);
        cmds.push(['PFADD', P + 'uniq:day:' + today, ip]);

        if (sid) {
            const uaLow = String(ua).toLowerCase();
            const device = (/ipad|tablet/.test(uaLow) || (/android/.test(uaLow) && !/mobile/.test(uaLow)))
                ? 'Tablet'
                : (/mobi|iphone|ipod|windows phone/.test(uaLow) ? 'Mobile' : 'Desktop');
            cmds.push(['HSET', P + 'sess:' + sid + ':m', 'c', location.country, 'd', device, 't', timestamp]);
            cmds.push(['EXPIRE', P + 'sess:' + sid + ':m', 3600]);
            cmds.push(['LPUSH', P + 'recent_sessions', sid]);
            cmds.push(['LTRIM', P + 'recent_sessions', 0, 199]);
        }

        cmds.push(['LPUSH', P + 'recent_visits', JSON.stringify(visit)]);
        cmds.push(['LTRIM', P + 'recent_visits', 0, 999]);

        await redis.pipeline(cmds);
        res.status(200).json({ success: true });
    } catch (e) {
        console.error('Tracking error:', e && e.message);
        res.status(500).json({ success: false });
    }
};

function safeDecode(s) {
    try { return decodeURIComponent(s); } catch { return s; }
}

// Bound stored pageview/dwell hash keys: drop query, whitelist charset, cap length.
// Prevents crafted paths from inflating hash-field cardinality without bound.
function cleanPath(p) {
    let s = String(p || '/').split('?')[0].split('&')[0].substring(0, 64).replace(/[^\w/#.\-]/g, '');
    if (s[0] !== '/') s = '/' + s;
    return s || '/';
}
