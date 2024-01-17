"use strict";
s.r(t), s.d(t, {
  WhatsNewAvatarDecoRollout: function() {
    return n
  },
  useWhatsNewAvatarDecoRollout: function() {
    return l
  },
  WhatsNewProfileFXRollout: function() {
    return i
  },
  useWhatsNewProfileFXRollout: function() {
    return r
  }
});
var a = s("862205");
let n = (0, a.createExperiment)({
    kind: "user",
    id: "2023-09_whats_new_drop_1_flip",
    label: "What's New Drop 1",
    defaultConfig: {
      flipped: !1
    },
    treatments: [{
      id: 1,
      label: "Flipped",
      config: {
        flipped: !0
      }
    }]
  }),
  l = () => n.useExperiment({
    location: "experiment_hook"
  }),
  i = (0, a.createExperiment)({
    kind: "user",
    id: "2023-09_whats_new_drop_2_flip",
    label: "What's New Drop 2",
    defaultConfig: {
      flipped: !1
    },
    treatments: [{
      id: 1,
      label: "Flipped",
      config: {
        flipped: !0
      }
    }]
  }),
  r = () => i.useExperiment({
    location: "experiment_hook"
  })