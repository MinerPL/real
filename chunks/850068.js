"use strict";
n.r(t), n.d(t, {
  deletePaymentSource: function() {
    return R
  },
  updatePaymentSource: function() {
    return h
  },
  validatePaymentSourceBillingAddress: function() {
    return P
  },
  createAdyenPaymentSourceToken: function() {
    return m
  },
  createPaymentSource: function() {
    return y
  },
  dispatchConfirmationError: function() {
    return v
  },
  createCardToken: function() {
    return D
  },
  confirmEPS: function() {
    return U
  },
  confirmIdeal: function() {
    return M
  },
  confirmPrzelewy24: function() {
    return G
  },
  confirmSofort: function() {
    return w
  },
  confirmCardPaymentSource: function() {
    return B
  },
  createPaymentRequestPaymentSource: function() {
    return b
  },
  createBraintreePaymentSource: function() {
    return x
  },
  createStripePaymentSource: function() {
    return F
  },
  createAdyenPrepaidPaymentSource: function() {
    return V
  },
  createAdyenVaultablePaymentSource: function() {
    return H
  },
  createStripePaymentSourceToken: function() {
    return k
  },
  createPaymentSourceToken: function() {
    return K
  },
  fetchPaymentSources: function() {
    return Y
  },
  fetchPayment: function() {
    return q
  },
  fetchPayments: function() {
    return W
  },
  fetchSubscriptions: function() {
    return Z
  },
  getPerksRelevance: function() {
    return X
  },
  getNitroAffinity: function() {
    return J
  },
  fetchMostRecentSubscription: function() {
    return z
  },
  createSubscription: function() {
    return Q
  },
  payInvoiceManually: function() {
    return j
  },
  handleConfirmation: function() {
    return $
  },
  redirectedPaymentSucceeded: function() {
    return en
  },
  paymentIntentSucceeded: function() {
    return er
  },
  cancelSubscription: function() {
    return ea
  },
  deleteRenewalMutation: function() {
    return eo
  },
  updateSubscription: function() {
    return ed
  },
  resubscribeToSubscription: function() {
    return es
  },
  upgradeSubscription: function() {
    return eE
  },
  changeSubscriptionCurrency: function() {
    return e_
  },
  changePaymentSource: function() {
    return ec
  },
  clearUpdatePaymentSourceError: function() {
    return eI
  },
  clearRemovePaymentSourceError: function() {
    return eS
  },
  clearPaymentAuthenticationError: function() {
    return eT
  },
  voidPendingPayment: function() {
    return ef
  },
  refundPayment: function() {
    return ep
  },
  popupBridgeState: function() {
    return eN
  },
  popupBridgeCallback: function() {
    return eC
  },
  fetchIpCountryCode: function() {
    return eA
  },
  fetchLocalizedPromo: function() {
    return eR
  },
  resetPaymentIntentId: function() {
    return eh
  },
  resetSubscriptionStore: function() {
    return eO
  },
  startBrowserCheckout: function() {
    return eL
  }
}), n("70102");
var r = n("41092"),
  i = n("627445"),
  l = n.n(i),
  u = n("872717"),
  a = n("913144"),
  o = n("448993"),
  d = n("736978"),
  s = n("865146"),
  E = n("766274"),
  _ = n("160299"),
  c = n("599110"),
  I = n("745279"),
  S = n("719923"),
  T = n("224400"),
  f = n("520713"),
  p = n("49111"),
  N = n("422487"),
  C = n("843455"),
  A = n("782340");
