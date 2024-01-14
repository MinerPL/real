"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
  kind: "user",
  id: "2023-08_periodic_voice_stats",
  label: "Periodic Voice Stats",
  defaultConfig: {
    enableSendingVoiceStats: !1,
    percentageOfCalls: 0
  },
  treatments: [{
    id: 1,
    label: "Enable sending periodic voice stats for 100% of calls",
    config: {
      enableSendingVoiceStats: !0,
      percentageOfCalls: 100
    }
  }, {
    id: 2,
    label: "Enable sending periodic voice stats for 50% of calls",
    config: {
      enableSendingVoiceStats: !0,
      percentageOfCalls: 50
    }
  }, {
    id: 3,
    label: "Enable sending periodic voice stats for 20% of calls",
    config: {
      enableSendingVoiceStats: !0,
      percentageOfCalls: 20
    }
  }, {
    id: 4,
    label: "Enable sending periodic voice stats for 10% of calls",
    config: {
      enableSendingVoiceStats: !0,
      percentageOfCalls: 10
    }
  }, {
    id: 5,
    label: "Enable sending periodic voice stats for 5% of calls",
    config: {
      enableSendingVoiceStats: !0,
      percentageOfCalls: 5
    }
  }]
});
var s = r