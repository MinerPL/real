            var i = r("619127"),
                n = r("912065").Buffer,
                o = r("441270");

            function a(t, e, r, a) {
                o.call(this), this._cipher = new i.AES(e), this._prev = n.from(r), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = a, this._mode = t
            }
            r("599235")(a, o), a.prototype._update = function(t) {
                return this._mode.encrypt(this, t, this._decrypt)
            }, a.prototype._final = function() {
                this._cipher.scrub()
            }, t.exports = a