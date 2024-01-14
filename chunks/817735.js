var n = e("863847"),
  o = e("106985"),
  i = e("9159"),
  u = e("594546"),
  a = e("364599"),
  c = e("486036"),
  s = e("474710"),
  f = e("965779"),
  p = "[object Arguments]",
  v = "[object Array]",
  l = "[object Object]",
  h = Object.prototype.hasOwnProperty;
t.exports = function(t, r, e, _, y, b) {
  var x = c(t),
    d = c(r),
    j = x ? v : a(t),
    g = d ? v : a(r);
  j = j == p ? l : j, g = g == p ? l : g;
  var w = j == l,
    O = g == l,
    m = j == g;
  if (m && s(t)) {
    if (!s(r)) return !1;
    x = !0, w = !1
  }
  if (m && !w) return b || (b = new n), x || f(t) ? o(t, r, e, _, y, b) : i(t, r, j, e, _, y, b);
  if (!(1 & e)) {
    var A = w && h.call(t, "__wrapped__"),
      z = O && h.call(r, "__wrapped__");
    if (A || z) {
      var k = A ? t.value() : t,
        P = z ? r.value() : r;
      return b || (b = new n), y(k, P, e, _, b)
    }
  }
  return !!m && (b || (b = new n), u(t, r, e, _, y, b))
}