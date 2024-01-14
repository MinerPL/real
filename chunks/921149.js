"use strict";
n.r(t), n.d(t, {
  useIsPrepaidPaymentPastDue: function() {
    return f
  }
});
var s = n("866227"),
  r = n.n(s),
  l = n("446674"),
  i = n("357957"),
  a = n("10514"),
  u = n("521012"),
  o = n("719923"),
  c = n("49111"),
  d = n("843455");

function f() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    t = (0, l.useStateFromStores)([a.default], () => null != e && null != e.planIdFromItems ? a.default.get(null == e ? void 0 : e.planIdFromItems) : null),
    n = (0, l.useStateFromStores)([i.default], () => null != e && null != e.paymentSourceId ? i.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
    f = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? r().diff(r(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && s && f >= 0 && f <= (0, o.getBillingGracePeriodDays)(e) && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
}