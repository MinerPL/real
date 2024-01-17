"use strict";
n.r(t), n.d(t, {
  getSavedMessageAndChannel: function() {
    return d
  }
});
var a = n("298386"),
  l = n("233069"),
  s = n("719926"),
  i = n("766274"),
  r = n("42203"),
  o = n("377253"),
  u = n("697218");

function d(e) {
  var t, n, d;
  let c = o.default.getMessage(e.channelId, e.messageId),
    f = u.default.getUser(e.authorId),
    h = r.default.getChannel(e.channelId),
    E = null != f ? f : new i.default({
      id: e.authorId,
      username: e.authorSummary
    }),
    m = new s.default({
      id: e.messageId,
      channel_id: e.channelId,
      author: E,
      content: e.messageSummary
    }),
    p = null == e.guildId ? new l.DMChannelRecord({
      id: e.channelId,
      type: a.ChannelTypes.DM,
      name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
      guild_id: "",
      recipients: [null !== (n = e.authorId) && void 0 !== n ? n : ""]
    }) : new l.GuildTextualChannelRecord({
      id: e.channelId,
      type: null == e.guildId ? a.ChannelTypes.DM : a.ChannelTypes.GUILD_TEXT,
      name: null !== (d = e.channelSummary) && void 0 !== d ? d : "",
      guild_id: e.guildId
    });
  return {
    channel: null != h ? h : p,
    message: null != c ? c : m
  }
}