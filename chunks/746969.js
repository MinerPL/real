"use strict";
r("781738");
var n = /-(.)/g;
t.exports = function(t) {
  return t.replace(n, function(t, e) {
    return e.toUpperCase()
  })
}