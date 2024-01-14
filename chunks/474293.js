"use strict";
n.r(t), n.d(t, {
  getClass: function() {
    return a
  }
}), n("808653");
var l = n("159885");

function a(e, t) {
  for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
  let s = a.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
    i = "".concat(t).concat(s),
    u = e[i];
  if (null != u) return u
}