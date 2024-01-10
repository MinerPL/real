            "use strict";
            var i = r("555671"),
                n = r("256385"),
                o = r("408109"),
                a = r("463483"),
                s = i.sum32,
                f = i.sum32_4,
                h = i.sum32_5,
                c = o.ch32,
                u = o.maj32,
                d = o.s0_256,
                l = o.s1_256,
                p = o.g0_256,
                b = o.g1_256,
                m = n.BlockHash,
                g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function y() {
                if (!(this instanceof y)) return new y;
                m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = Array(64)
            }
            i.inherits(y, m), t.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = f(b(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
                var n = this.h[0],
                    o = this.h[1],
                    m = this.h[2],
                    g = this.h[3],
                    y = this.h[4],
                    v = this.h[5],
                    _ = this.h[6],
                    w = this.h[7];
                for (a(this.k.length === r.length), i = 0; i < r.length; i++) {
                    var M = h(w, l(y), c(y, v, _), this.k[i], r[i]),
                        S = s(d(n), u(n, o, m));
                    w = _, _ = v, v = y, y = s(g, M), g = m, m = o, o = n, n = s(M, S)
                }
                this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], m), this.h[3] = s(this.h[3], g), this.h[4] = s(this.h[4], y), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], w)
            }, y.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }