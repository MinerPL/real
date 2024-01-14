"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var s = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2022-04_registration_copy_updates",
  label: "Registration Copy Updates",
  defaultConfig: {
    enableNewCopy: !1,
    hasCopyAboveButton: !1,
    hasProminentCopy: !1
  },
  treatments: [{
    id: 1,
    label: "Continue / Copy Above Button / High Prominence Copy",
    config: {
      enableNewCopy: !0,
      hasCopyAboveButton: !0,
      hasProminentCopy: !0
    }
  }, {
    id: 2,
    label: "Continue / Copy Below Button / High Prominence Copy",
    config: {
      enableNewCopy: !0,
      hasCopyAboveButton: !1,
      hasProminentCopy: !0
    }
  }, {
    id: 3,
    label: "Continue / Copy Above Button / Normal Prominence Copy",
    config: {
      enableNewCopy: !0,
      hasCopyAboveButton: !0,
      hasProminentCopy: !1
    }
  }]
})