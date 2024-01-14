"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("862205");
let i = (0, a.createExperiment)({
  id: "2023-12_quests",
  kind: "user",
  label: "Quests",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Quests enabled",
    config: {
      enabled: !0
    }
  }]
});
var s = i