            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                r = n("685665"),
                o = n("836275"),
                a = n("379532"),
                u = n("305961"),
                c = n("162771"),
                d = n("118503"),
                f = n("49111"),
                h = n("944305"),
                p = n("782340"),
                v = n("323723");

            function I(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: n,
                    isGIF: I,
                    banner: E
                } = e, C = (0, i.useStateFromStores)([c.default], () => c.default.getGuildId()), _ = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(C)), {
                    analyticsLocations: R
                } = (0, r.default)();
                return null == _ || _.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !I && _.hasFeature(f.GuildFeatures.BANNER) ? null : (0, s.jsxs)("div", {
                    className: v.container,
                    children: [(0, s.jsx)(d.default, {
                        className: v.guildBoostingIcon
                    }), (0, s.jsx)(l.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: p.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, s.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: v.subscribeButton,
                        onClick: () => {
                            if (null == _) return;
                            let e = {
                                section: t,
                                page: n,
                                object: f.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != E ? (0, o.openGuildBannerUpsellModal)({
                                analyticsLocations: R,
                                analyticsLocation: e,
                                guild: _,
                                isGIF: I,
                                banner: E
                            }) : (0, a.default)({
                                analyticsLocations: R,
                                analyticsSourceLocation: e,
                                guild: _,
                                perks: I ? (0, h.animatedGuildBannerUpsellPerks)() : (0, h.guildBannerUpsellPerks)()
                            })
                        },
                        children: p.default.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }