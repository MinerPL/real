            "use strict";
            var i = r("463483"),
                n = r("599235"),
                a = {};

            function o(t) {
                i.equal(t.length, 8, "Invalid IV length"), this.iv = Array(8);
                for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
            }
            e.instantiate = function(t) {
                function e(e) {
                    t.call(this, e), this._cbcInit()
                }
                n(e, t);
                for (var r = Object.keys(a), i = 0; i < r.length; i++) {
                    var o = r[i];
                    e.prototype[o] = a[o]
                }
                return e.create = function(t) {
                    return new e(t)
                }, e
            }, a._cbcInit = function() {
                var t = new o(this.options.iv);
                this._cbcState = t
            }, a._update = function(t, e, r, i) {
                var n = this._cbcState,
                    a = this.constructor.super_.prototype,
                    o = n.iv;
                if ("encrypt" === this.type) {
                    for (var s = 0; s < this.blockSize; s++) o[s] ^= t[e + s];
                    a._update.call(this, o, 0, r, i);
                    for (var s = 0; s < this.blockSize; s++) o[s] = r[i + s]
                } else {
                    a._update.call(this, t, e, r, i);
                    for (var s = 0; s < this.blockSize; s++) r[i + s] ^= o[s];
                    for (var s = 0; s < this.blockSize; s++) o[s] = t[e + s]
                }
            }