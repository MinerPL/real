"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var n = s("446674"),
  a = s("406043"),
  l = s("267567"),
  i = s("300322"),
  r = s("26989"),
  o = s("88093"),
  u = s("957255"),
  d = s("583022"),
  c = s("49111");

function h(e) {
  let t = (0, n.useStateFromStores)([o.default], () => (null == e ? void 0 : e.guild_id) == null || o.default.canChatInGuild(e.guild_id), [e]),
    s = (0, n.useStateFromStores)([l.default], () => (null == e ? void 0 : e.guild_id) != null && l.default.isLurking(e.guild_id), [e]),
    h = (0, n.useStateFromStores)([r.default], () => (null == e ? void 0 : e.guild_id) != null && r.default.isCurrentUserGuest(e.guild_id), [e]),
    f = (0, n.useStateFromStores)([u.default], () => t && u.default.can(c.Permissions.ADD_REACTIONS, e), [t, e]),
    [, m] = (0, a.useCurrentUserCommunicationDisabled)(null == e ? void 0 : e.guild_id),
    g = (0, i.useIsActiveChannelOrUnarchivableThread)(e);
  if (null == e) return {
    disableReactionReads: !0,
    disableReactionCreates: !0,
    disableReactionUpdates: !0,
    isLurking: !1,
    isGuest: !1,
    isPendingMember: !1
  };
  let S = (0, d.default)({
    channel: e,
    canChat: t,
    renderReactions: !0,
    canAddNewReactions: f,
    isLurking: s,
    isGuest: h,
    communicationDisabled: m,
    isActiveChannelOrUnarchivableThread: g
  });
  return {
    ...S,
    isLurking: s,
    isGuest: h,
    isPendingMember: !1
  }
}