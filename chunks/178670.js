"use strict";
var r = s("145095"),
  i = s("346931"),
  n = s("550511"),
  c = n.assert,
  o = n.parseBytes,
  f = s("392308"),
  u = s("999419");

function a(t) {
  if (c("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof a)) return new a(t);
  t = i[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = r.sha512
}
t.exports = a, a.prototype.sign = function(t, e) {
  t = o(t);
  var s = this.keyFromSecret(e),
    r = this.hashInt(s.messagePrefix(), t),
    i = this.g.mul(r),
    n = this.encodePoint(i),
    c = this.hashInt(n, s.pubBytes(), t).mul(s.priv()),
    f = r.add(c).umod(this.curve.n);
  return this.makeSignature({
    R: i,
    S: f,
    Rencoded: n
  })
}, a.prototype.verify = function(t, e, s) {
  t = o(t), e = this.makeSignature(e);
  var r = this.keyFromPublic(s),
    i = this.hashInt(e.Rencoded(), r.pubBytes(), t),
    n = this.g.mul(e.S());
  return e.R().add(r.pub().mul(i)).eq(n)
}, a.prototype.hashInt = function() {
  for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
  return n.intFromLE(t.digest()).umod(this.curve.n)
}, a.prototype.keyFromPublic = function(t) {
  return f.fromPublic(this, t)
}, a.prototype.keyFromSecret = function(t) {
  return f.fromSecret(this, t)
}, a.prototype.makeSignature = function(t) {
  return t instanceof u ? t : new u(this, t)
}, a.prototype.encodePoint = function(t) {
  var e = t.getY().toArray("le", this.encodingLength);
  return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e
}, a.prototype.decodePoint = function(t) {
  var e = (t = n.parseBytes(t)).length - 1,
    s = t.slice(0, e).concat(-129 & t[e]),
    r = (128 & t[e]) != 0,
    i = n.intFromLE(s);
  return this.curve.pointFromY(i, r)
}, a.prototype.encodeInt = function(t) {
  return t.toArray("le", this.encodingLength)
}, a.prototype.decodeInt = function(t) {
  return n.intFromLE(t)
}, a.prototype.isPoint = function(t) {
  return t instanceof this.pointClass
}