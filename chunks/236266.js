"use strict";
E.r(_), E.d(_, {
  getEmojiCaptionsExperimentConfig: function() {
    return n
  }
});
var t = E("862205");
let o = (0, t.createExperiment)({
  kind: "user",
  id: "2023-10_emoji_captions",
  label: "Emoji Captions Experiment",
  defaultConfig: {
    isEnabledOnDesktop: !1,
    isAutosuggestEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      isEnabledOnDesktop: !0,
      isAutosuggestEnabled: !1
    }
  }, {
    id: 2,
    label: "Enabled with more captions from post-processing",
    config: {
      isEnabledOnDesktop: !0,
      isAutosuggestEnabled: !1
    }
  }, {
    id: 3,
    label: "Enabled with mobile autosuggest",
    config: {
      isEnabledOnDesktop: !0,
      isAutosuggestEnabled: !0
    }
  }]
});

function n(e) {
  let {
    location: _,
    trackExposureOptions: E = {},
    autoTrackExposure: t = !0
  } = e, n = o.getCurrentConfig({
    location: _
  }, {
    autoTrackExposure: t,
    trackExposureOptions: E
  });
  return n
}