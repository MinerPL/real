"use strict";
var r = s("37549")("%Array%"),
  i = !r.isArray && s("812095")("Object.prototype.toString");
t.exports = r.isArray || function(t) {
  return "[object Array]" === i(t)
}