"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("222007");
let n = new Set(["nvidia"]);

function a(e) {
  for (let t of Object.keys(e)) {
    let l = e[t];
    if (null != l && null == l.error && n.has(t)) return !0
  }
  return !1
}