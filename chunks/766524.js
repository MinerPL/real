"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var n = r("309331"),
  o = r("463417"),
  a = r("964902"),
  i = Object.prototype,
  u = Function.prototype.toString,
  l = i.hasOwnProperty,
  c = u.call(Object),
  s = function(e) {
    if (!(0, a.default)(e) || "[object Object]" != (0, n.default)(e)) return !1;
    var t = (0, o.default)(e);
    if (null === t) return !0;
    var r = l.call(t, "constructor") && t.constructor;
    return "function" == typeof r && r instanceof r && u.call(r) == c
  }