"use strict";
var e = n("693523"),
  o = n("664144"),
  i = n("503486").String;
t.exports = !!Object.getOwnPropertySymbols && !o(function() {
  var t = Symbol("symbol detection");
  return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && e && e < 41
})