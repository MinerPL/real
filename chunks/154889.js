            "use strict";
            e.r(t), e.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return o
                }
            }), e("222007");
            var L = e("884691"),
                r = e("446674"),
                n = e("862337"),
                s = e("697218"),
                u = e("340412"),
                i = e("719923"),
                l = e("646718");

            function a(C) {
                return null != C && null != C.expires_at && Date.now() > Date.parse(C.expires_at)
            }

            function d(C, t) {
                var e;
                if (null == C) return !1;
                let L = new Set(null === (e = C.discount) || void 0 === e ? void 0 : e.plan_ids.map(C => l.SubscriptionPlanInfo[C].skuId));
                return L.has(t)
            }

            function o() {
                let C = (0, r.useStateFromStores)([u.default], () => u.default.getUserDiscountOffer(l.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, e] = L.useState(a(C)),
                    d = (0, r.useStateFromStores)([s.default], () => (0, i.isPremium)(s.default.getCurrentUser()));
                return L.useEffect(() => {
                    if (null == C || null == C.expires_at) return;
                    let L = new n.Timeout,
                        r = () => {
                            let n = null != C.expires_at ? Date.parse(C.expires_at) - Date.now() : 0;
                            null == L || L.start(n, () => {
                                !t && a(C) ? e(!0) : r()
                            })
                        };
                    return r(), () => L.stop()
                }, [t, C]), t || d ? null : C
            }