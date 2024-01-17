"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  i = n("446674"),
  r = n("233069"),
  o = n("813006"),
  u = n("373469"),
  d = n("162771"),
  c = n("174622"),
  f = n("793079"),
  E = n("49111"),
  _ = n("91366"),
  T = n("782340"),
  I = n("18978");

function m(e) {
  let t, n, l, {
      invite: m,
      currentUserId: N,
      guild: p,
      onTransitionToInviteChannel: S,
      onAcceptInstantInvite: A
    } = e,
    C = null == p ? void 0 : p.id,
    h = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()),
    g = (0, i.useStateFromStores)([u.default], () => null != m && null != m.target_user ? u.default.getActiveStreamForUser(m.target_user.id, C) : null, [m, C]),
    M = (0, i.useStateFromStores)([u.default], () => null != m && null != m.target_user ? u.default.getStreamForUser(m.target_user.id, C) : null, [m, C]),
    O = null != m && m.target_type === _.InviteTargetTypes.STREAM && null != m.target_user && null != g,
    R = null != m && null != M && null != m.channel && null != m.guild && M.channelId === m.channel.id && M.guildId === m.guild.id;
  a(null != m, "Invite cannot be null");
  let {
    target_type: L,
    target_user: v
  } = m;
  a(L === _.InviteTargetTypes.STREAM && null != v, "invalid streaming invite");
  let P = N === v.id,
    D = m.state === E.InviteStates.ACCEPTING,
    x = null != p;
  if (null == p) {
    if (null == m.guild) return (0, s.jsx)(f.default, {});
    p = new o.default(m.guild)
  }
  let y = null != m.channel ? (0, r.createChannelRecordFromInvite)(m.channel) : null,
    U = O ? S : A;
  x && !R ? l = P ? T.default.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : T.default.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: v.username
  }) : (t = T.default.Messages.WATCH, n = c.default.Button.Colors.GREEN, O && (t = T.default.Messages.INVITE_BUTTON_STREAM_WATCHING, n = c.default.Button.Colors.PRIMARY), l = P ? T.default.Messages.INVITE_BUTTON_STREAMER : T.default.Messages.INVITE_BUTTON_STREAMING.format({
    name: v.username
  }));
  let j = h === p.id && null != y ? (0, s.jsx)(c.default.Channel, {
    channel: y
  }) : T.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: p.name
  });
  return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: T.default.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, s.jsxs)(c.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: I.headerLine,
        children: [(0, s.jsx)(c.default.Icon, {
          guild: p,
          onClick: x && R ? U : void 0
        }), (0, s.jsx)(c.default.Info, {
          title: l,
          onClick: x && R ? U : void 0,
          children: j
        })]
      }), R ? (0, s.jsx)(c.default.Button, {
        disabled: x && !R,
        onClick: U,
        submitting: D,
        isDisabled: O && R,
        color: n,
        children: t
      }) : null]
    })]
  })
}