async function R(e) {
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
  });
  try {
    await u.default.delete({
      url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
      oldFormErrors: !0
    }), a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS",
      id: e
    })
  } catch (t) {
    let e = new o.BillingError(t);
    throw a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL",
      error: e
    }), e
  }
}
async function h(e, t) {
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_UPDATE_START"
  });
  try {
    let {
      billingAddress: {
        line1: n,
        line2: r,
        postalCode: i,
        ...l
      }
    } = t, o = await u.default.patch({
      url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
      body: {
        billing_address: {
          ...l,
          line_1: n,
          line_2: r,
          postal_code: i
        },
        expires_month: t.expiresMonth,
        expires_year: t.expiresYear,
        default: t.isDefault
      }
    }), d = s.default.createFromServer(o.body);
    a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
      paymentSource: d
    })
  } catch (t) {
    let e = (0, d.parseV8BillingAddressSkemaErrorToBillingError)(t);
    throw a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
      error: e
    }), e
  }
}
async function O(e) {
  let t = await u.default.get({
      url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
      oldFormErrors: !0
    }),
    {
      stripe_payment_intent_client_secret: n
    } = t.body;
  return n
}
async function L(e) {
  let t = await u.default.get({
      url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
      oldFormErrors: !0
    }),
    {
      stripe_payment_intent_client_secret: n,
      stripe_payment_intent_payment_method_id: r
    } = t.body;
  return {
    clientSecret: n,
    paymentMethodId: r
  }
}
async function g() {
  let e = await u.default.post({
    url: p.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
    oldFormErrors: !0
  });
  return e.body.client_secret
}
async function P(e) {
  try {
    let t = await u.default.post({
      url: p.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
      body: {
        billing_address: {
          name: e.name,
          line_1: e.line1,
          line_2: e.line2,
          city: e.city,
          state: e.state,
          postal_code: e.postalCode,
          country: e.country,
          email: e.email
        }
      }
    });
    return t.body.token
  } catch (t) {
    let e = (0, d.parseV8BillingAddressSkemaErrorToBillingError)(t);
    throw a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
      error: e
    }), e
  }
}

function m(e) {
  var t;
  return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
    type: null !== (t = C.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
  })
}
async function y(e, t, n, r) {
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
  });
  try {
    let i = await u.default.post({
        url: p.Endpoints.BILLING_PAYMENT_SOURCES,
        query: {
          location: r.analyticsLocation
        },
        body: {
          payment_gateway: e,
          token: t,
          billing_address: {
            name: n.name,
            line_1: n.line1,
            line_2: n.line2,
            city: n.city,
            state: n.state,
            postal_code: n.postalCode,
            country: n.country,
            email: n.email
          },
          billing_address_token: r.billingAddressToken,
          bank: r.bank,
          return_url: r.returnUrl
        }
      }),
      l = s.default.createFromServer(i.body);
    return a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
      paymentSource: l
    }), l
  } catch (t) {
    let e = (0, d.parseV8BillingAddressSkemaErrorToBillingError)(t);
    throw function(e, t) {
      var n, r;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.adyen_redirect_url) && (e.fields.adyen_redirect_url = null == t ? void 0 : null === (r = t.body) || void 0 === r ? void 0 : r.adyen_redirect_url)
    }(e, t), e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
      error: e
    }), e
  }
}

