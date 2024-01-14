"use strict";
var r = s("463483");

function i(t) {
  this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = Array(this.blockSize), this.bufferOff = 0, this.padding = !1 !== t.padding
}
t.exports = i, i.prototype._init = function() {}, i.prototype.update = function(t) {
  return 0 === t.length ? [] : "decrypt" === this.type ? this._updateDecrypt(t) : this._updateEncrypt(t)
}, i.prototype._buffer = function(t, e) {
  for (var s = Math.min(this.buffer.length - this.bufferOff, t.length - e), r = 0; r < s; r++) this.buffer[this.bufferOff + r] = t[e + r];
  return this.bufferOff += s, s
}, i.prototype._flushBuffer = function(t, e) {
  return this._update(this.buffer, 0, t, e), this.bufferOff = 0, this.blockSize
}, i.prototype._updateEncrypt = function(t) {
  var e = 0,
    s = 0,
    r = Array(((this.bufferOff + t.length) / this.blockSize | 0) * this.blockSize);
  0 !== this.bufferOff && (e += this._buffer(t, e), this.bufferOff === this.buffer.length && (s += this._flushBuffer(r, s)));
  for (var i = t.length - (t.length - e) % this.blockSize; e < i; e += this.blockSize) this._update(t, e, r, s), s += this.blockSize;
  for (; e < t.length; e++, this.bufferOff++) this.buffer[this.bufferOff] = t[e];
  return r
}, i.prototype._updateDecrypt = function(t) {
  for (var e = 0, s = 0, r = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1, i = Array(r * this.blockSize); r > 0; r--) e += this._buffer(t, e), s += this._flushBuffer(i, s);
  return e += this._buffer(t, e), i
}, i.prototype.final = function(t) {
  var e, s;
  return (t && (e = this.update(t)), s = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), e) ? e.concat(s) : s
}, i.prototype._pad = function(t, e) {
  if (0 === e) return !1;
  for (; e < t.length;) t[e++] = 0;
  return !0
}, i.prototype._finalEncrypt = function() {
  if (!this._pad(this.buffer, this.bufferOff)) return [];
  var t = Array(this.blockSize);
  return this._update(this.buffer, 0, t, 0), t
}, i.prototype._unpad = function(t) {
  return t
}, i.prototype._finalDecrypt = function() {
  r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
  var t = Array(this.blockSize);
  return this._flushBuffer(t, 0), this._unpad(t)
}