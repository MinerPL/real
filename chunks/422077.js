var r = s("446825").Buffer,
  i = s("839383"),
  n = s("664813");

function c(t) {
  var e, s = t.modulus.byteLength();
  do e = new i(n(s)); while (e.cmp(t.modulus) >= 0 || !e.umod(t.prime1) || !e.umod(t.prime2));
  return e
}

function o(t, e) {
  var s, n, o = {
      blinder: (n = c(s = e)).toRed(i.mont(s.modulus)).redPow(new i(s.publicExponent)).fromRed(),
      unblinder: n.invm(s.modulus)
    },
    f = e.modulus.byteLength(),
    u = new i(t).mul(o.blinder).umod(e.modulus),
    a = u.toRed(i.mont(e.prime1)),
    d = u.toRed(i.mont(e.prime2)),
    p = e.coefficient,
    b = e.prime1,
    h = e.prime2,
    l = a.redPow(e.exponent1).fromRed(),
    g = d.redPow(e.exponent2).fromRed(),
    v = l.isub(g).imul(p).umod(b).imul(h);
  return g.iadd(v).imul(o.unblinder).umod(e.modulus).toArrayLike(r, "be", f)
}
o.getr = c, t.exports = o