function v(e) {
  var t, n;
  let r, i, l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    u = A.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
  if (t = e, N.StripeErrorTypes.includes(t.type)) {
    ;
    let t = null != e.message ? "".concat(u, ": ").concat(e.message) : u,
      a = {
        failure_message: t,
        error_type: e.type,
        failure_code: e.code,
        failure_sub_code: e.decline_code,
        payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
      };
    if (i = a, "card_error" === e.type) c.default.track(p.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
      ...a,
      stacktrace: Error().stack
    }), l = !1;
    r = new o.BillingError(t)
  } else i = {
    failure_message: (r = new o.BillingError("string" == typeof e ? u : e)).message,
    status_code: r.code
  }, 429 === r.code && (l = !1);
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
    error: r
  });
  let d = Error("string" == typeof e ? e : r.message);
  return l && (0, I.captureBillingException)(d, {
    extra: i
  }), d
}
async function D(e, t) {
  if (null == e || null == t) throw v("Stripe or elements not loaded");
  let n = t.getElement(r.CardNumberElement);
  if (null == n) throw v("Unable to load card elements from Stripe");
  let {
    token: i,
    error: l
  } = await e.createToken(n);
  if (null != l) throw v(l);
  if (null == i) throw v("token not available with successful stripe call");
  return i.id
}
async function U(e, t, n, r) {
  if (null == e) throw v("Stripe not loaded");
  if (null == t) throw v("Bank required for EPS");
  let {
    email: i,
    name: l,
    line1: u,
    line2: o,
    city: d,
    state: s,
    postalCode: E,
    country: _
  } = n;
  if (null == l) throw v("Name required for EPS");
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
  });
  let c = await P(n),
    {
      paymentMethod: I,
      error: S
    } = await e.createPaymentMethod({
      type: "eps",
      eps: {
        bank: t
      },
      billing_details: {
        address: {
          line1: u,
          line2: o,
          city: d,
          state: s,
          postal_code: E,
          country: _
        },
        name: l,
        email: i
      }
    });
  if (null != S) throw v(S);
  if (null == I) throw v("paymentMethod not available with successful stripe call");
  return y(p.PaymentGateways.STRIPE, I.id, n, {
    billingAddressToken: c,
    analyticsLocation: r,
    bank: t
  })
}
async function M(e, t, n, r) {
  if (null == e) throw v("Stripe not loaded");
  if (null == t) throw v("Bank required for iDEAL");
  let {
    email: i,
    name: l,
    line1: u,
    line2: o,
    city: d,
    state: s,
    postalCode: E,
    country: _
  } = n;
  if (null == l) throw v("Name required for iDEAL");
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
  });
  let c = await P(n),
    {
      paymentMethod: I,
      error: S
    } = await e.createPaymentMethod({
      type: "ideal",
      ideal: {
        bank: t
      },
      billing_details: {
        address: {
          line1: u,
          line2: o,
          city: d,
          state: s,
          postal_code: E,
          country: _
        },
        name: l,
        email: i
      }
    });
  if (null != S) throw v(S);
  if (null == I) throw v("paymentMethod not available with successful stripe call");
  return y(p.PaymentGateways.STRIPE, I.id, n, {
    billingAddressToken: c,
    analyticsLocation: r,
    bank: t
  })
}
async function G(e, t, n, r) {
  if (null == e) throw v("Stripe not loaded");
  let {
    email: i,
    name: l,
    line1: u,
    line2: o,
    city: d,
    state: s,
    postalCode: E,
    country: _
  } = n;
  if (null == i) throw v("Email required for Przelewy24");
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
  });
  let c = await P(n),
    I = t.p24Bank,
    {
      paymentMethod: S,
      error: T
    } = await e.createPaymentMethod({
      type: "p24",
      p24: {
        bank: I
      },
      billing_details: {
        address: {
          line1: u,
          line2: o,
          city: d,
          state: s,
          postal_code: E,
          country: _
        },
        name: l,
        email: i
      }
    });
  if (null != T) throw v(T);
  if (null == S) throw v("paymentMethod not available with successful stripe call");
  return y(p.PaymentGateways.STRIPE, S.id, n, {
    billingAddressToken: c,
    analyticsLocation: r,
    bank: I
  })
}
async function w(e, t, n) {
  if (null == e) throw v("Stripe not loaded");
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
  });
  let r = await P(t),
    {
      email: i,
      name: l,
      line1: u,
      line2: o,
      city: d,
      state: s,
      postalCode: E,
      country: _
    } = t,
    {
      paymentMethod: c,
      error: I
    } = await e.createPaymentMethod({
      type: "sofort",
      sofort: {
        country: _
      },
      billing_details: {
        address: {
          line1: u,
          line2: o,
          city: d,
          state: s,
          postal_code: E,
          country: _
        },
        name: l,
        email: i
      }
    });
  if (null != I) throw v(I);
  if (null == c) throw v("paymentMethod not available with successful stripe call");
  return y(p.PaymentGateways.STRIPE, c.id, t, {
    billingAddressToken: r,
    analyticsLocation: n
  })
}
async function B(e, t, n, r) {
  if (null == e || null == t) throw v("Stripe or token not loaded");
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_CREATE_START"
  });
  let i = null;
  try {
    i = await g()
  } catch (e) {
    throw v(e)
  }
  let {
    name: u,
    line1: o,
    line2: d,
    city: s,
    state: E,
    postalCode: _,
    country: c
  } = n, I = await P(n), {
    setupIntent: S,
    error: T
  } = await e.confirmCardSetup(i, {
    payment_method: {
      card: {
        token: t
      },
      billing_details: {
        address: {
          line1: o,
          line2: d,
          city: s,
          state: E,
          postal_code: _,
          country: c
        },
        name: u
      }
    }
  });
  if (null != T) throw v(T);
  if ((null == S ? void 0 : S.payment_method) == null) throw v("setupIntent.payment_method not available with successful stripe call");
  return l("string" == typeof S.payment_method, "setupIntent.payment_method expanded not supported"), y(p.PaymentGateways.STRIPE, S.payment_method, n, {
    billingAddressToken: I,
    analyticsLocation: r
  })
}

