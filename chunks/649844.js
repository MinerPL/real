            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("748820"),
                l = n("77078"),
                o = n("112679"),
                s = n("55689"),
                a = n("676379"),
                u = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                E = n("49111"),
                _ = n("646718");

            function p(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: C,
                    onComplete: I,
                    onSubscriptionConfirmation: A,
                    analyticsLocations: T,
                    analyticsObject: R,
                    analyticsLocation: h,
                    analyticsSourceLocation: S,
                    isGift: N = !1,
                    giftMessage: m,
                    subscriptionTier: g,
                    trialId: P,
                    postSuccessGuild: O,
                    openInvoiceId: v,
                    applicationId: L,
                    referralTrialOfferId: U,
                    giftRecipient: M,
                    returnRef: y,
                    subscription: D
                } = null != e ? e : {}, w = !1, x = (0, i.v4)(), G = u.default.getCurrentUser(), b = (0, f.isPremiumExactly)(G, _.PremiumTypes.TIER_2);
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...l
                        } = n;
                        return (0, r.jsx)(e, {
                            ...l,
                            loadId: x,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: N,
                            giftMessage: m,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: p,
                            onClose: (e, t) => {
                                i(), null == C || C(e), e && (null == A || A(), !N && null != t && t === _.PremiumSubscriptionSKUs.TIER_2 && !b && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                w = !0, null == I || I(), !N && (0, a.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: T,
                            analyticsObject: R,
                            analyticsLocation: h,
                            analyticsSourceLocation: S,
                            trialId: P,
                            postSuccessGuild: O,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: v,
                            applicationId: L,
                            referralTrialOfferId: U,
                            returnRef: y,
                            subscription: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !w && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: x,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : R,
                            source: S,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != P,
                            application_id: L,
                            location_stack: T
                        }), (0, o.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == C || C(w), w && (null == A || A())
                    }
                })
            }