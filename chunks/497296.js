            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("626301"),
                l = n("552917"),
                o = n("843647"),
                a = n("789946"),
                u = n("646718"),
                s = n("49111"),
                d = n("782340"),
                c = n("718116"),
                f = n("431036");

            function E(e) {
                let {
                    onClose: t,
                    analyticsSource: n,
                    onLearnMore: E,
                    ..._
                } = e;

                function p() {
                    null == E || E(), t(), (0, r.navigateToPremiumMarketingPage)()
                }
                let {
                    isLoading: S,
                    suggestedPremiumType: T
                } = (0, o.default)({
                    autoTrackExposure: !0,
                    experiment: l.default,
                    location: "video_backgrounds_upsell"
                }), h = T === u.PremiumTypes.TIER_0 ? u.PremiumSubscriptionSKUs.TIER_0 : u.PremiumSubscriptionSKUs.TIER_2, I = h === u.PremiumSubscriptionSKUs.TIER_0 ? d.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                    onLearnMore: p
                }) : d.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                    onLearnMore: p
                });
                return (0, i.jsx)(a.default, {
                    artURL: f,
                    artContainerClassName: c.videoBackgroundArt,
                    type: u.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
                    title: d.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: I,
                    glowUp: I,
                    analyticsSource: n,
                    analyticsLocation: {
                        page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: s.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: t,
                    subscriptionTier: h,
                    isLoading: S,
                    ..._
                })
            }