function b(e, t, n) {
  let {
    token: r,
    billingAddressInfo: i
  } = f.parseStripePaymentMethod(e);
  return y(p.PaymentGateways.STRIPE, r, null != t ? t : i, {
    analyticsLocation: n
  })
}

function x(e, t, n) {
  return y(p.PaymentGateways.BRAINTREE, e, t, {
    analyticsLocation: n
  })
}
async function F(e, t, n, r) {
  if (null == e) throw v("Stripe not loaded");
  let i = await P(t),
    {
      name: u,
      line1: a,
      line2: o,
      city: d,
      state: s,
      postalCode: E,
      country: _
    } = t,
    c = C.STRIPE_PAYMENT_SOURCES.get(n);
  l(null != c, "unsupported payment method type");
  let {
    paymentMethod: I,
    error: S
  } = await e.createPaymentMethod({
    type: c,
    billing_details: {
      address: {
        line1: a,
        line2: o,
        city: d,
        state: s,
        postal_code: E,
        country: _
      },
      name: u
    }
  });
  if (null != S) throw v(S);
  if (null == I) throw v("stripePaymentMethod not available with successful stripe call");
  return y(p.PaymentGateways.STRIPE, I.id, t, {
    billingAddressToken: i,
    analyticsLocation: r
  })
}
async function V(e, t, n) {
  let r = await P(e),
    i = {
      type: C.ADYEN_PAYMENT_SOURCES.get(t)
    };
  return y(p.PaymentGateways.ADYEN, JSON.stringify(i), e, {
    billingAddressToken: r,
    analyticsLocation: n
  })
}
async function H(e, t, n, r) {
  var i;
  let l = await P(e),
    s = {
      type: C.ADYEN_PAYMENT_SOURCES.get(t),
      ...null !== (i = null == r ? void 0 : r.paymentMethod) && void 0 !== i ? i : {}
    },
    E = await eN(t),
    _ = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != E ? E : "", "success");
  try {
    let t = await y(p.PaymentGateways.ADYEN, JSON.stringify(s), e, {
      billingAddressToken: l,
      analyticsLocation: n,
      returnUrl: _
    });
    return {
      paymentSource: t,
      redirectConfirmation: !1
    }
  } catch (t) {
    if (t.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
      error: new o.BillingError("Unable to create payment source token: code: ".concat(null == t ? void 0 : t.code, " message: ").concat(null == t ? void 0 : t.message), o.BillingError.ErrorCodes.UNKNOWN)
    }), t;
    let e = t.fields.adyen_redirect_url;
    if (null == e) throw v("redirect url cannot be null on a redirect for adyen.");
    return ei(e), {
      redirectConfirmation: !0
    }
  }
}
async function k(e) {
  if (p.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
  let t = await f.getStripe();
  if (null == t) throw new o.BillingError("Stripe not loaded", o.BillingError.ErrorCodes.UNKNOWN);
  let {
    email: n,
    name: r,
    line1: i,
    line2: u,
    city: a,
    state: d,
    postalCode: s,
    country: E
  } = e.billingAddress, _ = {
    billing_details: {
      address: {
        line1: i,
        line2: u,
        city: a,
        state: d,
        postal_code: s,
        country: E
      },
      name: r
    }
  };
  switch (e.type) {
    case C.PaymentSourceTypes.GIROPAY:
      _.type = "giropay";
      break;
    case C.PaymentSourceTypes.SOFORT:
      _.type = "sofort", _.sofort = {
        country: null != E ? E : ""
      }, _.billing_details.email = n;
      break;
    case C.PaymentSourceTypes.BANCONTACT:
      _.type = "bancontact";
      break;
    case C.PaymentSourceTypes.IDEAL:
      if (null == e.bank) throw new o.BillingError("iDEAL missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
      _.type = "ideal", _.ideal = {
        bank: e.bank
      };
      break;
    case C.PaymentSourceTypes.PRZELEWY24:
      if (null == e.bank) throw new o.BillingError("p24 missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
      _.type = "p24", _.p24 = {
        bank: e.bank
      }, _.billing_details.email = e.email;
      break;
    case C.PaymentSourceTypes.EPS:
      if (null == e.bank) throw new o.BillingError("EPS missing bank information", o.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
      _.type = "eps", _.eps = {
        bank: e.bank
      }
  }
  l(null != _.type, "unsupported payment method type");
  let {
    paymentMethod: c,
    error: I
  } = await t.createPaymentMethod(_);
  if (null != I || null == c) throw new o.BillingError("Unable to create payment source token: code: ".concat(null == I ? void 0 : I.code, " message: ").concat(null == I ? void 0 : I.message), o.BillingError.ErrorCodes.UNKNOWN);
  return c.id
}

function K(e) {
  return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : C.ADYEN_PAYMENT_SOURCES.has(e.type) ? m(e) : k(e)
}
async function Y() {
  try {
    let e = u.default.get({
      url: p.Endpoints.BILLING_PAYMENT_SOURCES,
      oldFormErrors: !0
    });
    a.default.wait(() => a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCES_FETCH_START",
      request: e
    }));
    let t = await e;
    return a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS",
      paymentSources: t.body
    }), t
  } catch (e) {
    throw a.default.dispatch({
      type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL"
    }), e
  }
}
async function q(e) {
  let t = await u.default.get({
    url: p.Endpoints.BILLING_PAYMENT(e)
  });
  return a.default.dispatch({
    type: "BILLING_PAYMENT_FETCH_SUCCESS",
    payment: t.body
  }), t
}
async function W() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
    t = arguments.length > 1 ? arguments[1] : void 0;
  a.default.dispatch({
    type: "BILLING_PAYMENTS_FETCH_START"
  });
  try {
    let n = await u.default.get({
      url: p.Endpoints.BILLING_PAYMENTS,
      query: {
        limit: e,
        before: t
      },
      oldFormErrors: !0
    });
    return a.default.dispatch({
      type: "BILLING_PAYMENTS_FETCH_SUCCESS",
      payments: n.body
    }), n
  } catch (e) {
    throw a.default.dispatch({
      type: "BILLING_PAYMENTS_FETCH_FAIL"
    }), e
  }
}
async function Z() {
  a.default.wait(() => {
    a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_FETCH_START"
    })
  });
  try {
    let e = await u.default.get({
      url: p.Endpoints.BILLING_SUBSCRIPTIONS,
      oldFormErrors: !0
    });
    if (null == e.body) throw new o.BillingError("response body is null, response: ".concat(JSON.stringify(e)), e.status);
    return a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS",
      subscriptions: e.body
    }), e
  } catch (e) {
    throw a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_FETCH_FAIL"
    }), e
  }
}
async function X() {
  a.default.wait(() => {
    a.default.dispatch({
      type: "BILLING_PERKS_RELEVANCE_FETCH_START"
    })
  });
  try {
    let e = await u.default.get(p.Endpoints.BILLING_PERKS_RELEVANCE);
    a.default.dispatch({
      type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS",
      res: e.body
    })
  } catch (e) {
    a.default.dispatch({
      type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL"
    })
  }
}
async function J() {
  try {
    let e = await u.default.get(p.Endpoints.BILLING_NITRO_AFFINITY);
    a.default.dispatch({
      type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
      res: e.body.map(e => new E.default(e))
    })
  } finally {
    a.default.dispatch({
      type: "BILLING_NITRO_AFFINITY_FETCHED"
    })
  }
}
async function z() {
  a.default.wait(() => {
    a.default.dispatch({
      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
    })
  });
  try {
    let e = await u.default.get({
      url: p.Endpoints.BILLING_SUBSCRIPTIONS,
      query: {
        include_inactive: !0,
        limit: 2,
        exclude_unpaid_statuses: !0,
        subscription_type: C.SubscriptionTypes.PREMIUM
      },
      oldFormErrors: !0
    });
    return e.ok ? (a.default.dispatch({
      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
      subscription: e.body.length > 0 ? e.body[0] : null
    }), a.default.dispatch({
      type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
      subscription: e.body.length > 1 ? e.body[1] : null
    })) : a.default.dispatch({
      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
    }), e
  } catch (e) {
    a.default.dispatch({
      type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
    })
  }
}
async function Q(e) {
  let {
    items: t,
    paymentSource: n,
    trialId: r,
    code: i,
    currency: l,
    metadata: s,
    referralCode: E,
    loadId: _
  } = e;
  a.default.dispatch({
    type: "BILLING_SUBSCRIPTION_UPDATE_START"
  }), t = (0, S.coerceExistingItemsToNewItemInterval)(t);
  let c = null;
  if (null != n && C.ADYEN_PAYMENT_SOURCES.has(n.type)) {
    let e = await eN(n.type);
    c = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
  }
  try {
    let e = await u.default.post({
      url: p.Endpoints.BILLING_SUBSCRIPTIONS,
      body: {
        items: t.map(e => {
          let {
            planId: t,
            quantity: n
          } = e;
          return {
            plan_id: t,
            quantity: n
          }
        }),
        payment_source_id: null != n ? n.id : null,
        payment_source_token: null != n ? await K(n) : null,
        trial_id: r,
        return_url: c,
        code: i,
        currency: null != n ? l : C.CurrencyCodes.USD,
        metadata: s,
        gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(n),
        purchase_token: (0, T.getPurchaseToken)(),
        referral_code: E,
        load_id: _
      },
      oldFormErrors: !0
    });
    return a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
      subscription: e.body
    }), {
      subscription: e.body,
      redirectConfirmation: !1
    }
  } catch (t) {
    let e = t instanceof o.BillingError ? t : new o.BillingError(t);
    if (e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
      error: e
    }), e;
    if (!t.body.payment_id) throw v("payment id cannot be null on redirected confirmations.");
    return $(t.body, n)
  }
}
async function j(e, t, n, r) {
  let i = null;
  if (null != n && C.PREPAID_PAYMENT_SOURCES.has(n.type)) {
    let e = await eN(n.type);
    i = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
  }
  try {
    let l = await u.default.post({
      url: p.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
      body: {
        payment_source_id: null != n ? n.id : null,
        payment_source_token: null != n ? await K(n) : null,
        return_url: i,
        currency: r
      },
      oldFormErrors: !0
    });
    return a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
      subscription: l.body
    }), {
      subscription: l.body,
      redirectConfirmation: p.REDIRECTED_PAYMENT_SOURCES.has(n.type)
    }
  } catch (t) {
    let e = t instanceof o.BillingError ? t : new o.BillingError(t);
    if (e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
      error: e
    }), e;
    if (!t.body.payment_id) throw v("payment id cannot be null on redirected confirmations.");
    return $(t.body, n)
  }
}

