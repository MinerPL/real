"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var n = r("557916"),
  o = r("723347"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  i = /^\w*$/,
  u = function(e, t) {
    if ((0, n.default)(e)) return !1;
    var r = typeof e;
    return !!("number" == r || "symbol" == r || "boolean" == r || null == e || (0, o.default)(e)) || i.test(e) || !a.test(e) || null != t && e in Object(t)
  }