"use strict";
s.r(t), s.d(t, {
  ReviewStepBody: function() {
    return f
  },
  ReviewStepFooter: function() {
    return E
  }
}), s("424973");
var n = s("37983"),
  r = s("884691"),
  a = s("77078"),
  l = s("812952"),
  i = s("740055"),
  o = s("545876"),
  u = s("181114"),
  d = s("561703"),
  c = s("315585"),
  p = s("153160"),
  S = s("782340"),
  h = s("36662");
let f = e => {
    let {
      legalNotice: t,
      paymentSources: s,
      price: u,
      hidePersonalInformation: f,
      paymentSourceId: E,
      isGiftable: _,
      isGift: A,
      needsToBeGift: I,
      onPaymentSourceChange: P,
      onPaymentSourceAdd: C,
      onPurchaseTermsChange: T,
      onToggleIsGift: m
    } = e, R = [], N = null != E ? s[E] : null;
    return null != N && N.invalid && R.push((0, n.jsx)(l.default, {
      icon: c.default,
      color: l.default.Colors.ERROR,
      iconSize: l.default.Sizes.NONE,
      iconClassName: h.invalidIcon,
      children: S.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
    }, "source_invalid")), null != u && (u.taxInclusive ? R.push((0, n.jsx)(l.default, {
      icon: d.default,
      color: l.default.Colors.PRIMARY,
      iconSize: l.default.Sizes.LARGE,
      children: S.default.Messages.BILLING_SALES_TAX_INCLUDED
    }, "tax_included")) : u.tax > 0 && R.push((0, n.jsx)(l.default, {
      icon: d.default,
      color: l.default.Colors.PRIMARY,
      iconSize: l.default.Sizes.LARGE,
      children: S.default.Messages.BILLING_SALES_TAX_ADDED.format({
        tax: (0, p.formatPrice)(u.tax, u.currency)
      })
    }, "tax_added"))), (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(a.FormTitle, {
        className: h.formTitle,
        children: S.default.Messages.BILLING_PAY_FOR_IT_WITH
      }), (0, n.jsx)(i.default, {
        paymentSources: Object.values(s),
        selectedPaymentSourceId: E,
        hidePersonalInformation: f,
        onChange: P,
        onPaymentSourceAdd: C
      }), R, _ && (0, n.jsx)(a.Checkbox, {
        disabled: I,
        className: h.giftToggle,
        type: a.Checkbox.Types.INVERTED,
        value: A,
        onChange: m,
        children: (0, n.jsx)("div", {
          className: h.checkboxLabel,
          children: S.default.Messages.BILLING_IS_GIFT_PURCHASE
        })
      }), (0, n.jsx)(o.default, {
        onChange: T,
        forceShow: !0,
        className: h.purchaseTerms,
        finePrint: t
      })]
    })
  },
  E = e => {
    let {
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: r,
      isPurchasing: l,
      hasAcceptedTerms: i,
      paymentSource: o,
      onPurchase: d,
      tooltipText: c,
      needsToBeGift: p,
      isGift: S
    } = e, f = null != o && !o.invalid, E = {
      submitting: l,
      color: a.Button.Colors.GREEN,
      disabled: !(i && !(p && !S) && f && t),
      onClick: d
    };
    return (0, n.jsx)(a.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: h.buyButtonTooltipWrapper,
        children: [E.disabled && null != c ? (0, n.jsx)(a.Tooltip, {
          text: c,
          children: e => (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: h.buyButtonTooltipTarget,
            ...e
          })
        }) : null, r ? (0, n.jsx)(u.default, {
          ...E,
          children: s
        }) : (0, n.jsx)(a.Button, {
          type: "submit",
          ...E,
          children: s
        })]
      })
    })
  }