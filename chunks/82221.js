            "use strict";
            r("70102"), r("424973");
            var i = r("912065").Buffer,
                n = r("275682").Transform,
                o = r("599235");

            function a(t) {
                n.call(this), this._block = i.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
            }
            o(a, n), a.prototype._transform = function(t, e, r) {
                var i = null;
                try {
                    this.update(t, e)
                } catch (t) {
                    i = t
                }
                r(i)
            }, a.prototype._flush = function(t) {
                var e = null;
                try {
                    this.push(this.digest())
                } catch (t) {
                    e = t
                }
                t(e)
            }, a.prototype.update = function(t, e) {
                if (! function(t, e) {
                        if (!i.isBuffer(t) && "string" != typeof t) throw TypeError(e + " must be a string or a buffer")
                    }(t, "Data"), this._finalized) throw Error("Digest already called");
                !i.isBuffer(t) && (t = i.from(t, e));
                for (var r = this._block, n = 0; this._blockOffset + t.length - n >= this._blockSize;) {
                    for (var o = this._blockOffset; o < this._blockSize;) r[o++] = t[n++];
                    this._update(), this._blockOffset = 0
                }
                for (; n < t.length;) r[this._blockOffset++] = t[n++];
                for (var a = 0, s = 8 * t.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
                return this
            }, a.prototype._update = function() {
                throw Error("_update is not implemented")
            }, a.prototype.digest = function(t) {
                if (this._finalized) throw Error("Digest already called");
                this._finalized = !0;
                var e = this._digest();
                void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
                for (var r = 0; r < 4; ++r) this._length[r] = 0;
                return e
            }, a.prototype._digest = function() {
                throw Error("_digest is not implemented")
            }, t.exports = a