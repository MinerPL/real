"use strict";
n.r(t), n.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return o
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("177998"),
  r = n("145131"),
  i = n("85336"),
  u = n("782340");
let o = () => (0, s.jsx)("div", {
    children: (0, s.jsx)(a.Heading, {
      variant: "heading-xl/bold",
      children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    })
  }),
  d = e => {
    let {
      onStepChange: t,
      onBackClick: n
    } = e;
    return (0, s.jsx)("div", {
      children: (0, s.jsxs)(a.ModalFooter, {
        justify: r.default.Justify.BETWEEN,
        align: r.default.Align.CENTER,
        children: [(0, s.jsx)(a.Button, {
          color: a.Button.Colors.BRAND,
          onClick: () => {
            t(i.Step.ADD_PAYMENT_STEPS)
          },
          children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, s.jsx)(l.default, {
          onClick: n
        })]
      })
    })
  }