"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  r = n("627445"),
  l = n.n(r),
  s = n("976979"),
  u = n("446674"),
  o = n("77078"),
  c = n("335430"),
  d = n("703332"),
  p = n("740055"),
  m = n("545876"),
  f = n("812204"),
  S = n("685665"),
  h = n("635357"),
  P = n("642906"),
  I = n("286350"),
  v = n("176108"),
  E = n("102985"),
  y = n("160299"),
  T = n("10514"),
  x = n("719923"),
  C = n("380186"),
  b = n("809071"),
  _ = n("883662"),
  N = n("991329"),
  g = n("623003"),
  L = n("570727"),
  A = n("146163"),
  j = n("49111"),
  R = n("782340"),
  M = n("709626"),
  w = n("615689");

function F(e) {
  var t;
  let n, {
      premiumSubscription: r,
      paymentSources: f,
      priceOptions: S,
      onPaymentSourceChange: b,
      onPaymentSourceAdd: N,
      planId: A,
      setHasAcceptedTerms: M,
      legalTermsNodeRef: F,
      hasLegalTermsFlash: B,
      onInvoiceError: W,
      planGroup: k,
      currencies: H,
      onCurrencyChange: V,
      hasOpenInvoice: z,
      purchaseState: Y,
      handleClose: Z
    } = e,
    {
      selectedSkuId: K,
      defaultPlanId: Q,
      isPremium: J,
      startedPaymentFlowWithPaymentSourcesRef: X
    } = (0, P.usePaymentContext)(),
    {
      isGift: q
    } = (0, h.useGiftContext)(),
    $ = S.paymentSourceId,
    ee = (0, u.useStateFromStores)([T.default], () => T.default.get(A));
  l(null != ee, "Missing newPlan");
  let et = (0, u.useStateFromStores)([E.default], () => E.default.hidePersonalInformation);
  n = z ? R.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(A) ? (0, x.getBillingReviewSubheader)(r, ee) : R.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: ee.name
  });
  let en = s.CountryCodesSets.EEA_COUNTRIES.has(y.default.ipCountryCodeWithFallback),
    ei = Y === I.PurchaseState.PURCHASING || Y === I.PurchaseState.COMPLETED,
    ea = (0, v.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: q,
      selectedSkuId: K,
      startedPaymentFlowWithPaymentSources: X.current
    }),
    er = a.useMemo(() => (0, x.getPremiumPlanOptions)({
      skuId: K,
      isPremium: J,
      multiMonthPlans: [],
      currentSubscription: r,
      isGift: q,
      isEligibleForTrial: !1,
      defaultPlanId: Q,
      defaultToMonthlyPlan: !1
    }), [K, r, Q, J, q]);
  return (0, i.jsxs)("div", {
    className: w.stepBody,
    children: [ea && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(_.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0
      }), (0, i.jsx)(L.PremiumSwitchPlanSelectBody, {
        planOptions: er,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: A,
        showTotal: !1,
        handleClose: Z
      }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), null != r ? z ? (0, i.jsx)(O, {
      premiumSubscription: r,
      onInvoiceError: W,
      priceOptions: S,
      preventFetch: !1
    }) : (0, C.subscriptionCanSwitchImmediately)(r, A, k) ? (0, i.jsx)(U, {
      premiumSubscription: r,
      newPlan: ee,
      onInvoiceError: W,
      planGroup: k,
      priceOptions: S,
      preventFetch: ei
    }) : (0, i.jsx)(D, {
      premiumSubscription: r,
      newPlan: ee,
      planGroup: k,
      priceOptions: S,
      preventFetch: ei
    }) : null, (0, i.jsxs)("div", {
      className: w.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(p.default, {
        paymentSources: Object.values(f),
        selectedPaymentSourceId: $,
        onChange: b,
        onPaymentSourceAdd: N,
        hidePersonalInformation: et,
        disabled: ei
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: H,
      className: w.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: R.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: S.currency,
        currencies: H,
        onChange: V,
        disabled: ei
      })]
    }), (0, i.jsx)(g.default, {
      isActive: B,
      ref: F,
      children: null != r && (0, C.subscriptionCanSwitchImmediately)(r, A, k) ? (0, i.jsx)(G, {
        premiumSubscription: r,
        newPlan: ee,
        onInvoiceError: W,
        planGroup: k,
        priceOptions: S,
        preventFetch: ei,
        disabled: ei,
        isEEA: en,
        paymentSources: f,
        setHasAcceptedTerms: M
      }) : (0, i.jsx)(m.default, {
        onChange: M,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: ee,
          paymentSourceType: null === (t = f[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, x.getPrice)(ee.id, !1, q, S),
          currentSubscription: r,
          planGroup: k
        }),
        forceShow: !0,
        showPricingLink: ee.currency !== j.CurrencyCodes.USD,
        showWithdrawalWaiver: en,
        disabled: ei,
        subscriptionPlan: ee,
        currentSubscription: r,
        planGroup: k
      })
    })]
  })
}

