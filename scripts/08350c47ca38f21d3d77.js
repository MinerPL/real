(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11547"], {
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
                    return o
                }
            });
            var r = n("773670"),
                u = n("962429");
            let s = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(s);
                return o.current === s ? (n.current = t(), o.current = e) : !(0, u.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        997588: function(t, e, n) {
            "use strict";
            t.exports = n.p + "991ecc3f2fc892c5494e.svg"
        },
        851172: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("77078"),
                s = n("545158"),
                o = n("476765"),
                i = n("782340"),
                c = n("160519");

            function a(t) {
                let {
                    url: e,
                    onClose: a,
                    transitionState: l
                } = t, d = (0, o.useUID)();
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
                                children: i.default.Messages.LINK_NOT_DISCORD_WARNING_TITLE
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: c.body,
                                children: i.default.Messages.LINK_NOT_DISCORD_WARNING_BODY.format({
                                    url: e
                                })
                            })]
                        })
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.BRAND,
                            onClick: a,
                            children: i.default.Messages.LINK_NOT_DISCORD_WARNING_CANCEL
                        }), (0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.TRANSPARENT,
                            look: u.Button.Looks.LINK,
                            onClick: () => {
                                (0, s.default)(e, !0)
                            },
                            children: i.default.Messages.LINK_NOT_DISCORD_WARNING_CONTINUE
                        })]
                    })]
                })
            }
        },
        476765: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return c
                }
            });
            var r = n("552473"),
                u = n.n(r),
                s = n("365444");
            let o = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(t)
                },
                i = () => (0, s.useLazyValue)(() => o()),
                c = t => {
                    let {
                        children: e
                    } = t;
                    return e(i())
                }
        }
    }
]);