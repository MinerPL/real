"use strict";
var r = s("37549"),
  i = r("%String%"),
  n = r("%TypeError%");
t.exports = function(t) {
  if ("symbol" == typeof t) throw new n("Cannot convert a Symbol value to a string");
  return i(t)
}