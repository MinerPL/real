var n = Math.ceil,
  i = Math.max;
e.exports = function(e, t, r, o) {
  for (var s = -1, a = i(n((t - e) / (r || 1)), 0), u = Array(a); a--;) u[o ? a : ++s] = e, e += r;
  return u
}