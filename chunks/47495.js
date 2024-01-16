"use strict";
n.r(t), n.d(t, {
  getMuteTimeOptions: function() {
    return g
  },
  filterOverrides: function() {
    return c
  },
  useShouldUseNewNotificationSystem: function() {
    return N
  }
}), n("702976");
var i = n("446674"),
  a = n("668597"),
  s = n("282109"),
  l = n("568734"),
  o = n("640497"),
  d = n("49111"),
  r = n("468200"),
  u = n("397336"),
  S = n("782340");

function g() {
  return [{
    label: S.default.Messages.MUTE_DURATION_15_MINUTES,
    value: r.MuteUntilSeconds.MINUTES_15
  }, {
    label: S.default.Messages.MUTE_DURATION_1_HOUR,
    value: r.MuteUntilSeconds.HOURS_1
  }, {
    label: S.default.Messages.MUTE_DURATION_3_HOURS,
    value: r.MuteUntilSeconds.HOURS_3
  }, {
    label: S.default.Messages.MUTE_DURATION_8_HOURS,
    value: r.MuteUntilSeconds.HOURS_8
  }, {
    label: S.default.Messages.MUTE_DURATION_24_HOURS,
    value: r.MuteUntilSeconds.HOURS_24
  }, {
    label: S.default.Messages.MUTE_DURATION_ALWAYS,
    value: r.MuteUntilSeconds.ALWAYS
  }]
}
let _ = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
  return Object.keys(e).filter(n => {
    var i, s;
    let o = e[n].message_notifications !== d.UserNotificationSettings.NULL,
      r = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && r || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
  })
}

function N(e) {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.useNewNotifications);
  return o.NotificationsExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled && t
}