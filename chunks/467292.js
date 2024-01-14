"use strict";
n.r(e), n.d(e, {
  PurchaseTokenAuthState: function() {
    return i
  },
  default: function() {
    return _
  }
});
var u, i, r = n("446674"),
  l = n("913144"),
  a = n("736978"),
  o = n("619443");
(u = i || (i = {}))[u.UNKNOWN = 0] = "UNKNOWN", u[u.PENDING = 1] = "PENDING", u[u.SUCCESS = 2] = "SUCCESS", u[u.ERROR = 3] = "ERROR";
let s = 0,
  c = null,
  S = null;

function d(t) {
  let {
    error: e
  } = t, n = e instanceof a.default ? e : new a.default(e);
  o.default.isConnected() && n.code === a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = 1)
}

function E() {
  s = 0, c = null, S = null
}
class f extends r.default.Store {
  get purchaseTokenAuthState() {
    return s
  }
  get purchaseTokenHash() {
    return c
  }
  get expiresAt() {
    return S
  }
}
f.displayName = "PurchaseTokenAuthStore";
var _ = new f(l.default, {
  SKU_PURCHASE_FAIL: d,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
  USER_PAYMENT_CLIENT_ADD: function(t) {
    s = 2, c = t.purchaseTokenHash, S = t.expiresAt
  },
  BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: E,
  BILLING_SUBSCRIPTION_UPDATE_START: E,
  PAYMENT_AUTHENTICATION_CLEAR_ERROR: E,
  PREMIUM_PAYMENT_ERROR_CLEAR: E,
  PREMIUM_PAYMENT_MODAL_CLOSE: E,
  PREMIUM_PAYMENT_MODAL_OPEN: E,
  PREMIUM_PAYMENT_SUBSCRIBE_START: E,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: E,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: E,
  SKU_PURCHASE_MODAL_CLOSE: E,
  SKU_PURCHASE_MODAL_OPEN: E,
  SKU_PURCHASE_START: E,
  SKU_PURCHASE_SUCCESS: E
})