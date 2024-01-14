"use strict";
var e = n("303061"),
  o = n("706807"),
  i = Array.prototype;
t.exports = function(t) {
  var r = t.slice;
  return t === i || e(i, t) && r === i.slice ? o : r
}