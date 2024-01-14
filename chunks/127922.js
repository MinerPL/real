"use strict";
var e = n("289275"),
  o = n("239757");
t.exports = function(t, r) {
  var n = o[t + "Prototype"],
    i = n && n[r];
  if (i) return i;
  var u = e[t],
    s = u && u.prototype;
  return s && s[r]
}