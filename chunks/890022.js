t.exports = function(t, r, n) {
  var e = -1,
    o = t.length;
  r < 0 && (r = -r > o ? 0 : o + r), (n = n > o ? o : n) < 0 && (n += o), o = r > n ? 0 : n - r >>> 0, r >>>= 0;
  for (var c = Array(o); ++e < o;) c[e] = t[e + r];
  return c
}