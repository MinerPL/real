"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("567703"),
  a = n("386242"),
  o = n("18438"),
  i = n("559610");

function s(e, t) {
  (0, i.default)(2, arguments);
  var n = (0, a.default)(e),
    s = (0, r.default)(t),
    u = Math.floor(n.getMonth() / 3) + 1;
  return (0, o.default)(n, n.getMonth() + 3 * (s - u))
}