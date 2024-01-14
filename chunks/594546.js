var n = e("363863"),
  o = Object.prototype.hasOwnProperty;
t.exports = function(t, r, e, i, u, a) {
  var c = 1 & e,
    s = n(t),
    f = s.length;
  if (f != n(r).length && !c) return !1;
  for (var p = f; p--;) {
    var v = s[p];
    if (!(c ? v in r : o.call(r, v))) return !1
  }
  var l = a.get(t),
    h = a.get(r);
  if (l && h) return l == r && h == t;
  var _ = !0;
  a.set(t, r), a.set(r, t);
  for (var y = c; ++p < f;) {
    var b = t[v = s[p]],
      x = r[v];
    if (i) var d = c ? i(x, b, v, r, t, a) : i(b, x, v, t, r, a);
    if (!(void 0 === d ? b === x || u(b, x, e, i, a) : d)) {
      _ = !1;
      break
    }
    y || (y = "constructor" == v)
  }
  if (_ && !y) {
    var j = t.constructor,
      g = r.constructor;
    j != g && "constructor" in t && "constructor" in r && !("function" == typeof j && j instanceof j && "function" == typeof g && g instanceof g) && (_ = !1)
  }
  return a.delete(t), a.delete(r), _
}