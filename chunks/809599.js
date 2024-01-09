            "use strict";
            r.r(t), r.d(t, {
                createStyling: function() {
                    return k
                },
                invertTheme: function() {
                    return x
                }
            }), r("424973"), r("808653");
            var a = r("400211"),
                n = r("309501"),
                s = r("572149"),
                o = r("401859"),
                i = r("796850"),
                u = r.n(i),
                c = r("878202"),
                l = r.n(c),
                f = r("182445");

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach(function(t) {
                        (0, n.default)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var h = o.default,
                p = Object.keys(h),
                y = function(e) {
                    var t, r = u(e),
                        a = (0, f.rgb2yuv)(r.array()),
                        n = (0, s.default)(a, 3),
                        o = n[0],
                        i = n[1],
                        c = n[2];
                    var l = [(t = o) < .25 ? 1 : t < .5 ? .9 - t : 1.1 - t, i, c],
                        b = (0, f.yuv2rgb)(l);
                    return u.rgb(b).hex()
                },
                g = function(e) {
                    return function(t) {
                        return {
                            className: [t.className, e.className].filter(Boolean).join(" "),
                            style: d(d({}, t.style || {}), e.style || {})
                        }
                    }
                },
                v = function(e, t) {
                    if (void 0 === e) return t;
                    if (void 0 === t) return e;
                    var r = (0, a.default)(e),
                        n = (0, a.default)(t);
                    switch (r) {
                        case "string":
                            switch (n) {
                                case "string":
                                    return [t, e].filter(Boolean).join(" ");
                                case "object":
                                    return g({
                                        className: e,
                                        style: t
                                    });
                                case "function":
                                    return function(r) {
                                        for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) n[s - 1] = arguments[s];
                                        return g({
                                            className: e
                                        })(t.apply(void 0, [r].concat(n)))
                                    }
                            }
                            break;
                        case "object":
                            switch (n) {
                                case "string":
                                    return g({
                                        className: t,
                                        style: e
                                    });
                                case "object":
                                    return d(d({}, t), e);
                                case "function":
                                    return function(r) {
                                        for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) n[s - 1] = arguments[s];
                                        return g({
                                            style: e
                                        })(t.apply(void 0, [r].concat(n)))
                                    }
                            }
                            break;
                        case "function":
                            switch (n) {
                                case "string":
                                    return function(r) {
                                        for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) n[s - 1] = arguments[s];
                                        return e.apply(void 0, [g(r)({
                                            className: t
                                        })].concat(n))
                                    };
                                case "object":
                                    return function(r) {
                                        for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) n[s - 1] = arguments[s];
                                        return e.apply(void 0, [g(r)({
                                            style: t
                                        })].concat(n))
                                    };
                                case "function":
                                    return function(r) {
                                        for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) n[s - 1] = arguments[s];
                                        return e.apply(void 0, [t.apply(void 0, [r].concat(n))].concat(n))
                                    }
                            }
                    }
                },
                m = function(e, t) {
                    var r = Object.keys(t);
                    for (var a in e) - 1 === r.indexOf(a) && r.push(a);
                    return r.reduce(function(r, a) {
                        return r[a] = v(e[a], t[a]), r
                    }, {})
                },
                O = function(e, t) {
                    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
                    if (null === t) return e;
                    !Array.isArray(t) && (t = [t]);
                    var o = t.map(function(t) {
                        return e[t]
                    }).filter(Boolean).reduce(function(e, t) {
                        return "string" == typeof t ? e.className = [e.className, t].filter(Boolean).join(" ") : "object" === (0, a.default)(t) ? e.style = d(d({}, e.style), t) : "function" == typeof t && (e = d(d({}, e), t.apply(void 0, [e].concat(n)))), e
                    }, {
                        className: "",
                        style: {}
                    });
                    return !o.className && delete o.className, 0 === Object.keys(o.style).length && delete o.style, o
                },
                w = function(e) {
                    return Object.keys(e).reduce(function(t, r) {
                        return t[r] = /^base/.test(r) ? y(e[r]) : "scheme" === r ? e[r] + ":inverted" : e[r], t
                    }, {})
                },
                k = l(function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = t.defaultBase16,
                        n = void 0 === a ? h : a,
                        s = t.base16Themes,
                        o = E(r, void 0 === s ? null : s);
                    o && (r = d(d({}, o), r));
                    for (var i = p.reduce(function(e, t) {
                            return e[t] = r[t] || n[t], e
                        }, {}), u = m(Object.keys(r).reduce(function(e, t) {
                            return -1 === p.indexOf(t) && (e[t] = r[t]), e
                        }, {}), e(i)), c = arguments.length, f = Array(c > 3 ? c - 3 : 0), b = 3; b < c; b++) f[b - 3] = arguments[b];
                    return l(O, 2).apply(void 0, [u].concat(f))
                }, 3),
                j = function(e) {
                    return !!e.extend
                },
                E = function(e, t) {
                    if (e && j(e) && e.extend && (e = e.extend), "string" == typeof e) {
                        var r = e.split(":"),
                            a = (0, s.default)(r, 2),
                            n = a[0],
                            i = a[1];
                        e = t ? t[n] : o[n], "inverted" === i && (e = w(e))
                    }
                    return e && Object.prototype.hasOwnProperty.call(e, "base00") ? e : void 0
                },
                x = function(e) {
                    if ("string" == typeof e) return "".concat(e, ":inverted");
                    if (e && j(e) && e.extend) return "string" == typeof e.extend ? d(d({}, e), {}, {
                        extend: "".concat(e.extend, ":inverted")
                    }) : d(d({}, e), {}, {
                        extend: w(e.extend)
                    });
                    return e ? w(e) : e
                }