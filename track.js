/* ==========================================================================
   PIOST — analytics beacon
   Feeds visitor statistics shown at /admin. Same-origin, best-effort (never
   blocks the page). Loaded on / and /en/ (not on /admin).
   - First page of a session   → full visit (geo/IP/UA/referrer/device).
   - Each in-page section nav   → a page view (path = pathname + #hash).
   - Engaged time per page      → flushed on tab-hide / unload via sendBeacon.
   ========================================================================== */
(function () {
    'use strict';

    function getSid() {
        try {
            var sid = sessionStorage.getItem('piost_sid');
            if (!sid) {
                sid = (window.crypto && crypto.randomUUID)
                    ? crypto.randomUUID()
                    : (Date.now() + '-' + Math.random().toString(36).slice(2));
                sessionStorage.setItem('piost_sid', sid);
            }
            return sid;
        } catch (e) { return ''; }
    }

    function curPath() {
        return location.pathname + (location.hash || '');
    }

    var state = { path: null, active: 0, lastVisible: 0, visible: true };

    function post(body) {
        try {
            var s = JSON.stringify(body);
            if (navigator.sendBeacon) {
                navigator.sendBeacon('/api/track', new Blob([s], { type: 'application/json' }));
            } else {
                fetch('/api/track', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: s, keepalive: true }).catch(function () {});
            }
        } catch (e) { /* ignore */ }
    }

    // Persist engaged time of the current page (beacon survives unload).
    function flush() {
        if (!state.path) return;
        if (state.visible) { state.active += Date.now() - state.lastVisible; state.lastVisible = Date.now(); }
        var ms = state.active;
        state.active = 0;
        if (ms < 250) return; // ignore trivial glances
        post({ durationOnly: true, path: state.path, ms: ms, sid: getSid() });
    }

    // Record a page view (and flush the previous page's engaged time).
    function pageview() {
        var path = curPath();
        if (state.path && state.path !== path) flush();
        state.path = path;
        state.active = 0;
        state.visible = (typeof document !== 'undefined') ? document.visibilityState === 'visible' : true;
        state.lastVisible = Date.now();

        var first = false;
        try {
            first = !sessionStorage.getItem('piost_tracked');
            if (first) sessionStorage.setItem('piost_tracked', 'true');
        } catch (e) { /* private mode */ }

        post({
            referrer: document.referrer || '',
            path: path,
            language: navigator.language || '',
            screen: (typeof window.screen !== 'undefined') ? (window.screen.width + 'x' + window.screen.height) : '',
            sid: getSid(),
            pageviewOnly: !first,
        });
    }

    // Initial load.
    pageview();

    // Single-page section navigation (hash links) → new page view.
    window.addEventListener('hashchange', pageview);

    // Engaged time: only count while the tab is visible; flush on hide/unload.
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            if (state.visible) { state.active += Date.now() - state.lastVisible; state.visible = false; }
            flush();
        } else {
            state.visible = true;
            state.lastVisible = Date.now();
        }
    });
    window.addEventListener('pagehide', flush);
})();
