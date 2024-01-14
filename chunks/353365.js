"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("446674"),
  i = n("913144"),
  r = n("448993");
let a = null,
  o = null,
  d = null;

function u(e) {
  let {
    error: t
  } = e;
  a = t
}

function l() {
  a = null
}
class f extends s.default.Store {
  get paymentError() {
    return a
  }
  getGiftCode(e) {
    return e === d ? o : null
  }
}
f.displayName = "PremiumPaymentModalStore";
var _ = new f(i.default, {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
  PREMIUM_PAYMENT_UPDATE_FAIL: u,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
    l()
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: l,
  PREMIUM_PAYMENT_ERROR_CLEAR: l,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
    let {
      message: t,
      code: n
    } = e;
    a = new r.BillingError(t, n)
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
    let {
      message: t,
      code: n
    } = e;
    a = new r.BillingError(t, n)
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    o = e.giftCode, d = e.skuId
  },
  SKU_PURCHASE_FAIL: function(e) {
    a = e.error
  },
  SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
    e.isGift && (d = e.skuId)
  },
  GIFT_CODE_CREATE: function(e) {
    let {
      giftCode: t
    } = e;
    if (0 !== t.uses || t.sku_id !== d) return !1;
    o = t.code
  }
})