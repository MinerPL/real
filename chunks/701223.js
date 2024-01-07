            "use strict";
            var i = r("463483"),
                n = r("599235"),
                o = {};

            function a(t) {
                i.equal(t.length, 8, "Invalid IV length"), this.iv = Array(8);
                for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
            }
            e.instantiate = function(t) {
                function e(e) {
                    t.call(this, e), this._cbcInit()
                }
                n(e, t);
                for (var r = Object.keys(o), i = 0; i < r.length; i++) {
                    var a = r[i];
                    e.prototype[a] = o[a]
                }
                return e.create = function(t) {
                    return new e(t)
                }, e
            }, o._cbcInit = function() {
                var t = new a(this.options.iv);
                this._cbcState = t
            }, o._update = function(t, e, r, i) {
                var n = this._cbcState,
                    o = this.constructor.super_.prototype,
                    a = n.iv;
                if ("encrypt" === this.type) {
                    for (var s = 0; s < this.blockSize; s++) a[s] ^= t[e + s];
                    o._update.call(this, a, 0, r, i);
                    for (var s = 0; s < this.blockSize; s++) a[s] = r[i + s]
                } else {
                    o._update.call(this, t, e, r, i);
                    for (var s = 0; s < this.blockSize; s++) r[i + s] ^= a[s];
                    for (var s = 0; s < this.blockSize; s++) a[s] = t[e + s]
                }
            }