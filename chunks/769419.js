            "use strict";
            var i, n, o = r("390493");

            function a(t) {
                var e = this;
                this.next = null, this.entry = null, this.finish = function() {
                    (function(t, e, r) {
                        var i = t.entry;
                        for (t.entry = null; i;) {
                            var n = i.callback;
                            e.pendingcb--, n(r), i = i.next
                        }
                        e.corkedRequestsFree.next = t
                    })(e, t)
                }
            }
            r("854508"), r("424973"), t.exports = x, x.WritableState = k;
            var s = {
                    deprecate: r("56845")
                },
                f = r("709570"),
                h = r("446825").Buffer,
                c = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
                u = r("748557"),
                d = r("364620").getHighWaterMark,
                l = r("129752").codes,
                p = l.ERR_INVALID_ARG_TYPE,
                b = l.ERR_METHOD_NOT_IMPLEMENTED,
                m = l.ERR_MULTIPLE_CALLBACK,
                g = l.ERR_STREAM_CANNOT_PIPE,
                y = l.ERR_STREAM_DESTROYED,
                v = l.ERR_STREAM_NULL_VALUES,
                _ = l.ERR_STREAM_WRITE_AFTER_END,
                w = l.ERR_UNKNOWN_ENCODING,
                M = u.errorOrDestroy;

            function S() {}

            function k(t, e, n) {
                i = i || r("388765"), t = t || {}, "boolean" != typeof n && (n = e instanceof i), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = d(this, t, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var s = !1 === t.decodeStrings;
                this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                    (function(t, e) {
                        var r, i, n, a, s, f, h = t._writableState,
                            c = h.sync,
                            u = h.writecb;
                        if ("function" != typeof u) throw new m;
                        if ((r = h).writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, e) {
                            ;
                            i = t, n = h, a = c, s = e, f = u, --n.pendingcb, a ? (o.nextTick(f, s), o.nextTick(j, i, n), i._writableState.errorEmitted = !0, M(i, s)) : (f(s), i._writableState.errorEmitted = !0, M(i, s), j(i, n))
                        } else {
                            var d = I(h) || t.destroyed;
                            !d && !h.corked && !h.bufferProcessing && h.bufferedRequest && B(t, h), c ? o.nextTick(A, t, h, d, u) : A(t, h, d, u)
                        }
                    })(e, t)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
            }

            function x(t) {
                var e = this instanceof(i = i || r("388765"));
                if (!e && !n.call(x, this)) return new x(t);
                this._writableState = new k(t, this, e), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), f.call(this)
            }
            r("599235")(x, f), k.prototype.getBuffer = function() {
                for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                return e
            }, ! function() {
                try {
                    Object.defineProperty(k.prototype, "buffer", {
                        get: s.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch (t) {}
            }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (n = Function.prototype[Symbol.hasInstance], Object.defineProperty(x, Symbol.hasInstance, {
                value: function(t) {
                    return !!n.call(this, t) || this === x && t && t._writableState instanceof k
                }
            })) : n = function(t) {
                return t instanceof this
            }, x.prototype.pipe = function() {
                M(this, new g)
            };
            x.prototype.write = function(t, e, r) {
                var i, n, a, s, f, u, d, l, b, m, g = this._writableState,
                    y = !1;
                var w = !g.objectMode && (i = t, h.isBuffer(i) || i instanceof c);
                if (w && !h.isBuffer(t)) {
                    ;
                    n = t, t = h.from(n)
                }
                if ("function" == typeof e && (r = e, e = null), w ? e = "buffer" : !e && (e = g.defaultEncoding), "function" != typeof r && (r = S), g.ending) {
                    ;
                    a = this, s = r, M(a, f = new _), o.nextTick(s, f)
                } else {
                    ;
                    if (w || (u = this, d = g, l = t, b = r, null === l ? m = new v : "string" != typeof l && !d.objectMode && (m = new p("chunk", ["string", "Buffer"], l)), !m || (M(u, m), o.nextTick(b, m), 0))) g.pendingcb++, y = function(t, e, r, i, n, o) {
                        if (!r) {
                            var a, s, f, c = (a = e, s = i, f = n, !a.objectMode && !1 !== a.decodeStrings && "string" == typeof s && (s = h.from(s, f)), s);
                            i !== c && (r = !0, n = "buffer", i = c)
                        }
                        var u = e.objectMode ? 1 : i.length;
                        e.length += u;
                        var d = e.length < e.highWaterMark;
                        if (!d && (e.needDrain = !0), e.writing || e.corked) {
                            var l = e.lastBufferedRequest;
                            e.lastBufferedRequest = {
                                chunk: i,
                                encoding: n,
                                isBuf: r,
                                callback: o,
                                next: null
                            }, l ? l.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                        } else E(t, e, !1, u, i, n, o);
                        return d
                    }(this, g, w, t, e, r)
                }
                return y
            }, x.prototype.cork = function() {
                this._writableState.corked++
            }, x.prototype.uncork = function() {
                var t = this._writableState;
                t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && B(this, t))
            }, x.prototype.setDefaultEncoding = function(t) {
                if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new w(t);
                return this._writableState.defaultEncoding = t, this
            }, Object.defineProperty(x.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            });
            Object.defineProperty(x.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            });

            function E(t, e, r, i, n, o, a) {
                e.writelen = i, e.writecb = a, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new y("write")) : r ? t._writev(n, e.onwrite) : t._write(n, o, e.onwrite), e.sync = !1
            }

            function A(t, e, r, i) {
                !r && function(t, e) {
                    0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                }(t, e), e.pendingcb--, i(), j(t, e)
            }

            function B(t, e) {
                e.bufferProcessing = !0;
                var r = e.bufferedRequest;
                if (t._writev && r && r.next) {
                    var i = Array(e.bufferedRequestCount),
                        n = e.corkedRequestsFree;
                    n.entry = r;
                    for (var o = 0, s = !0; r;) i[o] = r, !r.isBuf && (s = !1), r = r.next, o += 1;
                    i.allBuffers = s, E(t, e, !0, e.length, i, "", n.finish), e.pendingcb++, e.lastBufferedRequest = null, n.next ? (e.corkedRequestsFree = n.next, n.next = null) : e.corkedRequestsFree = new a(e), e.bufferedRequestCount = 0
                } else {
                    for (; r;) {
                        var f = r.chunk,
                            h = r.encoding,
                            c = r.callback,
                            u = e.objectMode ? 1 : f.length;
                        if (E(t, e, !1, u, f, h, c), r = r.next, e.bufferedRequestCount--, e.writing) break
                    }
                    null === r && (e.lastBufferedRequest = null)
                }
                e.bufferedRequest = r, e.bufferProcessing = !1
            }

            function I(t) {
                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
            }

            function R(t, e) {
                t._final(function(r) {
                    e.pendingcb--, r && M(t, r), e.prefinished = !0, t.emit("prefinish"), j(t, e)
                })
            }
            x.prototype._write = function(t, e, r) {
                r(new b("_write()"))
            }, x.prototype._writev = null, x.prototype.end = function(t, e, r) {
                var i = this._writableState;
                return "function" == typeof t ? (r = t, t = null, e = null) : "function" == typeof e && (r = e, e = null), null != t && this.write(t, e), i.corked && (i.corked = 1, this.uncork()), !i.ending && function(t, e, r) {
                    e.ending = !0, j(t, e), r && (e.finished ? o.nextTick(r) : t.once("finish", r)), e.ended = !0, t.writable = !1
                }(this, i, r), this
            }, Object.defineProperty(x.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            });

            function j(t, e) {
                var r, i, n = I(e);
                if (n) {
                    ;
                    if (r = t, (i = e).prefinished || i.finalCalled || ("function" != typeof r._final || i.destroyed ? (i.prefinished = !0, r.emit("prefinish")) : (i.pendingcb++, i.finalCalled = !0, o.nextTick(R, r, i))), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy)) {
                        var a = t._readableState;
                        (!a || a.autoDestroy && a.endEmitted) && t.destroy()
                    }
                }
                return n
            }
            Object.defineProperty(x.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._writableState && this._writableState.destroyed
                },
                set: function(t) {
                    this._writableState && (this._writableState.destroyed = t)
                }
            }), x.prototype.destroy = u.destroy, x.prototype._undestroy = u.undestroy, x.prototype._destroy = function(t, e) {
                e(t)
            }