            "use strict";
            s("424973");
            var r = s("599235"),
                i = s("912065").Buffer,
                n = s("441270"),
                c = i.alloc(128);

            function o(t, e) {
                n.call(this, "digest"), "string" == typeof e && (e = i.from(e)), this._alg = t, this._key = e, e.length > 64 ? e = t(e) : e.length < 64 && (e = i.concat([e, c], 64));
                for (var s = this._ipad = i.allocUnsafe(64), r = this._opad = i.allocUnsafe(64), o = 0; o < 64; o++) s[o] = 54 ^ e[o], r[o] = 92 ^ e[o];
                this._hash = [s]
            }
            r(o, n), o.prototype._update = function(t) {
                this._hash.push(t)
            }, o.prototype._final = function() {
                var t = this._alg(i.concat(this._hash));
                return this._alg(i.concat([this._opad, t]))
            }, t.exports = o