            var i = r("912065").Buffer,
                n = i.alloc(16, 0);

            function a(t) {
                var e = i.allocUnsafe(16);
                return e.writeUInt32BE(t[0] >>> 0, 0), e.writeUInt32BE(t[1] >>> 0, 4), e.writeUInt32BE(t[2] >>> 0, 8), e.writeUInt32BE(t[3] >>> 0, 12), e
            }

            function o(t) {
                this.h = t, this.state = i.alloc(16, 0), this.cache = i.allocUnsafe(0)
            }
            o.prototype.ghash = function(t) {
                for (var e = -1; ++e < t.length;) this.state[e] ^= t[e];
                this._multiply()
            }, o.prototype._multiply = function() {
                for (var t, e, r, i = [(t = this.h).readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)], n = [0, 0, 0, 0], o = -1; ++o < 128;) {
                    for ((this.state[~~(o / 8)] & 1 << 7 - o % 8) != 0 && (n[0] ^= i[0], n[1] ^= i[1], n[2] ^= i[2], n[3] ^= i[3]), r = (1 & i[3]) != 0, e = 3; e > 0; e--) i[e] = i[e] >>> 1 | (1 & i[e - 1]) << 31;
                    i[0] = i[0] >>> 1, r && (i[0] = -520093696 ^ i[0])
                }
                this.state = a(n)
            }, o.prototype.update = function(t) {
                var e;
                for (this.cache = i.concat([this.cache, t]); this.cache.length >= 16;) e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(e)
            }, o.prototype.final = function(t, e) {
                return this.cache.length && this.ghash(i.concat([this.cache, n], 16)), this.ghash(a([0, t, 0, e])), this.state
            }, t.exports = o