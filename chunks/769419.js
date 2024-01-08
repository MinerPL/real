            "use strict";
            var i, n, a = r("390493");

            function o(t) {
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
            r("854508"), r("424973"), t.exports = E, E.WritableState = k;
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
                v = l.ERR_STREAM_DESTROYED,
                y = l.ERR_STREAM_NULL_VALUES,
                _ = l.ERR_STREAM_WRITE_AFTER_END,
                w = l.ERR_UNKNOWN_ENCODING,
                M = u.errorOrDestroy;

            function S() {}

            function k(t, e, n) {
                i = i || r("388765"), t = t || {}, "boolean" != typeof n && (n = e instanceof i), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = d(this, t, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var s = !1 === t.decodeStrings;
                this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                    (function(t, e) {
                        var r, i, n, o, s, f, h = t._writableState,
                            c = h.sync,
                            u = h.writecb;
                        if ("function" != typeof u) throw new m;
                        if ((r = h).writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, e) {
                            ;
                            i = t, n = h, o = c, s = e, f = u, --n.pendingcb, o ? (a.nextTick(f, s), a.nextTick(C, i, n), i._writableState.errorEmitted = !0, M(i, s)) : (f(s), i._writableState.errorEmitted = !0, M(i, s), C(i, n))
                        } else {
                            var d = R(h) || t.destroyed;
                            !d && !h.corked && !h.bufferProcessing && h.bufferedRequest && B(t, h), c ? a.nextTick(x, t, h, d, u) : x(t, h, d, u)
                        }
                    })(e, t)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
            }

            function E(t) {
                var e = this instanceof(i = i || r("388765"));
                if (!e && !n.call(E, this)) return new E(t);
                this._writableState = new k(t, this, e), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), f.call(this)
            }
            r("599235")(E, f), k.prototype.getBuffer = function() {
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
            }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (n = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
                value: function(t) {
                    return !!n.call(this, t) || this === E && t && t._writableState instanceof k
                }
            })) : n = function(t) {
                return t instanceof this
            }, E.prototype.pipe = function() {
                M(this, new g)
            };
            E.prototype.write = function(t, e, r) {
                var i, n, o, s, f, u, d, l, b, m, g = this._writableState,
                    v = !1;
                var w = !g.objectMode && (i = t, h.isBuffer(i) || i instanceof c);
                if (w && !h.isBuffer(t)) {
                    ;
                    n = t, t = h.from(n)
                }
                if ("function" == typeof e && (r = e, e = null), w ? e = "buffer" : !e && (e = g.defaultEncoding), "function" != typeof r && (r = S), g.ending) {
                    ;
                    o = this, s = r, M(o, f = new _), a.nextTick(s, f)
                } else {
                    ;
                    if (w || (u = this, d = g, l = t, b = r, null === l ? m = new y : "string" != typeof l && !d.objectMode && (m = new p("chunk", ["string", "Buffer"], l)), !m || (M(u, m), a.nextTick(b, m), 0))) g.pendingcb++, v = function(t, e, r, i, n, a) {
                        if (!r) {
                            var o, s, f, c = (o = e, s = i, f = n, !o.objectMode && !1 !== o.decodeStrings && "string" == typeof s && (s = h.from(s, f)), s);
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
                                callback: a,
                                next: null
                            }, l ? l.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                        } else A(t, e, !1, u, i, n, a);
                        return d
                    }(this, g, w, t, e, r)
                }
                return v
            }, E.prototype.cork = function() {
                this._writableState.corked++
            }, E.prototype.uncork = function() {
                var t = this._writableState;
                t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && B(this, t))
            }, E.prototype.setDefaultEncoding = function(t) {
                if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new w(t);
                return this._writableState.defaultEncoding = t, this
            }, Object.defineProperty(E.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            });
            Object.defineProperty(E.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            });

            function A(t, e, r, i, n, a, o) {
                e.writelen = i, e.writecb = o, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new v("write")) : r ? t._writev(n, e.onwrite) : t._write(n, a, e.onwrite), e.sync = !1
            }

            function x(t, e, r, i) {
                !r && function(t, e) {
                    0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                }(t, e), e.pendingcb--, i(), C(t, e)
            }

            function B(t, e) {
                e.bufferProcessing = !0;
                var r = e.bufferedRequest;
                if (t._writev && r && r.next) {
                    var i = Array(e.bufferedRequestCount),
                        n = e.corkedRequestsFree;
                    n.entry = r;
                    for (var a = 0, s = !0; r;) i[a] = r, !r.isBuf && (s = !1), r = r.next, a += 1;
                    i.allBuffers = s, A(t, e, !0, e.length, i, "", n.finish), e.pendingcb++, e.lastBufferedRequest = null, n.next ? (e.corkedRequestsFree = n.next, n.next = null) : e.corkedRequestsFree = new o(e), e.bufferedRequestCount = 0
                } else {
                    for (; r;) {
                        var f = r.chunk,
                            h = r.encoding,
                            c = r.callback,
                            u = e.objectMode ? 1 : f.length;
                        if (A(t, e, !1, u, f, h, c), r = r.next, e.bufferedRequestCount--, e.writing) break
                    }
                    null === r && (e.lastBufferedRequest = null)
                }
                e.bufferedRequest = r, e.bufferProcessing = !1
            }

            function R(t) {
                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
            }

            function I(t, e) {
                t._final(function(r) {
                    e.pendingcb--, r && M(t, r), e.prefinished = !0, t.emit("prefinish"), C(t, e)
                })
            }
            E.prototype._write = function(t, e, r) {
                r(new b("_write()"))
            }, E.prototype._writev = null, E.prototype.end = function(t, e, r) {
                var i = this._writableState;
                return "function" == typeof t ? (r = t, t = null, e = null) : "function" == typeof e && (r = e, e = null), null != t && this.write(t, e), i.corked && (i.corked = 1, this.uncork()), !i.ending && function(t, e, r) {
                    e.ending = !0, C(t, e), r && (e.finished ? a.nextTick(r) : t.once("finish", r)), e.ended = !0, t.writable = !1
                }(this, i, r), this
            }, Object.defineProperty(E.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            });

            function C(t, e) {
                var r, i, n = R(e);
                if (n) {
                    ;
                    if (r = t, (i = e).prefinished || i.finalCalled || ("function" != typeof r._final || i.destroyed ? (i.prefinished = !0, r.emit("prefinish")) : (i.pendingcb++, i.finalCalled = !0, a.nextTick(I, r, i))), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy)) {
                        var o = t._readableState;
                        (!o || o.autoDestroy && o.endEmitted) && t.destroy()
                    }
                }
                return n
            }
            Object.defineProperty(E.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._writableState && this._writableState.destroyed
                },
                set: function(t) {
                    this._writableState && (this._writableState.destroyed = t)
                }
            }), E.prototype.destroy = u.destroy, E.prototype._undestroy = u.undestroy, E.prototype._destroy = function(t, e) {
                e(t)
            }