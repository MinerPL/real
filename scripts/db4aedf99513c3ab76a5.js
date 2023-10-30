(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99569"], {
        239381: function(t, e, n) {
            "use strict";
            t.exports = n.p + "a7331a4d7e1bd4a9b4b2.png"
        },
        754534: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("349171"),
                c = n("626301"),
                i = n("789946"),
                o = n("599110"),
                u = n("49111"),
                l = n("646718"),
                _ = n("782340");
            let r = n("239381");

            function d(t) {
                let {
                    onClose: e,
                    onCloseParent: n,
                    analyticsSource: d,
                    ...f
                } = t, E = __OVERLAY__ ? _.default.Messages.STREAM_PREMIUM_UPSELL_BODY_NO_CTA : _.default.Messages.STREAM_PREMIUM_UPSELL_BODY.format({
                    onPressMore: function() {
                        (0, a.default)(), e(), null == n || n(), o.default.track(u.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_section: u.AnalyticsSections.STREAM_UPSELL_MODAL,
                            location_object: u.AnalyticsObjects.NAVIGATION_LINK
                        }), (0, c.navigateToPremiumMarketingPage)()
                    }
                });
                return (0, s.jsx)(i.default, {
                    title: _.default.Messages.STREAM_PREMIUM_UPSELL_HEADER,
                    glowUp: E,
                    body: E,
                    artURL: r,
                    type: l.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
                    analyticsLocation: {
                        section: u.AnalyticsSections.STREAM_UPSELL_MODAL,
                        object: u.AnalyticsObjects.BUTTON_CTA
                    },
                    analyticsSource: d,
                    onClose: e,
                    onSubscribeClick: a.default,
                    ...f
                })
            }
        },
        349171: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var s = n("773336"),
                a = n("50885");

            function c(t) {
                s.isPlatformEmbedded ? a.default.focus(t) : window.focus()
            }
        }
    }
]);