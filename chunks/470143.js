"use strict";
var r = n("303061"),
  a = n("711395"),
  o = String.prototype;
e.exports = function(e) {
  var t = e.trim;
  return "string" == typeof e || e === o || r(o, e) && t === o.trim ? a : t
}