function $(e, t) {
  return null != t && C.ADYEN_PAYMENT_SOURCES.has(t.type) ? ee(e.adyen_redirect_url, t) : et(e.payment_id, t)
}
async function ee(e, t) {
  if (null == e) throw v("redirect url cannot be null on a redirect for adyen.");
  if (null == t) throw v("Payment source cannot be null on a redirect.");
  return p.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (ei(e), {
    redirectConfirmation: !0,
    redirectURL: e
  }) : {
    redirectConfirmation: !1,
    redirectURL: e
  }
}
async function et(e, t) {
  let n = await f.getStripe();
  if (null == t) throw v("Payment source cannot be null on a redirect.");
  let {
    clientSecret: r,
    paymentMethodId: i
  } = await L(e);
  if (null == n) throw v("Stripe cannot be null on a redirect.");
  if (p.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
    let e = await eN(t.type);
    return ei(await eu({
      stripe: n,
      paymentSource: t,
      clientSecret: r,
      state: e
    })), {
      redirectConfirmation: !0
    }
  }
  return await el({
    stripe: n,
    clientSecret: r,
    paymentMethodId: i,
    paymentSource: t
  }), {
    redirectConfirmation: !1
  }
}
async function en(e) {
  var t;
  let n = await q(e);
  if ((null == n ? void 0 : n.body) == null) throw v("could not fetch payment");
  let r = s.default.createFromServer(n.body.payment_source);
  if (!p.REDIRECTED_PAYMENT_SOURCES.has(r.type)) throw v("unsupported redirect payment source");
  if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === C.PaymentStatusTypes.FAILED) throw v("payment failed");
  return r.paymentGateway !== p.PaymentGateways.STRIPE || er(e)
}
async function er(e) {
  let t = await f.getStripe();
  if (null == t) throw v("Stripe has not loaded.");
  if (null == e) throw v("payment intent id cannot be null.");
  let n = await O(e),
    {
      paymentIntent: r,
      error: i
    } = await t.retrievePaymentIntent(n);
  if (null != i) throw v(i);
  if (null == r) throw v("paymentIntent not available with successful stripe call");
  if (null != r.last_payment_error) throw v("unable to retrieve payment intent ".concat(r.last_payment_error));
  return !0
}

