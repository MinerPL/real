var n = r("169828");
e.exports = function(e, t) {
  return function(r, o) {
    if (null == r) return r;
    if (!n(r)) return e(r, o);
    for (var a = r.length, i = t ? a : -1, u = Object(r);
      (t ? i-- : ++i < a) && !1 !== o(u[i], i, u););
    return r
  }
}