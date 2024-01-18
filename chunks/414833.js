"use strict";
n.r(t), n.d(t, {
  computeThreadNotificationSetting: function() {
    return d
  },
  useThreadNotificationSetting: function() {
    return c
  }
}), n("702976");
var a = n("446674"),
  l = n("42203"),
  s = n("282109"),
  i = n("568734"),
  r = n("755624"),
  o = n("648564"),
  u = n("49111");

function d(e) {
  let t = r.default.flags(e.id);
  if (null == t) return o.ThreadMemberFlags.NO_MESSAGES;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ALL_MESSAGES)) return o.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ONLY_MENTIONS)) return o.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.NO_MESSAGES)) return o.ThreadMemberFlags.NO_MESSAGES;
  let n = l.default.getChannel(e.parent_id);
  if (null == n || s.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return o.ThreadMemberFlags.NO_MESSAGES;
  let a = s.default.resolvedMessageNotifications(n);
  return a === u.UserNotificationSettings.NO_MESSAGES ? o.ThreadMemberFlags.NO_MESSAGES : a === u.UserNotificationSettings.ONLY_MENTIONS ? o.ThreadMemberFlags.ONLY_MENTIONS : o.ThreadMemberFlags.ALL_MESSAGES
}

function c(e) {
  return (0, a.useStateFromStores)([r.default, s.default, l.default], () => d(e), [e])
}