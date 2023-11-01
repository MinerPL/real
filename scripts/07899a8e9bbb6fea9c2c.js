(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64098"], {
        48174: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < t.length && r < e.length; r++)
                    if (!Object.is(e[r], t[r])) return !1;
                return !0
            }
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            })
        },
        775560: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return s.default
                }
            });
            var n = r("14716"),
                u = r("745510"),
                s = r("315378")
        },
        14716: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");

            function u() {
                let [, e] = (0, n.useState)({});
                return (0, n.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("884691");
            let u = {};

            function s(e) {
                let t = (0, n.useRef)(u);
                return t.current === u && (t.current = e()), t.current
            }
        },
        745510: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                u = r("48174");
            let s = [];

            function c(e, t) {
                let r = (0, n.useRef)(),
                    c = (0, n.useRef)(s);
                return c.current === s ? (r.current = e(), c.current = t) : !(0, u.default)(t, c.current) && (r.current = e(), c.current = t), r.current
            }
        },
        653240: function(e, t, r) {
            "use strict";
            e.exports = r.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, r) {
            "use strict";
            e.exports = r.p + "abb37025036befe38e64.svg"
        },
        651662: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("37983");
            r("884691");
            var u = r("819855"),
                s = r("77078"),
                c = r("841098"),
                a = r("476765"),
                o = r("782340"),
                l = r("310477"),
                i = r("653240"),
                d = r("540758");

            function f(e) {
                let {
                    onClose: t,
                    transitionState: r
                } = e, f = (0, a.useUID)(), h = (0, u.isThemeDark)((0, c.default)());
                return (0, n.jsxs)(s.ModalRoot, {
                    transitionState: r,
                    "aria-labelledby": f,
                    size: s.ModalSize.SMALL,
                    children: [(0, n.jsxs)(s.ModalContent, {
                        className: l.content,
                        children: [(0, n.jsx)(s.ModalCloseButton, {
                            className: l.closeButton,
                            onClick: t
                        }), (0, n.jsx)("img", {
                            className: l.image,
                            src: h ? i : d,
                            alt: ""
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-lg/semibold",
                            color: "header-primary",
                            className: l.title,
                            children: o.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: l.body,
                            children: o.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
                        })]
                    }), (0, n.jsx)(s.ModalFooter, {
                        children: (0, n.jsx)(s.Button, {
                            className: l.button,
                            color: s.Button.Colors.BRAND,
                            onClick: t,
                            size: s.Button.Sizes.LARGE,
                            children: o.default.Messages.OKAY
                        })
                    })]
                })
            }
        }
    }
]);