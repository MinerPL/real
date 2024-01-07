            "use strict";
            n.r(t), n.d(t, {
                PreviewPortalContext: function() {
                    return l
                },
                DndProvider: function() {
                    return u
                }
            }), n("70102"), n("222007"), n("424973");
            var r = n("884691"),
                o = n.n(r),
                a = n("476042"),
                i = n("688911");

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var l = (0, r.createContext)(null),
                u = function(e) {
                    var t, n, u = e.portal,
                        d = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < a.length; r++) {
                                    if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(e, ["portal"]);
                    var p = (n = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, r.useState)(null)) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    a = void 0;
                                try {
                                    for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    o = !0, a = e
                                } finally {
                                    try {
                                        !r && null != s.return && s.return()
                                    } finally {
                                        if (o) throw a
                                    }
                                }
                                return n
                            }
                        }(t, n) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return c(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                            }
                        }(t, n) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        f = p[0],
                        m = p[1];
                    return o.createElement(l.Provider, {
                        value: null != u ? u : f
                    }, o.createElement(a.DndProvider, s({
                        backend: i.MultiBackend
                    }, d)), u ? null : o.createElement("div", {
                        ref: m
                    }))
                }