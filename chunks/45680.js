"use strict";
var r = Math.floor;
t.exports = function(t, e) {
  var s = t % e;
  return r(s >= 0 ? s : s + e)
}