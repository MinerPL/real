"use strict";
n.r(t), n.d(t, {
  useVoiceActivityNotificationSettingsExperiment: function() {
    return s
  },
  hasVoiceChannelActivityNotifsEnabled: function() {
    return d
  }
});
var a = n("862205"),
  i = n("49111");
let l = (0, a.createExperiment)({
    kind: "user",
    id: "2023-11_voice_activity_notification_user",
    label: "Voice Activity Notifications for User",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Voice Activity Notifications are enabled for user",
      config: {
        enabled: !0
      }
    }, {
      id: 2,
      label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
      config: {
        enabled: !1
      }
    }]
  }),
  u = (0, a.createExperiment)({
    kind: "guild",
    id: "2023-11_voice_activity_notification_guild",
    label: "General Voice Channel Notifications for Guild",
    defaultConfig: {
      voiceChannelActivityNotifsEnabled: !1
    },
    treatments: [{
      id: 2,
      label: "Deadchat notifs disabled, voice channel activity notifs enabled",
      config: {
        voiceChannelActivityNotifsEnabled: !0
      }
    }]
  });

function s(e) {
  var t;
  let {
    voiceChannelActivityNotifsEnabled: n
  } = u.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment",
    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
  }, {
    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE,
    autoTrackExposure: !1
  }), {
    enabled: a
  } = l.useExperiment({
    location: "useVoiceActivityNotificationSettingsExperiment"
  }, {
    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE || !n,
    autoTrackExposure: !0
  });
  return (null == e ? void 0 : e.type) === i.ChannelTypes.GUILD_VOICE && n && a
}

function d(e) {
  var t;
  let {
    voiceChannelActivityNotifsEnabled: n
  } = u.getCurrentConfig({
    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
    location: "hasVoiceChannelActivityNotifsEnabled"
  });
  return n
}