(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37512"], {
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");

            function u() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691");
            let u = {};

            function s(e) {
                let t = (0, r.useRef)(u);
                return t.current === u && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                u = n("48174");
            let s = [];

            function a(e, t) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(s);
                return a.current === s ? (n.current = e(), a.current = t) : !(0, u.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        203811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                s = n("987317"),
                a = n("119184"),
                c = n("476765"),
                l = n("943232"),
                i = n("322224"),
                o = n("534222"),
                d = n("782340"),
                f = n("947448");

            function h(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: h
                } = e, E = (0, c.useUID)(), N = (0, o.useActiveEvent)(t.id);
                if (null == N) return null;
                let _ = () => {
                    s.default.selectVoiceChannel(null), h()
                };
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": E,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsxs)(u.ModalContent, {
                        className: f.content,
                        children: [(0, r.jsx)(a.default, {
                            children: (0, r.jsx)("div", {
                                className: f.iconBackground,
                                children: (0, r.jsx)(l.default, {
                                    height: 40,
                                    width: 40,
                                    className: f.icon
                                })
                            })
                        }), (0, r.jsx)(u.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: f.title,
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: f.subtitle,
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            color: u.Button.Colors.RED,
                            onClick: () => {
                                i.default.endEvent(N.id, N.guild_id), _()
                            },
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, r.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            className: f.cancelButton,
                            onClick: _,
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("414456"),
                s = n.n(u),
                a = n("782340"),
                c = n("53061"),
                l = n("284434"),
                i = n("315956");

            function o(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, r.jsxs)("div", {
                    className: s(c.container, t),
                    children: [(0, r.jsx)("img", {
                        alt: a.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: i,
                        className: s(c.sparkleIcon, c.sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: a.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: l,
                        className: s(c.sparkleIcon, c.sparkleTop)
                    })]
                })
            }
        }
    }
]);