"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var r = n("559610");

function a(e) {
  return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function o(e) {
  return (0, r.default)(1, arguments), e instanceof Date || "object" === a(e) && "[object Date]" === Object.prototype.toString.call(e)
}