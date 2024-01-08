            "use strict";
            var i = r("555671"),
                n = r("256385"),
                a = r("408109"),
                o = i.rotl32,
                s = i.sum32,
                f = i.sum32_5,
                h = a.ft_1,
                c = n.BlockHash,
                u = [1518500249, 1859775393, 2400959708, 3395469782];

            function d() {
                if (!(this instanceof d)) return new d;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            i.inherits(d, c), t.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = o(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                var n = this.h[0],
                    a = this.h[1],
                    c = this.h[2],
                    d = this.h[3],
                    l = this.h[4];
                for (i = 0; i < r.length; i++) {
                    var p = ~~(i / 20),
                        b = f(o(n, 5), h(p, a, c, d), l, r[i], u[p]);
                    l = d, d = c, c = o(a, 30), a = n, n = b
                }
                this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], c), this.h[3] = s(this.h[3], d), this.h[4] = s(this.h[4], l)
            }, d.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }