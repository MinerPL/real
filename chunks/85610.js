"use strict";
var e = n("979095"),
  o = n("948937"),
  i = n("756579"),
  u = function(t) {
    return function(r, n, u) {
      var s, c = e(r),
        f = i(c),
        a = o(u, f);
      if (t && n != n) {
        for (; f > a;)
          if ((s = c[a++]) != s) return !0
      } else
        for (; f > a; a++)
          if ((t || a in c) && c[a] === n) return t || a || 0;
      return !t && -1
    }
  };
t.exports = {
  includes: u(!0),
  indexOf: u(!1)
}