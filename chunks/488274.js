            "use strict";
            var i = r("599235"),
                n = r("708893"),
                o = r("291954"),
                a = r("622107"),
                s = r("441270");

            function f(t) {
                s.call(this, "digest"), this._hash = t
            }
            i(f, s), f.prototype._update = function(t) {
                this._hash.update(t)
            }, f.prototype._final = function() {
                return this._hash.digest()
            }, t.exports = function(t) {
                return "md5" === (t = t.toLowerCase()) ? new n : "rmd160" === t || "ripemd160" === t ? new o : new f(a(t))
            }