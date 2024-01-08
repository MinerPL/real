            "use strict";
            r("424973"), t.exports = c;
            var i = r("129752").codes,
                n = i.ERR_METHOD_NOT_IMPLEMENTED,
                a = i.ERR_MULTIPLE_CALLBACK,
                o = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                s = i.ERR_TRANSFORM_WITH_LENGTH_0,
                f = r("388765");

            function h(t, e) {
                var r = this._transformState;
                r.transforming = !1;
                var i = r.writecb;
                if (null === i) return this.emit("error", new a);
                r.writechunk = null, r.writecb = null, null != e && this.push(e), i(t);
                var n = this._readableState;
                n.reading = !1, (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
            }

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                f.call(this, t), this._transformState = {
                    afterTransform: h.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", u)
            }

            function u() {
                var t = this;
                "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush(function(e, r) {
                    d(t, e, r)
                })
            }

            function d(t, e, r) {
                if (e) return t.emit("error", e);
                if (null != r && t.push(r), t._writableState.length) throw new s;
                if (t._transformState.transforming) throw new o;
                return t.push(null)
            }
            r("599235")(c, f), c.prototype.push = function(t, e) {
                return this._transformState.needTransform = !1, f.prototype.push.call(this, t, e)
            }, c.prototype._transform = function(t, e, r) {
                r(new n("_transform()"))
            }, c.prototype._write = function(t, e, r) {
                var i = this._transformState;
                if (i.writecb = r, i.writechunk = t, i.writeencoding = e, !i.transforming) {
                    var n = this._readableState;
                    (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
                }
            }, c.prototype._read = function(t) {
                var e = this._transformState;
                null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            }, c.prototype._destroy = function(t, e) {
                f.prototype._destroy.call(this, t, function(t) {
                    e(t)
                })
            }