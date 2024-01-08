            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("626301"),
                a = n("552917"),
                i = n("843647"),
                o = n("789946"),
                l = n("646718"),
                s = n("49111"),
                c = n("782340"),
                d = n("718116"),
                f = n("431036");

            function E(t) {
                let {
                    onClose: e,
                    analyticsSource: n,
                    onLearnMore: E,
                    ..._
                } = t;

                function T() {
                    null == E || E(), e(), (0, u.navigateToPremiumMarketingPage)()
                }
                let {
                    isLoading: p,
                    suggestedPremiumType: S
                } = (0, i.default)({
                    autoTrackExposure: !0,
                    experiment: a.default,
                    location: "video_backgrounds_upsell"
                }), A = S === l.PremiumTypes.TIER_0 ? l.PremiumSubscriptionSKUs.TIER_0 : l.PremiumSubscriptionSKUs.TIER_2, C = A === l.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                    onLearnMore: T
                }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                    onLearnMore: T
                });
                return (0, r.jsx)(o.default, {
                    artURL: f,
                    artContainerClassName: d.videoBackgroundArt,
                    type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
                    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: C,
                    glowUp: C,
                    analyticsSource: n,
                    analyticsLocation: {
                        page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: s.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: e,
                    subscriptionTier: A,
                    isLoading: p,
                    ..._
                })
            }