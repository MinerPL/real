"use strict";
n.r(t), n.d(t, {
  ESLatamLaunchExperiment: function() {
    return l
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
  kind: "user",
  id: "2023-12_eslatam_launch",
  label: "ES LATAM Launch",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable ES-LATAM",
    config: {
      enabled: !0
    }
  }]
})