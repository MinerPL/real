n("424973");
var e = n("488063"),
  o = n("862167"),
  i = n("430272");
t.exports = function(t, r, n, u, a, c) {
  var s = 1 & n,
    f = t.length,
    p = r.length;
  if (f != p && !(s && p > f)) return !1;
  var l = c.get(t);
  if (l && c.get(r)) return l == r;
  var v = -1,
    h = !0,
    _ = 2 & n ? new e : void 0;
  for (c.set(t, r), c.set(r, t); ++v < f;) {
    var d = t[v],
      y = r[v];
    if (u) var b = s ? u(y, d, v, r, t, c) : u(d, y, v, t, r, c);
    if (void 0 !== b) {
      if (b) continue;
      h = !1;
      break
    }
    if (_) {
      if (!o(r, function(t, r) {
          if (!i(_, r) && (d === t || a(d, t, n, u, c))) return _.push(r)
        })) {
        h = !1;
        break
      }
    } else if (!(d === y || a(d, y, n, u, c))) {
      h = !1;
      break
    }
  }
  return c.delete(t), c.delete(r), h
}