"use strict";
var r = function() {
  for (var t, e = [], s = 0; s < 256; s++) {
    t = s;
    for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
    e[s] = t
  }
  return e
}();
t.exports = function(t, e, s, i) {
  var n = i + s;
  t ^= -1;
  for (var c = i; c < n; c++) t = t >>> 8 ^ r[(t ^ e[c]) & 255];
  return -1 ^ t
}