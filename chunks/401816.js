"use strict";
var n = r("211383").notEmptyKey;

function i(t, e) {
  return n(e) ? "MUTABLE" === t.__get(e).getMutability() ? e : null : null
}
t.exports = function(t, e) {
  if (e.isCollapsed()) {
    var r, n = e.getAnchorKey(),
      o = e.getAnchorOffset();
    if (o > 0) return (r = t.getBlockForKey(n).getEntityAt(o - 1)) !== t.getBlockForKey(n).getEntityAt(o) ? null : i(t.getEntityMap(), r);
    return null
  }
  var a = e.getStartKey(),
    u = e.getStartOffset(),
    s = t.getBlockForKey(a);
  return r = u === s.getLength() ? null : s.getEntityAt(u), i(t.getEntityMap(), r)
}