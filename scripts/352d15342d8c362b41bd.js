(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52543"], {
        160679: function(t, r, e) {
            e("70102"), e("424973"), r.parse = function(t, r) {
                if ("string" != typeof t) throw TypeError("argument str must be a string");
                var e = {},
                    u = t.split(i),
                    o = (r || {}).decode || n;
                return u.forEach(function(t) {
                    var r = t.indexOf("=");
                    if (!(r < 0)) {
                        var n = t.substr(0, r).trim(),
                            u = t.substr(++r, t.length).trim();
                        '"' == u[0] && (u = u.slice(1, -1)), void 0 == e[n] && (e[n] = function(t, r) {
                            try {
                                return r(t)
                            } catch (r) {
                                return t
                            }
                        }(u, o))
                    }
                }), e
            }, r.serialize = function(t, r, e) {
                var n = e || {},
                    i = n.encode || u;
                if (!o.test(t)) throw TypeError("argument name is invalid");
                var s = i(r);
                if (s && !o.test(s)) throw TypeError("argument val is invalid");
                var a = [t + "=" + s];
                if (null != n.maxAge) {
                    var c = n.maxAge - 0;
                    if (isNaN(c)) throw Error("maxAge should be a Number");
                    a.push("Max-Age=" + Math.floor(c))
                }
                if (n.domain) {
                    if (!o.test(n.domain)) throw TypeError("option domain is invalid");
                    a.push("Domain=" + n.domain)
                }
                if (n.path) {
                    if (!o.test(n.path)) throw TypeError("option path is invalid");
                    a.push("Path=" + n.path)
                }
                return n.expires && a.push("Expires=" + n.expires.toUTCString()), n.httpOnly && a.push("HttpOnly"), n.secure && a.push("Secure"), n.firstPartyOnly && a.push("First-Party-Only"), a.join("; ")
            };
            var n = decodeURIComponent,
                u = encodeURIComponent,
                i = /; */,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        379792: function(t, r, e) {
            "use strict";
            var n = e("727204"),
                u = TypeError,
                i = function(t) {
                    var r, e;
                    this.promise = new t(function(t, n) {
                        if (void 0 !== r || void 0 !== e) throw u("Bad Promise constructor");
                        r = t, e = n
                    }), this.resolve = n(r), this.reject = n(e)
                };
            t.exports.f = function(t) {
                return new i(t)
            }
        },
        718530: function(t, r, e) {
            "use strict";
            var n = e("503486");
            t.exports = n.Promise
        },
        33270: function(t, r, e) {
            "use strict";
            var n = e("418855"),
                u = e("472960"),
                i = e("379792");
            t.exports = function(t, r) {
                if (n(t), u(r) && r.constructor === t) return r;
                var e = i.f(t);
                return (0, e.resolve)(r), e.promise
            }
        },
        499460: function(t, r, e) {
            "use strict";
            var n = e("418855"),
                u = e("338286"),
                i = e("551544"),
                o = e("174669")("species");
            t.exports = function(t, r) {
                var e, s = n(t).constructor;
                return void 0 === s || i(e = n(s)[o]) ? r : u(e)
            }
        },
        506083: function(t, r, e) {
            "use strict";
            var n = e("859514"),
                u = e("140925"),
                i = e("718530"),
                o = e("664144"),
                s = e("434978"),
                a = e("125359"),
                c = e("499460"),
                f = e("33270"),
                l = e("484784"),
                d = i && i.prototype;
            if (n({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!i && o(function() {
                        d.finally.call({
                            then: function() {}
                        }, function() {})
                    })
                }, {
                    finally: function(t) {
                        var r = c(this, s("Promise")),
                            e = a(t);
                        return this.then(e ? function(e) {
                            return f(r, t()).then(function() {
                                return e
                            })
                        } : t, e ? function(e) {
                            return f(r, t()).then(function() {
                                throw e
                            })
                        } : t)
                    }
                }), !u && a(i)) {
                var h = s("Promise").prototype.finally;
                d.finally !== h && l(d, "finally", h, {
                    unsafe: !0
                })
            }
        },
        48174: function(t, r, e) {
            "use strict";

            function n(t, r) {
                if (t.length !== r.length) return !1;
                for (let e = 0; e < r.length && e < t.length; e++)
                    if (!Object.is(t[e], r[e])) return !1;
                return !0
            }
            e.r(r), e.d(r, {
                default: function() {
                    return n
                }
            })
        },
        775560: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var n = e("14716"),
                u = e("745510"),
                i = e("315378")
        },
        14716: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, {
                default: function() {
                    return u
                }
            }), e("222007");
            var n = e("884691");

            function u() {
                let [, t] = (0, n.useState)({});
                return (0, n.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, {
                default: function() {
                    return i
                }
            });
            var n = e("884691");
            let u = {};

            function i(t) {
                let r = (0, n.useRef)(u);
                return r.current === u && (r.current = t()), r.current
            }
        },
        745510: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, {
                default: function() {
                    return o
                }
            });
            var n = e("884691"),
                u = e("48174");
            let i = [];

            function o(t, r) {
                let e = (0, n.useRef)(),
                    o = (0, n.useRef)(i);
                return o.current === i ? (e.current = t(), o.current = r) : !(0, u.default)(r, o.current) && (e.current = t(), o.current = r), e.current
            }
        },
        826269: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, {
                default: function() {
                    return a
                }
            });
            var n = e("37983");
            e("884691");
            var u = e("77078"),
                i = e("476765"),
                o = e("782340"),
                s = e("677029"),
                a = t => {
                    let {
                        onClose: r
                    } = t, e = (0, i.useUID)();
                    return (0, n.jsxs)(u.ModalRoot, {
                        ...t,
                        "aria-labelledby": e,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            separator: !1,
                            className: s.modalHeader,
                            children: [(0, n.jsx)(u.Heading, {
                                id: e,
                                variant: "heading-xl/extrabold",
                                children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, n.jsx)(u.ModalCloseButton, {
                                className: s.closeButton,
                                onClick: r
                            })]
                        }), (0, n.jsx)(u.ModalContent, {
                            className: s.modalContent,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: s.contentText,
                                children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
                            })
                        }), (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsx)(u.Button, {
                                className: s.button,
                                size: u.Button.Sizes.MIN,
                                onClick: r,
                                children: o.default.Messages.OKAY
                            })
                        })]
                    })
                }
        },
        476765: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return a
                }
            });
            var n = e("995008"),
                u = e.n(n),
                i = e("775560");
            let o = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(t)
                },
                s = () => (0, i.useLazyValue)(() => o()),
                a = t => {
                    let {
                        children: r
                    } = t;
                    return r(s())
                }
        }
    }
]);