"use strict";
E.r(_), E.d(_, {
  GamingStatsSetupExperiment: function() {
    return o
  }
});
var t = E("862205");
let o = (0, t.createExperiment)({
  kind: "guild",
  id: "2023-09_gaming_stats_setup",
  label: "Gaming stats exposure setup",
  defaultConfig: {
    trackGamingStats: !1
  },
  treatments: [{
    id: 1,
    label: "trigger gaming stats data",
    config: {
      trackGamingStats: !0
    }
  }]
})