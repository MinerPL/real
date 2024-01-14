var r = s("912065").Buffer,
  i = r.alloc(16, 0);

function n(t) {
  var e = r.allocUnsafe(16);
  return e.writeUInt32BE(t[0] >>> 0, 0), e.writeUInt32BE(t[1] >>> 0, 4), e.writeUInt32BE(t[2] >>> 0, 8), e.writeUInt32BE(t[3] >>> 0, 12), e
}

function c(t) {
  this.h = t, this.state = r.alloc(16, 0), this.cache = r.allocUnsafe(0)
}
c.prototype.ghash = function(t) {
  for (var e = -1; ++e < t.length;) this.state[e] ^= t[e];
  this._multiply()
}, c.prototype._multiply = function() {
  for (var t, e, s, r = [(t = this.h).readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)], i = [0, 0, 0, 0], c = -1; ++c < 128;) {
    for ((this.state[~~(c / 8)] & 1 << 7 - c % 8) != 0 && (i[0] ^= r[0], i[1] ^= r[1], i[2] ^= r[2], i[3] ^= r[3]), s = (1 & r[3]) != 0, e = 3; e > 0; e--) r[e] = r[e] >>> 1 | (1 & r[e - 1]) << 31;
    r[0] = r[0] >>> 1, s && (r[0] = -520093696 ^ r[0])
  }
  this.state = n(i)
}, c.prototype.update = function(t) {
  var e;
  for (this.cache = r.concat([this.cache, t]); this.cache.length >= 16;) e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(e)
}, c.prototype.final = function(t, e) {
  return this.cache.length && this.ghash(r.concat([this.cache, i], 16)), this.ghash(n([0, t, 0, e])), this.state
}, t.exports = c