"use strict";
s("222007");
var r, i = "function" == typeof Map && Map.prototype ? Map : null,
  n = "function" == typeof Set && Set.prototype ? Set : null;
!n && (r = function(t) {
  return !1
});
var c = i ? Map.prototype.has : null,
  o = n ? Set.prototype.has : null;
!r && !o && (r = function(t) {
  return !1
}), t.exports = r || function(t) {
  if (!t || "object" != typeof t) return !1;
  try {
    if (o.call(t), c) try {
      c.call(t)
    } catch (t) {
      return !0
    }
    return t instanceof n
  } catch (t) {}
  return !1
}