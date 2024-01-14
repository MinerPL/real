"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var n = r("95788"),
  o = r("794666"),
  a = r("723347"),
  i = 0 / 0,
  u = /^[-+]0x[0-9a-f]+$/i,
  l = /^0b[01]+$/i,
  c = /^0o[0-7]+$/i,
  s = parseInt,
  f = function(e) {
    if ("number" == typeof e) return e;
    if ((0, a.default)(e)) return i;
    if ((0, o.default)(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = (0, o.default)(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = (0, n.default)(e);
    var r = l.test(e);
    return r || c.test(e) ? s(e.slice(2), r ? 2 : 8) : u.test(e) ? i : +e
  }