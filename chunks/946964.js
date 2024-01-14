"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983");
a("884691");
var s = a("748820"),
  r = a("77078"),
  n = a("112679"),
  o = a("55689"),
  i = a("21526"),
  u = a("599110"),
  c = a("49111");

function d(e) {
  let {
    skuId: t,
    isGift: d = !1,
    giftMessage: f,
    onClose: C,
    onComplete: E,
    analyticsLocations: m,
    analyticsObject: p
  } = e, g = !1, h = (0, s.v4)();
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("894742").then(a.bind(a, "894742"));
    return a => {
      let {
        onClose: s,
        returnRef: r,
        ...n
      } = a;
      return (0, l.jsx)(e, {
        ...n,
        loadId: h,
        skuId: t,
        isGift: d,
        giftMessage: f,
        analyticsLocations: m,
        onClose: e => {
          s(), null == C || C(e)
        },
        onComplete: () => {
          g = !0, null == E || E()
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
        location_stack: m
      }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == C || C(g), g && (0, i.fetchCollectiblesPurchases)()
    },
    onCloseRequest: c.NOOP
  })
}