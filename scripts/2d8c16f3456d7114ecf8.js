(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77132"], {
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                u = n("745510"),
                a = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");

            function u() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let u = {};

            function a(t) {
                let e = (0, r.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                u = n("48174");
            let a = [];

            function s(t, e) {
                let n = (0, r.useRef)(),
                    s = (0, r.useRef)(a);
                return s.current === a ? (n.current = t(), s.current = e) : !(0, u.default)(e, s.current) && (n.current = t(), s.current = e), n.current
            }
        },
        997588: function(t, e, n) {
            "use strict";
            t.exports = n.p + "991ecc3f2fc892c5494e.svg"
        },
        745705: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("474539"),
                s = n("145131"),
                c = n("476765"),
                l = n("782340"),
                i = n("496673");

            function o(t) {
                let {
                    url: e,
                    onClose: o,
                    transitionState: d
                } = t, f = (0, c.useUID)(), {
                    protocol: x,
                    hostname: h,
                    theRestOfTheUrl: m
                } = (0, a.useUrlParts)(e);
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": f,
                    children: [(0, r.jsx)("img", {
                        className: i.art,
                        src: n("997588"),
                        alt: ""
                    }), (0, r.jsx)(u.ModalContent, {
                        children: (0, r.jsxs)(s.default, {
                            direction: s.default.Direction.VERTICAL,
                            justify: s.default.Justify.CENTER,
                            children: [(0, r.jsx)(u.Heading, {
                                id: f,
                                variant: "heading-lg/semibold",
                                className: i.title,
                                children: l.default.Messages.BAD_LINK_WARNING_TITLE_V2
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: i.body,
                                children: l.default.Messages.BAD_LINK_WARNING_BODY_V2.format()
                            }), (0, r.jsxs)(u.Scroller, {
                                className: i.linkCalloutContainer,
                                children: [(0, r.jsxs)(u.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: [x, "//"]
                                }), (0, r.jsx)(u.Text, {
                                    tag: "span",
                                    variant: "text-md/semibold",
                                    color: "text-normal",
                                    children: h
                                }), (0, r.jsx)(u.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: m
                                })]
                            })]
                        })
                    }), (0, r.jsx)(u.ModalFooter, {
                        children: (0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.BRAND,
                            onClick: o,
                            children: l.default.Messages.GO_BACK
                        })
                    })]
                })
            }
        },
        474539: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useUrlParts: function() {
                    return a
                },
                useModalState: function() {
                    return s
                }
            });
            var r = n("884691"),
                u = n("48703");

            function a(t) {
                let {
                    protocol: e,
                    hostname: n
                } = r.useMemo(() => ({
                    protocol: (0, u.getProtocol)(t),
                    hostname: (0, u.getHostname)(t)
                }), [t]), a = "".concat(e, "//").concat(n), s = t.replace(a, "");
                return {
                    protocol: e,
                    hostname: n,
                    theRestOfTheUrl: s
                }
            }

            function s(t) {
                let {
                    url: e,
                    trustUrl: n,
                    onConfirm: u,
                    onClose: s
                } = t, [c, l] = r.useState(!1), {
                    protocol: i,
                    hostname: o,
                    theRestOfTheUrl: d
                } = a(e), f = r.useCallback(() => {
                    c && n(e), null == s || s(), u()
                }, [e, c, n, u, s]);
                return {
                    protocol: i,
                    hostname: o,
                    theRestOfTheUrl: d,
                    shouldTrustUrl: c,
                    setShouldTrustUrl: l,
                    handleConfirm: f
                }
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return c
                },
                UID: function() {
                    return l
                }
            });
            var r = n("995008"),
                u = n.n(r),
                a = n("775560");
            let s = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(t)
                },
                c = () => (0, a.useLazyValue)(() => s()),
                l = t => {
                    let {
                        children: e
                    } = t;
                    return e(c())
                }
        }
    }
]);