"use strict";
var e = n("239757"),
  o = n("289275"),
  i = n("268540"),
  u = function(t) {
    return i(t) ? t : void 0
  };
t.exports = function(t, r) {
  return arguments.length < 2 ? u(e[t]) || u(o[t]) : e[t] && e[t][r] || o[t] && o[t][r]
}