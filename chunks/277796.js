"use strict";
n.r(t), n.d(t, {
  withGuildUnreadFlags: function() {
    return a
  },
  resetChannelUnreadFlags: function() {
    return l
  },
  withChannelUnreadFlags: function() {
    return u
  }
});
var i = n("568734"),
  s = n("397336");

function a(e, t) {
  var n;
  return i.addFlag((n = e, i.removeFlags(n, s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
}
let l = e => i.removeFlags(e, s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

function u(e, t) {
  return i.addFlag(l(e), t)
}