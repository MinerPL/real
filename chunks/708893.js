            "use strict";
            var r = s("599235"),
                i = s("82221"),
                n = s("912065").Buffer,
                c = Array(16);

            function o() {
                i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function f(t, e) {
                return t << e | t >>> 32 - e
            }

            function u(t, e, s, r, i, n, c) {
                return f(t + (e & s | ~e & r) + i + n | 0, c) + e | 0
            }

            function a(t, e, s, r, i, n, c) {
                return f(t + (e & r | s & ~r) + i + n | 0, c) + e | 0
            }

            function d(t, e, s, r, i, n, c) {
                return f(t + (e ^ s ^ r) + i + n | 0, c) + e | 0
            }

            function p(t, e, s, r, i, n, c) {
                return f(t + (s ^ (e | ~r)) + i + n | 0, c) + e | 0
            }
            r(o, i), o.prototype._update = function() {
                for (var t = 0; t < 16; ++t) c[t] = this._block.readInt32LE(4 * t);
                var e = this._a,
                    s = this._b,
                    r = this._c,
                    i = this._d;
                e = u(e, s, r, i, c[0], 3614090360, 7), i = u(i, e, s, r, c[1], 3905402710, 12), r = u(r, i, e, s, c[2], 606105819, 17), s = u(s, r, i, e, c[3], 3250441966, 22), e = u(e, s, r, i, c[4], 4118548399, 7), i = u(i, e, s, r, c[5], 1200080426, 12), r = u(r, i, e, s, c[6], 2821735955, 17), s = u(s, r, i, e, c[7], 4249261313, 22), e = u(e, s, r, i, c[8], 1770035416, 7), i = u(i, e, s, r, c[9], 2336552879, 12), r = u(r, i, e, s, c[10], 4294925233, 17), s = u(s, r, i, e, c[11], 2304563134, 22), e = u(e, s, r, i, c[12], 1804603682, 7), i = u(i, e, s, r, c[13], 4254626195, 12), r = u(r, i, e, s, c[14], 2792965006, 17), s = u(s, r, i, e, c[15], 1236535329, 22), e = a(e, s, r, i, c[1], 4129170786, 5), i = a(i, e, s, r, c[6], 3225465664, 9), r = a(r, i, e, s, c[11], 643717713, 14), s = a(s, r, i, e, c[0], 3921069994, 20), e = a(e, s, r, i, c[5], 3593408605, 5), i = a(i, e, s, r, c[10], 38016083, 9), r = a(r, i, e, s, c[15], 3634488961, 14), s = a(s, r, i, e, c[4], 3889429448, 20), e = a(e, s, r, i, c[9], 568446438, 5), i = a(i, e, s, r, c[14], 3275163606, 9), r = a(r, i, e, s, c[3], 4107603335, 14), s = a(s, r, i, e, c[8], 1163531501, 20), e = a(e, s, r, i, c[13], 2850285829, 5), i = a(i, e, s, r, c[2], 4243563512, 9), r = a(r, i, e, s, c[7], 1735328473, 14), s = a(s, r, i, e, c[12], 2368359562, 20), e = d(e, s, r, i, c[5], 4294588738, 4), i = d(i, e, s, r, c[8], 2272392833, 11), r = d(r, i, e, s, c[11], 1839030562, 16), s = d(s, r, i, e, c[14], 4259657740, 23), e = d(e, s, r, i, c[1], 2763975236, 4), i = d(i, e, s, r, c[4], 1272893353, 11), r = d(r, i, e, s, c[7], 4139469664, 16), s = d(s, r, i, e, c[10], 3200236656, 23), e = d(e, s, r, i, c[13], 681279174, 4), i = d(i, e, s, r, c[0], 3936430074, 11), r = d(r, i, e, s, c[3], 3572445317, 16), s = d(s, r, i, e, c[6], 76029189, 23), e = d(e, s, r, i, c[9], 3654602809, 4), i = d(i, e, s, r, c[12], 3873151461, 11), r = d(r, i, e, s, c[15], 530742520, 16), s = d(s, r, i, e, c[2], 3299628645, 23), e = p(e, s, r, i, c[0], 4096336452, 6), i = p(i, e, s, r, c[7], 1126891415, 10), r = p(r, i, e, s, c[14], 2878612391, 15), s = p(s, r, i, e, c[5], 4237533241, 21), e = p(e, s, r, i, c[12], 1700485571, 6), i = p(i, e, s, r, c[3], 2399980690, 10), r = p(r, i, e, s, c[10], 4293915773, 15), s = p(s, r, i, e, c[1], 2240044497, 21), e = p(e, s, r, i, c[8], 1873313359, 6), i = p(i, e, s, r, c[15], 4264355552, 10), r = p(r, i, e, s, c[6], 2734768916, 15), s = p(s, r, i, e, c[13], 1309151649, 21), e = p(e, s, r, i, c[4], 4149444226, 6), i = p(i, e, s, r, c[11], 3174756917, 10), r = p(r, i, e, s, c[2], 718787259, 15), s = p(s, r, i, e, c[9], 3951481745, 21), this._a = this._a + e | 0, this._b = this._b + s | 0, this._c = this._c + r | 0, this._d = this._d + i | 0
            }, o.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = n.allocUnsafe(16);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
            }, t.exports = o