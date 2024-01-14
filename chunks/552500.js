t = n.nmd(t);
var e = n("690516"),
  o = "object" == typeof r && r && !r.nodeType && r,
  c = o && "object" == typeof t && t && !t.nodeType && t,
  u = c && c.exports === o ? e.Buffer : void 0,
  a = u ? u.allocUnsafe : void 0;
t.exports = function(t, r) {
  if (r) return t.slice();
  var n = t.length,
    e = a ? a(n) : new t.constructor(n);
  return t.copy(e), e
}