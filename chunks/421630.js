var r = s("619127"),
  i = s("912065").Buffer,
  n = s("441270");

function c(t, e, s, c) {
  n.call(this), this._cipher = new r.AES(e), this._prev = i.from(s), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = c, this._mode = t
}
s("599235")(c, n), c.prototype._update = function(t) {
  return this._mode.encrypt(this, t, this._decrypt)
}, c.prototype._final = function() {
  this._cipher.scrub()
}, t.exports = c