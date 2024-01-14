"use strict";
n.r(t), n.d(t, {
  useOnboardingDropdownExperiment: function() {
    return s
  },
  getOnboardingDropdownExperiment: function() {
    return i
  }
});
var a = n("862205");
let l = (0, a.createExperiment)({
  kind: "guild",
  id: "2023-02_onboardingdropdowns",
  label: "Enables dropdown selections from onboarding prompts",
  defaultConfig: {
    dropdownsAllowed: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      dropdownsAllowed: !0
    }
  }]
});

function s(e) {
  return l.useExperiment({
    guildId: e,
    location: "a12ce7_1"
  }, {
    autoTrackExposure: !1
  })
}

function i(e) {
  return l.getCurrentConfig({
    guildId: e,
    location: "a12ce7_2"
  })
}