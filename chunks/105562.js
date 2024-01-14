"use strict";
s("70102");
var r = s("37549"),
  i = s("648644"),
  n = r("%Promise.resolve%", !0),
  c = n && i(n);
t.exports = function(t, e) {
  if (!c) throw SyntaxError("This environment does not support Promises.");
  return c(t, e)
}