            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return s
                }
            });
            var r = n("759843"),
                i = n("428958");

            function s(e, t) {
                (0, i.default)({
                    type: r.ImpressionTypes.VIEW,
                    name: r.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }