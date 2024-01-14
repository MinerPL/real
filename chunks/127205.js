"use strict";
n.r(t), n.d(t, {
  useIsSafetyConsumerEducationReportingEnabled: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-04_consumer_education_launch__reporting",
  label: "Consumer Education Launch - Reporting",
  defaultConfig: {
    bucket: 0,
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Reporting",
    config: {
      bucket: 1,
      enabled: !0
    }
  }]
});

function i() {
  return s.useExperiment({
    location: "183c74_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}