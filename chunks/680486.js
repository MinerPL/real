"use strict";
var e = n("359882"),
  o = n("984447"),
  i = n("723786"),
  u = n("591014"),
  s = e("".charAt),
  c = e("".charCodeAt),
  f = e("".slice),
  a = function(t) {
    return function(r, n) {
      var e, a, p = i(u(r)),
        v = o(n),
        l = p.length;
      return v < 0 || v >= l ? t ? "" : void 0 : (e = c(p, v)) < 55296 || e > 56319 || v + 1 === l || (a = c(p, v + 1)) < 56320 || a > 57343 ? t ? s(p, v) : e : t ? f(p, v, v + 2) : (e - 55296 << 10) + (a - 56320) + 65536
    }
  };
t.exports = {
  codeAt: a(!1),
  charAt: a(!0)
}