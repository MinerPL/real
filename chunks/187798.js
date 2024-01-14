"use strict";
var r = n("149384")(),
  o = n("812095")("Object.prototype.toString"),
  a = function(e) {
    return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === o(e)
  },
  i = function(e) {
    return !!a(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "[object Function]" === o(e.callee)
  },
  s = function() {
    return a(arguments)
  }();
a.isLegacyArguments = i, e.exports = s ? a : i