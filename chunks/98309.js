"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("316693"),
  i = n("305961"),
  r = n("49111");
let a = [r.ChannelTypes.GUILD_TEXT, r.ChannelTypes.GUILD_VOICE, r.ChannelTypes.GUILD_ANNOUNCEMENT, r.ChannelTypes.GUILD_FORUM, r.ChannelTypes.PUBLIC_THREAD, r.ChannelTypes.PRIVATE_THREAD],
  o = s.default.combine(r.Permissions.VIEW_CHANNEL, r.Permissions.SEND_MESSAGES);

function d(e) {
  if (null == e || !a.includes(e.type)) return [];
  let t = i.default.getGuild(e.guild_id);
  return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
    var n, i;
    return 0 === e.type && (null === (i = t.roles[e.id]) || void 0 === i ? void 0 : null === (n = i.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !s.default.hasAny(e.deny, o)
  }).map(e => t.roles[e.id]).filter(e => null != e)
}