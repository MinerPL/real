"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var r = n("386242"),
  a = n("559610");

function o(e) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function i(e) {
  var t, n;
  if ((0, a.default)(1, arguments), e && "function" == typeof e.forEach) t = e;
  else {
    if ("object" !== o(e) || null === e) return new Date(NaN);
    t = Array.prototype.slice.call(e)
  }
  return t.forEach(function(e) {
    var t = (0, r.default)(e);
    (void 0 === n || n > t || isNaN(t.getDate())) && (n = t)
  }), n || new Date(NaN)
}