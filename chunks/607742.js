"use strict";
n.r(t), n.d(t, {
  useIsSafetyConsumerEducationAAEnabled: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-03_mute_block_aa",
  label: "Safety Consumer Education Block/Mute - A/A",
  defaultConfig: {
    bucket: 0,
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Mute",
    config: {
      bucket: 1,
      enabled: !0
    }
  }, {
    id: 2,
    label: "Block",
    config: {
      bucket: 2,
      enabled: !0
    }
  }]
});

function i() {
  return s.useExperiment({
    location: "34e1bc_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}