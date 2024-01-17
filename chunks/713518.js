"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return h
  },
  getCurrencies: function() {
    return E
  },
  planHasCurrency: function() {
    return p
  },
  useCurrencyWithPaymentSourceChange: function() {
    return C
  }
}), n("222007");
var l = n("884691"),
  r = n("627445"),
  i = n.n(r),
  s = n("913144"),
  a = n("775433"),
  o = n("308592"),
  u = n("10514"),
  c = n("719923"),
  d = n("49111"),
  f = n("646718");

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || u.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    s.default.wait(async () => {
      await (0, a.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function E(e, t, n) {
  let l, r = [],
    s = [],
    a = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return i(l = "string" == typeof e ? u.default.get(e) : e, "subscription plan not loaded"), null != t && u.default.hasPaymentSourceForSKUId(t, l.skuId) && (a.paymentSourceId = t), (r = (s = (0, c.experimentalGetPrices)(l.id, a)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
}

function p(e, t, n) {
  let l = u.default.get(e);
  i(null != l, "plan is undefined");
  let r = E(l, n, !1);
  return r.includes(t)
}

function C(e, t, n, r, i) {
  let [s, a] = l.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), c = (0, o.useSubscriptionPlansLoaded)(i);
  l.useEffect(() => {
    let e = async () => {
      await h(n, i);
      let e = [];
      null != t && null != u.default.get(t) && (e = E(t, n, r)), e.length > 0 ? a({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : a({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(i), t, r, c]);
  let d = s.paymentSourceId !== n || null == t || !c || !0 !== s.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: s,
    setCurrency: e => {
      a({
        currency: e
      })
    },
    currencyLoading: d
  }
}