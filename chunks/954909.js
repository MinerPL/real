"use strict";
var e = n("574756"),
  o = n("359882"),
  Symbol = e("Symbol"),
  i = Symbol.keyFor,
  u = o(Symbol.prototype.valueOf);
t.exports = Symbol.isRegisteredSymbol || function(t) {
  try {
    return void 0 !== i(u(t))
  } catch (t) {
    return !1
  }
}