t.exports = function(t, e, s, r) {
  for (var i = t.length, n = s + (r ? 1 : -1); r ? n-- : ++n < i;)
    if (e(t[n], n, t)) return n;
  return -1
}