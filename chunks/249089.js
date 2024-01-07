            "use strict";
            var i = r("463483");

            function n(t) {
                this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = Array(this.blockSize), this.bufferOff = 0, this.padding = !1 !== t.padding
            }
            t.exports = n, n.prototype._init = function() {}, n.prototype.update = function(t) {
                return 0 === t.length ? [] : "decrypt" === this.type ? this._updateDecrypt(t) : this._updateEncrypt(t)
            }, n.prototype._buffer = function(t, e) {
                for (var r = Math.min(this.buffer.length - this.bufferOff, t.length - e), i = 0; i < r; i++) this.buffer[this.bufferOff + i] = t[e + i];
                return this.bufferOff += r, r
            }, n.prototype._flushBuffer = function(t, e) {
                return this._update(this.buffer, 0, t, e), this.bufferOff = 0, this.blockSize
            }, n.prototype._updateEncrypt = function(t) {
                var e = 0,
                    r = 0,
                    i = Array(((this.bufferOff + t.length) / this.blockSize | 0) * this.blockSize);
                0 !== this.bufferOff && (e += this._buffer(t, e), this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
                for (var n = t.length - (t.length - e) % this.blockSize; e < n; e += this.blockSize) this._update(t, e, i, r), r += this.blockSize;
                for (; e < t.length; e++, this.bufferOff++) this.buffer[this.bufferOff] = t[e];
                return i
            }, n.prototype._updateDecrypt = function(t) {
                for (var e = 0, r = 0, i = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1, n = Array(i * this.blockSize); i > 0; i--) e += this._buffer(t, e), r += this._flushBuffer(n, r);
                return e += this._buffer(t, e), n
            }, n.prototype.final = function(t) {
                var e, r;
                return (t && (e = this.update(t)), r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), e) ? e.concat(r) : r
            }, n.prototype._pad = function(t, e) {
                if (0 === e) return !1;
                for (; e < t.length;) t[e++] = 0;
                return !0
            }, n.prototype._finalEncrypt = function() {
                if (!this._pad(this.buffer, this.bufferOff)) return [];
                var t = Array(this.blockSize);
                return this._update(this.buffer, 0, t, 0), t
            }, n.prototype._unpad = function(t) {
                return t
            }, n.prototype._finalDecrypt = function() {
                i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
                var t = Array(this.blockSize);
                return this._flushBuffer(t, 0), this._unpad(t)
            }