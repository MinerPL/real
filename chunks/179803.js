            "use strict";
            n.r(t), n.d(t, {
                shouldShowGuildOnboardingUpsell: function() {
                    return h
                },
                dismissedGuildOnboardingUpsell: function() {
                    return S
                }
            }), n("222007");
            var i = n("866227"),
                a = n.n(i),
                l = n("151426"),
                s = n("801340"),
                d = n("10641"),
                u = n("872173"),
                r = n("374363"),
                o = n("305961"),
                c = n("696326"),
                f = n("380710"),
                g = n("49111"),
                E = n("994428");
            let m = [l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                _ = [0, 1, 7];

            function h(e, t) {
                var n;
                let i = o.default.getGuilds(),
                    l = Object.entries(i).some(e => {
                        let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), a = n.hasFeature(g.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return i && a
                    });
                if (l || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let u = null === (n = r.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    E = null != u ? s.Timestamp.toDate(u) : void 0,
                    h = null != E ? a().diff(E, "days") : null,
                    S = m.indexOf(t);
                if (-1 === S) return !1;
                let p = null == h || h > _[S];
                if (!p) return !1;
                let T = m.find(e => !(0, d.isDismissibleContentDismissed)(e)) === t;
                if (!T) return !1;
                let {
                    showLifecycleUpsells: A
                } = c.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: l || !(0, f.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                });
                return A
            }

            function S(e, t) {
                let n = s.Timestamp.now();
                u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
                    e.guildOnboardingUpsellDismissedAt = n
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, d.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: E.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }