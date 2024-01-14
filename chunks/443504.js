"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-12_marketing_automation_experiment",
  label: "Marketing Automation",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Ask server for marketing content for rendering",
    config: {
      enabled: !0
    }
  }]
});
var i = s