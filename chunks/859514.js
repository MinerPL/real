"use strict";
var e = n("503486"),
  o = n("85181").f,
  i = n("366483"),
  u = n("484784"),
  c = n("861850"),
  s = n("539536"),
  f = n("210506");
t.exports = function(t, r) {
  var n, a, p, l, v, y = t.target,
    b = t.global,
    h = t.stat;
  if (n = b ? e : h ? e[y] || c(y, {}) : (e[y] || {}).prototype)
    for (a in r) {
      if (l = r[a], p = t.dontCallGetSet ? (v = o(n, a)) && v.value : n[a], !f(b ? a : y + (h ? "." : "#") + a, t.forced) && void 0 !== p) {
        if (typeof l == typeof p) continue;
        s(l, p)
      }(t.sham || p && p.sham) && i(l, "sham", !0), u(n, a, l, t)
    }
}