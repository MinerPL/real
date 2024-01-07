            "use strict";
            n.r(t), n.d(t, {
                openGuildBannerUpsellModal: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("366634"),
                r = n("974755"),
                o = n("427459"),
                a = n("379532"),
                u = n("944305"),
                c = n("49111"),
                d = n("782340"),
                f = n("670362");

            function h(e) {
                let {
                    guild: t,
                    banner: n
                } = e;
                return (0, s.jsx)("div", {
                    className: f.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, s.jsxs)("div", {
                        className: f.guildHeader,
                        children: [(0, s.jsx)(r.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, s.jsx)(i.Heading, {
                            className: f.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, s.jsx)(l.default, {
                            className: f.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function p(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    guild: i,
                    isGIF: l,
                    banner: r
                } = e, f = l ? (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.ANIMATED_BANNER) : (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.BANNER);
                null != f && (0, a.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    headerProps: {
                        title: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let n = (0, o.getTierName)(e);
                            return t ? d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: n
                            }) : d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: n
                            })
                        }(f, l),
                        image: (0, s.jsx)(h, {
                            guild: i,
                            banner: r
                        })
                    },
                    perkIntro: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: l ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
                })
            }