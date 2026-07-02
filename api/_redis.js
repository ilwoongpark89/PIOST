'use strict';

/*
 * Minimal Upstash Redis REST client — no npm dependency, so the site stays a
 * zero-build static deploy while /api/* run as Vercel Node functions.
 * The pipeline endpoint batches many commands into a single round trip.
 * Ref: https://upstash.com/docs/redis/features/restapi
 */

const BASE = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/+$/, '');
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';

function configured() {
    return Boolean(BASE && TOKEN);
}

async function pipeline(commands) {
    if (!configured()) throw new Error('Upstash not configured');
    if (!commands.length) return [];
    const resp = await fetch(BASE + '/pipeline', {
        method: 'POST',
        headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(commands),
    });
    if (!resp.ok) {
        const text = await resp.text().catch(() => '');
        throw new Error(`Upstash ${resp.status}: ${text}`);
    }
    const data = await resp.json();
    // Each entry is { result } or { error }; surface errors, keep result order.
    return data.map((d) => {
        if (d && d.error) throw new Error(`Upstash cmd error: ${d.error}`);
        return d ? d.result : null;
    });
}

async function cmd(...args) {
    const [r] = await pipeline([args]);
    return r;
}

// HGETALL over REST returns a flat [f1,v1,f2,v2,...]; normalize to an object.
function hgetallToObj(flat) {
    const o = {};
    if (Array.isArray(flat)) for (let i = 0; i < flat.length - 1; i += 2) o[flat[i]] = flat[i + 1];
    return o;
}

module.exports = { configured, pipeline, cmd, hgetallToObj };
