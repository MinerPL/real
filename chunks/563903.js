"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("463848"),
  u = n("429928"),
  d = n("532602"),
  c = n("769791"),
  f = n("233069"),
  h = n("271938"),
  C = n("697218"),
  p = n("533403"),
  m = n("315102"),
  E = n("158998"),
  g = n("938177"),
  I = n("84059");

function S(e) {
  let {
    guildId: t,
    member: n,
    className: a
  } = e, i = null != n.member ? (0, m.getGuildMemberAvatarURL)(n.member) : null;
  return (0, l.jsx)(r.Tooltip, {
    text: n.nick,
    position: "bottom",
    children: e => {
      var o;
      return (0, l.jsx)(r.Avatar, {
        src: null != i ? i : n.user.getAvatarURL(t, 16),
        size: r.AvatarSizes.SIZE_16,
        className: s(a, I.partyAvatar),
        "aria-label": null !== (o = n.nick) && void 0 !== o ? o : E.default.getName(n.user),
        ...e
      })
    }
  })
}

function _(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, l.jsx)(p.default, {
    className: I.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, a) => (0, l.jsx)(S, {
      guildId: n,
      member: e,
      className: t
    }, a),
    renderMoreUsers: (e, t, n) => (0, l.jsx)("div", {
      className: s(I.morePartyMembers, t),
      children: e
    }, n)
  })
}
var N = e => {
  let {
    channel: t,
    activity: n,
    members: a,
    embeddedApp: s,
    onAction: r
  } = e, p = null != s, m = p ? Array.from(s.embeddedActivity.userIds) : [], E = (0, i.useStateFromStores)([C.default, h.default], () => {
    if (null != a) {
      var e, t, l, s;
      return a.length <= 0 ? null : p ? null !== (t = null === (e = a.find(e => e.voiceState.sessionId === (null == n ? void 0 : n.session_id))) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : C.default.getUser(m[0]) : null !== (s = null === (l = a.find(e => e.user.id !== h.default.getId())) || void 0 === l ? void 0 : l.user) && void 0 !== s ? s : a[0].user
    }
    if (p) return C.default.getUser(m[0])
  });
  if (null == E) return null;
  let S = p || (0, u.default)(n),
    N = (0, f.isVoiceChannel)(t.type);
  return (0, l.jsxs)("div", {
    className: I.activity,
    children: [(0, l.jsx)("div", {
      className: I.channelActivityContainer,
      children: S ? (0, l.jsx)(g.default, {
        activity: n,
        embeddedApp: s,
        user: E,
        channel: t,
        sortedVoiceStates: a,
        onOpenSpotifyTrack: N ? c.openTrack : void 0,
        onOpenSpotifyArtist: N ? c.openArtist : void 0,
        onOpenSpotifyAlbum: N ? c.openAlbum : void 0
      }) : (0, l.jsx)(o.default, {
        type: o.UserActivityTypes.VOICE_CHANNEL,
        activity: n,
        user: E,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != a ? () => (0, l.jsx)(_, {
          guildId: t.guild_id,
          members: a
        }) : void 0,
        isEmbedded: p
      })
    }), (0, l.jsx)("div", {
      className: I.activityActionsContainer,
      children: (0, l.jsx)(d.default, {
        type: o.UserActivityTypes.VOICE_CHANNEL,
        activity: n,
        user: E,
        guildId: t.getGuildId(),
        channelId: t.id,
        color: I.button,
        onAction: r,
        isEmbedded: p
      })
    })]
  })
}