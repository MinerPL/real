"use strict";
var e = n("150145"),
  o = n("268540"),
  i = n("113763"),
  u = n("355817")("toStringTag"),
  s = Object,
  c = "Arguments" === i(function() {
    return arguments
  }()),
  f = function(t, r) {
    try {
      return t[r]
    } catch (t) {}
  };
t.exports = e ? i : function(t) {
  var r, n, e;
  return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = f(r = s(t), u)) ? n : c ? i(r) : "Object" === (e = i(r)) && o(r.callee) ? "Arguments" : e
}