"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "user",
  id: "2021-02_staff_qc_debugging",
  label: "Display QS scores in results. Not a real experiment",
  defaultConfig: {
    showScores: !1
  },
  treatments: [{
    id: 1,
    label: "Show scores in QS results",
    config: {
      showScores: !0
    }
  }]
});
var s = a