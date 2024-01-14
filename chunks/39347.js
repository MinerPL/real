"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("669491"),
  i = n("77078"),
  r = n("575136"),
  o = n("680986"),
  u = n("470926"),
  d = n("819450"),
  c = n("401690"),
  f = n("305961"),
  h = n("957255"),
  C = n("660478"),
  p = n("800762"),
  m = n("956089"),
  E = n("89073"),
  g = n("982721"),
  I = n("973539"),
  S = n("447235"),
  _ = n("360723"),
  N = n("137376"),
  T = n("522052"),
  A = n("49111"),
  L = n("133335"),
  v = n("782340"),
  x = n("174757");

function R(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: R,
    isChannelCollapsed: M,
    voiceStates: O,
    enableConnectedUserLimit: y,
    enableActivities: D,
    isSubscriptionGated: b,
    needSubscriptionToAccess: j,
    isNewChannel: G,
    muted: U,
    unreadMode: P
  } = e, w = (0, a.useStateFromStores)([C.default], () => C.default.getMentionCount(n.id)), F = (0, r.default)(n), B = (0, a.useStateFromStores)([h.default], () => !h.default.can(A.Permissions.CONNECT, n)), V = (0, a.useStateFromStores)([p.default], () => p.default.hasVideo(n.id)), H = (0, d.useStageHasMedia)(n.id) && n.isGuildStageVoice(), k = (0, S.default)({
    channel: n,
    locked: B,
    video: V || H,
    selected: R
  }), Y = (0, a.useStateFromStores)([c.default], () => c.default.getNewThreadCount(n.guild_id, n.id)), K = (0, o.useUnreadThreadsCountForParent)(n.guild_id, n.id), W = (0, a.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(A.GuildFeatures.COMMUNITY)) && void 0 !== t && t
  });
  if ((0, I.default)(w)) return (0, l.jsx)(T.default, {
    mentionsCount: w
  });
  if ((0, u.showPremiumChannelIconButton)(b)) return (0, l.jsx)(u.default, {
    locked: j
  });
  if (G) return (0, l.jsx)(m.TextBadge, {
    text: v.default.Messages.NEW,
    color: s.default.unsafe_rawColors.BRAND_260.css,
    className: x.newChannel
  });
  if (!U && P === L.UnreadMode.IMPORTANT && n.isForumLikeChannel() && null != Y && Y > 0) return (0, l.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: v.default.Messages.CHANNEL_NEW_POSTS_LABEL.format({
      count: (0, m.getBadgeCountString)(Y)
    })
  });
  if (!U && n.isForumLikeChannel() && null != K && K > 0) return (0, l.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, m.getBadgeCountString)(K)
  });
  let Z = null !== (t = null == O ? void 0 : O.length) && void 0 !== t ? t : 0;
  return null != y && y && k ? (0, l.jsx)(N.default, {
    userCount: Z,
    video: V || H,
    channel: n
  }) : M && (0, E.hasStream)(O) && W ? (0, l.jsx)(m.TextBadge, {
    text: v.default.Messages.LIVE,
    color: s.default.unsafe_rawColors.RED_400.css
  }) : null != D && D && (0, g.showChannelItemEmbeddedActivities)(F) ? (0, l.jsx)(_.default, {
    embeddedApps: F
  }) : null
}