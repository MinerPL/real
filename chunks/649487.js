"use strict";

function a(e) {
  var t = Object.prototype.toString.call(e).slice(8, -1);
  return "Object" === t && "function" == typeof e[Symbol.iterator] ? "Iterable" : "Custom" === t && e.constructor !== Object && e instanceof Object ? "Object" : t
}
r.r(t), r.d(t, {
  default: function() {
    return a
  }
}), r("222007")