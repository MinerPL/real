"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return f
  },
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return p
  },
  REVIEW_STEP_CONFIG: function() {
    return h
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return m
  },
  SHARED_STEP_CONFIGS: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var r = n("357957"),
  l = n("85336"),
  i = n("262683"),
  a = n("946359"),
  u = n("724269"),
  o = n("7127"),
  d = n("99836"),
  c = n("217796");
let f = {
    key: null,
    renderStep: e => (0, s.jsx)(c.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  p = {
    key: l.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsx)(i.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
        onReturn: () => {
          let t = r.default.paymentSources;
          0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
            trackedFromStep: l.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  E = {
    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, s.jsx)(u.default, {})
  },
  S = {
    key: l.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, s.jsx)(a.default, {})
  },
  h = {
    key: l.Step.REVIEW,
    renderStep: e => (0, s.jsx)(d.PaymentModalReviewStep, {
      ...e
    })
  },
  m = {
    key: l.Step.CONFIRM,
    renderStep: e => (0, s.jsx)(o.PaymentModalConfirmStep, {
      ...e
    })
  },
  I = [E, S]