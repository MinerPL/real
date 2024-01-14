"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2022-01_server_recommendations_rollout",
  label: "Rollout experiment for server recommendations.",
  defaultConfig: {
    showRecs: !1
  },
  treatments: [{
    id: 1,
    label: "Show server recommendations",
    config: {
      showRecs: !0
    }
  }]
})