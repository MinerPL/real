"use strict";
n.r(t), n.d(t, {
  isEligibleForExplicitMediaRedaction: function() {
    return a
  },
  useIsEligibleForExplicitMediaRedaction: function() {
    return o
  }
});
var s = n("862205");
let i = (0, s.createExperiment)({
    kind: "user",
    id: "2023-08_explicit_media_redaction",
    label: "Explicit Media Redaction",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable explicit media redaction",
      config: {
        enabled: !0
      }
    }]
  }),
  r = (0, s.createExperiment)({
    kind: "user",
    id: "2023-08_explicit_media_redaction_teen",
    label: "Explicit Media Redaction for Teens",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable explicit media redaction for teens",
      config: {
        enabled: !0
      }
    }]
  });

function a() {
  let {
    enabled: e
  } = i.getCurrentConfig({
    location: "686da2_1"
  }, {
    autoTrackExposure: !0
  }), {
    enabled: t
  } = r.getCurrentConfig({
    location: "686da2_1"
  }, {
    autoTrackExposure: !0
  });
  return e || t
}

function o() {
  let {
    enabled: e
  } = i.useExperiment({
    location: "686da2_2"
  }, {
    autoTrackExposure: !0
  }), {
    enabled: t
  } = r.useExperiment({
    location: "686da2_2"
  }, {
    autoTrackExposure: !0
  });
  return e || t
}