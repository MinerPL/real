"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("862205");
let i = (0, r.createExperiment)({
  kind: "user",
  id: "2023-12_create_guild_modal_themeing",
  label: "Create Guild Modal Force Light Theme",
  defaultConfig: {
    forceLightTheme: !1
  },
  treatments: [{
    id: 1,
    label: "Force Light Theme",
    config: {
      forceLightTheme: !0
    }
  }]
});
var l = e => {
  let {
    location: t,
    autoTrackExposure: n = !0,
    trackExposureOptions: r = {}
  } = e;
  return i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    trackExposureOptions: r
  })
}