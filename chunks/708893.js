            "use strict";
            var i = r("599235"),
                n = r("82221"),
                a = r("912065").Buffer,
                o = Array(16);

            function s() {
                n.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function f(t, e) {
                return t << e | t >>> 32 - e
            }

            function h(t, e, r, i, n, a, o) {
                return f(t + (e & r | ~e & i) + n + a | 0, o) + e | 0
            }

            function c(t, e, r, i, n, a, o) {
                return f(t + (e & i | r & ~i) + n + a | 0, o) + e | 0
            }

            function u(t, e, r, i, n, a, o) {
                return f(t + (e ^ r ^ i) + n + a | 0, o) + e | 0
            }

            function d(t, e, r, i, n, a, o) {
                return f(t + (r ^ (e | ~i)) + n + a | 0, o) + e | 0
            }
            i(s, n), s.prototype._update = function() {
                for (var t = 0; t < 16; ++t) o[t] = this._block.readInt32LE(4 * t);
                var e = this._a,
                    r = this._b,
                    i = this._c,
                    n = this._d;
                e = h(e, r, i, n, o[0], 3614090360, 7), n = h(n, e, r, i, o[1], 3905402710, 12), i = h(i, n, e, r, o[2], 606105819, 17), r = h(r, i, n, e, o[3], 3250441966, 22), e = h(e, r, i, n, o[4], 4118548399, 7), n = h(n, e, r, i, o[5], 1200080426, 12), i = h(i, n, e, r, o[6], 2821735955, 17), r = h(r, i, n, e, o[7], 4249261313, 22), e = h(e, r, i, n, o[8], 1770035416, 7), n = h(n, e, r, i, o[9], 2336552879, 12), i = h(i, n, e, r, o[10], 4294925233, 17), r = h(r, i, n, e, o[11], 2304563134, 22), e = h(e, r, i, n, o[12], 1804603682, 7), n = h(n, e, r, i, o[13], 4254626195, 12), i = h(i, n, e, r, o[14], 2792965006, 17), r = h(r, i, n, e, o[15], 1236535329, 22), e = c(e, r, i, n, o[1], 4129170786, 5), n = c(n, e, r, i, o[6], 3225465664, 9), i = c(i, n, e, r, o[11], 643717713, 14), r = c(r, i, n, e, o[0], 3921069994, 20), e = c(e, r, i, n, o[5], 3593408605, 5), n = c(n, e, r, i, o[10], 38016083, 9), i = c(i, n, e, r, o[15], 3634488961, 14), r = c(r, i, n, e, o[4], 3889429448, 20), e = c(e, r, i, n, o[9], 568446438, 5), n = c(n, e, r, i, o[14], 3275163606, 9), i = c(i, n, e, r, o[3], 4107603335, 14), r = c(r, i, n, e, o[8], 1163531501, 20), e = c(e, r, i, n, o[13], 2850285829, 5), n = c(n, e, r, i, o[2], 4243563512, 9), i = c(i, n, e, r, o[7], 1735328473, 14), r = c(r, i, n, e, o[12], 2368359562, 20), e = u(e, r, i, n, o[5], 4294588738, 4), n = u(n, e, r, i, o[8], 2272392833, 11), i = u(i, n, e, r, o[11], 1839030562, 16), r = u(r, i, n, e, o[14], 4259657740, 23), e = u(e, r, i, n, o[1], 2763975236, 4), n = u(n, e, r, i, o[4], 1272893353, 11), i = u(i, n, e, r, o[7], 4139469664, 16), r = u(r, i, n, e, o[10], 3200236656, 23), e = u(e, r, i, n, o[13], 681279174, 4), n = u(n, e, r, i, o[0], 3936430074, 11), i = u(i, n, e, r, o[3], 3572445317, 16), r = u(r, i, n, e, o[6], 76029189, 23), e = u(e, r, i, n, o[9], 3654602809, 4), n = u(n, e, r, i, o[12], 3873151461, 11), i = u(i, n, e, r, o[15], 530742520, 16), r = u(r, i, n, e, o[2], 3299628645, 23), e = d(e, r, i, n, o[0], 4096336452, 6), n = d(n, e, r, i, o[7], 1126891415, 10), i = d(i, n, e, r, o[14], 2878612391, 15), r = d(r, i, n, e, o[5], 4237533241, 21), e = d(e, r, i, n, o[12], 1700485571, 6), n = d(n, e, r, i, o[3], 2399980690, 10), i = d(i, n, e, r, o[10], 4293915773, 15), r = d(r, i, n, e, o[1], 2240044497, 21), e = d(e, r, i, n, o[8], 1873313359, 6), n = d(n, e, r, i, o[15], 4264355552, 10), i = d(i, n, e, r, o[6], 2734768916, 15), r = d(r, i, n, e, o[13], 1309151649, 21), e = d(e, r, i, n, o[4], 4149444226, 6), n = d(n, e, r, i, o[11], 3174756917, 10), i = d(i, n, e, r, o[2], 718787259, 15), r = d(r, i, n, e, o[9], 3951481745, 21), this._a = this._a + e | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + n | 0
            }, s.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = a.allocUnsafe(16);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
            }, t.exports = s