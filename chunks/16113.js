"use strict";
n.r(e), n.d(e, {
  makeFetchTransport: function() {
    return s
  }
});
var r = n("675065"),
  i = n("103787"),
  a = n("865034");

function s(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.getNativeFetchImplementation)(),
    n = 0,
    s = 0;
  return (0, r.createTransport)(t, function(r) {
    let o = r.body.length;
    n += o, s++;
    let c = {
      body: r.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: t.headers,
      keepalive: n <= 6e4 && s < 15,
      ...t.fetchOptions
    };
    try {
      return e(t.url, c).then(t => (n -= o, s--, {
        statusCode: t.status,
        headers: {
          "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": t.headers.get("Retry-After")
        }
      }))
    } catch (t) {
      return (0, a.clearCachedFetchImplementation)(), n -= o, s--, (0, i.rejectedSyncPromise)(t)
    }
  })
}