function O(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: r,
    preventFetch: l
  } = e, [s, u] = (0, b.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: l
  });
  a.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
  return null != s ? (0, i.jsxs)(_.PremiumInvoiceTable, {
    className: M.invoice,
    children: [(0, i.jsx)(A.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: s,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: s,
      isUpdate: !0,
      isPrepaidPaymentSource: c
    })]
  }) : (0, i.jsx)(o.Spinner, {})
}

function U(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: r,
    planGroup: l,
    priceOptions: s,
    preventFetch: u
  } = e, {
    selectedSkuId: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, P.usePaymentContext)(), {
    isGift: p
  } = (0, h.useGiftContext)(), {
    analyticsLocations: m
  } = (0, S.default)(), I = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)), [E, y] = (0, b.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: I,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: u,
    analyticsLocations: m,
    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [T, C] = (0, b.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: I,
    renewal: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: u,
    analyticsLocations: m,
    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), N = null != y ? y : C;
  if (a.useEffect(() => {
      r(N)
    }, [r, N]), null != N) return (0, i.jsx)(o.FormErrorBlock, {
    children: N.message
  });
  let g = (0, v.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: p,
      selectedSkuId: c,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    L = (0, v.planSwitchLoadingShowSpinner)(g, E, n);
  if (null == E || null == T || L) return (0, i.jsx)(o.Spinner, {
    className: w.spinner
  });
  let j = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(A.SubscriptionPeriodResetNotice, {
      proratedInvoice: E,
      renewalInvoice: T
    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
      className: w.invoice,
      children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
        children: R.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(A.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: E,
        newPlan: n,
        isPrepaidPaymentSource: j
      }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: E,
        renewalInvoice: T,
        isUpdate: !0,
        isPrepaidPaymentSource: j
      })]
    })]
  })
}

function G(e) {
  var t, n;
  let r, {
      premiumSubscription: l,
      newPlan: s,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: p,
      preventFetch: h,
      disabled: P,
      isEEA: I,
      paymentSources: v,
      setHasAcceptedTerms: E
    } = e,
    {
      analyticsLocations: y
    } = (0, S.default)(),
    T = (0, x.getItemsWithUpsertedPlanIdForGroup)(l, s.id, 1, new Set(c)),
    [C, _] = (0, b.useSubscriptionInvoicePreview)({
      subscriptionId: l.id,
      items: T,
      renewal: !0,
      paymentSourceId: p.paymentSourceId,
      currency: p.currency,
      preventFetch: h,
      analyticsLocations: y,
      analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (a.useEffect(() => {
    u(_)
  }, [u, _]), null != _) ? (0, i.jsx)(o.FormErrorBlock, {
    children: _.message
  }) : (null != C && (r = {
    amount: C.total,
    currency: C.currency,
    tax: C.tax,
    taxInclusive: C.taxInclusive
  }), null == r) ? null : (0, i.jsx)(m.default, {
    onChange: E,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: s,
      paymentSourceType: null === (t = v[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: r,
      currentSubscription: l,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: s.currency !== j.CurrencyCodes.USD,
    showWithdrawalWaiver: I,
    disabled: P,
    subscriptionPlan: s,
    currentSubscription: l,
    planGroup: c
  })
}

function D(e) {
  let t, {
      premiumSubscription: n,
      newPlan: a,
      planGroup: r,
      priceOptions: l,
      preventFetch: s
    } = e,
    {
      analyticsLocations: u
    } = (0, S.default)(),
    [c, d] = (0, b.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, a.id, 1, new Set(r)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: l.paymentSourceId,
      currency: l.currency,
      preventFetch: s,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
    children: d.message
  });
  if (null == c) return (0, i.jsx)("div", {
    children: (0, i.jsx)(o.Spinner, {})
  });
  t = n.type === j.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(a.id) : a.name;
  let p = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: w.bodyText,
    children: [(0, i.jsx)("div", {
      className: M.renewalInvoiceDate,
      children: R.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: c.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
      className: w.invoice,
      children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
        children: R.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(_.PremiumInvoiceTableRow, {
        label: t,
        value: (0, x.getFormattedRateForPlan)(a, l, !0)
      }), (0, i.jsx)(N.default, {
        invoice: c
      }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {}), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: c,
        isUpdate: !0,
        isPrepaidPaymentSource: p
      })]
    })]
  })
}