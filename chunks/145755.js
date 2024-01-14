"use strict";
var r = s("599235"),
  i = s("790986"),
  n = s("441270"),
  c = s("912065").Buffer,
  o = s("785060"),
  f = s("291954"),
  u = s("622107"),
  a = c.alloc(128);

function d(t, e) {
  n.call(this, "digest"), "string" == typeof e && (e = c.from(e));
  var s = "sha512" === t || "sha384" === t ? 128 : 64;
  this._alg = t, this._key = e, e.length > s ? e = ("rmd160" === t ? new f : u(t)).update(e).digest() : e.length < s && (e = c.concat([e, a], s));
  for (var r = this._ipad = c.allocUnsafe(s), i = this._opad = c.allocUnsafe(s), o = 0; o < s; o++) r[o] = 54 ^ e[o], i[o] = 92 ^ e[o];
  this._hash = "rmd160" === t ? new f : u(t), this._hash.update(r)
}
r(d, n), d.prototype._update = function(t) {
  this._hash.update(t)
}, d.prototype._final = function() {
  var t = this._hash.digest();
  return ("rmd160" === this._alg ? new f : u(this._alg)).update(this._opad).update(t).digest()
}, t.exports = function(t, e) {
  return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new d("rmd160", e) : "md5" === t ? new i(o, e) : new d(t, e)
}