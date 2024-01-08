            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return i
                }
            });
            var s = n("446674"),
                r = n("160299");

            function i() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, s.useStateFromStoresObject)([r.default], () => ({
                    localizedPricingPromo: r.default.localizedPricingPromo,
                    hasError: r.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }