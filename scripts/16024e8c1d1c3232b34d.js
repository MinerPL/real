(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15331"], {
        962429: function(t, e, n) {
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
        365444: function(t, e, n) {
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
            var r = n("732427"),
                u = n("866490"),
                s = n("246105")
        },
        732427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("773670");

            function u() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("773670");
            let u = {};

            function s(t) {
                let e = (0, r.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        866490: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("773670"),
                u = n("962429");
            let s = [];

            function c(t, e) {
                let n = (0, r.useRef)(),
                    c = (0, r.useRef)(s);
                return c.current === s ? (n.current = t(), c.current = e) : !(0, u.default)(e, c.current) && (n.current = t(), c.current = e), n.current
            }
        },
        986686: function(t, e, n) {
            "use strict";
            t.exports = n.p + "26421523fdfaf469e28e.svg"
        },
        657233: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("77078"),
                s = n("476765"),
                c = n("258078"),
                a = n("782340"),
                l = n("82027"),
                i = n("986686");

            function o(t) {
                let {
                    onClose: e,
                    transitionState: n
                } = t, o = (0, s.useUID)();
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": o,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsxs)(u.ModalContent, {
                        className: l.content,
                        children: [(0, r.jsx)(u.ModalCloseButton, {
                            className: l.closeButton,
                            onClick: e
                        }), (0, r.jsx)("img", {
                            className: l.image,
                            src: i,
                            alt: ""
                        }), (0, r.jsx)(c.default, {
                            className: l.title,
                            id: o,
                            size: c.default.Sizes.SIZE_24,
                            color: c.default.Colors.HEADER_PRIMARY,
                            children: a.default.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE
                        }), (0, r.jsx)(u.Text, {
                            className: l.subtitle,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: a.default.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
                        })]
                    }), (0, r.jsx)(u.ModalFooter, {
                        children: (0, r.jsx)(u.Button, {
                            className: l.button,
                            color: u.Button.Colors.BRAND,
                            onClick: e,
                            size: u.Button.Sizes.LARGE,
                            children: a.default.Messages.OKAY
                        })
                    })]
                })
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return c
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return l
                }
            });
            var r = n("552473"),
                u = n.n(r),
                s = n("365444");
            let c = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(t)
                },
                a = () => (0, s.useLazyValue)(() => c()),
                l = t => {
                    let {
                        children: e
                    } = t;
                    return e(a())
                }
        }
    }
]);