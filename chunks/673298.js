"use strict";
var r = s("555671"),
  i = s("256385"),
  n = s("408109"),
  c = r.rotl32,
  o = r.sum32,
  f = r.sum32_5,
  u = n.ft_1,
  a = i.BlockHash,
  d = [1518500249, 1859775393, 2400959708, 3395469782];

function p() {
  if (!(this instanceof p)) return new p;
  a.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
}
r.inherits(p, a), t.exports = p, p.blockSize = 512, p.outSize = 160, p.hmacStrength = 80, p.padLength = 64, p.prototype._update = function(t, e) {
  for (var s = this.W, r = 0; r < 16; r++) s[r] = t[e + r];
  for (; r < s.length; r++) s[r] = c(s[r - 3] ^ s[r - 8] ^ s[r - 14] ^ s[r - 16], 1);
  var i = this.h[0],
    n = this.h[1],
    a = this.h[2],
    p = this.h[3],
    b = this.h[4];
  for (r = 0; r < s.length; r++) {
    var h = ~~(r / 20),
      l = f(c(i, 5), u(h, n, a, p), b, s[r], d[h]);
    b = p, p = a, a = c(n, 30), n = i, i = l
  }
  this.h[0] = o(this.h[0], i), this.h[1] = o(this.h[1], n), this.h[2] = o(this.h[2], a), this.h[3] = o(this.h[3], p), this.h[4] = o(this.h[4], b)
}, p.prototype._digest = function(t) {
  return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
}