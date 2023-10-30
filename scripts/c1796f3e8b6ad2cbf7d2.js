(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26567"], {
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
                    return s.default
                }
            });
            var r = n("14716"),
                u = n("745510"),
                s = n("315378")
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
                    return s
                }
            });
            var r = n("884691");
            let u = {};

            function s(t) {
                let e = (0, r.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691"),
                u = n("48174");
            let s = [];

            function i(t, e) {
                let n = (0, r.useRef)(),
                    i = (0, r.useRef)(s);
                return i.current === s ? (n.current = t(), i.current = e) : !(0, u.default)(e, i.current) && (n.current = t(), i.current = e), n.current
            }
        },
        997588: function(t, e, n) {
            "use strict";
            t.exports = n.p + "991ecc3f2fc892c5494e.svg"
        },
        536071: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                s = n("545158"),
                i = n("476765"),
                o = n("782340"),
                c = n("237284");

            function a(t) {
                let {
                    href: e,
                    onClose: a,
                    transitionState: l
                } = t, d = (0, i.useUID)();
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: l,
                    "aria-labelledby": d,
                    children: [(0, r.jsx)("img", {
                        className: c.art,
                        src: n("997588"),
                        alt: ""
                    }), (0, r.jsx)(u.ModalContent, {
                        children: (0, r.jsxs)("div", {
                            className: c.modalContent,
                            children: [(0, r.jsx)(u.Heading, {
                                id: d,
                                variant: "heading-lg/semibold",
                                className: c.title,
                                children: o.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_TITLE
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: c.body,
                                children: o.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_BODY
                            })]
                        })
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.BRAND,
                            onClick: a,
                            children: o.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_CANCEL
                        }), (0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.TRANSPARENT,
                            look: u.Button.Looks.LINK,
                            onClick: () => {
                                a(), (0, s.default)(e, !0)
                            },
                            children: o.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_DOWNLOAD
                        })]
                    })]
                })
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return i
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return c
                }
            });
            var r = n("995008"),
                u = n.n(r),
                s = n("775560");
            let i = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(t)
                },
                o = () => (0, s.useLazyValue)(() => i()),
                c = t => {
                    let {
                        children: e
                    } = t;
                    return e(o())
                }
        }
    }
]);