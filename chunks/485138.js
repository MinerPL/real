            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return i
                }
            });
            var s = n("759843"),
                r = n("428958");

            function i(e, t) {
                (0, r.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }