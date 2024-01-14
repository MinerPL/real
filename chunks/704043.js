var e = n("146007"),
  o = n("556459"),
  i = n("596340"),
  u = n("442347"),
  a = n("540956"),
  c = n("725502"),
  s = n("591350"),
  f = n("381178"),
  p = "[object Arguments]",
  l = "[object Array]",
  v = "[object Object]",
  h = Object.prototype.hasOwnProperty;
t.exports = function(t, r, n, _, d, y) {
  var b = c(t),
    x = c(r),
    g = b ? l : a(t),
    j = x ? l : a(r);
  g = g == p ? v : g, j = j == p ? v : j;
  var w = g == v,
    O = j == v,
    m = g == j;
  if (m && s(t)) {
    if (!s(r)) return !1;
    b = !0, w = !1
  }
  if (m && !w) return y || (y = new e), b || f(t) ? o(t, r, n, _, d, y) : i(t, r, g, n, _, d, y);
  if (!(1 & n)) {
    var A = w && h.call(t, "__wrapped__"),
      z = O && h.call(r, "__wrapped__");
    if (A || z) {
      var k = A ? t.value() : t,
        E = z ? r.value() : r;
      return y || (y = new e), d(k, E, n, _, y)
    }
  }
  return !!m && (y || (y = new e), u(t, r, n, _, d, y))
}