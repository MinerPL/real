"use strict";
var e = n("714919"),
  o = n("574756"),
  i = n("605357"),
  u = n("723786"),
  s = n("363964"),
  c = n("631990"),
  f = s("string-to-symbol-registry"),
  a = s("symbol-to-string-registry");
e({
  target: "Symbol",
  stat: !0,
  forced: !c
}, {
  for: function(t) {
    var r = u(t);
    if (i(f, r)) return f[r];
    var n = o("Symbol")(r);
    return f[r] = n, a[n] = r, n
  }
})