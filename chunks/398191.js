"use strict";
var r = n("714919"),
  a = n("574756"),
  o = n("207815"),
  i = n("703974"),
  l = n("432480"),
  u = n("735320"),
  s = n("490653"),
  c = n("321956"),
  d = n("522552"),
  f = a("Reflect", "construct"),
  p = Object.prototype,
  h = [].push,
  m = d(function() {
    function e() {}
    return !(f(function() {}, [], e) instanceof e)
  }),
  y = !d(function() {
    f(function() {})
  }),
  v = m || y;
r({
  target: "Reflect",
  stat: !0,
  forced: v,
  sham: v
}, {
  construct: function(e, t) {
    l(e), u(t);
    var n = arguments.length < 3 ? e : l(arguments[2]);
    if (y && !m) return f(e, t, n);
    if (e === n) {
      switch (t.length) {
        case 0:
          return new e;
        case 1:
          return new e(t[0]);
        case 2:
          return new e(t[0], t[1]);
        case 3:
          return new e(t[0], t[1], t[2]);
        case 4:
          return new e(t[0], t[1], t[2], t[3])
      }
      var r = [null];
      return o(h, r, t), new(o(i, e, r))
    }
    var a = n.prototype,
      d = c(s(a) ? a : p),
      v = o(e, d, t);
    return s(v) ? v : d
  }
})