"use strict";
var e = n("943833"),
  o = TypeError;
t.exports = function(t) {
  var r = e(t, "number");
  if ("number" == typeof r) throw o("Can't convert number to bigint");
  return BigInt(r)
}