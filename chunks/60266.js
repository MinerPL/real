t.exports = function(t, e, a, n) {
  for (var i = -1, s = null == t ? 0 : t.length; ++i < s;) {
    var l = t[i];
    e(n, l, a(l), t)
  }
  return n
}