"use strict";
var n = i("664144"),
  r = i("503486").RegExp;
t.exports = n(function() {
  var t = r(".", "s");
  return !(t.dotAll && t.exec("\n") && "s" === t.flags)
})