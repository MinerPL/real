"use strict";
n.r(e), n.d(e, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return E
  },
  getCurrencies: function() {
    return f
  },
  planHasCurrency: function() {
    return _
  },
  useCurrencyWithPaymentSourceChange: function() {
    return T
  }
}), n("222007");
var u = n("884691"),
  i = n("627445"),
  r = n.n(i),
  l = n("913144"),
  a = n("775433"),
  o = n("308592"),
  s = n("10514"),
  c = n("719923"),
  S = n("49111"),
  d = n("646718");

function E(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...d.ACTIVE_PREMIUM_SKUS];
  return null == t || s.default.hasPaymentSourceForSKUIds(t, e) ? Promise.resolve() : new Promise(t => {
    l.default.wait(async () => {
      await (0, a.fetchSubscriptionPlansBySKUs)(e), t()
    })
  })
}

function f(t, e, n) {
  let u, i = [],
    l = [],
    a = {
      purchaseType: n ? S.PriceSetAssignmentPurchaseTypes.GIFT : S.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return r(u = "string" == typeof t ? s.default.get(t) : t, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, u.skuId) && (a.paymentSourceId = e), (i = (l = (0, c.experimentalGetPrices)(u.id, a)).map(t => t.currency)).length < 1 && (i = [S.CurrencyCodes.USD]), i
}

function _(t, e, n) {
  let u = s.default.get(t);
  r(null != u, "plan is undefined");
  let i = f(u, n, !1);
  return i.includes(e)
}

function T(t, e, n, i, r) {
  let [l, a] = u.useReducer((t, e) => ({
    ...t,
    ...e
  }), null != n ? {
    paymentSourceId: n,
    currency: t,
    loaded: !1
  } : {
    currency: t,
    loaded: !1
  }), c = (0, o.useSubscriptionPlansLoaded)(r);
  u.useEffect(() => {
    let t = async () => {
      await E(n, r);
      let t = [];
      null != e && null != s.default.get(e) && (t = f(e, n, i)), t.length > 0 ? a({
        paymentSourceId: n,
        currency: t[0],
        loaded: !0
      }) : a({
        paymentSourceId: n,
        loaded: !1
      })
    };
    t()
  }, [n, JSON.stringify(r), e, i, c]);
  let S = l.paymentSourceId !== n || null == e || !c || !0 !== l.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: l,
    setCurrency: t => {
      a({
        currency: t
      })
    },
    currencyLoading: S
  }
}