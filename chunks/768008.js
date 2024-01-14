"use strict";
var e = n("714919"),
  o = n("574756"),
  i = n("207815"),
  u = n("761300"),
  s = n("359882"),
  c = n("522552"),
  f = n("268540"),
  a = n("616736"),
  p = n("632336"),
  v = n("43765"),
  l = n("162208"),
  y = String,
  h = o("JSON", "stringify"),
  x = s(/./.exec),
  d = s("".charAt),
  g = s("".charCodeAt),
  b = s("".replace),
  m = s(1..toString),
  S = /[\uD800-\uDFFF]/g,
  w = /^[\uD800-\uDBFF]$/,
  O = /^[\uDC00-\uDFFF]$/,
  j = !l || c(function() {
    var t = o("Symbol")("stringify detection");
    return "[null]" !== h([t]) || "{}" !== h({
      a: t
    }) || "{}" !== h(Object(t))
  }),
  A = c(function() {
    return '"\udf06\ud834"' !== h("\uDF06\uD834") || '"\udead"' !== h("\uDEAD")
  }),
  E = function(t, r) {
    var n = p(arguments),
      e = v(r);
    if (!(!f(e) && (void 0 === t || a(t)))) return n[1] = function(t, r) {
      if (f(e) && (r = u(e, this, y(t), r)), !a(r)) return r
    }, i(h, null, n)
  },
  P = function(t, r, n) {
    var e = d(n, r - 1),
      o = d(n, r + 1);
    return x(w, t) && !x(O, o) || x(O, t) && !x(w, e) ? "\\u" + m(g(t, 0), 16) : t
  };
h && e({
  target: "JSON",
  stat: !0,
  arity: 3,
  forced: j || A
}, {
  stringify: function(t, r, n) {
    var e = p(arguments),
      o = i(j ? E : h, null, e);
    return A && "string" == typeof o ? b(o, S, P) : o
  }
})