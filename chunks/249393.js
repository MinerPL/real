"use strict";
n.r(t), n.d(t, {
  VoiceChannelInviteEmbed: function() {
    return g
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("819689"),
  u = n("987317"),
  d = n("884351"),
  c = n("574073"),
  f = n("356070"),
  E = n("393414"),
  _ = n("42203"),
  T = n("305961"),
  I = n("697218"),
  m = n("316133"),
  N = n("368121"),
  p = n("759885"),
  S = n("387111"),
  A = n("49111"),
  C = n("782340"),
  h = n("635701");

function g(e) {
  var t, n, l, g, M, O, R, L, v, P;
  let {
    message: D,
    channel: x
  } = e, y = null === (l = D.embeds[0]) || void 0 === l ? void 0 : null === (n = l.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, U = null === (O = D.embeds[0]) || void 0 === O ? void 0 : null === (M = O.fields) || void 0 === M ? void 0 : null === (g = M.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === g ? void 0 : g.rawValue, j = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(y)), b = (0, i.useStateFromStores)([_.default], () => _.default.getChannel(U)), G = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), B = (0, i.useStateFromStores)([], () => D.author.id === (null == G ? void 0 : G.id)), F = null === (R = x.recipients) || void 0 === R ? void 0 : R.find(e => e !== D.author.id), k = (0, i.useStateFromStores)([I.default], () => null != F ? I.default.getUser(F) : null), w = (0, c.default)(D), H = (0, S.useName)(x.getGuildId(), x.id, k), V = (0, i.useStateFromStoresArray)([m.default], () => null != b ? m.default.getVoiceStatesForChannel(b) : [], [b]), Y = V.some(e => e.user.id === (null == G ? void 0 : G.id)), K = null === (P = D.embeds[0]) || void 0 === P ? void 0 : null === (v = P.fields) || void 0 === v ? void 0 : null === (L = v.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === L ? void 0 : L.rawValue, W = null != K ? K.split(",") : [], z = (0, i.useStateFromStoresArray)([I.default], () => W.map(e => I.default.getUser(e)).filter(Boolean)), Z = B && null != k ? C.default.Messages.WAVED_AT_USER.format({
    username: H
  }) : C.default.Messages.WAVED_AT_YOU.format({
    username: w.nick
  }), J = null != j && null != b, Q = null;
  Q = J ? B || Y ? C.default.Messages.YOU_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(p.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : C.default.Messages.THEY_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(p.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : C.default.Messages.CANNOT_ACCESS_HANGOUT, 0 === V.length && (Q = B ? C.default.Messages.HANGOUT_OVER_SENDER : C.default.Messages.HANGOUT_OVER_RECEIVER);
  let X = B ? C.default.Messages.WAVE_AGAIN : C.default.Messages.WAVE_BACK;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: h.card,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: Z
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Q
      }), V.length > 0 ? (0, s.jsx)("div", {
        className: h.participants,
        children: (0, s.jsx)(f.default, {
          guildId: y,
          partySize: {
            knownSize: V.length,
            unknownSize: 0,
            totalSize: V.length
          },
          members: V.map(e => e.user),
          maxAvatarsShown: 5
        })
      }) : (0, s.jsx)("div", {
        className: a(h.participants, h.disabled),
        children: (0, s.jsx)(f.default, {
          guildId: y,
          partySize: {
            knownSize: z.length,
            unknownSize: W.length - z.length,
            totalSize: W.length
          },
          members: z,
          maxAvatarsShown: 5
        })
      })]
    }), (0, s.jsxs)("div", {
      className: h.actions,
      children: [(0, s.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: () => {
          null != U && null != y && ((0, E.transitionTo)(A.Routes.CHANNEL(y, U)), u.default.selectVoiceChannel(U))
        },
        className: h.button,
        innerClassName: h.buttonInner,
        disabled: Y || !J,
        children: [(0, s.jsx)(N.default, {}), C.default.Messages.JOIN_HANGOUT]
      }), (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          o.default.sendMessage(x.id, d.default.parse(x, "\uD83D\uDC4B"))
        },
        className: h.button,
        children: X
      })]
    })]
  })
}