"use strict";
var e = n("904520"),
  o = n("649675"),
  i = TypeError;
t.exports = function(t) {
  if (e(t)) return t;
  throw i(o(t) + " is not a constructor")
}