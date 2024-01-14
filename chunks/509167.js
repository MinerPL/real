"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("748820"),
  l = n("77078"),
  i = n("112679"),
  r = n("55689"),
  o = n("599110"),
  u = n("49111");

function d(e) {
  let {
    applicationId: t,
    skuId: d,
    onClose: c,
    onComplete: f,
    analyticsLocations: m,
    analyticsLocationObject: E,
    contextKey: _
  } = e, h = !1, p = (0, s.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("405314").then(n.bind(n, "405314"));
    return n => {
      let {
        onClose: s,
        ...l
      } = n;
      return (0, a.jsx)(e, {
        ...l,
        loadId: p,
        applicationId: t,
        skuId: d,
        analyticsLocations: m,
        analyticsLocationObject: E,
        onClose: e => {
          s(), null == c || c(e)
        },
        onComplete: e => {
          h = !0, null == f || f(e)
        }
      })
    }
  }, {
    contextKey: _,
    onCloseCallback: () => {
      !h && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: p,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: E,
        is_gift: !1,
        application_id: t,
        location_stack: m
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == c || c(h)
    },
    onCloseRequest: u.NOOP
  })
}