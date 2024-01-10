            r("70102"), r("424973");
            var i = r("912065").Buffer,
                n = r("839383"),
                o = r("814548").ec,
                a = r("596659"),
                s = r("49873");

            function f(t, e) {
                if (0 >= t.cmpn(0) || t.cmp(e) >= e) throw Error("invalid sig")
            }
            t.exports = function(t, e, r, h, c) {
                var u = a(r);
                if ("ec" === u.type) {
                    if ("ecdsa" !== h && "ecdsa/rsa" !== h) throw Error("wrong public key type");
                    return function(t, e, r) {
                        var i = s[r.data.algorithm.curve.join(".")];
                        if (!i) throw Error("unknown curve " + r.data.algorithm.curve.join("."));
                        var n = new o(i),
                            a = r.data.subjectPrivateKey.data;
                        return n.verify(e, t, a)
                    }(t, e, u)
                }
                if ("dsa" === u.type) {
                    if ("dsa" !== h) throw Error("wrong public key type");
                    return function(t, e, r) {
                        var i = r.data.p,
                            o = r.data.q,
                            s = r.data.g,
                            h = r.data.pub_key,
                            c = a.signature.decode(t, "der"),
                            u = c.s,
                            d = c.r;
                        f(u, o), f(d, o);
                        var l = n.mont(i),
                            p = u.invm(o);
                        return 0 === s.toRed(l).redPow(new n(e).mul(p).mod(o)).fromRed().mul(h.toRed(l).redPow(d.mul(p).mod(o)).fromRed()).mod(i).mod(o).cmp(d)
                    }(t, e, u)
                }
                if ("rsa" !== h && "ecdsa/rsa" !== h) throw Error("wrong public key type");
                e = i.concat([c, e]);
                for (var d = u.modulus.byteLength(), l = [1], p = 0; e.length + l.length + 2 < d;) l.push(255), p++;
                l.push(0);
                for (var b = -1; ++b < e.length;) l.push(e[b]);
                l = i.from(l);
                var m = n.mont(u.modulus);
                t = (t = new n(t).toRed(m)).redPow(new n(u.publicExponent)), t = i.from(t.fromRed().toArray());
                var g = p < 8 ? 1 : 0;
                for (d = Math.min(t.length, l.length), t.length !== l.length && (g = 1), b = -1; ++b < d;) g |= t[b] ^ l[b];
                return 0 === g
            }