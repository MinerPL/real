(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63081"], {
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
        653240: function(t, e, n) {
            "use strict";
            t.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(t, e, n) {
            "use strict";
            t.exports = n.p + "abb37025036befe38e64.svg"
        },
        651662: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("819855"),
                s = n("77078"),
                c = n("841098"),
                a = n("476765"),
                i = n("782340"),
                o = n("218531"),
                l = n("653240"),
                d = n("540758");

            function f(t) {
                let {
                    onClose: e,
                    transitionState: n
                } = t, f = (0, a.useUID)(), h = (0, u.isThemeDark)((0, c.default)());
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": f,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalContent, {
                        className: o.content,
                        children: [(0, r.jsx)(s.ModalCloseButton, {
                            className: o.closeButton,
                            onClick: e
                        }), (0, r.jsx)("img", {
                            className: o.image,
                            src: h ? l : d,
                            alt: ""
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-lg/semibold",
                            color: "header-primary",
                            className: o.title,
                            children: i.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: o.body,
                            children: i.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
                        })]
                    }), (0, r.jsx)(s.ModalFooter, {
                        children: (0, r.jsx)(s.Button, {
                            className: o.button,
                            color: s.Button.Colors.BRAND,
                            onClick: e,
                            size: s.Button.Sizes.LARGE,
                            children: i.default.Messages.OKAY
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
                    return i
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
                i = t => {
                    let {
                        children: e
                    } = t;
                    return e(a())
                }
        }
    }
]);