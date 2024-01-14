"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("862205");
let l = (0, a.createExperiment)({
  kind: "user",
  id: "2021-04_longer_group_dm_invites",
  label: "Longer Group DM Invites",
  defaultConfig: {
    inviteMaxAgeSeconds: 86400
  },
  treatments: [{
    id: 1,
    label: "Makes group DM invites expire after 1 week.",
    config: {
      inviteMaxAgeSeconds: 604800
    }
  }]
});
var s = l