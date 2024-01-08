            var i = r("619127"),
                n = r("912065").Buffer,
                a = r("441270");

            function o(t, e, r, o) {
                a.call(this), this._cipher = new i.AES(e), this._prev = n.from(r), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = o, this._mode = t
            }
            r("599235")(o, a), o.prototype._update = function(t) {
                return this._mode.encrypt(this, t, this._decrypt)
            }, o.prototype._final = function() {
                this._cipher.scrub()
            }, t.exports = o