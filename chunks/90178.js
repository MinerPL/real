            "use strict";
            n("70102"), n("854508");
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = n("867031"),
                o = function(t) {
                    function e(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, e);
                        var n = function(t, e) {
                            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e && ("object" == typeof e || "function" == typeof e) ? e : t
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return n._transforms = t, n
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), r(e, [{
                        key: "__getValue",
                        value: function() {
                            return this._transforms.map(function(t) {
                                var e = {};
                                for (var n in t) {
                                    var r = t[n];
                                    r instanceof i ? e[n] = r.__getValue() : e[n] = r
                                }
                                return e
                            })
                        }
                    }, {
                        key: "__getAnimatedValue",
                        value: function() {
                            return this._transforms.map(function(t) {
                                var e = {};
                                for (var n in t) {
                                    var r = t[n];
                                    r instanceof i ? e[n] = r.__getAnimatedValue() : e[n] = r
                                }
                                return e
                            })
                        }
                    }, {
                        key: "__attach",
                        value: function() {
                            var t = this;
                            this._transforms.forEach(function(e) {
                                for (var n in e) {
                                    var r = e[n];
                                    r instanceof i && r.__addChild(t)
                                }
                            })
                        }
                    }, {
                        key: "__detach",
                        value: function() {
                            var t = this;
                            this._transforms.forEach(function(e) {
                                for (var n in e) {
                                    var r = e[n];
                                    r instanceof i && r.__removeChild(t)
                                }
                            })
                        }
                    }]), e
                }(n("528830"));
            t.exports = o