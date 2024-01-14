var n = r("856421"),
  o = r("436335");
e.exports = function(e) {
  for (var t = o(e), r = t.length; r--;) {
    var a = t[r],
      i = e[a];
    t[r] = [a, i, n(i)]
  }
  return t
}