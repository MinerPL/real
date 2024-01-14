"use strict";

function a(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
  return a
}
r.r(t), r.d(t, {
  default: function() {
    return a
  }
})