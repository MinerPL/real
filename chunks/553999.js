            r("70102"), r("424973");
            var i = r("912065").Buffer,
                n = r("145755"),
                o = r("422077"),
                a = r("814548").ec,
                s = r("839383"),
                f = r("596659"),
                h = r("49873");

            function c(t, e, r, o) {
                if ((t = i.from(t.toArray())).length < e.byteLength()) {
                    var a = i.alloc(e.byteLength() - t.length);
                    t = i.concat([a, t])
                }
                var s = r.length,
                    f = function(t, e) {
                        t = (t = u(t, e)).mod(e);
                        var r = i.from(t.toArray());
                        if (r.length < e.byteLength()) {
                            var n = i.alloc(e.byteLength() - r.length);
                            r = i.concat([n, r])
                        }
                        return r
                    }(r, e),
                    h = i.alloc(s);
                h.fill(1);
                var c = i.alloc(s);
                return c = n(o, c).update(h).update(i.from([0])).update(t).update(f).digest(), h = n(o, c).update(h).digest(), c = n(o, c).update(h).update(i.from([1])).update(t).update(f).digest(), h = n(o, c).update(h).digest(), {
                    k: c,
                    v: h
                }
            }

            function u(t, e) {
                var r = new s(t),
                    i = (t.length << 3) - e.bitLength();
                return i > 0 && r.ishrn(i), r
            }

            function d(t, e, r) {
                var o, a;
                do {
                    for (o = i.alloc(0); 8 * o.length < t.bitLength();) e.v = n(r, e.k).update(e.v).digest(), o = i.concat([o, e.v]);
                    a = u(o, t), e.k = n(r, e.k).update(e.v).update(i.from([0])).digest(), e.v = n(r, e.k).update(e.v).digest()
                } while (-1 !== a.cmp(t));
                return a
            }
            t.exports = function(t, e, r, n, l) {
                var p = f(e);
                if (p.curve) {
                    if ("ecdsa" !== n && "ecdsa/rsa" !== n) throw Error("wrong private key type");
                    return function(t, e) {
                        var r = h[e.curve.join(".")];
                        if (!r) throw Error("unknown curve " + e.curve.join("."));
                        var n = new a(r).keyFromPrivate(e.privateKey).sign(t);
                        return i.from(n.toDER())
                    }(t, p)
                }
                if ("dsa" === p.type) {
                    if ("dsa" !== n) throw Error("wrong private key type");
                    return function(t, e, r) {
                        for (var n, o = e.params.priv_key, a = e.params.p, f = e.params.q, h = e.params.g, l = new s(0), p = u(t, f).mod(f), b = !1, m = c(o, f, t, r); !1 === b;) l = function(t, e, r, i) {
                            return t.toRed(s.mont(r)).redPow(e).fromRed().mod(i)
                        }(h, n = d(f, m, r), a, f), 0 === (b = n.invm(f).imul(p.add(o.mul(l))).mod(f)).cmpn(0) && (b = !1, l = new s(0));
                        return function(t, e) {
                            t = t.toArray(), e = e.toArray(), 128 & t[0] && (t = [0].concat(t)), 128 & e[0] && (e = [0].concat(e));
                            var r = [48, t.length + e.length + 4, 2, t.length];
                            return r = r.concat(t, [2, e.length], e), i.from(r)
                        }(l, b)
                    }(t, p, r)
                }
                if ("rsa" !== n && "ecdsa/rsa" !== n) throw Error("wrong private key type");
                t = i.concat([l, t]);
                for (var b = p.modulus.byteLength(), m = [0, 1]; t.length + m.length + 1 < b;) m.push(255);
                m.push(0);
                for (var g = -1; ++g < t.length;) m.push(t[g]);
                return o(m, p)
            }, t.exports.getKey = c, t.exports.makeKey = d