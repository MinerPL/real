            "use strict";
            n.r(t), n.d(t, {
                useIsInPremiumOfferExperience: function() {
                    return d
                },
                useHasDiscountApplied: function() {
                    return c
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("446674"),
                a = n("521012"),
                s = n("324878"),
                o = n("154889"),
                u = n("917247");

            function d() {
                let e = (0, u.usePremiumTrialOffer)(),
                    t = (0, s.useHasActiveTrial)(),
                    n = (0, o.usePremiumDiscountOffer)(),
                    i = c();
                return null != e || t || null != n || i
            }
            let c = () => {
                var e;
                let t = (0, l.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at;
                return null != n && r(Date.now()) <= r(n)
            }