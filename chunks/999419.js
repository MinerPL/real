"use strict";
var r = s("839309"),
  i = s("550511"),
  n = i.assert,
  c = i.cachedProperty,
  o = i.parseBytes;

function f(t, e) {
  this.eddsa = t, "object" != typeof e && (e = o(e)), Array.isArray(e) && (e = {
    R: e.slice(0, t.encodingLength),
    S: e.slice(t.encodingLength)
  }), n(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof r && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
}
c(f, "S", function() {
  return this.eddsa.decodeInt(this.Sencoded())
}), c(f, "R", function() {
  return this.eddsa.decodePoint(this.Rencoded())
}), c(f, "Rencoded", function() {
  return this.eddsa.encodePoint(this.R())
}), c(f, "Sencoded", function() {
  return this.eddsa.encodeInt(this.S())
}), f.prototype.toBytes = function() {
  return this.Rencoded().concat(this.Sencoded())
}, f.prototype.toHex = function() {
  return i.encode(this.toBytes(), "hex").toUpperCase()
}, t.exports = f