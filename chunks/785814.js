"use strict";
n.r(t), n.d(t, {
  useIsVoiceChannelGameActivityEnabled: function() {
    return s
  },
  isVoiceChannelGameActivityEnabled: function() {
    return i
  },
  default: function() {
    return l
  }
});
var a = n("862205");
let r = (0, a.createExperiment)({
  kind: "guild",
  id: "2024-01_voice_channel_game_activity",
  label: "Voice Channel Game Activity",
  defaultConfig: {
    showGameIcon: !1
  },
  treatments: [{
    id: 1,
    label: "Show game icon next to the Voice User in VC",
    config: {
      showGameIcon: !0
    }
  }]
});

function s(e, t, n) {
  let {
    showGameIcon: a
  } = r.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: n
  });
  return a
}

function i(e, t, n) {
  let {
    showGameIcon: a
  } = r.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: n
  });
  return a
}
var l = r