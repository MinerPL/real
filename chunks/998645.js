"use strict";
var r = s("812095"),
  i = s("37549"),
  n = s("179056"),
  c = r("RegExp.prototype.exec"),
  o = i("%TypeError%");
t.exports = function(t) {
  if (!n(t)) throw new o("`regex` must be a RegExp");
  return function(e) {
    return null !== c(t, e)
  }
}