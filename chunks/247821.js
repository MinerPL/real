"use strict";
var e = n("714919"),
  o = n("605357"),
  i = n("616736"),
  u = n("245255"),
  s = n("363964"),
  c = n("631990"),
  f = s("symbol-to-string-registry");
e({
  target: "Symbol",
  stat: !0,
  forced: !c
}, {
  keyFor: function(t) {
    if (!i(t)) throw TypeError(u(t) + " is not a symbol");
    if (o(f, t)) return f[t]
  }
})