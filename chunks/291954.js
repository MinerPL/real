            "use strict";
            var r = s("446825").Buffer,
                i = s("599235"),
                n = s("82221"),
                c = Array(16),
                o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                a = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                p = [1352829926, 1548603684, 1836072691, 2053994217, 0];

            function b() {
                n.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
            }

            function h(t, e) {
                return t << e | t >>> 32 - e
            }

            function l(t, e, s, r, i, n, c, o) {
                return h(t + (e ^ s ^ r) + n + c | 0, o) + i | 0
            }

            function g(t, e, s, r, i, n, c, o) {
                return h(t + (e & s | ~e & r) + n + c | 0, o) + i | 0
            }

            function v(t, e, s, r, i, n, c, o) {
                return h(t + ((e | ~s) ^ r) + n + c | 0, o) + i | 0
            }

            function x(t, e, s, r, i, n, c, o) {
                return h(t + (e & r | s & ~r) + n + c | 0, o) + i | 0
            }

            function m(t, e, s, r, i, n, c, o) {
                return h(t + (e ^ (s | ~r)) + n + c | 0, o) + i | 0
            }
            i(b, n), b.prototype._update = function() {
                for (var t, e, s = 0; s < 16; ++s) c[s] = this._block.readInt32LE(4 * s);
                for (var r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, d = 0 | this._d, p = 0 | this._e, b = 0 | this._a, l = 0 | this._b, g = 0 | this._c, v = 0 | this._d, x = 0 | this._e, m = 0; m < 80; m += 1) m < 16 ? (t = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e ^ s ^ r) + n + c | 0, o) + i | 0
                }(r, i, n, d, p, c[o[m]], 0, u[m]), e = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e ^ (s | ~r)) + n + c | 0, o) + i | 0
                }(b, l, g, v, x, c[f[m]], 1352829926, a[m])) : m < 32 ? (t = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e & s | ~e & r) + n + c | 0, o) + i | 0
                }(r, i, n, d, p, c[o[m]], 1518500249, u[m]), e = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e & r | s & ~r) + n + c | 0, o) + i | 0
                }(b, l, g, v, x, c[f[m]], 1548603684, a[m])) : m < 48 ? (t = function(t, e, s, r, i, n, c, o) {
                    return h(t + ((e | ~s) ^ r) + n + c | 0, o) + i | 0
                }(r, i, n, d, p, c[o[m]], 1859775393, u[m]), e = function(t, e, s, r, i, n, c, o) {
                    return h(t + ((e | ~s) ^ r) + n + c | 0, o) + i | 0
                }(b, l, g, v, x, c[f[m]], 1836072691, a[m])) : m < 64 ? (t = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e & r | s & ~r) + n + c | 0, o) + i | 0
                }(r, i, n, d, p, c[o[m]], 2400959708, u[m]), e = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e & s | ~e & r) + n + c | 0, o) + i | 0
                }(b, l, g, v, x, c[f[m]], 2053994217, a[m])) : (t = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e ^ (s | ~r)) + n + c | 0, o) + i | 0
                }(r, i, n, d, p, c[o[m]], 2840853838, u[m]), e = function(t, e, s, r, i, n, c, o) {
                    return h(t + (e ^ s ^ r) + n + c | 0, o) + i | 0
                }(b, l, g, v, x, c[f[m]], 0, a[m])), r = p, p = d, d = h(n, 10), n = i, i = t, b = x, x = v, v = h(g, 10), g = l, l = e;
                var y = this._b + n + v | 0;
                this._b = this._c + d + x | 0, this._c = this._d + p + b | 0, this._d = this._e + r + l | 0, this._e = this._a + i + g | 0, this._a = y
            }, b.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = r.alloc ? r.alloc(20) : new r(20);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
            }, t.exports = b