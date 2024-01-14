"use strict";
var r = n("303061"),
  a = n("661251"),
  o = String.prototype;
e.exports = function(e) {
  var t = e.repeat;
  return "string" == typeof e || e === o || r(o, e) && t === o.repeat ? a : t
}