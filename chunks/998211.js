"use strict";
n.r(e), n.d(e, {
  makeXHRTransport: function() {
    return a
  }
});
var r = n("675065"),
  i = n("103787");

function a(t) {
  return (0, r.createTransport)(t, function(e) {
    return new i.SyncPromise((n, r) => {
      let i = new XMLHttpRequest;
      for (let e in i.onerror = r, i.onreadystatechange = () => {
          4 === i.readyState && n({
            statusCode: i.status,
            headers: {
              "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": i.getResponseHeader("Retry-After")
            }
          })
        }, i.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
      i.send(e.body)
    })
  })
}