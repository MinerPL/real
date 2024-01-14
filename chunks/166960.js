"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var a = i("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-05_referral_trials_birthday_moment",
  label: "Referral Trials Birthday Moment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Users will see the birthday moment referral trial UX",
    config: {
      enabled: !0
    }
  }]
});
var r = s