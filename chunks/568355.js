"use strict";
var n = {};
t.exports = function() {
  for (var t; void 0 === t || n.hasOwnProperty(t) || !isNaN(+t);) t = Math.floor(16777216 * Math.random()).toString(32);
  return n[t] = !0, t
}