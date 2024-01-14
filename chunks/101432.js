"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  l = n("245187"),
  s = n("10514"),
  u = n("599110"),
  a = n("719923"),
  o = n("635357"),
  c = n("642906"),
  d = n("628738"),
  f = n("49111");

function I(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: I,
    setAnalyticsData: _,
    handleClose: E
  } = e, {
    blockedPayments: S,
    setStep: T,
    hasFetchedSubscriptions: N,
    hasFetchedSubscriptionPlans: p,
    currencyLoading: m,
    selectedSkuId: C,
    setSelectedSkuId: h,
    setSelectedPlanId: P,
    priceOptions: L,
    setSubscriptionMetadataRequest: A
  } = (0, c.usePaymentContext)(), {
    isGift: v
  } = (0, o.useGiftContext)(), [R, g] = i.useState(!N || !p || m);
  return (i.useEffect(() => {
    g(!N || !p || m)
  }, [m, p, N]), i.useEffect(() => {
    null != I && A({
      guild_id: I
    })
  }, [I, A]), i.useEffect(() => {
    P(n);
    let e = null != n ? s.default.get(n) : null;
    !R && !S && (_(t => {
      let n = null != e ? (0, a.getPrice)(e.id, !1, v, L) : void 0,
        r = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: L.currency
        };
      return u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, r), r
    }), null != e && (h(null == e ? void 0 : e.skuId), T(t)))
  }, [S, n, v, R, L, C, _, P, h, T, t]), R) ? (0, r.jsx)(d.default, {}) : S ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
    onClose: E
  }) : null
}