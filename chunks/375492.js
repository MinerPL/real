"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (e, t) => function(n, i, r) {
  return new Promise(o => {
    var s;
    e.dispatch({
      type: t,
      event: n,
      properties: i,
      flush: null !== (s = null == r ? void 0 : r.flush) && void 0 !== s && s,
      fingerprint: null == r ? void 0 : r.fingerprint,
      resolve: o
    })
  })
}