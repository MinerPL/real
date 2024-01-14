"use strict";
s.r(t), s.d(t, {
  useIsPrepaidPaymentPastDue: function() {
    return S
  }
});
var a = s("866227"),
  n = s.n(a),
  l = s("446674"),
  i = s("357957"),
  r = s("10514"),
  o = s("521012"),
  d = s("719923"),
  u = s("49111"),
  c = s("843455");

function S() {
  let e = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
    t = (0, l.useStateFromStores)([r.default], () => null != e && null != e.planIdFromItems ? r.default.get(null == e ? void 0 : e.planIdFromItems) : null),
    s = (0, l.useStateFromStores)([i.default], () => null != e && null != e.paymentSourceId ? i.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    a = null != s && c.PREPAID_PAYMENT_SOURCES.has(s.type),
    S = (null == e ? void 0 : e.status) === u.SubscriptionStatusTypes.PAST_DUE ? n().diff(n(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, d.isPremiumBaseSubscriptionPlan)(t.id)) && a && S >= 0 && S <= (0, d.getBillingGracePeriodDays)(e) && e.status === u.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
}