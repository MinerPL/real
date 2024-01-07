            "use strict";
            r("424973");
            var i = r("599235"),
                n = r("912065").Buffer,
                o = r("441270"),
                a = n.alloc(128);

            function s(t, e) {
                o.call(this, "digest"), "string" == typeof e && (e = n.from(e)), this._alg = t, this._key = e, e.length > 64 ? e = t(e) : e.length < 64 && (e = n.concat([e, a], 64));
                for (var r = this._ipad = n.allocUnsafe(64), i = this._opad = n.allocUnsafe(64), s = 0; s < 64; s++) r[s] = 54 ^ e[s], i[s] = 92 ^ e[s];
                this._hash = [r]
            }
            i(s, o), s.prototype._update = function(t) {
                this._hash.push(t)
            }, s.prototype._final = function() {
                var t = this._alg(n.concat(this._hash));
                return this._alg(n.concat([this._opad, t]))
            }, t.exports = s