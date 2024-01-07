            "use strict";
            r.r(t), r.d(t, {
                handleFocus: function() {
                    return l
                }
            }), r("70102"), r("854508");
            var n = r("884691"),
                o = r.n(n),
                a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function u(e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e
            }
            var l = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
                return function(r) {
                    function n() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, n);
                        for (var e, t, r, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return t = r = u(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a))), r.state = {
                            focus: !1
                        }, r.handleFocus = function() {
                            return r.setState({
                                focus: !0
                            })
                        }, r.handleBlur = function() {
                            return r.setState({
                                focus: !1
                            })
                        }, u(r, t)
                    }
                    return ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, r), i(n, [{
                        key: "render",
                        value: function() {
                            return o.createElement(t, {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            }, o.createElement(e, a({}, this.props, this.state)))
                        }
                    }]), n
                }(o.Component)
            }