"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2021-03_videotoolbox_rate_optimization",
  label: "VideoToolbox Rate Control Optimizations",
  defaultConfig: {
    useExperimentalRateControl: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      useExperimentalRateControl: !0
    }
  }]
})