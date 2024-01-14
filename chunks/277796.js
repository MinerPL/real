"use strict";
n.r(t), n.d(t, {
  withGuildUnreadFlags: function() {
    return s
  },
  resetChannelUnreadFlags: function() {
    return l
  },
  withChannelUnreadFlags: function() {
    return o
  }
});
var i = n("568734"),
  a = n("397336");

function s(e, t) {
  var n;
  return i.addFlag((n = e, i.removeFlags(n, a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
}
let l = e => i.removeFlags(e, a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

function o(e, t) {
  return i.addFlag(l(e), t)
}