function ei(e) {
  window.open(e)
}
async function el(e) {
  let t, {
      stripe: n,
      paymentSource: r,
      paymentMethodId: i,
      clientSecret: l
    } = e,
    u = {};
  if (r.type === C.PaymentSourceTypes.SEPA_DEBIT) {
    if (null == i) throw v("On a sepa payment payment method id cannot be null");
    u.payment_method = i, t = n.confirmSepaDebitPayment
  } else throw v("Unsupported redirected payment source type.");
  let {
    paymentIntent: a,
    error: o
  } = await t(l, u);
  if (null != o) throw v(o);
  if (null == a) throw v("paymentIntent not available with successful stripe call")
}
async function eu(e) {
  var t, n;
  let r, {
      stripe: i,
      paymentSource: l,
      clientSecret: a,
      state: o
    } = e,
    d = {};
  switch (l.type) {
    case C.PaymentSourceTypes.GIROPAY:
      d = {
        billing_details: {
          name: l.billingAddress.name
        }
      }, r = i.confirmGiropayPayment;
      break;
    case C.PaymentSourceTypes.BANCONTACT:
      d = {
        billing_details: {
          name: l.billingAddress.name,
          email: l.email
        }
      }, r = i.confirmBancontactPayment;
      break;
    case C.PaymentSourceTypes.SOFORT:
      d = {
        sofort: {
          country: l.billingAddress.country
        },
        billing_details: {
          name: l.billingAddress.name,
          email: l.email
        }
      }, r = i.confirmSofortPayment;
      break;
    case C.PaymentSourceTypes.PRZELEWY24:
      if (null == l.bank) throw v("PaymentSource (".concat(l.id, ") missing bank info for p24."));
      d = {
        p24: {
          bank: l.bank
        },
        billing_details: {
          name: l.billingAddress.name,
          email: l.email
        }
      }, r = i.confirmP24Payment;
      break;
    case C.PaymentSourceTypes.EPS:
      if (null == l.bank) throw v("PaymentSource (".concat(l.id, ") missing bank info for EPS."));
      d = {
        eps: {
          bank: l.bank
        },
        billing_details: {
          name: l.billingAddress.name
        }
      }, r = i.confirmEpsPayment;
      break;
    case C.PaymentSourceTypes.IDEAL:
      if (null == l.bank) throw v("PaymentSource (".concat(l.id, ") missing bank info for iDEAL."));
      d = {
        ideal: {
          bank: l.bank
        },
        billing_details: {
          name: l.billingAddress.name
        }
      }, r = i.confirmIdealPayment;
      break;
    default:
      throw v("Unsupported redirected payment source type.")
  }
  let {
    paymentIntent: s,
    error: E
  } = await r(a, {
    payment_method: d,
    return_url: u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != o ? o : "", "success")
  }, {
    handleActions: !1
  });
  if (null != E) throw v(E);
  if (null == s) throw v("paymentIntent not available with successful api call");
  if ((null === (n = s.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw v("confirm payment did not return a redirect url");
  return s.next_action.redirect_to_url.url
}
async function ea(e, t, n) {
  a.default.dispatch({
    type: "BILLING_SUBSCRIPTION_CANCEL_START"
  });
  try {
    let r = await u.default.delete({
      url: p.Endpoints.BILLING_SUBSCRIPTION(e),
      query: {
        location: n,
        location_stack: t
      },
      oldFormErrors: !0
    });
    return a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS"
    }), r
  } catch (t) {
    let e = new o.BillingError(t);
    throw a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_CANCEL_FAIL",
      error: e
    }), e
  }
}

