"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("70102");
var r = n("386242"),
  a = n("559610");

function o(e, t) {
  (0, a.default)(2, arguments);
  var n = (0, r.default)(e).getTime(),
    o = (0, r.default)(t.start).getTime(),
    i = (0, r.default)(t.end).getTime();
  if (!(o <= i)) throw RangeError("Invalid interval");
  return n >= o && n <= i
}