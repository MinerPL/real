"use strict";
n.r(t), n.d(t, {
  useUnsupportedExternalSubscriptionModalHandler: function() {
    return d
  },
  useSubscriptionEntitlements: function() {
    return _
  }
});
var l = n("884691"),
  u = n("446674"),
  a = n("404118"),
  i = n("10514"),
  s = n("437712"),
  r = n("719923"),
  o = n("843455"),
  c = n("782340");

function d(e, t, n) {
  l.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (a.default.show({
      title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
      }),
      body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
        subscriptionManagementLink: (0, r.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: c.default.Messages.OKAY
    }), t())
  }, [e])
}
let f = [];

function _(e, t) {
  let n = (0, u.useStateFromStores)([i.default], () => null != e ? i.default.get(e) : null),
    a = (0, u.useStateFromStores)([s.default], () => {
      var e;
      return null != n && null !== (e = s.default.getForSku(n.skuId)) && void 0 !== e ? e : f
    }),
    o = l.useMemo(() => Array.from(a).filter(e => {
      let {
        parentId: t,
        consumed: n
      } = e;
      return null != t && !n
    }), [a]),
    c = !t && null != n && null != o && o.length >= r.default.getIntervalMonths(n.interval, n.intervalCount);
  return {
    hasEntitlements: c,
    entitlements: o
  }
}