            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return r
                }
            });
            var i = n("446674"),
                s = n("160299");

            function r() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, i.useStateFromStoresObject)([s.default], () => ({
                    localizedPricingPromo: s.default.localizedPricingPromo,
                    hasError: s.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }