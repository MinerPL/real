            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                o = n("112679"),
                s = n("55689"),
                u = n("676379"),
                a = n("697218"),
                c = n("599110"),
                d = n("659500"),
                f = n("719923"),
                E = n("49111"),
                _ = n("646718");

            function p(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: I,
                    onComplete: S,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: T,
                    analyticsObject: N,
                    analyticsLocation: C,
                    analyticsSourceLocation: v,
                    isGift: g = !1,
                    giftMessage: m,
                    subscriptionTier: A,
                    trialId: L,
                    postSuccessGuild: U,
                    openInvoiceId: R,
                    applicationId: P,
                    referralTrialOfferId: y,
                    giftRecipient: D,
                    returnRef: O,
                    subscription: b
                } = null != e ? e : {}, w = !1, M = (0, l.v4)(), G = a.default.getCurrentUser(), x = (0, f.isPremiumExactly)(G, _.PremiumTypes.TIER_2);
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: M,
                            subscriptionTier: A,
                            skuId: A,
                            isGift: g,
                            giftMessage: m,
                            giftRecipient: D,
                            initialPlanId: t,
                            followupSKUInfo: p,
                            onClose: (e, t) => {
                                l(), null == I || I(e), e && (null == h || h(), !g && null != t && t === _.PremiumSubscriptionSKUs.TIER_2 && !x && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                w = !0, null == S || S(), !g && (0, u.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: T,
                            analyticsObject: N,
                            analyticsLocation: C,
                            analyticsSourceLocation: v,
                            trialId: L,
                            postSuccessGuild: U,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: P,
                            referralTrialOfferId: y,
                            returnRef: O,
                            subscription: b
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !w && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : N,
                            source: v,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != L,
                            application_id: P,
                            location_stack: T
                        }), (0, o.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == I || I(w), w && (null == h || h())
                    },
                    onCloseRequest: E.NOOP
                })
            }