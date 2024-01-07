            "use strict";

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function n(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(r), !0).forEach(function(e) {
                        (function(t, e, r) {
                            (e = a(e)) in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r
                        })(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            r("424973"), r("70102");

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, a(i.key), i)
                }
            }

            function a(t) {
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
            }
            var s = r("446825").Buffer,
                f = r("482803").inspect,
                h = f && f.custom || "inspect";
            t.exports = function() {
                var t, e, r;

                function i() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, i), this.head = null, this.tail = null, this.length = 0
                }
                return t = i, e = [{
                    key: "push",
                    value: function(t) {
                        var e = {
                            data: t,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(t) {
                        var e = {
                            data: t,
                            next: this.head
                        };
                        0 === this.length && (this.tail = e), this.head = e, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var t = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(t) {
                        if (0 === this.length) return "";
                        for (var e = this.head, r = "" + e.data; e = e.next;) r += t + e.data;
                        return r
                    }
                }, {
                    key: "concat",
                    value: function(t) {
                        if (0 === this.length) return s.alloc(0);
                        for (var e, r, i, n = s.allocUnsafe(t >>> 0), o = this.head, a = 0; o;) {
                            ;
                            e = o.data, r = n, i = a, s.prototype.copy.call(e, r, i), a += o.data.length, o = o.next
                        }
                        return n
                    }
                }, {
                    key: "consume",
                    value: function(t, e) {
                        var r;
                        return t < this.head.data.length ? (r = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), r
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(t) {
                        var e = this.head,
                            r = 1,
                            i = e.data;
                        for (t -= i.length; e = e.next;) {
                            var n = e.data,
                                o = t > n.length ? n.length : t;
                            if (o === n.length ? i += n : i += n.slice(0, t), 0 == (t -= o)) {
                                o === n.length ? (++r, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = n.slice(o));
                                break
                            }++r
                        }
                        return this.length -= r, i
                    }
                }, {
                    key: "_getBuffer",
                    value: function(t) {
                        var e = s.allocUnsafe(t),
                            r = this.head,
                            i = 1;
                        for (r.data.copy(e), t -= r.data.length; r = r.next;) {
                            var n = r.data,
                                o = t > n.length ? n.length : t;
                            if (n.copy(e, e.length - t, 0, o), 0 == (t -= o)) {
                                o === n.length ? (++i, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = n.slice(o));
                                break
                            }++i
                        }
                        return this.length -= i, e
                    }
                }, {
                    key: h,
                    value: function(t, e) {
                        return f(this, n(n({}, e), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }], o(t.prototype, e), r && o(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }()