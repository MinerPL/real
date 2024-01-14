"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var n = a("862205");
let l = (0, n.createExperiment)({
  kind: "user",
  id: "2023-10_thumbhash_messages",
  label: "Display thumbhash placeholders when loading message images",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Display thumbhashes",
    config: {
      enabled: !0
    }
  }]
});
var s = l