"use strict";
n.r(t), n.d(t, {
  CustomGiftExperiment: function() {
    return r
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
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