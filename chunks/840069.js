"use strict";
s("70102");
var r = s("145095"),
  i = s("789294"),
  n = s("463483");

function c(t) {
  if (!(this instanceof c)) return new c(t);
  this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
    s = i.toArray(t.nonce, t.nonceEnc || "hex"),
    r = i.toArray(t.pers, t.persEnc || "hex");
  n(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, s, r)
}
t.exports = c, c.prototype._init = function(t, e, s) {
  var r = t.concat(e).concat(s);
  this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
  this._update(r), this._reseed = 1, this.reseedInterval = 281474976710656
}, c.prototype._hmac = function() {
  return new r.hmac(this.hash, this.K)
}, c.prototype._update = function(t) {
  var e = this._hmac().update(this.V).update([0]);
  t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
}, c.prototype.reseed = function(t, e, s, r) {
  "string" != typeof e && (r = s, s = e, e = null), t = i.toArray(t, e), s = i.toArray(s, r), n(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(s || [])), this._reseed = 1
}, c.prototype.generate = function(t, e, s, r) {
  if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
  "string" != typeof e && (r = s, s = e, e = null), s && (s = i.toArray(s, r || "hex"), this._update(s));
  for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
  var c = n.slice(0, t);
  return this._update(s), this._reseed++, i.encode(c, e)
}