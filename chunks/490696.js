"use strict";
a.r(t), a.d(t, {
  CreditCardInformationBody: function() {
    return d
  },
  CreditCardInformationFooter: function() {
    return E
  }
});
var n = a("37983"),
  r = a("884691"),
  s = a("77078"),
  l = a("97459"),
  o = a("145131"),
  u = a("45640"),
  c = a("782340"),
  i = a("36662");
let d = e => {
    let {
      billingError: t,
      onCardInfoChange: a
    } = e, o = null != t && (null == t.code || (0, u.errorToStep)(t) === u.Steps.CREDIT_CARD_INFORMATION);
    return (0, n.jsxs)(r.Fragment, {
      children: [o ? (0, n.jsx)(s.FormErrorBlock, {
        className: i.errorBlock,
        children: c.default.Messages.BILLING_ERROR_SECTION_CARD
      }) : null, (0, n.jsx)(l.default, {
        onCardInfoChange: a,
        error: t
      })]
    })
  },
  E = e => {
    let {
      isCardInfoValid: t,
      submitting: a,
      renderBackButton: r,
      onCreditCardContinue: l
    } = e;
    return (0, n.jsxs)(s.ModalFooter, {
      justify: o.default.Justify.BETWEEN,
      direction: o.default.Direction.HORIZONTAL,
      children: [r(), (0, n.jsx)(s.Button, {
        type: "submit",
        disabled: !t,
        submitting: a,
        onClick: l,
        children: c.default.Messages.NEXT
      })]
    })
  }