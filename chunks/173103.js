"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("101607"),
  a = n("584138"),
  o = n("559610");

function i(e, t, n) {
  (0, o.default)(2, arguments);
  var i = (0, r.default)(e, n),
    s = (0, r.default)(t, n);
  return Math.round((i.getTime() - (0, a.default)(i) - (s.getTime() - (0, a.default)(s))) / 6048e5)
}