(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49004"], {
        284434: function(e, t, s) {
            "use strict";
            e.exports = s.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f92a8b5812e2da52a179.svg"
        },
        203811: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("77078"),
                l = s("987317"),
                r = s("119184"),
                i = s("476765"),
                c = s("943232"),
                o = s("322224"),
                u = s("534222"),
                d = s("782340"),
                f = s("947448");

            function I(e) {
                let {
                    channel: t,
                    transitionState: s,
                    onClose: I
                } = e, _ = (0, i.useUID)(), E = (0, u.useActiveEvent)(t.id);
                if (null == E) return null;
                let N = () => {
                    l.default.selectVoiceChannel(null), I()
                };
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": _,
                    size: a.ModalSize.SMALL,
                    children: [(0, n.jsxs)(a.ModalContent, {
                        className: f.content,
                        children: [(0, n.jsx)(r.default, {
                            children: (0, n.jsx)("div", {
                                className: f.iconBackground,
                                children: (0, n.jsx)(c.default, {
                                    height: 40,
                                    width: 40,
                                    className: f.icon
                                })
                            })
                        }), (0, n.jsx)(a.Heading, {
                            id: _,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: f.title,
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: f.subtitle,
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, n.jsxs)(a.ModalFooter, {
                        children: [(0, n.jsx)(a.Button, {
                            color: a.Button.Colors.RED,
                            onClick: () => {
                                o.default.endEvent(E.id, E.guild_id), N()
                            },
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, n.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            className: f.cancelButton,
                            onClick: N,
                            children: d.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        119184: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("782340"),
                i = s("53061"),
                c = s("284434"),
                o = s("315956");

            function u(e) {
                let {
                    className: t,
                    children: s
                } = e;
                return (0, n.jsxs)("div", {
                    className: l(i.container, t),
                    children: [(0, n.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: l(i.sparkleIcon, i.sparkleBottom)
                    }), s, (0, n.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c,
                        className: l(i.sparkleIcon, i.sparkleTop)
                    })]
                })
            }
        },
        476765: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                uid: function() {
                    return r
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return c
                }
            });
            var n = s("995008"),
                a = s.n(n),
                l = s("775560");
            let r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                i = () => (0, l.useLazyValue)(() => r()),
                c = e => {
                    let {
                        children: t
                    } = e;
                    return t(i())
                }
        }
    }
]);