"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("386242"),
  a = n("559610");

function o(e) {
  (0, a.default)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
}