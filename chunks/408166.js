"use strict";
n.r(t), n.d(t, {
  ActivitiesSoundsExperiment: function() {
    return s
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-05_activities_joinleave_sounds",
  label: "Activities Sounds Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Activities Join/Leave Sounds",
    config: {
      enabled: !0
    }
  }]
})