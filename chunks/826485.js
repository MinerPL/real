            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("345988"),
                i = s("427459"),
                r = s("49111"),
                o = s("646718"),
                d = s("782340"),
                u = s("849877");

            function c(e) {
                let {
                    guild: t,
                    numSounds: s,
                    isOutOfSlots: c
                } = e, E = t.premiumTier, _ = (0, i.getNextTier)(E, t.id), T = o.TotalSoundboardSoundCountsByTier[E] - 2;
                if (null == _ || E === r.BoostedGuildTiers.TIER_3 || s < T) return null;
                let I = c ? {
                    color: n.ButtonColors.GREEN,
                    look: n.ButtonLooks.FILLED,
                    text: d.default.Messages.GUILD_SETTINGS_SOUNDBOARD_CTA
                } : void 0;
                return (0, a.jsx)(l.default, {
                    header: d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER,
                    text: d.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPSELL_BANNER_TEXT.format({
                        level: _,
                        numAdditional: (0, i.getIncrementalSoundboardSoundCountForTier)(_)
                    }),
                    headerColor: "header-primary",
                    textColor: "text-normal",
                    buttonProps: I,
                    guild: t,
                    analyticsLocation: {
                        page: r.AnalyticsPages.GUILD_SETTINGS,
                        section: r.AnalyticsSections.GUILD_SETTINGS_SOUNDBOARD,
                        object: r.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL,
                        objectType: (0, i.boostedGuildTierToAnalyticsObjectType)(_)
                    },
                    className: u.container
                })
            }