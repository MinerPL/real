var n = r("486036"),
  o = r("543066"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  i = /^\w*$/;
e.exports = function(e, t) {
  if (n(e)) return !1;
  var r = typeof e;
  return !!("number" == r || "symbol" == r || "boolean" == r || null == e || o(e)) || i.test(e) || !a.test(e) || null != t && e in Object(t)
}