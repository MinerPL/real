"use strict";
n.r(t), n.d(t, {
  isDefaultChannelThresholdMetAfterDelete: function() {
    return c
  },
  checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
    return _
  }
}), n("222007");
var r = n("316693"),
  i = n("404118"),
  s = n("592407"),
  l = n("305961"),
  u = n("685829"),
  a = n("863636"),
  o = n("380710"),
  d = n("653138"),
  f = n("49111"),
  E = n("782340");
async function c(e, t) {
  return null == e || await N(e, t, {
    removingView: !0,
    removingChat: !0
  })
}
async function N(e, t, n) {
  var r;
  let i = l.default.getGuild(e);
  if (null == i) return !0;
  let s = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(f.GuildFeatures.GUILD_ONBOARDING));
  if (!s) return !0;
  s && a.default.shouldFetchPrompts(e) && await (0, u.fetchOnboardingPrompts)(e);
  let E = a.default.getDefaultChannelIds(e),
    [c, N] = (0, o.getChattableDefaultChannels)(e, E),
    _ = E.includes(t);
  if (!_) return !0;
  let R = n.removingView && N.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
    T = (n.removingChat || n.removingView) && c.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
  return !R && !T
}
async function _(e, t, n) {
  let l = e.getGuildId();
  if (null == l) return !0;
  null != n && (t = r.default.filter(t, r.default.invert(n)));
  let u = e.permissionOverwrites[l],
    a = null != u ? r.default.filter(u.deny, r.default.invert(u.allow)) : r.default.deserialize(0),
    o = {
      removingView: r.default.has(t, f.Permissions.VIEW_CHANNEL) && !r.default.has(a, f.Permissions.VIEW_CHANNEL),
      removingChat: !1
    };
  if (e.isForumLikeChannel() ? o.removingChat = r.default.has(t, f.Permissions.SEND_MESSAGES_IN_THREADS) && !r.default.has(a, f.Permissions.SEND_MESSAGES_IN_THREADS) : o.removingChat = r.default.has(t, f.Permissions.SEND_MESSAGES) && !r.default.has(a, f.Permissions.SEND_MESSAGES), !o.removingChat && !o.removingView) return !0;
  let d = await N(l, e.id, o);
  return !!d || (i.default.show({
    title: E.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
    body: E.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
      onClick: () => {
        i.default.close(), s.default.open(l, f.GuildSettingsSections.ONBOARDING)
      }
    })
  }), !1)
}