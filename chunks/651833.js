"use strict";
var r = n("714919"),
  a = n("761300"),
  o = n("490653"),
  i = n("735320"),
  l = n("499827"),
  u = n("453084"),
  s = n("694628");
r({
  target: "Reflect",
  stat: !0
}, {
  get: function e(t, n) {
    var r, c, d = arguments.length < 3 ? t : arguments[2];
    return i(t) === d ? t[n] : (r = u.f(t, n)) ? l(r) ? r.value : void 0 === r.get ? void 0 : a(r.get, d) : o(c = s(t)) ? e(c, n, d) : void 0
  }
})