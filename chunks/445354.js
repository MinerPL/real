            var i = r("599235"),
                n = r("515886"),
                o = r("912065").Buffer,
                a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                s = Array(64);

            function f() {
                this.init(), this._w = s, n.call(this, 64, 56)
            }
            i(f, n), f.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            };
            f.prototype._update = function(t) {
                for (var e = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, s = 0 | this._e, f = 0 | this._f, h = 0 | this._g, c = 0 | this._h, u = 0; u < 16; ++u) e[u] = t.readInt32BE(4 * u);
                for (; u < 64; ++u) {
                    ;
                    e[u] = (((l = e[u - 2]) >>> 17 | l << 15) ^ (l >>> 19 | l << 13) ^ l >>> 10) + e[u - 7] + (((p = e[u - 15]) >>> 7 | p << 25) ^ (p >>> 18 | p << 14) ^ p >>> 3) + e[u - 16] | 0
                }
                for (var d = 0; d < 64; ++d) {
                    var l, p, b, m, g, y, v, _, w, M = c + (((b = s) >>> 6 | b << 26) ^ (b >>> 11 | b << 21) ^ (b >>> 25 | b << 7)) + (m = s, g = f, (y = h) ^ m & (g ^ y)) + a[d] + e[d] | 0;
                    var S = (((v = r) >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10)) + ((_ = r) & (w = i) | n & (_ | w)) | 0;
                    c = h, h = f, f = s, s = o + M | 0, o = n, n = i, i = r, r = M + S | 0
                }
                this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = o + this._d | 0, this._e = s + this._e | 0, this._f = f + this._f | 0, this._g = h + this._g | 0, this._h = c + this._h | 0
            }, f.prototype._hash = function() {
                var t = o.allocUnsafe(32);
                return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
            }, t.exports = f