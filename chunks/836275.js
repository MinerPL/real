            "use strict";
            s.r(t), s.d(t, {
                openGuildBannerUpsellModal: function() {
                    return T
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("366634"),
                i = s("974755"),
                r = s("427459"),
                o = s("379532"),
                d = s("944305"),
                u = s("49111"),
                c = s("782340"),
                E = s("670362");

            function _(e) {
                let {
                    guild: t,
                    banner: s
                } = e;
                return (0, a.jsx)("div", {
                    className: E.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(s)
                    },
                    children: (0, a.jsxs)("div", {
                        className: E.guildHeader,
                        children: [(0, a.jsx)(i.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, a.jsx)(n.Heading, {
                            className: E.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, a.jsx)(l.default, {
                            className: E.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function T(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: s,
                    guild: n,
                    isGIF: l,
                    banner: i
                } = e, E = l ? (0, r.minimumRequiredTierForGuildFeature)(u.GuildFeatures.ANIMATED_BANNER) : (0, r.minimumRequiredTierForGuildFeature)(u.GuildFeatures.BANNER);
                null != E && (0, o.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: s,
                    guild: n,
                    headerProps: {
                        title: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let s = (0, r.getTierName)(e);
                            return t ? c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: s
                            }) : c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: s
                            })
                        }(E, l),
                        image: (0, a.jsx)(_, {
                            guild: n,
                            banner: i
                        })
                    },
                    perkIntro: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: l ? (0, d.animatedGuildBannerUpsellPerks)() : (0, d.guildBannerUpsellPerks)()
                })
            }