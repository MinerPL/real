"use strict";
n.r(e), n.d(e, {
  makePromiseBuffer: function() {
    return a
  }
}), n("424973");
var r = n("933029"),
  i = n("126806");

function a(t) {
  let e = [];

  function n(t) {
    return e.splice(e.indexOf(t), 1)[0]
  }
  return {
    $: e,
    add: function(a) {
      if (!(void 0 === t || e.length < t)) return (0, i.rejectedSyncPromise)(new r.SentryError("Not adding Promise because buffer limit was reached."));
      let s = a();
      return -1 === e.indexOf(s) && e.push(s), s.then(() => n(s)).then(null, () => n(s).then(null, () => {})), s
    },
    drain: function(t) {
      return new i.SyncPromise((n, r) => {
        let a = e.length;
        if (!a) return n(!0);
        let s = setTimeout(() => {
          t && t > 0 && n(!1)
        }, t);
        e.forEach(t => {
          (0, i.resolvedSyncPromise)(t).then(() => {
            !--a && (clearTimeout(s), n(!0))
          }, r)
        })
      })
    }
  }
}