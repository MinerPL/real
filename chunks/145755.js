            "use strict";
            var i = r("599235"),
                n = r("790986"),
                o = r("441270"),
                a = r("912065").Buffer,
                s = r("785060"),
                f = r("291954"),
                h = r("622107"),
                c = a.alloc(128);

            function u(t, e) {
                o.call(this, "digest"), "string" == typeof e && (e = a.from(e));
                var r = "sha512" === t || "sha384" === t ? 128 : 64;
                this._alg = t, this._key = e, e.length > r ? e = ("rmd160" === t ? new f : h(t)).update(e).digest() : e.length < r && (e = a.concat([e, c], r));
                for (var i = this._ipad = a.allocUnsafe(r), n = this._opad = a.allocUnsafe(r), s = 0; s < r; s++) i[s] = 54 ^ e[s], n[s] = 92 ^ e[s];
                this._hash = "rmd160" === t ? new f : h(t), this._hash.update(i)
            }
            i(u, o), u.prototype._update = function(t) {
                this._hash.update(t)
            }, u.prototype._final = function() {
                var t = this._hash.digest();
                return ("rmd160" === this._alg ? new f : h(this._alg)).update(this._opad).update(t).digest()
            }, t.exports = function(t, e) {
                return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new u("rmd160", e) : "md5" === t ? new n(s, e) : new u(t, e)
            }