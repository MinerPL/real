s("70102");
var r = s("596659"),
  i = s("664813"),
  n = s("488274"),
  c = s("746067"),
  o = s("963130"),
  f = s("839309"),
  u = s("533971"),
  a = s("422077"),
  d = s("912065").Buffer;
t.exports = function(t, e, s) {
  p = t.padding ? t.padding : s ? 1 : 4;
  var p, b, h = r(t);
  if (4 === p) b = function(t, e) {
    var s = t.modulus.byteLength(),
      r = e.length,
      u = n("sha1").update(d.alloc(0)).digest(),
      a = u.length,
      p = 2 * a;
    if (r > s - p - 2) throw Error("message too long");
    var b = d.alloc(s - r - p - 2),
      h = s - a - 1,
      l = i(a),
      g = o(d.concat([u, b, d.alloc(1, 1), e], h), c(l, h)),
      v = o(l, c(g, a));
    return new f(d.concat([d.alloc(1), v, g], s))
  }(h, e);
  else if (1 === p) b = function(t, e, s) {
    var r, n = e.length,
      c = t.modulus.byteLength();
    if (n > c - 11) throw Error("message too long");
    return r = s ? d.alloc(c - n - 3, 255) : function(t) {
      for (var e, s = d.allocUnsafe(t), r = 0, n = i(2 * t), c = 0; r < t;) c === n.length && (n = i(2 * t), c = 0), (e = n[c++]) && (s[r++] = e);
      return s
    }(c - n - 3), new f(d.concat([d.from([0, s ? 1 : 2]), r, d.alloc(1), e], c))
  }(h, e, s);
  else if (3 === p) {
    if ((b = new f(e)).cmp(h.modulus) >= 0) throw Error("data too long for modulus")
  } else throw Error("unknown padding");
  return s ? a(b, h) : u(b, h)
}