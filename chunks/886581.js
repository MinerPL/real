            var i = r("599235"),
                n = r("515886"),
                a = r("912065").Buffer,
                o = [1518500249, 1859775393, -1894007588, -899497514],
                s = Array(80);

            function f() {
                this.init(), this._w = s, n.call(this, 64, 56)
            }
            i(f, n), f.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            };
            f.prototype._update = function(t) {
                for (var e = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, a = 0 | this._d, s = 0 | this._e, f = 0; f < 16; ++f) e[f] = t.readInt32BE(4 * f);
                for (; f < 80; ++f) e[f] = e[f - 3] ^ e[f - 8] ^ e[f - 14] ^ e[f - 16];
                for (var h = 0; h < 80; ++h) {
                    var c, u, d, l, p, b, m = ~~(h / 20);
                    var g = ((c = r) << 5 | c >>> 27) + (u = m, d = i, l = n, p = a, 0 === u ? d & l | ~d & p : 2 === u ? d & l | d & p | l & p : d ^ l ^ p) + s + e[h] + o[m] | 0;
                    s = a, a = n, n = (b = i) << 30 | b >>> 2, i = r, r = g
                }
                this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0
            }, f.prototype._hash = function() {
                var t = a.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
            }, t.exports = f