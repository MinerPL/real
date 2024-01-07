            "use strict";
            n.r(e), n.d(e, {
                STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
                    return d
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983");
            n("884691");
            var i = n("812204"),
                o = n("685665"),
                u = n("635357"),
                a = n("642906"),
                c = n("385179"),
                l = n("292215"),
                s = n("843455");

            function f(t) {
                let {
                    onClose: e,
                    onComplete: n,
                    transitionState: i,
                    loadId: u,
                    applicationId: l,
                    analyticsLocationObject: s,
                    skuId: f
                } = t, {} = (0, a.usePaymentContext)(), {
                    analyticsLocations: d
                } = (0, o.default)();
                return (0, r.jsx)(c.PaymentModal, {
                    onClose: e,
                    onComplete: n,
                    loadId: u,
                    applicationId: l,
                    skuId: f,
                    initialPlanId: null,
                    analyticsObject: s,
                    analyticsLocations: d,
                    transitionState: i
                })
            }
            let d = [l.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, l.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...l.SHARED_STEP_CONFIGS, l.REVIEW_STEP_CONFIG, l.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

            function p(t) {
                let {
                    applicationId: e,
                    skuId: n,
                    analyticsLocations: c
                } = t, {
                    AnalyticsLocationProvider: l
                } = (0, o.default)(c, i.default.PREMIUM_PAYMENT_MODAL);
                return (0, r.jsx)(l, {
                    children: (0, r.jsx)(a.PaymentContextProvider, {
                        stepConfigs: d,
                        applicationId: e,
                        skuIDs: [n],
                        activeSubscription: null,
                        purchaseType: s.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(u.GiftContextProvider, {
                            children: (0, r.jsx)(f, {
                                ...t
                            })
                        })
                    })
                })
            }