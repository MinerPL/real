            "use strict";
            var i, n = r("390493");

            function o(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var i = r.call(t, e || "default");
                            if ("object" != typeof i) return i;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r("70102");
            var a = r("362796"),
                s = Symbol("lastResolve"),
                f = Symbol("lastReject"),
                h = Symbol("error"),
                c = Symbol("ended"),
                u = Symbol("lastPromise"),
                d = Symbol("handlePromise"),
                l = Symbol("stream");

            function p(t, e) {
                return {
                    value: t,
                    done: e
                }
            }

            function b(t) {
                var e = t[s];
                if (null !== e) {
                    var r = t[l].read();
                    null !== r && (t[u] = null, t[s] = null, t[f] = null, e(p(r, !1)))
                }
            }

            function m(t) {
                n.nextTick(b, t)
            }
            var g = Object.getPrototypeOf(function() {}),
                y = Object.setPrototypeOf((o(i = {
                    get stream() {
                        return this[l]
                    },
                    next: function() {
                        var t, e, r, i = this,
                            o = this[h];
                        if (null !== o) return Promise.reject(o);
                        if (this[c]) return Promise.resolve(p(void 0, !0));
                        if (this[l].destroyed) return new Promise(function(t, e) {
                            n.nextTick(function() {
                                i[h] ? e(i[h]) : t(p(void 0, !0))
                            })
                        });
                        var a = this[u];
                        if (a) {
                            ;
                            r = new Promise((t = a, e = this, function(r, i) {
                                t.then(function() {
                                    if (e[c]) {
                                        r(p(void 0, !0));
                                        return
                                    }
                                    e[d](r, i)
                                }, i)
                            }))
                        } else {
                            var s = this[l].read();
                            if (null !== s) return Promise.resolve(p(s, !1));
                            r = new Promise(this[d])
                        }
                        return this[u] = r, r
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), o(i, "return", function() {
                    var t = this;
                    return new Promise(function(e, r) {
                        t[l].destroy(null, function(t) {
                            if (t) {
                                r(t);
                                return
                            }
                            e(p(void 0, !0))
                        })
                    })
                }), i), g);
            t.exports = function(t) {
                var e, r = Object.create(y, (o(e = {}, l, {
                    value: t,
                    writable: !0
                }), o(e, s, {
                    value: null,
                    writable: !0
                }), o(e, f, {
                    value: null,
                    writable: !0
                }), o(e, h, {
                    value: null,
                    writable: !0
                }), o(e, c, {
                    value: t._readableState.endEmitted,
                    writable: !0
                }), o(e, d, {
                    value: function(t, e) {
                        var i = r[l].read();
                        i ? (r[u] = null, r[s] = null, r[f] = null, t(p(i, !1))) : (r[s] = t, r[f] = e)
                    },
                    writable: !0
                }), e));
                return r[u] = null, a(t, function(t) {
                    if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                        var e = r[f];
                        null !== e && (r[u] = null, r[s] = null, r[f] = null, e(t)), r[h] = t;
                        return
                    }
                    var i = r[s];
                    null !== i && (r[u] = null, r[s] = null, r[f] = null, i(p(void 0, !0))), r[c] = !0
                }), t.on("readable", m.bind(null, r)), r
            }