t.exports = function(t, r) {
  for (var n = -1, e = null == t ? 0 : t.length, o = 0, i = []; ++n < e;) {
    var u = t[n];
    r(u, n, t) && (i[o++] = u)
  }
  return i
}