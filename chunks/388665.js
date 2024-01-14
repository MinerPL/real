"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("997096"),
  o = r("443061"),
  a = function(e, t) {
    var r = -1,
      a = (0, o.default)(e) ? Array(e.length) : [];
    return (0, n.default)(e, function(e, n, o) {
      a[++r] = t(e, n, o)
    }), a
  }