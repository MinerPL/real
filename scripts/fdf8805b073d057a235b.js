(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45261"], {
        160679: function(t, e, r) {
            e.parse = function(t, e) {
                if ("string" != typeof t) throw TypeError("argument str must be a string");
                var r = {},
                    a = t.split(u),
                    i = (e || {}).decode || n;
                return a.forEach(function(t) {
                    var e = t.indexOf("=");
                    if (!(e < 0)) {
                        var n = t.substr(0, e).trim(),
                            a = t.substr(++e, t.length).trim();
                        '"' == a[0] && (a = a.slice(1, -1)), void 0 == r[n] && (r[n] = function(t, e) {
                            try {
                                return e(t)
                            } catch (e) {
                                return t
                            }
                        }(a, i))
                    }
                }), r
            }, e.serialize = function(t, e, r) {
                var n = r || {},
                    u = n.encode || a;
                if (!i.test(t)) throw TypeError("argument name is invalid");
                var s = u(e);
                if (s && !i.test(s)) throw TypeError("argument val is invalid");
                var o = [t + "=" + s];
                if (null != n.maxAge) {
                    var l = n.maxAge - 0;
                    if (isNaN(l)) throw Error("maxAge should be a Number");
                    o.push("Max-Age=" + Math.floor(l))
                }
                if (n.domain) {
                    if (!i.test(n.domain)) throw TypeError("option domain is invalid");
                    o.push("Domain=" + n.domain)
                }
                if (n.path) {
                    if (!i.test(n.path)) throw TypeError("option path is invalid");
                    o.push("Path=" + n.path)
                }
                return n.expires && o.push("Expires=" + n.expires.toUTCString()), n.httpOnly && o.push("HttpOnly"), n.secure && o.push("Secure"), n.firstPartyOnly && o.push("First-Party-Only"), o.join("; ")
            };
            var n = decodeURIComponent,
                a = encodeURIComponent,
                u = /; */,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        48174: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (t.length !== e.length) return !1;
                for (let r = 0; r < e.length && r < t.length; r++)
                    if (!Object.is(t[r], e[r])) return !1;
                return !0
            }
            r.r(e), r.d(e, {
                default: function() {
                    return n
                }
            })
        },
        775560: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var n = r("14716"),
                a = r("745510"),
                u = r("315378")
        },
        14716: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return a
                }
            });
            var n = r("884691");

            function a() {
                let [, t] = (0, n.useState)({});
                return (0, n.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");
            let a = {};

            function u(t) {
                let e = (0, n.useRef)(a);
                return e.current === a && (e.current = t()), e.current
            }
        },
        745510: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return i
                }
            });
            var n = r("884691"),
                a = r("48174");
            let u = [];

            function i(t, e) {
                let r = (0, n.useRef)(),
                    i = (0, n.useRef)(u);
                return i.current === u ? (r.current = t(), i.current = e) : !(0, a.default)(e, i.current) && (r.current = t(), i.current = e), r.current
            }
        },
        586269: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                QUARANTINE_APPEAL_LINK: function() {
                    return n
                }
            });
            let n = "https://dis.gd/appeal"
        },
        826269: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var a = r("77078"),
                u = r("476765"),
                i = r("586269"),
                s = r("782340"),
                o = r("677029"),
                l = t => {
                    let {
                        onClose: e
                    } = t, r = (0, u.useUID)();
                    return (0, n.jsxs)(a.ModalRoot, {
                        ...t,
                        "aria-labelledby": r,
                        children: [(0, n.jsxs)(a.ModalHeader, {
                            separator: !1,
                            className: o.modalHeader,
                            children: [(0, n.jsx)(a.Heading, {
                                id: r,
                                variant: "heading-xl/extrabold",
                                children: s.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, n.jsx)(a.ModalCloseButton, {
                                className: o.closeButton,
                                onClick: e
                            })]
                        }), (0, n.jsxs)(a.ModalContent, {
                            className: o.modalContent,
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: o.contentText,
                                children: s.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION
                            }), (0, n.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: o.contentText,
                                children: s.default.Messages.LIMITED_ACCESS_INFO_MODAL_APPEAL.format({
                                    appealLink: i.QUARANTINE_APPEAL_LINK
                                })
                            })]
                        }), (0, n.jsx)(a.ModalFooter, {
                            children: (0, n.jsx)(a.Button, {
                                className: o.button,
                                size: a.Button.Sizes.MIN,
                                onClick: e,
                                children: s.default.Messages.OKAY
                            })
                        })]
                    })
                }
        }
    }
]);