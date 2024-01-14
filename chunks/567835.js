"use strict";
n.r(e), n.d(e, {
  makeOfflineTransport: function() {
    return a
  }
});
var r = n("103787");

function i(t, e) {
  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.info("[Offline]: ".concat(t), e)
}

function a(t) {
  return e => {
    let n;
    let a = t(e),
      s = e.createStore ? e.createStore(e) : void 0,
      o = 5e3;

    function c(t) {
      s && (n && clearTimeout(n), "number" != typeof(n = setTimeout(async () => {
        n = void 0;
        let t = await s.pop();
        t && (i("Attempting to send previously queued event"), u(t).catch(t => {
          i("Failed to retry sending", t)
        }))
      }, t)) && n.unref && n.unref())
    }

    function l() {
      !n && (c(o), o = Math.min(2 * o, 36e5))
    }
    async function u(t) {
      try {
        let e = await a.send(t),
          n = 100;
        if (e) {
          if (e.headers && e.headers["retry-after"]) n = (0, r.parseRetryAfterHeader)(e.headers["retry-after"]);
          else if ((e.statusCode || 0) >= 400) return e
        }
        return c(n), o = 5e3, e
      } catch (a) {
        var n, u, d;
        if (s && await (n = t, u = a, d = o, !(0, r.envelopeContainsItemType)(n, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(n, u, d)))) return await s.insert(t), l(), i("Error sending. Event queued", a), {};
        throw a
      }
    }
    return e.flushAtStartup && l(), {
      send: u,
      flush: t => a.flush(t)
    }
  }
}