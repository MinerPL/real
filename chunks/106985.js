e("424973");
var n = e("236260"),
  o = e("10120"),
  i = e("712294");
t.exports = function(t, r, e, u, a, c) {
  var s = 1 & e,
    f = t.length,
    p = r.length;
  if (f != p && !(s && p > f)) return !1;
  var v = c.get(t),
    l = c.get(r);
  if (v && l) return v == r && l == t;
  var h = -1,
    _ = !0,
    y = 2 & e ? new n : void 0;
  for (c.set(t, r), c.set(r, t); ++h < f;) {
    var b = t[h],
      x = r[h];
    if (u) var d = s ? u(x, b, h, r, t, c) : u(b, x, h, t, r, c);
    if (void 0 !== d) {
      if (d) continue;
      _ = !1;
      break
    }
    if (y) {
      if (!o(r, function(t, r) {
          if (!i(y, r) && (b === t || a(b, t, e, u, c))) return y.push(r)
        })) {
        _ = !1;
        break
      }
    } else if (!(b === x || a(b, x, e, u, c))) {
      _ = !1;
      break
    }
  }
  return c.delete(t), c.delete(r), _
}