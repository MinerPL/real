            var i = r("446825").Buffer,
                n = r("839383"),
                a = r("664813");

            function o(t) {
                var e, r = t.modulus.byteLength();
                do e = new n(a(r)); while (e.cmp(t.modulus) >= 0 || !e.umod(t.prime1) || !e.umod(t.prime2));
                return e
            }

            function s(t, e) {
                var r, a, s = {
                        blinder: (a = o(r = e)).toRed(n.mont(r.modulus)).redPow(new n(r.publicExponent)).fromRed(),
                        unblinder: a.invm(r.modulus)
                    },
                    f = e.modulus.byteLength(),
                    h = new n(t).mul(s.blinder).umod(e.modulus),
                    c = h.toRed(n.mont(e.prime1)),
                    u = h.toRed(n.mont(e.prime2)),
                    d = e.coefficient,
                    l = e.prime1,
                    p = e.prime2,
                    b = c.redPow(e.exponent1).fromRed(),
                    m = u.redPow(e.exponent2).fromRed(),
                    g = b.isub(m).imul(d).umod(l).imul(p);
                return m.iadd(g).imul(s.unblinder).umod(e.modulus).toArrayLike(i, "be", f)
            }
            s.getr = o, t.exports = s