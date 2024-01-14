"use strict";
var n = r("808598");
t.exports = function(t) {
  var e;
  return (e = t) && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e) ? Array.isArray(t) ? t.slice() : function(t) {
    var e = t.length;
    if (!Array.isArray(t) && ("object" == typeof t || "function" == typeof t) || n(!1), "number" != typeof e && n(!1), 0 === e || e - 1 in t || n(!1), "function" != typeof t.callee || n(!1), t.hasOwnProperty) try {
      return Array.prototype.slice.call(t)
    } catch (t) {}
    for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i];
    return r
  }(t) : [t]
}