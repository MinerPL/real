t.exports = function(t, n, u, e) {
  var r = -1,
    f = null == t ? 0 : t.length;
  for (e && f && (u = t[++r]); ++r < f;) u = n(u, t[r], r, t);
  return u
}