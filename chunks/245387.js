            "use strict";
            var i, n, o, a, s, f = r("390493");
            r("854508"), r("843762"), r("424973"), t.exports = x, x.ReadableState = k, r("44170").EventEmitter;
            var h = function(t, e) {
                    return t.listeners(e).length
                },
                c = r("709570"),
                u = r("446825").Buffer,
                d = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
                l = r("503745");
            n = l && l.debuglog ? l.debuglog("stream") : function() {};
            var p = r("877388"),
                b = r("748557"),
                m = r("364620").getHighWaterMark,
                g = r("129752").codes,
                y = g.ERR_INVALID_ARG_TYPE,
                v = g.ERR_STREAM_PUSH_AFTER_EOF,
                _ = g.ERR_METHOD_NOT_IMPLEMENTED,
                w = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            r("599235")(x, c);
            var M = b.errorOrDestroy,
                S = ["error", "close", "destroy", "pause", "resume"];

            function k(t, e, n) {
                i = i || r("388765"), t = t || {}, "boolean" != typeof n && (n = e instanceof i), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = m(this, t, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (!o && (o = r("394822").StringDecoder), this.decoder = new o(t.encoding), this.encoding = t.encoding)
            }

            function x(t) {
                if (i = i || r("388765"), !(this instanceof x)) return new x(t);
                var e = this instanceof i;
                this._readableState = new k(t, this, e), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), c.call(this)
            }

            function E(t, e, r, i, o) {
                n("readableAddChunk", e);
                var a, s, f = t._readableState;
                if (null === e) f.reading = !1,
                    function(t, e) {
                        if (n("onEofChunk"), !e.ended) {
                            if (e.decoder) {
                                var r = e.decoder.end();
                                r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length)
                            }
                            e.ended = !0, e.sync ? I(t) : (e.needReadable = !1, !e.emittedReadable && (e.emittedReadable = !0, R(t)))
                        }
                    }(t, f);
                else if (!o && (s = function(t, e) {
                        var r, i;
                        if (i = e, !u.isBuffer(i) && !(i instanceof d) && "string" != typeof e && void 0 !== e && !t.objectMode) r = new y("chunk", ["string", "Buffer", "Uint8Array"], e);
                        return r
                    }(f, e)), s) M(t, s);
                else if (f.objectMode || e && e.length > 0) {
                    if ("string" != typeof e && !f.objectMode && Object.getPrototypeOf(e) !== u.prototype) {
                        ;
                        a = e, e = u.from(a)
                    }
                    if (i) f.endEmitted ? M(t, new w) : A(t, f, e, !0);
                    else if (f.ended) M(t, new v);
                    else {
                        if (f.destroyed) return !1;
                        f.reading = !1, f.decoder && !r ? (e = f.decoder.write(e), f.objectMode || 0 !== e.length ? A(t, f, e, !1) : j(t, f)) : A(t, f, e, !1)
                    }
                } else !i && (f.reading = !1, j(t, f));
                return !f.ended && (f.length < f.highWaterMark || 0 === f.length)
            }

            function A(t, e, r, i) {
                e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, i ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && I(t)), j(t, e)
            }
            Object.defineProperty(x.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(t) {
                    this._readableState && (this._readableState.destroyed = t)
                }
            }), x.prototype.destroy = b.destroy, x.prototype._undestroy = b.undestroy, x.prototype._destroy = function(t, e) {
                e(t)
            }, x.prototype.push = function(t, e) {
                var r, i = this._readableState;
                return i.objectMode ? r = !0 : "string" == typeof t && ((e = e || i.defaultEncoding) !== i.encoding && (t = u.from(t, e), e = ""), r = !0), E(this, t, e, !1, r)
            }, x.prototype.unshift = function(t) {
                return E(this, t, null, !0, !1)
            };
            x.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, x.prototype.setEncoding = function(t) {
                !o && (o = r("394822").StringDecoder);
                var e = new o(t);
                this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var i = this._readableState.buffer.head, n = ""; null !== i;) n += e.write(i.data), i = i.next;
                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
            };

            function B(t, e) {
                if (t <= 0 || 0 === e.length && e.ended) return 0;
                if (e.objectMode) return 1;
                if (t != t) return e.flowing && e.length ? e.buffer.head.data.length : e.length;
                if (t > e.highWaterMark) {
                    var r;
                    e.highWaterMark = ((r = t) >= 1073741824 ? r = 1073741824 : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r)
                }
                return t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0)
            }
            x.prototype.read = function(t) {
                n("read", t), t = parseInt(t, 10);
                var e, r = this._readableState,
                    i = t;
                if (0 !== t && (r.emittedReadable = !1), 0 === t && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) return n("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? L(this) : I(this), null;
                if (0 === (t = B(t, r)) && r.ended) return 0 === r.length && L(this), null;
                var o = r.needReadable;
                return n("need readable", o), (0 === r.length || r.length - t < r.highWaterMark) && n("length less than watermark", o = !0), r.ended || r.reading ? n("reading or ended", o = !1) : o && (n("do read"), r.reading = !0, r.sync = !0, 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, !r.reading && (t = B(i, r))), null === (e = t > 0 ? z(t, r) : null) ? (r.needReadable = r.length <= r.highWaterMark, t = 0) : (r.length -= t, r.awaitDrain = 0), 0 === r.length && (!r.ended && (r.needReadable = !0), i !== t && r.ended && L(this)), null !== e && this.emit("data", e), e
            };

            function I(t) {
                var e = t._readableState;
                n("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, !e.emittedReadable && (n("emitReadable", e.flowing), e.emittedReadable = !0, f.nextTick(R, t))
            }

            function R(t) {
                var e = t._readableState;
                n("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, D(t)
            }

            function j(t, e) {
                !e.readingMore && (e.readingMore = !0, f.nextTick(C, t, e))
            }

            function C(t, e) {
                for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
                    var r = e.length;
                    if (n("maybeReadMore read 0"), t.read(0), r === e.length) break
                }
                e.readingMore = !1
            }
            x.prototype._read = function(t) {
                M(this, new _("_read()"))
            }, x.prototype.pipe = function(t, e) {
                var r = this,
                    i = this._readableState;
                switch (i.pipesCount) {
                    case 0:
                        i.pipes = t;
                        break;
                    case 1:
                        i.pipes = [i.pipes, t];
                        break;
                    default:
                        i.pipes.push(t)
                }
                i.pipesCount += 1, n("pipe count=%d opts=%j", i.pipesCount, e);
                var o = e && !1 === e.end || t === f.stdout || t === f.stderr ? m : s;

                function a(e, o) {
                    n("onunpipe"), e === r && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, function() {
                        n("cleanup"), t.removeListener("close", p), t.removeListener("finish", b), t.removeListener("drain", c), t.removeListener("error", l), t.removeListener("unpipe", a), r.removeListener("end", s), r.removeListener("end", m), r.removeListener("data", d), u = !0, i.awaitDrain && (!t._writableState || t._writableState.needDrain) && c()
                    }())
                }

                function s() {
                    n("onend"), t.end()
                }
                i.endEmitted ? f.nextTick(o) : r.once("end", o), t.on("unpipe", a);
                var c = function(t) {
                    return function() {
                        var e = t._readableState;
                        n("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && h(t, "data") && (e.flowing = !0, D(t))
                    }
                }(r);
                t.on("drain", c);
                var u = !1;

                function d(e) {
                    n("ondata");
                    var o = t.write(e);
                    n("dest.write", o), !1 === o && ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== q(i.pipes, t)) && !u && (n("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
                }

                function l(e) {
                    n("onerror", e), m(), t.removeListener("error", l), 0 === h(t, "error") && M(t, e)
                }

                function p() {
                    t.removeListener("finish", b), m()
                }

                function b() {
                    n("onfinish"), t.removeListener("close", p), m()
                }

                function m() {
                    n("unpipe"), r.unpipe(t)
                }
                return r.on("data", d), ! function(t, e, r) {
                    if ("function" == typeof t.prependListener) return t.prependListener(e, r);
                    t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
                }(t, "error", l), t.once("close", p), t.once("finish", b), t.emit("pipe", r), !i.flowing && (n("pipe resume"), r.resume()), t
            };

            function O(t) {
                var e = t._readableState;
                e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
            }

            function P(t) {
                n("readable nexttick read 0"), t.read(0)
            }
            x.prototype.unpipe = function(t) {
                var e = this._readableState,
                    r = {
                        hasUnpiped: !1
                    };
                if (0 === e.pipesCount) return this;
                if (1 === e.pipesCount) return t && t !== e.pipes ? this : (!t && (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r), this);
                if (!t) {
                    var i = e.pipes,
                        n = e.pipesCount;
                    e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                    for (var o = 0; o < n; o++) i[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var a = q(e.pipes, t);
                return -1 === a ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this)
            }, x.prototype.on = function(t, e) {
                var r = c.prototype.on.call(this, t, e),
                    i = this._readableState;
                return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === t && !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, n("on readable", i.length, i.reading), i.length ? I(this) : !i.reading && f.nextTick(P, this)), r
            }, x.prototype.addListener = x.prototype.on, x.prototype.removeListener = function(t, e) {
                var r = c.prototype.removeListener.call(this, t, e);
                return "readable" === t && f.nextTick(O, this), r
            }, x.prototype.removeAllListeners = function(t) {
                var e = c.prototype.removeAllListeners.apply(this, arguments);
                return ("readable" === t || void 0 === t) && f.nextTick(O, this), e
            }, x.prototype.resume = function() {
                var t = this._readableState;
                return !t.flowing && (n("resume"), t.flowing = !t.readableListening, function(t, e) {
                    !e.resumeScheduled && (e.resumeScheduled = !0, f.nextTick(T, t, e))
                }(this, t)), t.paused = !1, this
            };

            function T(t, e) {
                n("resume", e.reading), !e.reading && t.read(0), e.resumeScheduled = !1, t.emit("resume"), D(t), e.flowing && !e.reading && t.read(0)
            }

            function D(t) {
                var e = t._readableState;
                for (n("flow", e.flowing); e.flowing && null !== t.read(););
            }

            function z(t, e) {
                var r;
                return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r)
            }

            function L(t) {
                var e = t._readableState;
                n("endReadable", e.endEmitted), !e.endEmitted && (e.ended = !0, f.nextTick(N, e, t))
            }

            function N(t, e) {
                if (n("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
                    var r = e._writableState;
                    (!r || r.autoDestroy && r.finished) && e.destroy()
                }
            }

            function q(t, e) {
                for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return r;
                return -1
            }
            x.prototype.pause = function() {
                return n("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (n("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, x.prototype.wrap = function(t) {
                var e = this,
                    r = this._readableState,
                    i = !1;
                for (var o in t.on("end", function() {
                        if (n("wrapped end"), r.decoder && !r.ended) {
                            var t = r.decoder.end();
                            t && t.length && e.push(t)
                        }
                        e.push(null)
                    }), t.on("data", function(o) {
                        if (n("wrapped data"), r.decoder && (o = r.decoder.write(o)), r.objectMode && null == o) return;
                        if (!!r.objectMode || !!o && !!o.length) !e.push(o) && (i = !0, t.pause())
                    }), t) void 0 === this[o] && "function" == typeof t[o] && (this[o] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(o));
                for (var a = 0; a < S.length; a++) t.on(S[a], this.emit.bind(this, S[a]));
                return this._read = function(e) {
                    n("wrapped _read", e), i && (i = !1, t.resume())
                }, this
            }, "function" == typeof Symbol && (x.prototype[Symbol.asyncIterator] = function() {
                return void 0 === a && (a = r("471974")), a(this)
            }), Object.defineProperty(x.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(x.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(x.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(t) {
                    this._readableState && (this._readableState.flowing = t)
                }
            }), x._fromList = z, Object.defineProperty(x.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (x.from = function(t, e) {
                return void 0 === s && (s = r("250701")), s(x, t, e)
            })