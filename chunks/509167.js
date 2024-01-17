"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("748820"),
  a = n("77078"),
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
    analyticsLocations: E,
    analyticsLocationObject: _,
    contextKey: T
  } = e, I = !1, m = (0, l.v4)();
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("405314").then(n.bind(n, "405314"));
    return n => {
      let {
        onClose: l,
        ...a
      } = n;
      return (0, s.jsx)(e, {
        ...a,
        loadId: m,
        applicationId: t,
        skuId: d,
        analyticsLocations: E,
        analyticsLocationObject: _,
        onClose: e => {
          l(), null == c || c(e)
        },
        onComplete: e => {
          I = !0, null == f || f(e)
        }
      })
    }
  }, {
    contextKey: T,
    onCloseCallback: () => {
      !I && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: m,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: _,
        is_gift: !1,
        application_id: t,
        location_stack: E
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == c || c(I)
    },
    onCloseRequest: u.NOOP
  })
}