"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (0, n("862205").createExperiment)({
  kind: "guild",
  id: "2024-01_nvencadaptivekeyframe",
  label: "nvenc adaptive key frame interval",
  defaultConfig: {
    enableAdaptiveKeyFrame: !1
  },
  treatments: [{
    id: 1,
    label: "enable adaptive key frame for nvenc",
    config: {
      enableAdaptiveKeyFrame: !0
    }
  }]
})