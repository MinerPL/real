"use strict";

function i(e) {
  var t;
  return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
}

function r(e) {
  var t;
  return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.available_for_purchase) !== void 0
}
n.r(t), n.d(t, {
  isSubscriptionRole: function() {
    return i
  },
  isSubscriptionRoleAvailableForPurchase: function() {
    return r
  }
})