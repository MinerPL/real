"use strict";
s.r(t), s.d(t, {
  VenmoStepFooter: function() {
    return l
  }
});
var r = s("37983");
s("884691");
var n = s("77078"),
  a = s("145131"),
  i = s("782340");
let l = e => {
  let {
    submitting: t,
    braintreeNonce: s,
    venmoUsername: l,
    onVenmoContinue: o,
    onReopenVenmo: u,
    renderBackButton: d
  } = e, c = 0 !== l.length && null != s;
  return (0, r.jsxs)(n.ModalFooter, {
    justify: a.default.Justify.BETWEEN,
    direction: a.default.Direction.HORIZONTAL,
    children: [d(), (0, r.jsx)(n.Button, {
      submitting: t,
      color: c ? n.Button.Colors.BRAND : n.Button.Colors.PRIMARY,
      onClick: c ? o : u,
      children: c ? i.default.Messages.NEXT : i.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
    })]
  })
}