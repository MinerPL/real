"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("862205");
let l = (0, a.createExperiment)({
  kind: "user",
  id: "2023-11_xbox_game_invites",
  label: "Xbox Game Invites Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Xbox Game Invites UI Enabled",
    config: {
      enabled: !0
    }
  }]
});
var s = l