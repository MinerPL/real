"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
  kind: "user",
  id: "2023-09_proxy_block_notice",
  label: "Proxy Block Experiment",
  defaultConfig: {
    eligibleForNotice: !1
  },
  treatments: [{
    id: 1,
    label: "Show nag bar when proxy blocks an API request",
    config: {
      eligibleForNotice: !0
    }
  }]
});
var a = l