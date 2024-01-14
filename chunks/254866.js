"use strict";
var e = n("597018"),
  o = n("234779"),
  i = TypeError,
  u = Object.getOwnPropertyDescriptor,
  s = e && ! function() {
    if (void 0 !== this) return !0;
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).length = 1
    } catch (t) {
      return t instanceof TypeError
    }
  }();
t.exports = s ? function(t, r) {
  if (o(t) && !u(t, "length").writable) throw new i("Cannot set read only .length");
  return t.length = r
} : function(t, r) {
  return t.length = r
}