"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return i
  },
  closeModal: function() {
    return r
  }
});
var a = n("913144"),
  s = n("521012"),
  l = n("850068");
async function i(e) {
  return null == s.default.getPremiumSubscription() && await l.fetchSubscriptions(), new Promise((t, n) => {
    a.default.dispatch({
      type: "PREMIUM_REQUIRED_MODAL_OPEN",
      context: e,
      resolve: t,
      reject: n
    })
  })
}

function r(e) {
  a.default.dispatch({
    type: "PREMIUM_REQUIRED_MODAL_CLOSE",
    shouldContinue: e
  })
}