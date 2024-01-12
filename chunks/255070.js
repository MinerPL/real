            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("759843"),
                r = n("77078"),
                a = n("716241"),
                s = n("428958"),
                o = n("592407"),
                u = n("45395"),
                d = n("272091"),
                c = n("49111"),
                f = n("782340"),
                h = n("191455"),
                g = n("149361");

            function p(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: p
                } = e, m = (0, d.default)(null != n ? n : "", t);
                return ((0, s.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), m) ? (0, l.jsxs)("div", {
                    className: h.container,
                    children: [(0, l.jsx)("div", {
                        className: h.imageContainer,
                        children: (0, l.jsx)("img", {
                            src: g,
                            className: h.image,
                            alt: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, l.jsxs)("div", {
                        className: h.textContainer,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: h.header,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: h.description,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, l.jsx)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            color: r.Button.Colors.BRAND,
                            className: h.button,
                            onClick: () => {
                                a.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), o.default.init(null != n ? n : ""), u.default.open(), p()
                            },
                            children: f.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }