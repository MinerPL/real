"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("567703"),
  a = n("386242"),
  o = n("197410"),
  i = n("559610");

function s(e, t) {
  (0, i.default)(2, arguments);
  var n = (0, a.default)(e),
    s = (0, r.default)(t),
    u = n.getFullYear(),
    l = n.getDate(),
    c = new Date(0);
  c.setFullYear(u, s, 15), c.setHours(0, 0, 0, 0);
  var d = (0, o.default)(c);
  return n.setMonth(s, Math.min(l, d)), n
}