"use strict";
var r = s("463483"),
  i = s("599235"),
  n = {};

function c(t) {
  r.equal(t.length, 8, "Invalid IV length"), this.iv = Array(8);
  for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
}
e.instantiate = function(t) {
  function e(e) {
    t.call(this, e), this._cbcInit()
  }
  i(e, t);
  for (var s = Object.keys(n), r = 0; r < s.length; r++) {
    var c = s[r];
    e.prototype[c] = n[c]
  }
  return e.create = function(t) {
    return new e(t)
  }, e
}, n._cbcInit = function() {
  var t = new c(this.options.iv);
  this._cbcState = t
}, n._update = function(t, e, s, r) {
  var i = this._cbcState,
    n = this.constructor.super_.prototype,
    c = i.iv;
  if ("encrypt" === this.type) {
    for (var o = 0; o < this.blockSize; o++) c[o] ^= t[e + o];
    n._update.call(this, c, 0, s, r);
    for (var o = 0; o < this.blockSize; o++) c[o] = s[r + o]
  } else {
    n._update.call(this, t, e, s, r);
    for (var o = 0; o < this.blockSize; o++) s[r + o] ^= c[o];
    for (var o = 0; o < this.blockSize; o++) c[o] = t[e + o]
  }
}