"use strict";
t.exports = function(t) {
  if (void 0 === t) return t;
  var e = {};
  return "[[Value]]" in t && (e.value = t["[[Value]]"]), "[[Writable]]" in t && (e.writable = !!t["[[Writable]]"]), "[[Get]]" in t && (e.get = t["[[Get]]"]), "[[Set]]" in t && (e.set = t["[[Set]]"]), "[[Enumerable]]" in t && (e.enumerable = !!t["[[Enumerable]]"]), "[[Configurable]]" in t && (e.configurable = !!t["[[Configurable]]"]), e
}