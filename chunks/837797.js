            "use strict";
            s.r(t), s.d(t, {
                useResponseOnUserState: function() {
                    return o
                }
            });
            var a = s("446674"),
                n = s("521012"),
                r = s("719923"),
                l = s("154889"),
                i = s("917247"),
                u = s("646718");

            function o(e) {
                let {
                    defaultResponse: t,
                    onDiscountOffer: s,
                    onNonSubscriber: o,
                    onTier0TrialOffer: d,
                    onTier2TrialOffer: c,
                    onTier0TrialPeriod: _,
                    onTier2TrialPeriod: E,
                    onNonTier2Subscriber: I,
                    onTier2Subscriber: f,
                    onCustomCriteria: T
                } = e, S = (0, i.usePremiumTrialOffer)(), R = (0, l.usePremiumDiscountOffer)(), p = (0, a.useStateFromStores)([n.default], () => n.default.getPremiumTypeSubscription()), A = r.default.getPremiumTypeFromSubscription(p);
                if (null != T) {
                    let e = T();
                    if (null != e) return e
                }
                return null != S && (0, u.SubscriptionTrials)[S.trial_id].skus.includes(u.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, u.SubscriptionTrials)[S.trial_id].skus.includes(u.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != p && null != p.trialId && A === u.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != p && null != p.trialId && A === u.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == A ? null != o ? o : t : A === u.PremiumTypes.TIER_0 || A === u.PremiumTypes.TIER_1 ? null != I ? I : t : A === u.PremiumTypes.TIER_2 ? null != f ? f : t : t
            }