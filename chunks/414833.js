"use strict";
n.r(t), n.d(t, {
  computeThreadNotificationSetting: function() {
    return o
  },
  useThreadNotificationSetting: function() {
    return f
  }
}), n("702976");
var a = n("446674"),
  l = n("42203"),
  i = n("282109"),
  u = n("568734"),
  r = n("755624"),
  s = n("648564"),
  d = n("49111");

function o(e) {
  let t = r.default.flags(e.id);
  if (null == t) return s.ThreadMemberFlags.NO_MESSAGES;
  if ((0, u.hasFlag)(t, s.ThreadMemberFlags.ALL_MESSAGES)) return s.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, u.hasFlag)(t, s.ThreadMemberFlags.ONLY_MENTIONS)) return s.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, u.hasFlag)(t, s.ThreadMemberFlags.NO_MESSAGES)) return s.ThreadMemberFlags.NO_MESSAGES;
  let n = l.default.getChannel(e.parent_id);
  if (null == n || i.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return s.ThreadMemberFlags.NO_MESSAGES;
  let a = i.default.resolvedMessageNotifications(n);
  return a === d.UserNotificationSettings.NO_MESSAGES ? s.ThreadMemberFlags.NO_MESSAGES : a === d.UserNotificationSettings.ONLY_MENTIONS ? s.ThreadMemberFlags.ONLY_MENTIONS : s.ThreadMemberFlags.ALL_MESSAGES
}

function f(e) {
  return (0, a.useStateFromStores)([r.default, i.default, l.default], () => o(e), [e])
}