"use strict";

function a(e) {
  let t;
  let n = !1;
  return function() {
    for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
    return !n && (n = !0, t = e(...s)), t
  }
}
n.r(t), n.d(t, {
  callOnce: function() {
    return a
  }
}), n("222007")