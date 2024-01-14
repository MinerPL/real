"use strict";
var e = n("370080"),
  o = n("522552"),
  i = n("289275").String;
t.exports = !!Object.getOwnPropertySymbols && !o(function() {
  var t = Symbol("symbol detection");
  return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && e && e < 41
})