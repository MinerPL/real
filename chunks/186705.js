"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("584138"),
  a = n("346183"),
  o = n("559610");

function i(e, t) {
  (0, o.default)(2, arguments);
  var n = (0, a.default)(e),
    i = (0, a.default)(t);
  return Math.round((n.getTime() - (0, r.default)(n) - (i.getTime() - (0, r.default)(i))) / 864e5)
}