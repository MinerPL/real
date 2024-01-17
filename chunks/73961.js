"use strict";
n.r(t), n.d(t, {
  openPurchaseConfirmationModal: function() {
    return a
  },
  closePurchaseConfirmationModal: function() {
    return i
  }
});
var s = n("913144"),
  l = n("49111");

function a(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  return new Promise((i, r) => {
    s.default.dispatch({
      type: "PURCHASE_CONFIRMATION_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      entitlements: n,
      context: null != a.context ? a.context : l.AppContext.APP,
      analyticsSource: a.analyticsSource,
      resolve: i,
      reject: r
    })
  })
}

function i() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  s.default.dispatch({
    type: "PURCHASE_CONFIRMATION_MODAL_CLOSE",
    error: e
  })
}