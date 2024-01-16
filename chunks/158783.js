"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("627445"),
  l = n.n(s),
  i = n("446674"),
  r = n("233069"),
  o = n("813006"),
  u = n("373469"),
  d = n("162771"),
  c = n("174622"),
  f = n("793079"),
  m = n("49111"),
  E = n("91366"),
  _ = n("782340"),
  h = n("18978");

function p(e) {
  let t, n, s, {
      invite: p,
      currentUserId: I,
      guild: T,
      onTransitionToInviteChannel: g,
      onAcceptInstantInvite: C
    } = e,
    S = null == T ? void 0 : T.id,
    A = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()),
    N = (0, i.useStateFromStores)([u.default], () => null != p && null != p.target_user ? u.default.getActiveStreamForUser(p.target_user.id, S) : null, [p, S]),
    M = (0, i.useStateFromStores)([u.default], () => null != p && null != p.target_user ? u.default.getStreamForUser(p.target_user.id, S) : null, [p, S]),
    v = null != p && p.target_type === E.InviteTargetTypes.STREAM && null != p.target_user && null != N,
    x = null != p && null != M && null != p.channel && null != p.guild && M.channelId === p.channel.id && M.guildId === p.guild.id;
  l(null != p, "Invite cannot be null");
  let {
    target_type: O,
    target_user: L
  } = p;
  l(O === E.InviteTargetTypes.STREAM && null != L, "invalid streaming invite");
  let R = I === L.id,
    P = p.state === m.InviteStates.ACCEPTING,
    y = null != T;
  if (null == T) {
    if (null == p.guild) return (0, a.jsx)(f.default, {});
    T = new o.default(p.guild)
  }
  let D = null != p.channel ? (0, r.createChannelRecordFromInvite)(p.channel) : null,
    j = v ? g : C;
  y && !x ? s = R ? _.default.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : _.default.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: L.username
  }) : (t = _.default.Messages.WATCH, n = c.default.Button.Colors.GREEN, v && (t = _.default.Messages.INVITE_BUTTON_STREAM_WATCHING, n = c.default.Button.Colors.PRIMARY), s = R ? _.default.Messages.INVITE_BUTTON_STREAMER : _.default.Messages.INVITE_BUTTON_STREAMING.format({
    name: L.username
  }));
  let U = A === T.id && null != D ? (0, a.jsx)(c.default.Channel, {
    channel: D
  }) : _.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: T.name
  });
  return (0, a.jsxs)(c.default, {
    children: [(0, a.jsx)(c.default.Header, {
      text: _.default.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, a.jsxs)(c.default.Body, {
      children: [(0, a.jsxs)("div", {
        className: h.headerLine,
        children: [(0, a.jsx)(c.default.Icon, {
          guild: T,
          onClick: y && x ? j : void 0
        }), (0, a.jsx)(c.default.Info, {
          title: s,
          onClick: y && x ? j : void 0,
          children: U
        })]
      }), x ? (0, a.jsx)(c.default.Button, {
        disabled: y && !x,
        onClick: j,
        submitting: P,
        isDisabled: v && x,
        color: n,
        children: t
      }) : null]
    })]
  })
}