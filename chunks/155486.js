"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("426094");
var r = n("236167");

function a() {
  if ("undefined" == typeof Reflect || !r || r.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(r(Boolean, [], function() {})), !0
  } catch (e) {
    return !1
  }
}