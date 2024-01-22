"use strict";
n.r(t), n.d(t, {
  useIsEligibleForExplicitMediaSenderFalsePositive: function() {
    return a
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
  kind: "user",
  id: "2024-01_explicit_media_sender_false_positive",
  label: "Explicit Media Sender False Positive",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable explicit media sender false positive experience",
    config: {
      enabled: !0
    }
  }]
});

function a(e) {
  return l.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  }).enabled
}