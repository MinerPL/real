"use strict";
n.r(t), n.d(t, {
  useNullExperiment: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-04_null_experiment",
  label: "Null Experiment",
  defaultConfig: {
    inUse: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      inUse: !0
    }
  }]
});

function i() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return s.useExperiment({
    location: "a9e81b_1"
  }, {
    autoTrackExposure: e
  })
}