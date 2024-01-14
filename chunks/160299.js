"use strict";
let i, r, s, a;
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var o = n("446674"),
  l = n("913144"),
  u = n("519023"),
  c = n("49111");
let d = !1,
  f = !1,
  E = !1,
  h = !1,
  p = !1,
  _ = null,
  S = null,
  m = !1,
  T = !1;

function g() {
  d = !1
}

function I() {
  i = void 0
}

function C() {
  h = !1
}

function v() {
  p = !0
}

function A() {
  p = !1
}
class R extends o.default.Store {
  get isBusy() {
    return d || f || p || E
  }
  get isUpdatingPaymentSource() {
    return f
  }
  get isRemovingPaymentSource() {
    return E
  }
  get isSyncing() {
    return this.isPaymentSourceFetching || this.isSubscriptionFetching
  }
  get isSubscriptionFetching() {
    return h
  }
  get isPaymentSourceFetching() {
    return null != i
  }
  get editSourceError() {
    return _
  }
  get removeSourceError() {
    return S
  }
  get ipCountryCodeLoaded() {
    return void 0 !== r
  }
  get ipCountryCode() {
    return r
  }
  get ipCountryCodeRequest() {
    return s
  }
  get ipCountryCodeWithFallback() {
    return null != r ? r : c.FallbackCurrencyCountry
  }
  get ipCountryCodeHasError() {
    return m
  }
  get paymentSourcesFetchRequest() {
    return i
  }
  get localizedPricingPromo() {
    return a
  }
  get localizedPricingPromoHasError() {
    return T
  }
  get isLocalizedPromoEnabled() {
    return null != a
  }
}
R.displayName = "BillingInfoStore";
var N = new R(l.default, {
  BILLING_PAYMENT_SOURCE_CREATE_START: function() {
    d = !0
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: g,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: g,
  STRIPE_TOKEN_FAILURE: g,
  BILLING_PAYMENT_SOURCE_REMOVE_START: function() {
    E = !0
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function() {
    E = !1
  },
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function(e) {
    let {
      error: t
    } = e;
    E = !1, S = t
  },
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function() {
    S = null
  },
  BILLING_PAYMENT_SOURCE_UPDATE_START: function() {
    f = !0
  },
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function() {
    f = !1
  },
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function(e) {
    let {
      error: t
    } = e;
    f = !1, _ = t
  },
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function() {
    _ = null
  },
  BILLING_PAYMENT_SOURCES_FETCH_START: function(e) {
    let {
      request: t
    } = e;
    i = t
  },
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: I,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: I,
  BILLING_SUBSCRIPTION_FETCH_START: function() {
    h = !0
  },
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
  BILLING_SUBSCRIPTION_FETCH_FAIL: C,
  BILLING_SUBSCRIPTION_UPDATE_START: v,
  BILLING_SUBSCRIPTION_CANCEL_START: v,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: A,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: A,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: A,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: A,
  BILLING_IP_COUNTRY_CODE_FETCH_START: function(e) {
    let {
      request: t
    } = e;
    s = t
  },
  BILLING_SET_IP_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    r = t
  },
  BILLING_IP_COUNTRY_CODE_FAILURE: function() {
    r = null, m = !0
  },
  BILLING_SET_LOCALIZED_PRICING_PROMO: function(e) {
    let {
      localizedPricingPromo: t
    } = e;
    a = u.LocalizedPricingPromoRecord.createFromServer(t)
  },
  BILLING_LOCALIZED_PRICING_PROMO_FAILURE: function() {
    a = null, T = !0
  },
  LOGOUT: function() {
    i = void 0, s = void 0, r = void 0, m = !1, a = null, S = null, _ = null
  },
  CONNECTION_OPEN: e => {
    let {
      countryCode: t
    } = e;
    null != t && (r = t)
  }
})