"use strict";
var r, o = Object.prototype.toString,
  a = Function.prototype.toString,
  i = /^\s*(?:function)?\*/,
  s = n("149384")(),
  c = Object.getPrototypeOf,
  l = function() {
    if (!s) return !1;
    try {
      return Function("return function*() {}")()
    } catch (e) {}
  };
e.exports = function(e) {
  if ("function" != typeof e) return !1;
  if (i.test(a.call(e))) return !0;
  if (!s) return "[object GeneratorFunction]" === o.call(e);
  if (!c) return !1;
  if (void 0 === r) {
    var t = l();
    r = !!t && c(t)
  }
  return c(e) === r
}