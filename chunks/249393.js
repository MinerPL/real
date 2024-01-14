"use strict";
n.r(t), n.d(t, {
  VoiceChannelInviteEmbed: function() {
    return N
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("446674"),
  r = n("77078"),
  o = n("819689"),
  u = n("987317"),
  d = n("884351"),
  c = n("574073"),
  f = n("356070"),
  m = n("393414"),
  E = n("42203"),
  _ = n("305961"),
  h = n("697218"),
  p = n("316133"),
  I = n("368121"),
  T = n("759885"),
  g = n("387111"),
  C = n("49111"),
  S = n("782340"),
  A = n("635701");

function N(e) {
  var t, n, s, N, M, v, x, O, L, R;
  let {
    message: y,
    channel: P
  } = e, D = null === (s = y.embeds[0]) || void 0 === s ? void 0 : null === (n = s.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, j = null === (v = y.embeds[0]) || void 0 === v ? void 0 : null === (M = v.fields) || void 0 === M ? void 0 : null === (N = M.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === N ? void 0 : N.rawValue, U = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(D)), b = (0, i.useStateFromStores)([E.default], () => E.default.getChannel(j)), G = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), B = (0, i.useStateFromStores)([], () => y.author.id === (null == G ? void 0 : G.id)), k = null === (x = P.recipients) || void 0 === x ? void 0 : x.find(e => e !== y.author.id), w = (0, i.useStateFromStores)([h.default], () => null != k ? h.default.getUser(k) : null), H = (0, c.default)(y), F = (0, g.useName)(P.getGuildId(), P.id, w), V = (0, i.useStateFromStoresArray)([p.default], () => null != b ? p.default.getVoiceStatesForChannel(b) : [], [b]), Y = V.some(e => e.user.id === (null == G ? void 0 : G.id)), W = null === (R = y.embeds[0]) || void 0 === R ? void 0 : null === (L = R.fields) || void 0 === L ? void 0 : null === (O = L.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === O ? void 0 : O.rawValue, K = null != W ? W.split(",") : [], z = (0, i.useStateFromStoresArray)([h.default], () => K.map(e => h.default.getUser(e)).filter(Boolean)), J = B && null != w ? S.default.Messages.WAVED_AT_USER.format({
    username: F
  }) : S.default.Messages.WAVED_AT_YOU.format({
    username: H.nick
  }), Z = null != U && null != b, X = null;
  X = Z ? B ? S.default.Messages.YOU_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, a.jsx)(T.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : S.default.Messages.THEY_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, a.jsx)(T.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : S.default.Messages.CANNOT_ACCESS_HANGOUT, 0 === V.length && (X = B ? S.default.Messages.HANGOUT_OVER_SENDER : S.default.Messages.HANGOUT_OVER_RECEIVER);
  let q = B ? S.default.Messages.WAVE_AGAIN : S.default.Messages.WAVE_BACK;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: A.card,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: J
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: X
      }), V.length > 0 ? (0, a.jsx)("div", {
        className: A.participants,
        children: (0, a.jsx)(f.default, {
          guildId: D,
          partySize: {
            knownSize: V.length,
            unknownSize: 0,
            totalSize: V.length
          },
          members: V.map(e => e.user),
          maxAvatarsShown: 5
        })
      }) : (0, a.jsx)("div", {
        className: l(A.participants, A.disabled),
        children: (0, a.jsx)(f.default, {
          guildId: D,
          partySize: {
            knownSize: z.length,
            unknownSize: K.length - z.length,
            totalSize: K.length
          },
          members: z,
          maxAvatarsShown: 5
        })
      })]
    }), (0, a.jsxs)("div", {
      className: A.actions,
      children: [(0, a.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: () => {
          null != j && null != D && ((0, m.transitionTo)(C.Routes.CHANNEL(D, j)), u.default.selectVoiceChannel(j))
        },
        className: A.button,
        innerClassName: A.buttonInner,
        disabled: Y || !Z,
        children: [(0, a.jsx)(I.default, {}), S.default.Messages.JOIN_HANGOUT]
      }), (0, a.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          o.default.sendMessage(P.id, d.default.parse(P, "\uD83D\uDC4B"))
        },
        className: A.button,
        children: q
      })]
    })]
  })
}