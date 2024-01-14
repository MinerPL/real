"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var l = (0, a("296892").default)({
  kind: "user",
  id: "2023-03_aa_user_segment_filter",
  label: "AA test to validate segmentation filter",
  defaultConfig: {
    isEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "AA test enabled. Noop on UI effect.",
    config: {
      isEnabled: !0
    }
  }]
})