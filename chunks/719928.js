"use strict";

function r() {
  let t = "function" == typeof WeakSet,
    e = t ? new WeakSet : [];
  return [function(n) {
    if (t) return !!e.has(n) || (e.add(n), !1);
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      if (r === n) return !0
    }
    return e.push(n), !1
  }, function(n) {
    if (t) e.delete(n);
    else
      for (let t = 0; t < e.length; t++)
        if (e[t] === n) {
          e.splice(t, 1);
          break
        }
  }]
}
n.r(e), n.d(e, {
  memoBuilder: function() {
    return r
  }
}), n("222007"), n("424973")