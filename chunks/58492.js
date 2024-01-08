            var i = r("785060"),
                n = r("291954"),
                a = r("622107"),
                o = r("912065").Buffer,
                s = r("463316"),
                f = r("408475"),
                h = r("127368"),
                c = o.alloc(128),
                u = {
                    md5: 16,
                    sha1: 20,
                    sha224: 28,
                    sha256: 32,
                    sha384: 48,
                    sha512: 64,
                    rmd160: 20,
                    ripemd160: 20
                };

            function d(t, e, r) {
                var s = function(t) {
                        return "rmd160" === t || "ripemd160" === t ? function(t) {
                            return new n().update(t).digest()
                        } : "md5" === t ? i : function(e) {
                            return a(t).update(e).digest()
                        }
                    }(t),
                    f = "sha512" === t || "sha384" === t ? 128 : 64;
                e.length > f ? e = s(e) : e.length < f && (e = o.concat([e, c], f));
                for (var h = o.allocUnsafe(f + u[t]), d = o.allocUnsafe(f + u[t]), l = 0; l < f; l++) h[l] = 54 ^ e[l], d[l] = 92 ^ e[l];
                var p = o.allocUnsafe(f + r + 4);
                h.copy(p, 0, 0, f), this.ipad1 = p, this.ipad2 = h, this.opad = d, this.alg = t, this.blocksize = f, this.hash = s, this.size = u[t]
            }
            d.prototype.run = function(t, e) {
                return t.copy(e, this.blocksize), this.hash(e).copy(this.opad, this.blocksize), this.hash(this.opad)
            };
            t.exports = function(t, e, r, i, n) {
                s(r, i), t = h(t, f, "Password"), e = h(e, f, "Salt");
                var a = new d(n = n || "sha1", t, e.length),
                    c = o.allocUnsafe(i),
                    l = o.allocUnsafe(e.length + 4);
                e.copy(l, 0, 0, e.length);
                for (var p = 0, b = u[n], m = Math.ceil(i / b), g = 1; g <= m; g++) {
                    l.writeUInt32BE(g, e.length);
                    for (var v = a.run(l, a.ipad1), y = v, _ = 1; _ < r; _++) {
                        y = a.run(y, a.ipad2);
                        for (var w = 0; w < b; w++) v[w] ^= y[w]
                    }
                    v.copy(c, p), p += b
                }
                return c
            }