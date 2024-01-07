            "use strict";
            r.r(t), r.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return s
                }
            });
            var n = r("759843"),
                i = r("428958");

            function s(e, t) {
                (0, i.default)({
                    type: n.ImpressionTypes.VIEW,
                    name: n.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }