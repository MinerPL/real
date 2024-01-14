"use strict";
n("781738"), n("424973");
e.exports = function(e, t, n, r) {
  t = t || "&", n = n || "=";
  var o = {};
  if ("string" != typeof e || 0 === e.length) return o;
  var a = /\+/g;
  e = e.split(t);
  var i = 1e3;
  r && "number" == typeof r.maxKeys && (i = r.maxKeys);
  var s = e.length;
  i > 0 && s > i && (s = i);
  for (var c = 0; c < s; ++c) {
    var l, u, d, p, f, m, h = e[c].replace(a, "%20"),
      g = h.indexOf(n);
    if (g >= 0 ? (d = h.substr(0, g), p = h.substr(g + 1)) : (d = h, p = ""), f = decodeURIComponent(d), m = decodeURIComponent(p), l = o, u = f, Object.prototype.hasOwnProperty.call(l, u)) Array.isArray(o[f]) ? o[f].push(m) : o[f] = [o[f], m];
    else o[f] = m
  }
  return o
}