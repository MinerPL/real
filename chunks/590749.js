"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionPaymentSteps: function() {
    return I
  }
});
var r = n("37983");
n("884691");
var i = n("85336"),
  l = n("262683"),
  s = n("946359"),
  u = n("724269"),
  a = n("559362"),
  o = n("671672"),
  c = n("101432"),
  d = n("458985"),
  f = n("782340");

function I(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    application: I,
    listing: _,
    showBenefitsFirst: E
  } = e, S = [{
    key: null,
    renderStep: e => (0, r.jsx)(c.default, {
      initialStep: E ? i.Step.BENEFITS : i.Step.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: i.Step.BENEFITS,
    renderStep: e => (0, r.jsx)(a.default, {
      application: I,
      listing: _,
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: i.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(l.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, {
    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(u.default, {})
  }, {
    key: i.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(s.default, {})
  }, {
    key: i.Step.REVIEW,
    renderStep: e => (0, r.jsx)(d.default, {
      application: I,
      backButtonEligible: !!E || void 0,
      prevStep: E ? i.Step.BENEFITS : void 0,
      listing: _,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: i.Step.CONFIRM,
    renderStep: e => (0, r.jsx)(o.default, {
      application: I,
      listing: _,
      showBenefits: !E,
      ...e
    })
  }];
  return S
}