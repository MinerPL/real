"use strict";
var e = n("125359"),
  o = n("105051"),
  i = o.all;
t.exports = o.IS_HTMLDDA ? function(t) {
  return "object" == typeof t ? null !== t : e(t) || t === i
} : function(t) {
  return "object" == typeof t ? null !== t : e(t)
}