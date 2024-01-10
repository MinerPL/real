            "use strict";
            var i = r("555671"),
                n = r("463483");

            function o() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            e.BlockHash = o, o.prototype.update = function(t, e) {
                if (t = i.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = i.join32(t, 0, t.length - r, this.endian);
                    for (var n = 0; n < t.length; n += this._delta32) this._update(t, n, n + this._delta32)
                }
                return this
            }, o.prototype.digest = function(t) {
                return this.update(this._pad()), n(null === this.pending), this._digest(t)
            }, o.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    i = Array(r + this.padLength);
                i[0] = 128;
                for (var n = 1; n < r; n++) i[n] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) i[n++] = 0;
                    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
                } else
                    for (o = 8, i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0; o < this.padLength; o++) i[n++] = 0;
                return i
            }