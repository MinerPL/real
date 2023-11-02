(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49004"], {
        284434: function(e, s, t) {
            "use strict";
            e.exports = t.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, s, t) {
            "use strict";
            e.exports = t.p + "f92a8b5812e2da52a179.svg"
        },
        203811: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return N
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("77078"),
                n = t("987317"),
                r = t("119184"),
                c = t("476765"),
                i = t("943232"),
                o = t("322224"),
                d = t("534222"),
                u = t("782340"),
                E = t("947448");

            function N(e) {
                let {
                    channel: s,
                    transitionState: t,
                    onClose: N
                } = e, _ = (0, c.useUID)(), I = (0, d.useActiveEvent)(s.id);
                if (null == I) return null;
                let h = () => {
                    n.default.selectVoiceChannel(null), N()
                };
                return (0, a.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": _,
                    size: l.ModalSize.SMALL,
                    children: [(0, a.jsxs)(l.ModalContent, {
                        className: E.content,
                        children: [(0, a.jsx)(r.default, {
                            children: (0, a.jsx)("div", {
                                className: E.iconBackground,
                                children: (0, a.jsx)(i.default, {
                                    height: 40,
                                    width: 40,
                                    className: E.icon
                                })
                            })
                        }), (0, a.jsx)(l.Heading, {
                            id: _,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: E.title,
                            children: u.default.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: E.subtitle,
                            children: u.default.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, a.jsxs)(l.ModalFooter, {
                        children: [(0, a.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: () => {
                                o.default.endEvent(I.id, I.guild_id), h()
                            },
                            children: u.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, a.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: E.cancelButton,
                            onClick: h,
                            children: u.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }
        },
        119184: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("414456"),
                n = t.n(l),
                r = t("782340"),
                c = t("53061"),
                i = t("284434"),
                o = t("315956");

            function d(e) {
                let {
                    className: s,
                    children: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: n(c.container, s),
                    children: [(0, a.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: n(c.sparkleIcon, c.sparkleBottom)
                    }), t, (0, a.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: i,
                        className: n(c.sparkleIcon, c.sparkleTop)
                    })]
                })
            }
        }
    }
]);