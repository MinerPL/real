s("424973"), s("70102");
var r = s("391149"),
  i = s("912065").Buffer,
  n = s("725214"),
  c = s("421630"),
  o = s("441270"),
  f = s("619127"),
  u = s("786561");

function a(t, e, s) {
  o.call(this), this._cache = new d, this._last = void 0, this._cipher = new f.AES(e), this._prev = i.from(s), this._mode = t, this._autopadding = !0
}

function d() {
  this.cache = i.allocUnsafe(0)
}
s("599235")(a, o), a.prototype._update = function(t) {
  this._cache.add(t);
  for (var e, s, r = []; e = this._cache.get(this._autopadding);) s = this._mode.decrypt(this, e), r.push(s);
  return i.concat(r)
}, a.prototype._final = function() {
  var t = this._cache.flush();
  if (this._autopadding) return function(t) {
    var e = t[15];
    if (e < 1 || e > 16) throw Error("unable to decrypt data");
    for (var s = -1; ++s < e;)
      if (t[s + (16 - e)] !== e) throw Error("unable to decrypt data");
    if (16 !== e) return t.slice(0, 16 - e)
  }(this._mode.decrypt(this, t));
  if (t) throw Error("data not multiple of block length")
}, a.prototype.setAutoPadding = function(t) {
  return this._autopadding = !!t, this
}, d.prototype.add = function(t) {
  this.cache = i.concat([this.cache, t])
}, d.prototype.get = function(t) {
  var e;
  if (t) {
    if (this.cache.length > 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e
  } else if (this.cache.length >= 16) return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;
  return null
}, d.prototype.flush = function() {
  if (this.cache.length) return this.cache
};

function p(t, e, s) {
  var o = n[t.toLowerCase()];
  if (!o) throw TypeError("invalid suite type");
  if ("string" == typeof s && (s = i.from(s)), "GCM" !== o.mode && s.length !== o.iv) throw TypeError("invalid iv length " + s.length);
  if ("string" == typeof e && (e = i.from(e)), e.length !== o.key / 8) throw TypeError("invalid key length " + e.length);
  return "stream" === o.type ? new c(o.module, e, s, !0) : "auth" === o.type ? new r(o.module, e, s, !0) : new a(o.module, e, s)
}
e.createDecipher = function(t, e) {
  var s = n[t.toLowerCase()];
  if (!s) throw TypeError("invalid suite type");
  var r = u(e, !1, s.key, s.iv);
  return p(t, r.key, r.iv)
}, e.createDecipheriv = p