            "use strict";
            var i = r("555671"),
                n = r("256385"),
                o = i.rotl32,
                a = i.sum32,
                s = i.sum32_3,
                f = i.sum32_4,
                h = n.BlockHash;

            function c() {
                if (!(this instanceof c)) return new c;
                h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function u(t, e, r, i) {
                if (t <= 15) return e ^ r ^ i;
                if (t <= 31) return e & r | ~e & i;
                if (t <= 47) return (e | ~r) ^ i;
                else if (t <= 63) return e & i | r & ~i;
                else return e ^ (r | ~i)
            }
            i.inherits(c, h), e.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function(t, e) {
                for (var r = this.h[0], i = this.h[1], n = this.h[2], h = this.h[3], c = this.h[4], m = r, g = i, y = n, v = h, _ = c, w = 0; w < 80; w++) {
                    var M = a(o(f(r, u(w, i, n, h), t[d[w] + e], function(t) {
                        if (t <= 15) return 0;
                        if (t <= 31) return 1518500249;
                        if (t <= 47) return 1859775393;
                        else if (t <= 63) return 2400959708;
                        else return 2840853838
                    }(w)), p[w]), c);
                    r = c, c = h, h = o(n, 10), n = i, i = M, M = a(o(f(m, u(79 - w, g, y, v), t[l[w] + e], function(t) {
                        if (t <= 15) return 1352829926;
                        if (t <= 31) return 1548603684;
                        if (t <= 47) return 1836072691;
                        else if (t <= 63) return 2053994217;
                        else return 0
                    }(w)), b[w]), _), m = _, _ = v, v = o(y, 10), y = g, g = M
                }
                M = s(this.h[1], n, v), this.h[1] = s(this.h[2], h, _), this.h[2] = s(this.h[3], c, m), this.h[3] = s(this.h[4], r, g), this.h[4] = s(this.h[0], i, y), this.h[0] = M
            }, c.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
            };
            var d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                p = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                b = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]