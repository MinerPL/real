            var r = s("599235"),
                i = s("515886"),
                n = s("912065").Buffer,
                c = [1518500249, 1859775393, -1894007588, -899497514],
                o = Array(80);

            function f() {
                this.init(), this._w = o, i.call(this, 64, 56)
            }
            r(f, i), f.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            };
            f.prototype._update = function(t) {
                for (var e = this._w, s = 0 | this._a, r = 0 | this._b, i = 0 | this._c, n = 0 | this._d, o = 0 | this._e, f = 0; f < 16; ++f) e[f] = t.readInt32BE(4 * f);
                for (; f < 80; ++f) {
                    ;
                    e[f] = (a = e[f - 3] ^ e[f - 8] ^ e[f - 14] ^ e[f - 16]) << 1 | a >>> 31
                }
                for (var u = 0; u < 80; ++u) {
                    var a, d, p, b, h, l, g, v = ~~(u / 20);
                    var x = ((d = s) << 5 | d >>> 27) + (p = v, b = r, h = i, l = n, 0 === p ? b & h | ~b & l : 2 === p ? b & h | b & l | h & l : b ^ h ^ l) + o + e[u] + c[v] | 0;
                    o = n, n = i, i = (g = r) << 30 | g >>> 2, r = s, s = x
                }
                this._a = s + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = n + this._d | 0, this._e = o + this._e | 0
            }, f.prototype._hash = function() {
                var t = n.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
            }, t.exports = f