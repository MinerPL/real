"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("723347"),
  o = 1 / 0,
  a = function(e) {
    if ("string" == typeof e || (0, n.default)(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -o ? "-0" : t
  }