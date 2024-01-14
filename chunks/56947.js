"use strict";
n.r(t), n.d(t, {
  ClipsExperiment: function() {
    return o
  },
  areClipsEnabled: function() {
    return u
  },
  useEnableClips: function() {
    return c
  },
  useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
    return d
  },
  useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
    return f
  }
});
var i = n("862205"),
  r = n("584687"),
  s = n("42887"),
  a = n("18346");
let o = (0, i.createExperiment)({
    kind: "user",
    id: "2022-11_clips_experiment",
    label: "Clips Experiment",
    defaultConfig: {
      enableClips: !1,
      ignorePlatformRestriction: !1,
      showClipsHeaderEntrypoint: !1
    },
    treatments: [{
      id: 1,
      label: "Clips without upsells",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !0
      }
    }, {
      id: 2,
      label: "Clips with upsells",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !0
      }
    }, {
      id: 99,
      label: "Clips 4 da Developerz",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !0,
        showClipsHeaderEntrypoint: !0
      }
    }]
  }),
  l = (0, i.createExperiment)({
    kind: "user",
    id: "2023-09_clips_nitro_early_access",
    label: "Clips (Nitro EA)",
    defaultConfig: {
      enableClips: !1,
      enablePremiumEarlyAccessAnnouncementCoachmark: !1,
      enablePremiumEarlyAccessGoLiveRoadblock: !1
    },
    treatments: [{
      id: 1,
      label: "Clips Nitro EA Upsells Visible",
      config: {
        enableClips: !1,
        enablePremiumEarlyAccessAnnouncementCoachmark: !0,
        enablePremiumEarlyAccessGoLiveRoadblock: !0
      }
    }, {
      id: 2,
      label: "Clips Enabled (Nitro)",
      config: {
        enableClips: !0,
        enablePremiumEarlyAccessAnnouncementCoachmark: !0,
        enablePremiumEarlyAccessGoLiveRoadblock: !1
      }
    }]
  });

function u() {
  if (!(0, a.default)(s.default)) return !1;
  let {
    enableClips: e
  } = l.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableClips: t
  } = o.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableDecoupledGameClipping: n
  } = r.default.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  });
  return e || t || n
}

function c() {
  let e = (0, a.default)(s.default),
    {
      enableClips: t
    } = l.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableClips: n
    } = o.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableDecoupledGameClipping: i
    } = r.default.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    });
  return (n || t || i) && e
}
let d = e => {
    let {
      autoTrackExposure: t
    } = e, n = (0, a.default)(s.default), {
      enablePremiumEarlyAccessGoLiveRoadblock: i
    } = l.useExperiment({
      location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
    }, {
      autoTrackExposure: t && n
    });
    return !!n && i
  },
  f = e => {
    let {
      autoTrackExposure: t
    } = e, n = (0, a.default)(s.default), {
      enablePremiumEarlyAccessAnnouncementCoachmark: i
    } = l.useExperiment({
      location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
    }, {
      autoTrackExposure: t && n
    });
    return !!n && i
  }