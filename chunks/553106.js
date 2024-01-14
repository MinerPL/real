var n = r("931492"),
  o = r("85762");
e.exports = function(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var u = -1, l = t.length; ++u < l;) {
    var c = t[u],
      s = a ? a(r[c], e[c], c, r, e) : void 0;
    void 0 === s && (s = e[c]), i ? o(r, c, s) : n(r, c, s)
  }
  return r
}