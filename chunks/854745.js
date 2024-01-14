"use strict";
var n = i("664144"),
  r = i("503486").RegExp,
  a = n(function() {
    var t = r("a", "y");
    return t.lastIndex = 2, null !== t.exec("abcd")
  }),
  s = a || n(function() {
    return !r("a", "y").sticky
  }),
  o = a || n(function() {
    var t = r("^r", "gy");
    return t.lastIndex = 2, null !== t.exec("str")
  });
t.exports = {
  BROKEN_CARET: o,
  MISSED_STICKY: s,
  UNSUPPORTED_Y: a
}