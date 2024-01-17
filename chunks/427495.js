"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return i
  },
  closeModal: function() {
    return r
  }
});
var s = n("913144"),
  l = n("521012"),
  a = n("850068");
async function i(e) {
  return null == l.default.getPremiumSubscription() && await a.fetchSubscriptions(), new Promise((t, n) => {
    s.default.dispatch({
      type: "PREMIUM_REQUIRED_MODAL_OPEN",
      context: e,
      resolve: t,
      reject: n
    })
  })
}

function r(e) {
  s.default.dispatch({
    type: "PREMIUM_REQUIRED_MODAL_CLOSE",
    shouldContinue: e
  })
}