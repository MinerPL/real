"use strict";
var e = n("605357"),
  o = n("268540"),
  i = n("581887"),
  u = n("94121"),
  s = n("41969"),
  c = u("IE_PROTO"),
  f = Object,
  a = f.prototype;
t.exports = s ? f.getPrototypeOf : function(t) {
  var r = i(t);
  if (e(r, c)) return r[c];
  var n = r.constructor;
  return o(n) && r instanceof n ? n.prototype : r instanceof f ? a : null
}