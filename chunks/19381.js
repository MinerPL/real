e.exports = function(e, t) {
  var r = -1,
    n = e.length;
  for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
  return t
}