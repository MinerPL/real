var e = n("904526"),
  o = Object.prototype.hasOwnProperty;
t.exports = function(t, r, n, i, u, a) {
  var c = 1 & n,
    s = e(t),
    f = s.length;
  if (f != e(r).length && !c) return !1;
  for (var p = f; p--;) {
    var l = s[p];
    if (!(c ? l in r : o.call(r, l))) return !1
  }
  var v = a.get(t);
  if (v && a.get(r)) return v == r;
  var h = !0;
  a.set(t, r), a.set(r, t);
  for (var _ = c; ++p < f;) {
    var d = t[l = s[p]],
      y = r[l];
    if (i) var b = c ? i(y, d, l, r, t, a) : i(d, y, l, t, r, a);
    if (!(void 0 === b ? d === y || u(d, y, n, i, a) : b)) {
      h = !1;
      break
    }
    _ || (_ = "constructor" == l)
  }
  if (h && !_) {
    var x = t.constructor,
      g = r.constructor;
    x != g && "constructor" in t && "constructor" in r && !("function" == typeof x && x instanceof x && "function" == typeof g && g instanceof g) && (h = !1)
  }
  return a.delete(t), a.delete(r), h
}