(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79603"], {
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
                    return a
                }
            });
            var r = n("884691"),
                u = n("48174");
            let s = [];

            function a(t, e) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(s);
                return a.current === s ? (n.current = t(), a.current = e) : !(0, u.default)(e, a.current) && (n.current = t(), a.current = e), n.current
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
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                s = n("476765"),
                a = n("258078"),
                c = n("782340"),
                l = n("674070"),
                o = n("986686");

            function i(t) {
                let {
                    onClose: e,
                    transitionState: n
                } = t, i = (0, s.useUID)();
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": i,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsxs)(u.ModalContent, {
                        className: l.content,
                        children: [(0, r.jsx)(u.ModalCloseButton, {
                            className: l.closeButton,
                            onClick: e
                        }), (0, r.jsx)("img", {
                            className: l.image,
                            src: o,
                            alt: ""
                        }), (0, r.jsx)(a.default, {
                            className: l.title,
                            id: i,
                            size: a.default.Sizes.SIZE_24,
                            color: a.default.Colors.HEADER_PRIMARY,
                            children: c.default.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE
                        }), (0, r.jsx)(u.Text, {
                            className: l.subtitle,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: c.default.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
                        })]
                    }), (0, r.jsx)(u.ModalFooter, {
                        children: (0, r.jsx)(u.Button, {
                            className: l.button,
                            color: u.Button.Colors.BRAND,
                            onClick: e,
                            size: u.Button.Sizes.LARGE,
                            children: c.default.Messages.OKAY
                        })
                    })]
                })
            }
        }
    }
]);