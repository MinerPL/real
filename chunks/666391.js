            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("635357"),
                i = n("49111");

            function r(e) {
                let {
                    initialPlanId: t,
                    activeSubscription: r,
                    trialId: u,
                    trialFooterMessageOverride: o,
                    onClose: d,
                    analyticsObject: c,
                    analyticsLocation: f,
                    analyticsLocations: h,
                    analyticsSubscriptionType: p,
                    renderHeader: m,
                    renderPurchaseConfirmation: E,
                    planGroup: C,
                    reviewWarningMessage: g,
                    skuId: S
                } = e;
                (0, l.openModalLazy)(async () => {
                    let {
                        PaymentContextProvider: e
                    } = await n.el("642906").then(n.bind(n, "642906")), {
                        PaymentModal: l
                    } = await n.el("385179").then(n.bind(n, "385179")), {
                        STEPS: i
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: _,
                            ...I
                        } = n;
                        return (0, a.jsx)(e, {
                            activeSubscription: r,
                            stepConfigs: i,
                            skuIDs: [S],
                            children: (0, a.jsx)(s.GiftContextProvider, {
                                children: (0, a.jsx)(l, {
                                    ...I,
                                    initialPlanId: t,
                                    onClose: e => {
                                        _(), null == d || d(e)
                                    },
                                    analyticsLocations: h,
                                    analyticsObject: c,
                                    analyticsLocation: f,
                                    analyticsSubscriptionType: p,
                                    skuId: S,
                                    renderHeader: m,
                                    renderPurchaseConfirmation: E,
                                    planGroup: C,
                                    trialId: u,
                                    trialFooterMessageOverride: o,
                                    reviewWarningMessage: g
                                })
                            })
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        null == d || d(!1)
                    },
                    onCloseRequest: i.NOOP
                })
            }