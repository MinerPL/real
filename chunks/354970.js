"use strict";
s("222007");
var r, i = "function" == typeof Map && Map.prototype ? Map : null,
  n = "function" == typeof Set && Set.prototype ? Set : null;
!i && (r = function(t) {
  return !1
});
var c = i ? Map.prototype.has : null,
  o = n ? Set.prototype.has : null;
!r && !c && (r = function(t) {
  return !1
}), t.exports = r || function(t) {
  if (!t || "object" != typeof t) return !1;
  try {
    if (c.call(t), o) try {
      o.call(t)
    } catch (t) {
      return !0
    }
    return t instanceof i
  } catch (t) {}
  return !1
}