"use strict";
n.r(t), n.d(t, {
  ESLatamLaunchExperiment: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
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