"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("593882");

function a(e) {
  var t = (0, r.default)(e),
    n = t.overflow,
    a = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + a)
}