"use strict";
var r = s("37549"),
  i = r("%Object.preventExtensions%", !0),
  n = r("%Object.isExtensible%", !0),
  c = s("121638");
t.exports = i ? function(t) {
  return !c(t) && n(t)
} : function(t) {
  return !c(t)
}