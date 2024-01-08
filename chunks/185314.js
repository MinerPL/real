            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("151426"),
                l = n("77078"),
                r = n("997289"),
                o = n("685665"),
                u = n("369964"),
                d = n("649844"),
                c = n("697218"),
                E = n("599110"),
                f = n("764364"),
                _ = n("56947"),
                h = n("49111"),
                C = n("994428"),
                I = n("646718"),
                T = n("782340"),
                S = n("150119"),
                N = function(e) {
                    let {
                        markAsDismissed: t
                    } = e, n = (0, _.useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark)({
                        autoTrackExposure: !0
                    }), N = (0, r.useAnalyticsContext)(), {
                        analyticsLocations: A
                    } = (0, o.default)(), m = c.default.getCurrentUser(), p = (0, f.isPremium)(m);
                    return s.useEffect(() => {
                        n && !p && E.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: I.PremiumUpsellTypes.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL,
                            location: N.location,
                            location_stack: A
                        })
                    }, [n, p, N.location, A]), n ? (0, a.jsx)(u.default, {
                        dismissibleContent: i.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK,
                        contentClassName: S.container,
                        isPremiumEarlyAccess: !0,
                        shouldUseHorizontalButtons: !0,
                        inlineArt: !0,
                        artClassName: S.clipsArt,
                        position: "right",
                        header: T.default.Messages.CLIPS_NITRO_EA_ANNOUNCEMENT_COACHMARK_TITLE,
                        headerClassName: S.clipsEducationHeader,
                        body: (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: T.default.Messages.CLIPS_NITRO_EA_ANNOUNCEMENT_COACHMARK_BODY
                        }),
                        tryItText: p ? void 0 : T.default.Messages.CLIPS_NITRO_EA_ANNOUNCEMENT_COACHMARK_CTA_NON_SUBS,
                        onTryFeature: p ? void 0 : () => {
                            (0, d.default)({
                                subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: A
                            })
                        },
                        onClose: () => t(C.ContentDismissActionType.UNKNOWN)
                    }) : null
                }