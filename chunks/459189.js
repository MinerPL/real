"use strict";
var r = s("555671"),
  i = s("201442");

function n() {
  if (!(this instanceof n)) return new n;
  i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
}
r.inherits(n, i), t.exports = n, n.blockSize = 512, n.outSize = 224, n.hmacStrength = 192, n.padLength = 64, n.prototype._digest = function(t) {
  return "hex" === t ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big")
}