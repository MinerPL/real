"use strict";
var r = s("37549"),
  i = r("%Array.prototype%"),
  n = r("%RangeError%"),
  c = r("%SyntaxError%"),
  o = r("%TypeError%"),
  f = s("778841"),
  u = 4294967295,
  a = s("29364")(),
  d = r("%Object.setPrototypeOf%", !0) || (a ? function(t, e) {
    return t.__proto__ = e, t
  } : null);
t.exports = function(t) {
  if (!f(t) || t < 0) throw new o("Assertion failed: `length` must be an integer Number >= 0");
  if (t > u) throw new n("length is greater than (2**32 - 1)");
  var e = arguments.length > 1 ? arguments[1] : i,
    s = [];
  if (e !== i) {
    if (!d) throw new c("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
    d(s, e)
  }
  return 0 !== t && (s.length = t), s
}