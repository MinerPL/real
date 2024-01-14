t.exports = function(t, r) {
  for (var n = -1, e = null == t ? 0 : t.length; ++n < e && !1 !== r(t[n], n, t););
  return t
}