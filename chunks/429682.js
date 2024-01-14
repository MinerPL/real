"use strict";
n.r(t), n.d(t, {
  isIFrameModalForGuildEnabled: function() {
    return a
  }
});
var l = n("862205");
let u = (0, l.createExperiment)({
  kind: "guild",
  id: "2023-08_iframe_modal_guild",
  label: "iFrame Modal guild experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable iFrame Modal Guild",
    config: {
      enabled: !0
    }
  }]
});

function a(e) {
  return u.getCurrentConfig({
    guildId: null != e ? e : "",
    location: "2d360b_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}