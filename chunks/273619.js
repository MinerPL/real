"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("222007"), a("70102");
var n = a("37983"),
  r = a("884691"),
  s = a("41092"),
  l = a("414456"),
  o = a.n(l),
  i = a("862337"),
  u = a("77078"),
  c = a("812952"),
  d = a("448993"),
  p = a("736978"),
  S = a("642906"),
  E = a("85336");
a("153727"), a("650484");
var m = a("454589"),
  A = a("978679"),
  T = a("745279"),
  y = a("718517"),
  P = a("49111"),
  f = a("782340"),
  N = a("129429");
let _ = new Set([E.Step.SKU_SELECT, E.Step.AWAITING_AUTHENTICATION, E.Step.AWAITING_PURCHASE_TOKEN_AUTH, E.Step.CONFIRM]);

function C(e) {
  let {
    steps: t,
    currentStep: a,
    body: l,
    paymentError: C,
    header: h,
    footer: M,
    isGift: I = !1,
    giftMessage: g = f.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: b = !1,
    isLoading: R = !1,
    purchaseError: O,
    purchaseErrorBlockRef: v,
    planError: x,
    onScroll: D,
    scrollerClassName: Y,
    hasCurrencies: k = !1
  } = e, j = null;
  null != C && null == (0, E.errorToStep)(C) ? j = C : null != O ? j = O : null != x && (j = x);
  let L = null != j ? j.message : "";
  null != j && j instanceof d.BillingError && (j.code === p.ErrorCodes.CARD_DECLINED && k && (L += " ".concat(f.default.Messages.BILLING_ERROR_TRY_ANOTHER)), j.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (L = f.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), j.code === P.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (L = f.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: w
  } = (0, S.usePaymentContext)();
  R = R || null == w;
  let F = r.useRef(new i.Timeout);
  r.useEffect(() => {
    let e = F.current;
    return null != w || e.isStarted() ? null != w && e.stop() : e.start(10 * y.default.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, T.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [w]);
  let B = t.includes(E.Step.PAYMENT_TYPE) ? E.Step.PAYMENT_TYPE : E.Step.ADD_PAYMENT_STEPS;
  return (0, n.jsxs)(s.Elements, {
    options: P.StripeElementsOptions,
    stripe: w,
    children: [h, (0, n.jsxs)("div", {
      className: o("paymentModalContent", N.content),
      children: [I && a !== E.Step.CONFIRM ? (0, n.jsx)(c.default, {
        className: N.paymentNote,
        iconSize: c.default.Sizes.SMALL,
        icon: A.default,
        color: null == g ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
        children: g
      }) : null, b ? null : (0, n.jsx)("div", {
        className: N.breadcrumbsWrapper,
        children: (0, n.jsx)(m.default, {
          activeId: E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(a) ? B : a,
          breadcrumbs: t.filter(e => !E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !_.has(e)).map(e => ({
            id: e,
            label: (0, E.getLabelForStep)(e)
          }))
        })
      }), (0, n.jsxs)("div", {
        className: N.bodyWrapper,
        children: [null == j ? null : (0, n.jsx)("div", {
          className: N.errorBlockWrapper,
          children: (0, n.jsx)(u.FormErrorBlock, {
            ref: v,
            children: L
          })
        }), R ? (0, n.jsx)(u.Spinner, {
          className: N.loadingBlock
        }) : (0, n.jsx)(u.Sequencer, {
          className: N.sequencer,
          staticClassName: N.sequencerStatic,
          animatedNodeClassName: N.sequencerAnimatedNode,
          fillParent: !0,
          step: a,
          steps: t,
          sideMargin: 20,
          children: (0, n.jsx)(u.AdvancedScrollerThin, {
            onScroll: D,
            className: o(N.scroller, Y),
            children: l
          })
        })]
      })]
    }), M]
  })
}