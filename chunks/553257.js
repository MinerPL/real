"use strict";
n.r(t), n.d(t, {
  experiment: function() {
    return s
  },
  usePomeloEligibility: function() {
    return a
  },
  getPomeloEligibility: function() {
    return l
  }
});
var i = n("862205");
let s = (0, i.createExperiment)({
    kind: "user",
    label: "Pomelo",
    id: "2023-03_pomelo",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  a = () => {
    let {
      enabled: e
    } = s.useExperiment({
      location: "faf26d_1"
    }, {
      autoTrackExposure: !1
    });
    return e
  },
  l = () => {
    let {
      enabled: e
    } = s.getCurrentConfig({
      location: "faf26d_2"
    }, {
      autoTrackExposure: !1
    });
    return e
  }