"use strict";
var r = n("303061"),
  a = n("879590"),
  o = String.prototype;
e.exports = function(e) {
  var t = e.trimStart;
  return "string" == typeof e || e === o || r(o, e) && t === o.trimStart ? a : t
}