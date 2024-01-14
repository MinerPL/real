"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  l = n("627445"),
  s = n.n(l),
  u = n("77078"),
  a = n("612039"),
  o = n("90592"),
  c = n("527866"),
  d = n("642906"),
  f = n("85336"),
  I = n("286350"),
  _ = n("153727"),
  E = n("39065"),
  S = n("628738"),
  T = n("650484"),
  N = n("367767"),
  p = n("215774"),
  m = n("782340"),
  C = n("945598");

function h(e) {
  let {
    application: t,
    backButtonEligible: n,
    prevStep: l,
    showGuildPicker: h,
    handleStepChange: P,
    trialFooterMessageOverride: L,
    reviewWarningMessage: A,
    planGroup: v,
    openInvoiceId: R,
    analyticsData: g,
    analyticsLocation: O,
    eligibleApplicationSubscriptionGuilds: M,
    listing: U,
    handleClose: x
  } = e, {
    activeSubscription: D,
    setUpdatedSubscription: y,
    contextMetadata: B,
    currencies: b,
    paymentSources: G,
    priceOptions: H,
    purchaseError: F,
    purchaseTokenAuthState: j,
    selectedPlan: w,
    setCurrency: V,
    setPaymentSourceId: k,
    setPurchaseState: Y,
    setPurchaseError: K,
    step: Z,
    purchaseState: z,
    subscriptionMetadataRequest: W,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: q
  } = (0, d.usePaymentContext)();
  s(null != w, "Expected plan to be selected"), s(null != Z, "Step should be set");
  let Q = i.useRef(null),
    [J, $] = (0, a.default)(!1, 500),
    [ee, et] = i.useState(null == W ? void 0 : W.guild_id),
    en = (0, o.isApplicationUserSubscription)(U.sku_flags);
  i.useEffect(() => {
    null != F && null != Q.current && Q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [F]);
  let er = i.useCallback(e => {
      y(e), P(f.Step.CONFIRM)
    }, [P, y]),
    ei = i.useCallback(e => {
      et(e), X({
        ...W,
        guild_id: e
      })
    }, [et, X, W]),
    el = i.useRef(null);
  return z === I.PurchaseState.PURCHASING ? (0, r.jsx)(S.default, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.default, {
      className: C.breadcrumbs
    }), (0, r.jsxs)(T.PaymentPortalBody, {
      children: [(0, r.jsx)(N.default, {}), en && (0, r.jsxs)("div", {
        className: C.userSubscriptionDetailsContainer,
        children: [(0, r.jsx)(u.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: t.name
          })
        })]
      }), h && !en && (0, r.jsxs)("div", {
        className: C.guildPickerContainer,
        children: [(0, r.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          children: m.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, r.jsx)(u.FormText, {
          type: u.FormText.Types.DESCRIPTION,
          className: C.guildPickerDescription,
          children: m.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, r.jsx)(p.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: ei,
          eligibleApplicationSubscriptionGuilds: M
        })]
      }), (0, r.jsx)(c.default, {
        selectedPlanId: w.id,
        paymentSources: G,
        onPaymentSourceChange: e => k(null != e ? e.id : null),
        priceOptions: H,
        currencies: b,
        onCurrencyChange: e => V(e),
        handlePaymentSourceAdd: () => P(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: q,
        legalTermsNodeRef: el,
        hasLegalTermsFlash: J,
        trialFooterMessageOverride: L,
        reviewWarningMessage: A,
        metadata: h || en ? void 0 : W,
        purchaseState: z,
        hideSubscriptionDetails: !0,
        handleClose: x
      })]
    }), (0, r.jsx)(T.PaymentPortalFooter, {
      children: (0, r.jsx)(E.default, {
        premiumSubscription: null != D ? D : null,
        setPurchaseState: Y,
        onBack: () => null != l && P(l),
        onNext: er,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: el,
        flashLegalTerms: () => $(!0),
        analyticsLocation: O,
        baseAnalyticsData: g,
        flowStartTime: B.startTime,
        planGroup: v,
        purchaseTokenAuthState: j,
        openInvoiceId: R,
        metadata: en ? void 0 : W,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == W ? void 0 : W.guild_id) == null && !en
      })
    })]
  })
}