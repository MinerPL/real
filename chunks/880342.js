"use strict";
t.r(n), t.d(n, {
  recentlyHeardExperiment: function() {
    return i
  },
  useRecentlyHeardExperiment: function() {
    return o
  }
});
var l = t("862205");
let u = (0, l.createExperiment)({
  kind: "user",
  id: "2023-11_soundboard_recently_heard_frequently_played",
  label: "Soundboard Recently Heard & Frequently Played",
  defaultConfig: {
    canSeeRecentlyHeard: !1,
    canSeeFrequentlyPlayed: !1
  },
  treatments: [{
    id: 1,
    label: "User can see Recently Heard soundboard section",
    config: {
      canSeeRecentlyHeard: !0,
      canSeeFrequentlyPlayed: !1
    }
  }, {
    id: 2,
    label: "User can see Frequently Played soundboard section",
    config: {
      canSeeRecentlyHeard: !1,
      canSeeFrequentlyPlayed: !0
    }
  }, {
    id: 3,
    label: "User can see Frequently Played & Recently Heard soundboard sections",
    config: {
      canSeeRecentlyHeard: !0,
      canSeeFrequentlyPlayed: !0
    }
  }]
});

function i(e) {
  let {
    location: n,
    autoTrackExposure: t
  } = e;
  return u.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: t
  })
}

function o(e) {
  let {
    autoTrackExposure: n,
    location: t
  } = e;
  return u.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  })
}