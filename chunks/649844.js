            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("748820"),
                a = l("77078"),
                i = l("112679"),
                u = l("55689"),
                r = l("676379"),
                o = l("697218"),
                c = l("599110"),
                d = l("659500"),
                f = l("719923"),
                T = l("49111"),
                _ = l("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: p,
                    onComplete: S,
                    onSubscriptionConfirmation: m,
                    analyticsLocations: I,
                    analyticsObject: P,
                    analyticsLocation: C,
                    analyticsSourceLocation: M,
                    isGift: R = !1,
                    giftMessage: N,
                    subscriptionTier: L,
                    trialId: A,
                    postSuccessGuild: U,
                    openInvoiceId: h,
                    applicationId: O,
                    referralTrialOfferId: y,
                    giftRecipient: b,
                    returnRef: v,
                    subscription: x
                } = null != e ? e : {}, g = !1, B = (0, s.v4)(), j = o.default.getCurrentUser(), D = (0, f.isPremiumExactly)(j, _.PremiumTypes.TIER_2);
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("646139").then(l.bind(l, "646139"));
                    return l => {
                        let {
                            onClose: s,
                            ...a
                        } = l;
                        return (0, n.jsx)(e, {
                            ...a,
                            loadId: B,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: R,
                            giftMessage: N,
                            giftRecipient: b,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: (e, t) => {
                                s(), null == p || p(e), e && (null == m || m(), !R && null != t && t === _.PremiumSubscriptionSKUs.TIER_2 && !D && d.ComponentDispatch.dispatch(T.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                g = !0, null == S || S(), !R && (0, r.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: m,
                            analyticsLocations: I,
                            analyticsObject: P,
                            analyticsLocation: C,
                            analyticsSourceLocation: M,
                            trialId: A,
                            postSuccessGuild: U,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: h,
                            applicationId: O,
                            referralTrialOfferId: y,
                            returnRef: v,
                            subscription: x
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !g && c.default.track(T.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: B,
                            payment_type: T.PurchaseTypeToAnalyticsPaymentType[T.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : P,
                            source: M,
                            subscription_type: T.SubscriptionTypes.PREMIUM,
                            is_gift: R,
                            eligible_for_trial: null != A,
                            application_id: O,
                            location_stack: I
                        }), (0, i.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == p || p(g), g && (null == m || m())
                    }
                })
            }