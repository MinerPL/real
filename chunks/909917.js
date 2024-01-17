"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  i = n("246060"),
  r = n("730541"),
  o = n("407972"),
  u = n("981601"),
  d = n("42203"),
  c = n("25116");

function f(e, t) {
  if ((0, r.isPublicSystemMessage)(t)) return (0, s.jsx)(o.default, {});
  if ((0, c.default)(t)) {
    let {
      guild_id: e,
      channel_id: n,
      message_id: l
    } = t.messageReference;
    if (null != e) return (0, s.jsx)(i.default, {
      guildId: e,
      channelId: n,
      messageId: l
    })
  }
  if (null != t.interaction && "SENDING" === t.state) return (0, s.jsx)(s.Fragment, {});
  let n = d.default.getChannel(t.channel_id);
  return a(null != n, "renderUserGuildPopout: channel should never be null"), (0, s.jsx)(u.default, {
    ...e,
    channelId: t.channel_id,
    guildId: n.guild_id,
    userId: t.author.id,
    user: null != t.webhookId ? t.author : void 0
  })
}