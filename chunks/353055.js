"use strict";
n.r(e), n.d(e, {
  closeSession: function() {
    return s
  },
  makeSession: function() {
    return i
  },
  updateSession: function() {
    return a
  }
});
var r = n("103787");

function i(t) {
  let e = (0, r.timestampInSeconds)(),
    n = {
      sid: (0, r.uuid4)(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => (function(t) {
        return (0, r.dropUndefinedKeys)({
          sid: "".concat(t.sid),
          init: t.init,
          started: new Date(1e3 * t.started).toISOString(),
          timestamp: new Date(1e3 * t.timestamp).toISOString(),
          status: t.status,
          errors: t.errors,
          did: "number" == typeof t.did || "string" == typeof t.did ? "".concat(t.did) : void 0,
          duration: t.duration,
          attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
          }
        })
      })(n)
    };
  return t && a(n, t), n
}

function a(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.timestampInSeconds)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.uuid4)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = "".concat(e.did)), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
  else if ("number" == typeof e.duration) t.duration = e.duration;
  else {
    let e = t.timestamp - t.started;
    t.duration = e >= 0 ? e : 0
  }
  e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
}

function s(t, e) {
  let n = {};
  e ? n = {
    status: e
  } : "ok" === t.status && (n = {
    status: "exited"
  }), a(t, n)
}