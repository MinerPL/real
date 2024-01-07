            "use strict";
            r("424973");
            var i = r("555671"),
                n = r("463483");

            function o(t, e, r) {
                if (!(this instanceof o)) return new o(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(i.toArray(e, r))
            }
            t.exports = o, o.prototype._init = function(t) {
                t.length > this.blockSize && (t = new this.Hash().update(t).digest()), n(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (e = 0, this.inner = new this.Hash().update(t); e < t.length; e++) t[e] ^= 106;
                this.outer = new this.Hash().update(t)
            }, o.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, o.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }