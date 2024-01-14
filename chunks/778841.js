"use strict";
var r = s("37549"),
  i = r("%Math.abs%"),
  n = r("%Math.floor%"),
  c = s("303571"),
  o = s("979332");
t.exports = function(t) {
  if ("number" != typeof t || c(t) || !o(t)) return !1;
  var e = i(t);
  return n(e) === e
}