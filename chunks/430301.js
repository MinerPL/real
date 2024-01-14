s("424973"), s("70102");
var r = s("725214"),
  i = s("391149"),
  n = s("912065").Buffer,
  c = s("421630"),
  o = s("441270"),
  f = s("619127"),
  u = s("786561");

function a(t, e, s) {
  o.call(this), this._cache = new p, this._cipher = new f.AES(e), this._prev = n.from(s), this._mode = t, this._autopadding = !0
}
s("599235")(a, o), a.prototype._update = function(t) {
  this._cache.add(t);
  for (var e, s, r = []; e = this._cache.get();) s = this._mode.encrypt(this, e), r.push(s);
  return n.concat(r)
};
var d = n.alloc(16, 16);

function p() {
  this.cache = n.allocUnsafe(0)
}

function b(t, e, s) {
  var o = r[t.toLowerCase()];
  if (!o) throw TypeError("invalid suite type");
  if ("string" == typeof e && (e = n.from(e)), e.length !== o.key / 8) throw TypeError("invalid key length " + e.length);
  if ("string" == typeof s && (s = n.from(s)), "GCM" !== o.mode && s.length !== o.iv) throw TypeError("invalid iv length " + s.length);
  return "stream" === o.type ? new c(o.module, e, s) : "auth" === o.type ? new i(o.module, e, s) : new a(o.module, e, s)
}
a.prototype._final = function() {
  var t = this._cache.flush();
  if (this._autopadding) return t = this._mode.encrypt(this, t), this._cipher.scrub(), t;
  if (!t.equals(d)) throw this._cipher.scrub(), Error("data not multiple of block length")
}, a.prototype.setAutoPadding = function(t) {
  return this._autopadding = !!t, this
}, p.prototype.add = function(t) {
  this.cache = n.concat([this.cache, t])
}, p.prototype.get = function() {
  if (this.cache.length > 15) {
    var t = this.cache.slice(0, 16);
    return this.cache = this.cache.slice(16), t
  }
  return null
}, p.prototype.flush = function() {
  for (var t = 16 - this.cache.length, e = n.allocUnsafe(t), s = -1; ++s < t;) e.writeUInt8(t, s);
  return n.concat([this.cache, e])
};
e.createCipheriv = b, e.createCipher = function(t, e) {
  var s = r[t.toLowerCase()];
  if (!s) throw TypeError("invalid suite type");
  var i = u(e, !1, s.key, s.iv);
  return b(t, i.key, i.iv)
}