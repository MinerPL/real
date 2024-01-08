            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("759843"),
                r = n("77078"),
                s = n("716241"),
                a = n("428958"),
                o = n("592407"),
                u = n("45395"),
                d = n("272091"),
                c = n("49111"),
                f = n("782340"),
                E = n("191455"),
                _ = n("149361");

            function I(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: I
                } = e, h = (0, d.default)(null != n ? n : "", t);
                return ((0, a.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), h) ? (0, l.jsxs)("div", {
                    className: E.container,
                    children: [(0, l.jsx)("div", {
                        className: E.imageContainer,
                        children: (0, l.jsx)("img", {
                            src: _,
                            className: E.image,
                            alt: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, l.jsxs)("div", {
                        className: E.textContainer,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: E.header,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: E.description,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, l.jsx)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            color: r.Button.Colors.BRAND,
                            className: E.button,
                            onClick: () => {
                                s.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), o.default.init(null != n ? n : ""), u.default.open(), I()
                            },
                            children: f.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }