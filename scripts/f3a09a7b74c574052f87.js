(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93695"], {
        7115: function(t, e, n) {
            "use strict";
            t.exports = n.p + "939a6d418697a2811ab8.png"
        },
        532210: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("396053"),
                s = n("789946"),
                u = n("646718"),
                c = n("49111"),
                l = n("782340");

            function o(t) {
                let {
                    channel: e,
                    onClose: o,
                    ...r
                } = t, E = l.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
                    onLearnMore: function() {
                        o(), (0, i.navigateToPremiumMarketingPage)(!0)
                    }
                });
                return (0, a.jsx)(s.default, {
                    artURL: n("7115"),
                    type: u.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
                    title: l.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
                    body: E,
                    glowUp: E,
                    analyticsSource: {
                        page: function(t) {
                            return (null == t ? void 0 : t.getGuildId()) != null ? c.AnalyticsPages.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? c.AnalyticsPages.DM_CHANNEL : null
                        }(e)
                    },
                    analyticsLocation: {
                        section: c.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: c.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: o,
                    ...r
                })
            }
        }
    }
]);