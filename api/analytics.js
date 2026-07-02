'use strict';

/*
 * Analytics read endpoint (GET /api/analytics?period=7).
 * Password-gated via the `x-admin-password` header. Returns the aggregate
 * shape consumed by /admin. Reads only — never mutates.
 */

const redis = require('./_redis');

const P = 'piost:';
const ADMIN_PASSWORD = process.env.ANALYTICS_PASSWORD || 'piost2024admin';

module.exports = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');

    if ((req.headers['x-admin-password'] || '') !== ADMIN_PASSWORD) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    if (!redis.configured()) {
        res.status(200).json({
            error: 'Redis not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.',
            totalVisits: 0, countries: {}, recentVisits: [], dailyStats: {},
        });
        return;
    }

    const period = Math.max(1, parseInt((req.query && req.query.period) || '7', 10) || 7);

    try {
        // Batch 1: scalar counters + hashes + recent visits (one round trip).
        const [scalars, countriesFlat, pageviewsFlat, dwellFlat, recentVisits] = await redis.pipeline([
            ['MGET', P + 'total_visits', P + 'total_pageviews', P + 'total_dwell_ms'],
            ['HGETALL', P + 'countries'],
            ['HGETALL', P + 'pageviews'],
            ['HGETALL', P + 'dwell_ms'],
            ['LRANGE', P + 'recent_visits', 0, 999],
        ]);
        const totalVisits = Number(scalars?.[0] || 0);
        const totalPageViews = Number(scalars?.[1] || 0);
        const totalDwellMs = Number(scalars?.[2] || 0);
        const countries = redis.hgetallToObj(countriesFlat);
        const pageViews = redis.hgetallToObj(pageviewsFlat);
        const dwellMsByPath = redis.hgetallToObj(dwellFlat);

        const parsedVisits = (recentVisits || []).map((v) => {
            if (typeof v === 'string') { try { return JSON.parse(v); } catch { return null; } }
            return v;
        }).filter(Boolean);

        // Filter visits by period.
        const periodStart = new Date();
        periodStart.setDate(periodStart.getDate() - period);
        periodStart.setHours(0, 0, 0, 0);
        const filteredVisits = parsedVisits.filter((v) => v.timestamp && new Date(v.timestamp) >= periodStart);

        const periodCountries = {};
        filteredVisits.forEach((v) => { if (v.country) periodCountries[v.country] = (periodCountries[v.country] || 0) + 1; });

        // Daily counts for this period + the preceding one, in one mget.
        const dates = [];
        for (let i = 0; i < period * 2; i++) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            dates.push(d.toISOString().split('T')[0]);
        }
        const dayCounts = await redis.cmd('MGET', ...dates.map((d) => P + 'daily:' + d));
        const dailyStats = {};
        let periodTotal = 0;
        let prevPeriodTotal = 0;
        for (let i = 0; i < dates.length; i++) {
            const n = Number((dayCounts && dayCounts[i]) || 0);
            if (i < period) { dailyStats[dates[i]] = n; periodTotal += n; } else { prevPeriodTotal += n; }
        }

        // Unique visitors via HyperLogLog (all-time + period + per-day).
        let uniqueTotal = 0;
        let uniquePeriod = 0;
        const dailyUnique = {};
        try {
            uniqueTotal = Number(await redis.cmd('PFCOUNT', P + 'uniq:all')) || 0;
            const periodUniqKeys = dates.slice(0, period).map((d) => P + 'uniq:day:' + d);
            if (periodUniqKeys.length) uniquePeriod = Number(await redis.cmd('PFCOUNT', ...periodUniqKeys)) || 0;
            if (period <= 30) {
                const perDay = await redis.pipeline(dates.slice(0, period).map((d) => ['PFCOUNT', P + 'uniq:day:' + d]));
                for (let i = 0; i < period; i++) dailyUnique[dates[i]] = Number(perDay[i] || 0);
            }
        } catch { /* HLL keys may not exist yet */ }

        // Per-page average engaged time (seconds) + global average.
        const pageDwell = {};
        for (const [p, count] of Object.entries(pageViews)) {
            const c = Number(count) || 0;
            const ms = Number(dwellMsByPath[p]) || 0;
            if (c > 0 && ms > 0) pageDwell[p] = Math.round(ms / c / 1000);
        }
        const avgDwellSec = totalPageViews > 0 ? Math.round(totalDwellMs / totalPageViews / 1000) : 0;

        // Recent session journeys (ordered page sequences).
        const sessions = [];
        try {
            const sids = (await redis.cmd('LRANGE', P + 'recent_sessions', 0, 29)) || [];
            const uniqSids = Array.from(new Set(sids)).slice(0, 25);
            if (uniqSids.length) {
                const cmds = [];
                uniqSids.forEach((sid) => { cmds.push(['LRANGE', P + 'sess:' + sid, 0, -1]); cmds.push(['HGETALL', P + 'sess:' + sid + ':m']); });
                const rows = await redis.pipeline(cmds);
                for (let i = 0; i < uniqSids.length; i++) {
                    const paths = rows[i * 2] || [];
                    const metaObj = redis.hgetallToObj(rows[i * 2 + 1]);
                    if (!paths.length) continue;
                    sessions.push({ paths, country: metaObj.c || 'Unknown', device: metaObj.d || '', ms: Number(metaObj.ms) || 0, start: metaObj.t || '' });
                }
            }
        } catch { /* session keys may be absent */ }

        res.status(200).json({
            totalVisits, totalPageViews, pageViews, pageDwell, avgDwellSec, sessions,
            periodTotal, prevPeriodTotal, uniqueTotal, uniquePeriod, dailyUnique,
            countries: periodCountries, allCountries: countries,
            recentVisits: filteredVisits, dailyStats, period,
        });
    } catch (e) {
        console.error('Analytics error:', e && e.message);
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
};
