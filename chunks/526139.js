"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var r = n("357957"),
  l = n("635357"),
  i = n("85336"),
  a = n("262683");
let u = {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(o, {
    ...e
  }),
  options: {
    renderHeader: !0
  }
};

function o(e) {
  let {
    isGift: t
  } = (0, l.useGiftContext)();
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(a.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
      onReturn: () => {
        let n = r.default.paymentSources;
        if (0 === Object.keys(n).length) {
          if (t) {
            e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
            return
          }
          e.handleClose()
        } else e.handleStepChange(i.Step.REVIEW, {
          trackedFromStep: i.Step.ADD_PAYMENT_STEPS
        })
      }
    })
  })
}