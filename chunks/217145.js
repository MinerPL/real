"use strict";
n.r(t), n.d(t, {
  isIFrameModalUserEnabled: function() {
    return a
  }
});
var l = n("862205");
let u = (0, l.createExperiment)({
  kind: "user",
  id: "2023-07_iframe_modal",
  label: "iFrame Modal",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable iFrameModal",
    config: {
      enabled: !0
    }
  }]
});

function a() {
  return u.getCurrentConfig({
    location: "5c0a70_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}