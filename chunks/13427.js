"use strict";
n.r(t), n.d(t, {
  StrangerDangerTeensExperiment: function() {
    return a
  },
  useIsEligibleForStrangerDangerTeens: function() {
    return l
  }
});
var s = n("862205");
let a = (0, s.createExperiment)({
  kind: "user",
  id: "2023-08_self_mod_stranger_danger_teens",
  label: "Stranger Danger Teens",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable stranger danger for teens",
    config: {
      enabled: !0
    }
  }]
});

function l(e) {
  return a.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}