"use strict";
var r = Object.prototype.toString;
t.exports = function(t) {
  var e = r.call(t),
    s = "[object Arguments]" === e;
  return !s && (s = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), s
}