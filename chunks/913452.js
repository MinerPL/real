"use strict";
n.r(t), n.d(t, {
  useOpenInPopoutExperiment: function() {
    return i
  }
});
var a = n("862205");
let r = (0, a.createExperiment)({
  kind: "user",
  id: "2023-08-30_open-in-popout",
  label: "Open Channel in Popout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}