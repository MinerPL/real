"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("386242"),
  a = n("130002"),
  o = n("164988"),
  i = n("559610");

function s(e) {
  (0, i.default)(1, arguments);
  var t = (0, r.default)(e);
  return Math.round(((0, a.default)(t).getTime() - (0, o.default)(t).getTime()) / 6048e5) + 1
}