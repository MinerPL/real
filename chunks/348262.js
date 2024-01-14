"use strict";
r("781738");

function n(t) {
  return t.replace(/\//g, "-")
}
t.exports = function(t) {
  return "object" == typeof t ? Object.keys(t).filter(function(e) {
    return t[e]
  }).map(n).join(" ") : Array.prototype.map.call(arguments, n).join(" ")
}