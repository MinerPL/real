"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("465527"),
  l = n("50517"),
  i = n("153727"),
  u = n("650484"),
  c = n("199142");

function o() {
  let [e, t] = r.useState(!1), n = async () => {
    t(!0), await (0, a.resendPaymentVerificationEmail)()
  };
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(i.default, {}), (0, s.jsx)(u.PaymentPortalBody, {
      children: (0, s.jsx)(l.AwaitingPurchaseTokenAuthStepBody, {
        className: c.body,
        isEmailResent: e,
        resendEmail: n
      })
    }), (0, s.jsx)(u.PaymentPortalFooter, {
      children: (0, s.jsx)(l.AwaitingPurchaseTokenAuthStepFooter, {})
    })]
  })
}