            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("748820"),
                r = l("77078"),
                n = l("112679"),
                o = l("55689"),
                i = l("21526"),
                u = l("599110"),
                c = l("49111");

            function d(e) {
                let {
                    skuId: t,
                    isGift: d = !1,
                    giftMessage: f,
                    onClose: C,
                    onComplete: m,
                    analyticsLocations: E,
                    analyticsObject: p
                } = e, g = !1, h = (0, s.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("894742").then(l.bind(l, "894742"));
                    return l => {
                        let {
                            onClose: s,
                            returnRef: r,
                            ...n
                        } = l;
                        return (0, a.jsx)(e, {
                            ...n,
                            loadId: h,
                            skuId: t,
                            isGift: d,
                            giftMessage: f,
                            analyticsLocations: E,
                            onClose: e => {
                                s(), null == C || C(e)
                            },
                            onComplete: () => {
                                g = !0, null == m || m()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !g && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: h,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
                            location: p,
                            is_gift: !1,
                            location_stack: E
                        }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == C || C(g), g && (0, i.fetchCollectiblesPurchases)()
                    },
                    onCloseRequest: c.NOOP
                })
            }