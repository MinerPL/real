"use strict";
r.r(t), r.d(t, {
  default: function() {
    return w
  }
}), r("222007");
var n = r("455492"),
  o = r("976762"),
  a = r("300589"),
  i = r("39014"),
  u = r("928159"),
  l = r("309331"),
  c = r("138600"),
  s = "[object Map]",
  f = "[object Promise]",
  d = "[object Set]",
  p = "[object WeakMap]",
  h = "[object DataView]",
  b = (0, c.default)(n.default),
  v = (0, c.default)(o.default),
  g = (0, c.default)(a.default),
  x = (0, c.default)(i.default),
  y = (0, c.default)(u.default),
  m = l.default;
(n.default && m(new n.default(new ArrayBuffer(1))) != h || o.default && m(new o.default) != s || a.default && m(a.default.resolve()) != f || i.default && m(new i.default) != d || u.default && m(new u.default) != p) && (m = function(e) {
  var t = (0, l.default)(e),
    r = "[object Object]" == t ? e.constructor : void 0,
    n = r ? (0, c.default)(r) : "";
  if (n) switch (n) {
    case b:
      return h;
    case v:
      return s;
    case g:
      return f;
    case x:
      return d;
    case y:
      return p
  }
  return t
});
var w = m