"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("386242"),
  a = n("559610"),
  o = n("567703");

function i(e, t) {
  (0, a.default)(2, arguments);
  var n = (0, o.default)(t);
  n % 7 == 0 && (n -= 7);
  var i = (0, r.default)(e),
    s = i.getUTCDay(),
    u = n % 7,
    l = ((u + 7) % 7 < 1 ? 7 : 0) + n - s;
  return i.setUTCDate(i.getUTCDate() + l), i
}