"use strict";
for (var e = n("363964"), o = n("574756"), i = n("359882"), u = n("616736"), s = n("355817"), Symbol = o("Symbol"), c = Symbol.isWellKnownSymbol, f = o("Object", "getOwnPropertyNames"), a = i(Symbol.prototype.valueOf), p = e("wks"), v = 0, l = f(Symbol), y = l.length; v < y; v++) try {
  var h = l[v];
  u(Symbol[h]) && s(h)
} catch (t) {}
t.exports = function(t) {
  if (c && c(t)) return !0;
  try {
    for (var r = a(t), n = 0, e = f(p), o = e.length; n < o; n++)
      if (p[e[n]] == r) return !0
  } catch (t) {}
  return !1
}