function eo(e, t) {
  return ed(e, {
    items: e.items
  }, t)
}
async function ed(e, t, n, r) {
  if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
  a.default.dispatch({
    type: "BILLING_SUBSCRIPTION_UPDATE_START"
  });
  try {
    var i;
    let l = {
      status: t.status,
      payment_source_id: null === (i = t.paymentSource) || void 0 === i ? void 0 : i.id,
      payment_source_token: null != t.paymentSource ? await K(t.paymentSource) : null,
      currency: t.currency,
      gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(t.paymentSource)
    };
    if (null != t.paymentSource && C.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
      let e = await eN(t.paymentSource.type);
      l.return_url = u.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
    }
    null != t.items && (l.items = (0, S.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
      let {
        planId: t,
        ...n
      } = e;
      return {
        ...n,
        plan_id: t
      }
    }));
    let o = await u.default.patch({
      url: p.Endpoints.BILLING_SUBSCRIPTION(e.id),
      query: {
        location: r,
        location_stack: n
      },
      body: l,
      oldFormErrors: !0
    });
    return a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
      subscription: o.body
    }), {
      subscription: o.body,
      redirectConfirmation: !1
    }
  } catch (n) {
    let e = n instanceof o.BillingError ? n : new o.BillingError(n);
    if (e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED) throw a.default.dispatch({
      type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
      error: e
    }), e;
    if (!n.body.payment_id) throw v("payment id cannot be null on redirected confirmations.");
    return $(n.body, t.paymentSource)
  }
}

