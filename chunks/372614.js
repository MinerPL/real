"use strict";
s("424973"), t.exports = a;
var r = s("129752").codes,
  i = r.ERR_METHOD_NOT_IMPLEMENTED,
  n = r.ERR_MULTIPLE_CALLBACK,
  c = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  o = r.ERR_TRANSFORM_WITH_LENGTH_0,
  f = s("388765");

function u(t, e) {
  var s = this._transformState;
  s.transforming = !1;
  var r = s.writecb;
  if (null === r) return this.emit("error", new n);
  s.writechunk = null, s.writecb = null, null != e && this.push(e), r(t);
  var i = this._readableState;
  i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
}

function a(t) {
  if (!(this instanceof a)) return new a(t);
  f.call(this, t), this._transformState = {
    afterTransform: u.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", d)
}

function d() {
  var t = this;
  "function" != typeof this._flush || this._readableState.destroyed ? p(this, null, null) : this._flush(function(e, s) {
    p(t, e, s)
  })
}

function p(t, e, s) {
  if (e) return t.emit("error", e);
  if (null != s && t.push(s), t._writableState.length) throw new o;
  if (t._transformState.transforming) throw new c;
  return t.push(null)
}
s("599235")(a, f), a.prototype.push = function(t, e) {
  return this._transformState.needTransform = !1, f.prototype.push.call(this, t, e)
}, a.prototype._transform = function(t, e, s) {
  s(new i("_transform()"))
}, a.prototype._write = function(t, e, s) {
  var r = this._transformState;
  if (r.writecb = s, r.writechunk = t, r.writeencoding = e, !r.transforming) {
    var i = this._readableState;
    (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
  }
}, a.prototype._read = function(t) {
  var e = this._transformState;
  null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
}, a.prototype._destroy = function(t, e) {
  f.prototype._destroy.call(this, t, function(t) {
    e(t)
  })
}