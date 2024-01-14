"use strict";
var e = n("761300"),
  o = n("490653"),
  i = n("616736"),
  u = n("759383"),
  s = n("553971"),
  c = n("355817"),
  f = TypeError,
  a = c("toPrimitive");
t.exports = function(t, r) {
  if (!o(t) || i(t)) return t;
  var n, c = u(t, a);
  if (c) {
    if (void 0 === r && (r = "default"), !o(n = e(c, t, r)) || i(n)) return n;
    throw new f("Can't convert object to primitive value")
  }
  return void 0 === r && (r = "number"), s(t, r)
}