"use strict";
var r = n("859514"),
  o = n("470984"),
  a = n("80282"),
  i = n("823493"),
  s = n("539536"),
  c = n("148066"),
  l = n("366483"),
  u = n("16447"),
  d = n("561051"),
  p = n("571503"),
  f = n("585034"),
  m = n("391358"),
  h = n("174669")("toStringTag"),
  g = Error,
  v = [].push,
  y = function(e, t) {
    var n, r = o(b, this);
    i ? n = i(g(), r ? a(this) : b) : l(n = r ? this : c(b), h, "Error"), void 0 !== t && l(n, "message", m(t)), p(n, y, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
    var s = [];
    return f(e, v, {
      that: s
    }), l(n, "errors", s), n
  };
i ? i(y, g) : s(y, g, {
  name: !0
});
var b = y.prototype = c(g.prototype, {
  constructor: u(1, y),
  message: u(1, ""),
  name: u(1, "AggregateError")
});
r({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: y
})