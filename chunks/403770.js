"use strict";
n.r(t), n.d(t, {
  SecureFramesUserExperiment: function() {
    return r
  },
  SecureFramesGuildExperiment: function() {
    return s
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
    kind: "user",
    id: "2023-08_secure_frames_encryption",
    label: "Allowing testing secure frames for voice/video",
    defaultConfig: {
      canSupportSecureFrames: !1,
      canSupportMls: !1
    },
    treatments: [{
      id: 1,
      label: "Can support secure frames for voice/video",
      config: {
        canSupportSecureFrames: !0,
        canSupportMls: !1
      }
    }, {
      id: 2,
      label: "Can support secure frames for voice/video w/ MLS negotiation",
      config: {
        canSupportSecureFrames: !0,
        canSupportMls: !0
      }
    }]
  }),
  s = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-11_secure_frames_encryption_guilds",
    label: "Allowing testing secure frames for voice/video (Guilds)",
    defaultConfig: {
      canSupportSecureFrames: !1,
      canSupportMls: !1
    },
    treatments: [{
      id: 1,
      label: "Can support secure frames for voice/video",
      config: {
        canSupportSecureFrames: !0,
        canSupportMls: !1
      }
    }, {
      id: 2,
      label: "Can support secure frames for voice/video w/ MLS negotiation",
      config: {
        canSupportSecureFrames: !0,
        canSupportMls: !0
      }
    }]
  })