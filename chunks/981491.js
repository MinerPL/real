            s("70102"), s("424973");
            var r = s("912065").Buffer,
                i = s("839383"),
                n = s("814548").ec,
                c = s("596659"),
                o = s("49873");

            function f(t, e) {
                if (0 >= t.cmpn(0) || t.cmp(e) >= e) throw Error("invalid sig")
            }
            t.exports = function(t, e, s, u, a) {
                var d = c(s);
                if ("ec" === d.type) {
                    if ("ecdsa" !== u && "ecdsa/rsa" !== u) throw Error("wrong public key type");
                    return function(t, e, s) {
                        var r = o[s.data.algorithm.curve.join(".")];
                        if (!r) throw Error("unknown curve " + s.data.algorithm.curve.join("."));
                        var i = new n(r),
                            c = s.data.subjectPrivateKey.data;
                        return i.verify(e, t, c)
                    }(t, e, d)
                }
                if ("dsa" === d.type) {
                    if ("dsa" !== u) throw Error("wrong public key type");
                    return function(t, e, s) {
                        var r = s.data.p,
                            n = s.data.q,
                            o = s.data.g,
                            u = s.data.pub_key,
                            a = c.signature.decode(t, "der"),
                            d = a.s,
                            p = a.r;
                        f(d, n), f(p, n);
                        var b = i.mont(r),
                            h = d.invm(n);
                        return 0 === o.toRed(b).redPow(new i(e).mul(h).mod(n)).fromRed().mul(u.toRed(b).redPow(p.mul(h).mod(n)).fromRed()).mod(r).mod(n).cmp(p)
                    }(t, e, d)
                }
                if ("rsa" !== u && "ecdsa/rsa" !== u) throw Error("wrong public key type");
                e = r.concat([a, e]);
                for (var p = d.modulus.byteLength(), b = [1], h = 0; e.length + b.length + 2 < p;) b.push(255), h++;
                b.push(0);
                for (var l = -1; ++l < e.length;) b.push(e[l]);
                b = r.from(b);
                var g = i.mont(d.modulus);
                t = (t = new i(t).toRed(g)).redPow(new i(d.publicExponent)), t = r.from(t.fromRed().toArray());
                var v = h < 8 ? 1 : 0;
                for (p = Math.min(t.length, b.length), t.length !== b.length && (v = 1), l = -1; ++l < p;) v |= t[l] ^ b[l];
                return 0 === v
            }