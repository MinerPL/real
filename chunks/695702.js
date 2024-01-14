"use strict";
l.r(t), l.d(t, {
  PlayStationVoiceExperiment: function() {
    return a
  }
});
var n = l("862205");
let a = (0, n.createExperiment)({
  kind: "user",
  id: "2022-08_churro_experiment",
  label: "PS5 Voice Experiment",
  defaultConfig: {
    allowPlayStationStaging: !1
  },
  treatments: [{
    id: 3,
    label: "PS Experiment + upsells + Staging",
    config: {
      allowPlayStationStaging: !0
    }
  }]
})