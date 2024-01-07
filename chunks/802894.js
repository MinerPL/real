            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("759843"),
                s = i("446674"),
                a = i("819855"),
                r = i("77078"),
                o = i("841098"),
                u = i("812204"),
                c = i("685665"),
                d = i("428958"),
                f = i("393414"),
                E = i("305961"),
                m = i("191814"),
                I = i("945330"),
                p = i("256941"),
                g = i("270295"),
                _ = i("49111"),
                S = i("724210"),
                h = i("782340"),
                C = i("814163");
            let T = () => {
                let e = (0, o.default)();
                return (0, a.isThemeLight)(e) ? i("602291") : i("609708")
            };

            function N(e) {
                let {
                    onClose: t,
                    guildId: i,
                    emojiId: a
                } = e, o = T(), {
                    analyticsLocations: N
                } = (0, c.default)(u.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
                (0, d.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                    properties: {
                        location_stack: N,
                        emoji_guild_id: i,
                        emoji_id: null != a ? a : null
                    }
                });
                let A = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(i)),
                    y = (0, s.useStateFromStores)([p.default], () => null != i && p.default.getUserSubscriptionRoles(i).size > 0),
                    v = y ? h.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : h.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
                        serverName: null == A ? void 0 : A.name
                    }),
                    j = y ? h.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : h.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
                return (0, n.jsxs)("div", {
                    className: C.container,
                    children: [(0, n.jsx)("div", {
                        className: C.background
                    }), (0, n.jsxs)("div", {
                        className: C.content,
                        children: [(0, n.jsx)(r.Button, {
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.ICON,
                            className: C.closeButton,
                            onClick: t,
                            children: (0, n.jsx)(I.default, {
                                "aria-label": h.default.Messages.CLOSE,
                                width: 16,
                                height: 16,
                                className: C.closeButtonIcon
                            })
                        }), (0, n.jsx)("img", {
                            alt: "",
                            src: o,
                            className: C.upsellImage
                        }), (0, n.jsx)(m.default, {
                            size: 22
                        }), (0, n.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-lg/extrabold",
                            className: C.header,
                            children: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
                        }), (0, n.jsx)(m.default, {
                            size: 4
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: C.description,
                            children: v
                        }), (0, n.jsx)(m.default, {
                            size: 24
                        }), (0, n.jsx)(g.default, {
                            onClick: () => {
                                (0, f.transitionTo)(_.Routes.CHANNEL(i, S.StaticChannelRoute.ROLE_SUBSCRIPTIONS), void 0, void 0, N)
                            },
                            children: j
                        })]
                    })]
                })
            }