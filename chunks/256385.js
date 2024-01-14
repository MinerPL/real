"use strict";
var r = s("555671"),
  i = s("463483");

function n() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
}
e.BlockHash = n, n.prototype.update = function(t, e) {
  if (t = r.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    var s = (t = this.pending).length % this._delta8;
    this.pending = t.slice(t.length - s, t.length), 0 === this.pending.length && (this.pending = null), t = r.join32(t, 0, t.length - s, this.endian);
    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
  }
  return this
}, n.prototype.digest = function(t) {
  return this.update(this._pad()), i(null === this.pending), this._digest(t)
}, n.prototype._pad = function() {
  var t = this.pendingTotal,
    e = this._delta8,
    s = e - (t + this.padLength) % e,
    r = Array(s + this.padLength);
  r[0] = 128;
  for (var i = 1; i < s; i++) r[i] = 0;
  if (t <<= 3, "big" === this.endian) {
    for (var n = 8; n < this.padLength; n++) r[i++] = 0;
    r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = t >>> 24 & 255, r[i++] = t >>> 16 & 255, r[i++] = t >>> 8 & 255, r[i++] = 255 & t
  } else
    for (n = 8, r[i++] = 255 & t, r[i++] = t >>> 8 & 255, r[i++] = t >>> 16 & 255, r[i++] = t >>> 24 & 255, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0; n < this.padLength; n++) r[i++] = 0;
  return r
}