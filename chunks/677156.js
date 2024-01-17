"use strict";
n.r(t), n.d(t, {
  CustomGiftExperiment: function() {
    return a
  }
});
var s = n("862205");
let a = (0, s.createExperiment)({
  kind: "user",
  id: "2023-08_custom_gift",
  label: "Custom Gift Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Show gift purchaser custom gift flow",
    config: {
      enabled: !0
    }
  }]
})