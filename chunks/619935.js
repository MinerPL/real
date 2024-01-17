"use strict";
n.r(t), n.d(t, {
  useBlockedPaymentsConfig: function() {
    return l
  },
  default: function() {
    return o
  }
});
var u = n("862205"),
  r = n("15733");
let i = (0, u.createExperiment)({
    kind: "user",
    id: "2022-03_block_russian_purchases",
    label: "Block purchases based on country",
    defaultConfig: {
      paymentsBlocked: !1
    },
    treatments: [{
      id: 1,
      label: "Payments Blocked",
      config: {
        paymentsBlocked: !0
      }
    }]
  }),
  a = (0, u.createExperiment)({
    kind: "user",
    id: "2022-03_block_russian_purchases_desktop",
    label: "Block purchases based on country (desktop specific flags)",
    defaultConfig: {
      checkPaymentSource: !1
    },
    treatments: [{
      id: 1,
      label: "Check Payment Source",
      config: {
        checkPaymentSource: !0
      }
    }]
  });

function l() {
  let {
    paymentsBlocked: e
  } = i.useExperiment({
    location: "c519a9_1"
  }, {
    autoTrackExposure: !1
  }), {
    checkPaymentSource: t
  } = a.useExperiment({
    location: "c519a9_2"
  }, {
    autoTrackExposure: !1
  }), {
    defaultBillingCountryCode: n
  } = (0, r.default)();
  return e || t && "RU" === n
}
var o = i