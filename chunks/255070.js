            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("759843"),
                r = n("77078"),
                s = n("716241"),
                a = n("428958"),
                u = n("592407"),
                o = n("45395"),
                d = n("272091"),
                c = n("49111"),
                f = n("782340"),
                h = n("191455"),
                g = n("149361");

            function m(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: m
                } = e, p = (0, d.default)(null != n ? n : "", t);
                return ((0, a.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), p) ? (0, l.jsxs)("div", {
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
                                s.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), u.default.init(null != n ? n : ""), o.default.open(), m()
                            },
                            children: f.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }