"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("386242"),
  a = n("63173"),
  o = n("460594"),
  i = n("559610");

function s(e, t) {
  (0, i.default)(1, arguments);
  var n = (0, r.default)(e);
  return Math.round(((0, a.default)(n, t).getTime() - (0, o.default)(n, t).getTime()) / 6048e5) + 1
}