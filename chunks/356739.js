"use strict";
n.r(e), n.d(e, {
  getEnvelopeEndpointWithUrlEncodedAuth: function() {
    return a
  },
  getReportDialogEndpoint: function() {
    return s
  }
});
var r = n("103787");

function i(t) {
  let e = t.protocol ? "".concat(t.protocol, ":") : "",
    n = t.port ? ":".concat(t.port) : "";
  return "".concat(e, "//").concat(t.host).concat(n).concat(t.path ? "/".concat(t.path) : "", "/api/")
}

function a(t) {
  var e, n, a;
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    o = "string" == typeof s ? s : s.tunnel,
    c = "string" != typeof s && s._metadata ? s._metadata.sdk : void 0;
  return o || "".concat((e = t, "".concat(i(e)).concat(e.projectId, "/envelope/")), "?").concat((n = t, a = c, (0, r.urlEncode)({
    sentry_key: n.publicKey,
    sentry_version: "7",
    ...a && {
      sentry_client: "".concat(a.name, "/").concat(a.version)
    }
  })))
}

function s(t, e) {
  let n = (0, r.makeDsn)(t);
  if (!n) return "";
  let a = "".concat(i(n), "embed/error-page/"),
    s = "dsn=".concat((0, r.dsnToString)(n));
  for (let t in e)
    if ("dsn" !== t) {
      if ("user" === t) {
        let t = e.user;
        if (!t) continue;
        t.name && (s += "&name=".concat(encodeURIComponent(t.name))), t.email && (s += "&email=".concat(encodeURIComponent(t.email)))
      } else s += "&".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]))
    } return "".concat(a, "?").concat(s)
}