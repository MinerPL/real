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
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = function(t, e) {
                            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e && ("object" == typeof e || "function" == typeof e) ? e : t
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return r._strings = t, r._values = n, r
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
                        key: "__transformValue",
                        value: function(t) {
                            return t instanceof i ? t.__getValue() : t
                        }
                    }, {
                        key: "__getValue",
                        value: function() {
                            for (var t = this._strings[0], e = 0; e < this._values.length; ++e) t += this.__transformValue(this._values[e]) + this._strings[1 + e];
                            return t
                        }
                    }, {
                        key: "__attach",
                        value: function() {
                            for (var t = 0; t < this._values.length; ++t) this._values[t] instanceof i && this._values[t].__addChild(this)
                        }
                    }, {
                        key: "__detach",
                        value: function() {
                            for (var t = 0; t < this._values.length; ++t) this._values[t] instanceof i && this._values[t].__removeChild(this)
                        }
                    }]), e
                }(n("528830"));
            t.exports = o