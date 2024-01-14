"use strict";

function n(e) {
  var t, Symbol = e.Symbol;
  return "function" == typeof Symbol ? Symbol.observable ? t = Symbol.observable : (t = Symbol("observable"), Symbol.observable = t) : t = "@@observable", t
}
r.r(t), r.d(t, {
  default: function() {
    return n
  }
})