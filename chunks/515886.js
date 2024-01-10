            r("70102");
            var i = r("912065").Buffer;

            function n(t, e) {
                this._block = i.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
            }
            n.prototype.update = function(t, e) {
                "string" == typeof t && (e = e || "utf8", t = i.from(t, e));
                for (var r = this._block, n = this._blockSize, o = t.length, a = this._len, s = 0; s < o;) {
                    for (var f = a % n, h = Math.min(o - s, n - f), c = 0; c < h; c++) r[f + c] = t[s + c];
                    a += h, s += h, a % n == 0 && this._update(r)
                }
                return this._len += o, this
            }, n.prototype.digest = function(t) {
                var e = this._len % this._blockSize;
                this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                    var i = (4294967295 & r) >>> 0;
                    this._block.writeUInt32BE((r - i) / 4294967296, this._blockSize - 8), this._block.writeUInt32BE(i, this._blockSize - 4)
                }
                this._update(this._block);
                var n = this._hash();
                return t ? n.toString(t) : n
            }, n.prototype._update = function() {
                throw Error("_update must be implemented by subclass")
            }, t.exports = n