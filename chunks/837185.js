"use strict";
var e = n("359882"),
  o = n("522552"),
  i = n("268540"),
  u = n("396626"),
  s = n("574756"),
  c = n("494080"),
  f = function() {},
  a = [],
  p = s("Reflect", "construct"),
  v = /^\s*(?:class|function)\b/,
  l = e(v.exec),
  y = !v.test(f),
  h = function(t) {
    if (!i(t)) return !1;
    try {
      return p(f, a, t), !0
    } catch (t) {
      return !1
    }
  },
  x = function(t) {
    if (!i(t)) return !1;
    switch (u(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1
    }
    try {
      return y || !!l(v, c(t))
    } catch (t) {
      return !0
    }
  };
x.sham = !0, t.exports = !p || o(function() {
  var t;
  return h(h.call) || !h(Object) || !h(function() {
    t = !0
  }) || t
}) ? x : h