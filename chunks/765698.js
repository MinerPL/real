"use strict";
l.r(t), l.d(t, {
  VoiceActivityProfileExperiment: function() {
    return a
  }
});
var n = l("862205");
let a = (0, n.createExperiment)({
  kind: "user",
  id: "2023-11_voice_activity_in_profile",
  label: "Voice Activity in Profile",
  defaultConfig: {
    showVoiceActivityInProfile: !1
  },
  treatments: [{
    id: 1,
    label: "Voice activity displayed in user profile",
    config: {
      showVoiceActivityInProfile: !0
    }
  }]
})