"use strict";
n.r(t), n.d(t, {
  checkNoPaymentTrialEnabled: function() {
    return i
  }
});
var s = n("862205"),
  r = n("719923");
let a = (0, s.createExperiment)({
    kind: "user",
    id: "2022-06_no_payment_info_trial",
    label: "No Payment Info Trial",
    defaultConfig: {
      bypassCheckout: !1
    },
    treatments: [{
      id: 1,
      label: "Bypass collecting payment info",
      config: {
        bypassCheckout: !0
      }
    }]
  }),
  l = (e, t, n) => {
    let s = null == n || (0, r.isPremiumBaseSubscriptionPlan)(n);
    return null != e && null == t && s
  },
  i = (e, t, n) => {
    let {
      bypassCheckout: s
    } = a.useExperiment({
      location: "aeb070_1"
    }, {
      autoTrackExposure: !1
    }), r = l(e, t, n);
    return s && r
  }