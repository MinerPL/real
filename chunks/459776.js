"use strict";
n.r(t), n.d(t, {
  isNewGroupItem: function() {
    return u
  },
  default: function() {
    return d
  }
});
var l = n("888400"),
  a = n("718517"),
  s = n("500858"),
  i = n("913491"),
  r = n("49111");
let o = 7 * a.default.Millis.MINUTE;

function u(e, t, n) {
  return null == t || t.type === r.ChannelStreamTypes.MESSAGE && t.content.id === t.content.channel_id || t.type !== r.ChannelStreamTypes.MESSAGE && t.type !== r.ChannelStreamTypes.THREAD_STARTER_MESSAGE || d(e, t.content, n)
}

function d(e, t, n) {
  if (n.hasFlag(r.MessageFlags.HAS_THREAD) || n.isCommandType()) return !0;
  if (n.type > r.MessageTypes.DEFAULT) return !(0, i.default)(t) || n.type === r.MessageTypes.REPLY || !1;
  return !!((0, i.default)(t) || t.author.id !== n.author.id || t.hasFlag(r.MessageFlags.EPHEMERAL) !== n.hasFlag(r.MessageFlags.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === e.id || !(0, l.isWithinInterval)(t.timestamp, n.timestamp, o) || n.hasFlag(r.MessageFlags.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(r.MessageFlags.SUPPRESS_NOTIFICATIONS) || t.hasFlag(r.MessageFlags.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(r.MessageFlags.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, s.default)(n)) || !1
}