"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("862205");
let n = (0, a.createExperiment)({
  kind: "user",
  id: "2024-01_all_perks",
  label: "All Perks",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});
var l = function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return n.useExperiment({
    location: "experiment_hook"
  }, {
    autoTrackExposure: e,
    disable: t
  })
}