"use strict";
var e = TypeError;
t.exports = function(t) {
  if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
  return t
}