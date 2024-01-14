"use strict";
l.r(t), l.d(t, {
  usePrivilegedApplicationIntents: function() {
    return n
  }
});
var i = l("568734"),
  a = l("49111");

function n(e) {
  if (null != e) return {
    guildPresences: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_PRESENCE),
    guildMembers: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}