            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return l
                },
                getHighestLikelihood: function() {
                    return a
                }
            });
            var i = n("716849"),
                r = n("646718");

            function l(e, t, n) {
                return null == e ? r.PremiumTypes.TIER_2 : e[r.PremiumSubscriptionSKUs.TIER_0] * t > e[r.PremiumSubscriptionSKUs.TIER_2] * n ? r.PremiumTypes.TIER_0 : r.PremiumTypes.TIER_2
            }

            function a(e) {
                if (null == e) return r.PremiumTypes.TIER_0;
                let t = e[i.NON_SUBSCRIBER_SENTINEL],
                    n = e[r.PremiumSubscriptionSKUs.TIER_0],
                    l = e[r.PremiumSubscriptionSKUs.TIER_2];
                return l > n && l > t ? r.PremiumTypes.TIER_2 : r.PremiumTypes.TIER_0
            }