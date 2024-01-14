"use strict";
var r = s("37549"),
  i = r("%TypeError%"),
  n = r("%Number%"),
  c = s("121638"),
  o = s("732496"),
  f = s("534316");
t.exports = function(t) {
  var e = c(t) ? t : o(t, n);
  if ("symbol" == typeof e) throw new i("Cannot convert a Symbol value to a number");
  if ("bigint" == typeof e) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
  return "string" == typeof e ? f(e) : n(e)
}