"use strict";
var e = n("64980"),
  i = n("969708"),
  u = n("998270"),
  o = n("590455"),
  c = e("".charAt),
  a = e("".charCodeAt),
  s = e("".slice),
  f = function(t) {
    return function(r, n) {
      var e, f, l = u(o(r)),
        p = i(n),
        v = l.length;
      return p < 0 || p >= v ? t ? "" : void 0 : (e = a(l, p)) < 55296 || e > 56319 || p + 1 === v || (f = a(l, p + 1)) < 56320 || f > 57343 ? t ? c(l, p) : e : t ? s(l, p, p + 2) : (e - 55296 << 10) + (f - 56320) + 65536
    }
  };
t.exports = {
  codeAt: f(!1),
  charAt: f(!0)
}