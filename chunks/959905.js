            "use strict";
            r.r(t), r.d(t, {
                useLocalizedPromoQuery: function() {
                    return s
                }
            });
            var n = r("446674"),
                i = r("160299");

            function s() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, n.useStateFromStoresObject)([i.default], () => ({
                    localizedPricingPromo: i.default.localizedPricingPromo,
                    hasError: i.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }