            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return I
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("404118"),
                s = n("10514"),
                a = n("437712"),
                u = n("719923"),
                o = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                r.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (l.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, u.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function I(e, t) {
                let n = (0, i.useStateFromStores)([s.default], () => null != e ? s.default.get(e) : null),
                    l = (0, i.useStateFromStores)([a.default], () => {
                        var e;
                        return null != n && null !== (e = a.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    o = r.useMemo(() => Array.from(l).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [l]),
                    c = !t && null != n && null != o && o.length >= u.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }