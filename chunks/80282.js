"use strict";
var n = r("59393"),
  o = r("125359"),
  i = r("116180"),
  c = r("285425"),
  u = r("746293"),
  s = c("IE_PROTO"),
  a = Object,
  f = a.prototype;
t.exports = u ? a.getPrototypeOf : function(t) {
  var e = i(t);
  if (n(e, s)) return e[s];
  var r = e.constructor;
  return o(r) && e instanceof r ? r.prototype : e instanceof a ? f : null
}