function es(e, t, n, r, i) {
  return ed(e, {
    status: p.SubscriptionStatusTypes.ACTIVE,
    paymentSource: n,
    currency: r
  }, t, i)
}

function eE(e, t, n, r) {
  let i = (0, S.getItemsWithUpsertedPremiumPlanId)(e, t);
  return ed(e, {
    status: p.SubscriptionStatusTypes.ACTIVE,
    items: i
  }, n, r)
}

function e_(e, t, n, r) {
  return ed(e, {
    currency: t
  }, n, r)
}

function ec(e, t, n, r, i) {
  return ed(e, {
    paymentSource: t,
    currency: n
  }, r, i)
}

function eI() {
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
  })
}

function eS() {
  a.default.dispatch({
    type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
  })
}

function eT() {
  a.default.dispatch({
    type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
  })
}
async function ef(e) {
  await u.default.post({
    url: p.Endpoints.BILLING_PAYMENTS_VOID(e),
    oldFormErrors: !0
  })
}
async function ep(e, t) {
  await u.default.post({
    url: p.Endpoints.BILLING_PAYMENTS_REFUND(e),
    body: {
      reason: t
    }
  })
}
async function eN(e) {
  let {
    body: {
      state: t
    }
  } = await u.default.post({
    url: p.Endpoints.BILLING_POPUP_BRIDGE(e),
    oldFormErrors: !0
  });
  return a.default.dispatch({
    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
    state: t,
    paymentSourceType: e
  }), t
}

function eC(e) {
  let {
    paymentSourceType: t,
    state: n,
    path: r,
    query: i,
    insecure: l
  } = e;
  return a.default.dispatch({
    type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
    paymentSourceType: t
  }), u.default.post({
    url: p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
    body: {
      state: n,
      path: r,
      query: i,
      insecure: l
    },
    oldFormErrors: !0
  }).then(e => (a.default.dispatch({
    type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
    paymentSourceType: t
  }), e))
}
async function eA() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && null != _.default.ipCountryCodeRequest) return _.default.ipCountryCodeRequest;
  try {
    let e = u.default.get({
      url: p.Endpoints.BILLING_COUNTRY_CODE
    });
    a.default.wait(() => a.default.dispatch({
      type: "BILLING_IP_COUNTRY_CODE_FETCH_START",
      request: e
    }));
    let t = await e,
      n = t.body.country_code;
    return a.default.dispatch({
      type: "BILLING_SET_IP_COUNTRY_CODE",
      countryCode: n
    }), t
  } catch (e) {
    return a.default.dispatch({
      type: "BILLING_IP_COUNTRY_CODE_FAILURE"
    }), e
  }
}
async function eR() {
  try {
    let e = await u.default.get({
      url: p.Endpoints.BILLING_LOCALIZED_PROMO
    });
    if (null != e.body.localized_pricing_promo) {
      let t = e.body.localized_pricing_promo;
      a.default.dispatch({
        type: "BILLING_SET_LOCALIZED_PRICING_PROMO",
        localizedPricingPromo: t
      })
    }
    return e
  } catch (e) {
    return a.default.dispatch({
      type: "BILLING_LOCALIZED_PRICING_PROMO_FAILURE"
    }), e
  }
}

function eh() {
  a.default.dispatch({
    type: "RESET_PAYMENT_ID"
  })
}

function eO() {
  a.default.dispatch({
    type: "BILLING_SUBSCRIPTION_RESET"
  })
}

function eL(e) {
  a.default.dispatch({
    type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
    loadId: e
  })
}