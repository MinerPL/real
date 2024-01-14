"use strict";
n.r(e), n.d(e, {
  dsnFromString: function() {
    return s
  },
  dsnToString: function() {
    return a
  },
  makeDsn: function() {
    return c
  }
}), n("222007");
var r = n("587254");
let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function a(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      host: n,
      path: r,
      pass: i,
      port: a,
      projectId: s,
      protocol: o,
      publicKey: c
    } = t;
  return "".concat(o, "://").concat(c).concat(e && i ? ":".concat(i) : "") + "@".concat(n).concat(a ? ":".concat(a) : "", "/").concat(r ? "".concat(r, "/") : r).concat(s)
}

function s(t) {
  let e = i.exec(t);
  if (!e) {
    console.error("Invalid Sentry Dsn: ".concat(t));
    return
  }
  let [n, r, a = "", s, c = "", l] = e.slice(1), u = "", d = l, h = d.split("/");
  if (h.length > 1 && (u = h.slice(0, -1).join("/"), d = h.pop()), d) {
    let t = d.match(/^\d+/);
    t && (d = t[0])
  }
  return o({
    host: s,
    pass: a,
    path: u,
    projectId: d,
    port: c,
    protocol: n,
    publicKey: r
  })
}

function o(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId
  }
}

function c(t) {
  let e = "string" == typeof t ? s(t) : o(t);
  if (e && function(t) {
      var e;
      if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
      let {
        port: n,
        projectId: i,
        protocol: a
      } = t, s = ["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.logger.error("Invalid Sentry Dsn: ".concat(e, " missing")), !0));
      if (s) return !1;
      if (!i.match(/^\d+$/)) return r.logger.error("Invalid Sentry Dsn: Invalid projectId ".concat(i)), !1;
      return "http" === (e = a) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.logger.error("Invalid Sentry Dsn: Invalid port ".concat(n)), !1) : (r.logger.error("Invalid Sentry Dsn: Invalid protocol ".concat(a)), !1)
    }(e)) return e
}