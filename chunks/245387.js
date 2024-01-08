            "use strict";
            var i, n, a, o, s, f = r("390493");
            r("854508"), r("843762"), r("424973"), t.exports = E, E.ReadableState = k, r("44170").EventEmitter;
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
                v = g.ERR_INVALID_ARG_TYPE,
                y = g.ERR_STREAM_PUSH_AFTER_EOF,
                _ = g.ERR_METHOD_NOT_IMPLEMENTED,
                w = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            r("599235")(E, c);
            var M = b.errorOrDestroy,
                S = ["error", "close", "destroy", "pause", "resume"];

            function k(t, e, n) {
                i = i || r("388765"), t = t || {}, "boolean" != typeof n && (n = e instanceof i), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = m(this, t, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (!a && (a = r("394822").StringDecoder), this.decoder = new a(t.encoding), this.encoding = t.encoding)
            }

            function E(t) {
                if (i = i || r("388765"), !(this instanceof E)) return new E(t);
                var e = this instanceof i;
                this._readableState = new k(t, this, e), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), c.call(this)
            }

            function A(t, e, r, i, a) {
                n("readableAddChunk", e);
                var o, s, f = t._readableState;
                if (null === e) f.reading = !1,
                    function(t, e) {
                        if (n("onEofChunk"), !e.ended) {
                            if (e.decoder) {
                                var r = e.decoder.end();
                                r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length)
                            }
                            e.ended = !0, e.sync ? R(t) : (e.needReadable = !1, !e.emittedReadable && (e.emittedReadable = !0, I(t)))
                        }
                    }(t, f);
                else if (!a && (s = function(t, e) {
                        var r, i;
                        if (i = e, !u.isBuffer(i) && !(i instanceof d) && "string" != typeof e && void 0 !== e && !t.objectMode) r = new v("chunk", ["string", "Buffer", "Uint8Array"], e);
                        return r
                    }(f, e)), s) M(t, s);
                else if (f.objectMode || e && e.length > 0) {
                    if ("string" != typeof e && !f.objectMode && Object.getPrototypeOf(e) !== u.prototype) {
                        ;
                        o = e, e = u.from(o)
                    }
                    if (i) f.endEmitted ? M(t, new w) : x(t, f, e, !0);
                    else if (f.ended) M(t, new y);
                    else {
                        if (f.destroyed) return !1;
                        f.reading = !1, f.decoder && !r ? (e = f.decoder.write(e), f.objectMode || 0 !== e.length ? x(t, f, e, !1) : C(t, f)) : x(t, f, e, !1)
                    }
                } else !i && (f.reading = !1, C(t, f));
                return !f.ended && (f.length < f.highWaterMark || 0 === f.length)
            }

            function x(t, e, r, i) {
                e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, i ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && R(t)), C(t, e)
            }
            Object.defineProperty(E.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(t) {
                    this._readableState && (this._readableState.destroyed = t)
                }
            }), E.prototype.destroy = b.destroy, E.prototype._undestroy = b.undestroy, E.prototype._destroy = function(t, e) {
                e(t)
            }, E.prototype.push = function(t, e) {
                var r, i = this._readableState;
                return i.objectMode ? r = !0 : "string" == typeof t && ((e = e || i.defaultEncoding) !== i.encoding && (t = u.from(t, e), e = ""), r = !0), A(this, t, e, !1, r)
            }, E.prototype.unshift = function(t) {
                return A(this, t, null, !0, !1)
            };
            E.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, E.prototype.setEncoding = function(t) {
                !a && (a = r("394822").StringDecoder);
                var e = new a(t);
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
            E.prototype.read = function(t) {
                n("read", t), t = parseInt(t, 10);
                var e, r = this._readableState,
                    i = t;
                if (0 !== t && (r.emittedReadable = !1), 0 === t && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) return n("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? D(this) : R(this), null;
                if (0 === (t = B(t, r)) && r.ended) return 0 === r.length && D(this), null;
                var a = r.needReadable;
                return n("need readable", a), (0 === r.length || r.length - t < r.highWaterMark) && n("length less than watermark", a = !0), r.ended || r.reading ? n("reading or ended", a = !1) : a && (n("do read"), r.reading = !0, r.sync = !0, 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, !r.reading && (t = B(i, r))), null === (e = t > 0 ? L(t, r) : null) ? (r.needReadable = r.length <= r.highWaterMark, t = 0) : (r.length -= t, r.awaitDrain = 0), 0 === r.length && (!r.ended && (r.needReadable = !0), i !== t && r.ended && D(this)), null !== e && this.emit("data", e), e
            };

            function R(t) {
                var e = t._readableState;
                n("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, !e.emittedReadable && (n("emitReadable", e.flowing), e.emittedReadable = !0, f.nextTick(I, t))
            }

            function I(t) {
                var e = t._readableState;
                n("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, O(t)
            }

            function C(t, e) {
                !e.readingMore && (e.readingMore = !0, f.nextTick(j, t, e))
            }

            function j(t, e) {
                for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
                    var r = e.length;
                    if (n("maybeReadMore read 0"), t.read(0), r === e.length) break
                }
                e.readingMore = !1
            }
            E.prototype._read = function(t) {
                M(this, new _("_read()"))
            }, E.prototype.pipe = function(t, e) {
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
                var a = e && !1 === e.end || t === f.stdout || t === f.stderr ? m : s;

                function o(e, a) {
                    n("onunpipe"), e === r && a && !1 === a.hasUnpiped && (a.hasUnpiped = !0, function() {
                        n("cleanup"), t.removeListener("close", p), t.removeListener("finish", b), t.removeListener("drain", c), t.removeListener("error", l), t.removeListener("unpipe", o), r.removeListener("end", s), r.removeListener("end", m), r.removeListener("data", d), u = !0, i.awaitDrain && (!t._writableState || t._writableState.needDrain) && c()
                    }())
                }

                function s() {
                    n("onend"), t.end()
                }
                i.endEmitted ? f.nextTick(a) : r.once("end", a), t.on("unpipe", o);
                var c = function(t) {
                    return function() {
                        var e = t._readableState;
                        n("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && h(t, "data") && (e.flowing = !0, O(t))
                    }
                }(r);
                t.on("drain", c);
                var u = !1;

                function d(e) {
                    n("ondata");
                    var a = t.write(e);
                    n("dest.write", a), !1 === a && ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== q(i.pipes, t)) && !u && (n("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
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

            function T(t) {
                var e = t._readableState;
                e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
            }

            function P(t) {
                n("readable nexttick read 0"), t.read(0)
            }
            E.prototype.unpipe = function(t) {
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
                    for (var a = 0; a < n; a++) i[a].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var o = q(e.pipes, t);
                return -1 === o ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this)
            }, E.prototype.on = function(t, e) {
                var r = c.prototype.on.call(this, t, e),
                    i = this._readableState;
                return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === t && !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, n("on readable", i.length, i.reading), i.length ? R(this) : !i.reading && f.nextTick(P, this)), r
            }, E.prototype.addListener = E.prototype.on, E.prototype.removeListener = function(t, e) {
                var r = c.prototype.removeListener.call(this, t, e);
                return "readable" === t && f.nextTick(T, this), r
            }, E.prototype.removeAllListeners = function(t) {
                var e = c.prototype.removeAllListeners.apply(this, arguments);
                return ("readable" === t || void 0 === t) && f.nextTick(T, this), e
            }, E.prototype.resume = function() {
                var t = this._readableState;
                return !t.flowing && (n("resume"), t.flowing = !t.readableListening, function(t, e) {
                    !e.resumeScheduled && (e.resumeScheduled = !0, f.nextTick(z, t, e))
                }(this, t)), t.paused = !1, this
            };

            function z(t, e) {
                n("resume", e.reading), !e.reading && t.read(0), e.resumeScheduled = !1, t.emit("resume"), O(t), e.flowing && !e.reading && t.read(0)
            }

            function O(t) {
                var e = t._readableState;
                for (n("flow", e.flowing); e.flowing && null !== t.read(););
            }

            function L(t, e) {
                var r;
                return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r)
            }

            function D(t) {
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
            E.prototype.pause = function() {
                return n("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (n("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, E.prototype.wrap = function(t) {
                var e = this,
                    r = this._readableState,
                    i = !1;
                for (var a in t.on("end", function() {
                        if (n("wrapped end"), r.decoder && !r.ended) {
                            var t = r.decoder.end();
                            t && t.length && e.push(t)
                        }
                        e.push(null)
                    }), t.on("data", function(a) {
                        if (n("wrapped data"), r.decoder && (a = r.decoder.write(a)), r.objectMode && null == a) return;
                        if (!!r.objectMode || !!a && !!a.length) !e.push(a) && (i = !0, t.pause())
                    }), t) void 0 === this[a] && "function" == typeof t[a] && (this[a] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(a));
                for (var o = 0; o < S.length; o++) t.on(S[o], this.emit.bind(this, S[o]));
                return this._read = function(e) {
                    n("wrapped _read", e), i && (i = !1, t.resume())
                }, this
            }, "function" == typeof Symbol && (E.prototype[Symbol.asyncIterator] = function() {
                return void 0 === o && (o = r("471974")), o(this)
            }), Object.defineProperty(E.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(E.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(E.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(t) {
                    this._readableState && (this._readableState.flowing = t)
                }
            }), E._fromList = L, Object.defineProperty(E.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (E.from = function(t, e) {
                return void 0 === s && (s = r("250701")), s(E, t, e)
            })