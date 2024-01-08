            "use strict";
            var i = r("555671"),
                n = r("256385"),
                a = r("408109"),
                o = r("463483"),
                s = i.sum32,
                f = i.sum32_4,
                h = i.sum32_5,
                c = a.ch32,
                u = a.maj32,
                d = a.s0_256,
                l = a.s1_256,
                p = a.g0_256,
                b = a.g1_256,
                m = n.BlockHash,
                g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function v() {
                if (!(this instanceof v)) return new v;
                m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = Array(64)
            }
            i.inherits(v, m), t.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = f(b(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
                var n = this.h[0],
                    a = this.h[1],
                    m = this.h[2],
                    g = this.h[3],
                    v = this.h[4],
                    y = this.h[5],
                    _ = this.h[6],
                    w = this.h[7];
                for (o(this.k.length === r.length), i = 0; i < r.length; i++) {
                    var M = h(w, l(v), c(v, y, _), this.k[i], r[i]),
                        S = s(d(n), u(n, a, m));
                    w = _, _ = y, y = v, v = s(g, M), g = m, m = a, a = n, n = s(M, S)
                }
                this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], m), this.h[3] = s(this.h[3], g), this.h[4] = s(this.h[4], v), this.h[5] = s(this.h[5], y), this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], w)
            }, v.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }