var r = n("68421");
e.exports = function(e, t) {
  var n = -1,
    i = e.length,
    l = i - 1;
  for (t = void 0 === t ? i : t; ++n < t;) {
    var o = r(n, l),
      s = e[o];
    e[o] = e[n], e[n] = s
  }
  return e.length = t, e
}