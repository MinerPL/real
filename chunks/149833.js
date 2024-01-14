"use strict";
n.r(t), n.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return o
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  s = n("177998"),
  l = n("145131"),
  a = n("85336"),
  u = n("782340");
let o = () => (0, i.jsx)("div", {
    children: (0, i.jsx)(r.Heading, {
      variant: "heading-xl/bold",
      children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  d = e => {
    let {
      onStepChange: t,
      onBackClick: n
    } = e;
    return (0, i.jsx)("div", {
      children: (0, i.jsxs)(r.ModalFooter, {
        justify: l.default.Justify.BETWEEN,
        align: l.default.Align.CENTER,
        children: [(0, i.jsx)(r.Button, {
          color: r.Button.Colors.BRAND,
          onClick: () => {
            t(a.Step.ADD_PAYMENT_STEPS)
          },
          children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, i.jsx)(s.default, {
          onClick: n
        })]
      })
    })
  }