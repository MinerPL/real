"use strict";
e.exports = function(e, t) {
  var n = t.length,
    r = e.length;
  if (r > n) return !1;
  if (r === n) return e === t;
  e: for (var i = 0, l = 0; i < r; i++) {
    for (var o = e.charCodeAt(i); l < n;)
      if (t.charCodeAt(l++) === o) continue e;
    return !1
  }
  return !0
}