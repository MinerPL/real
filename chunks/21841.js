"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("884691"),
  a = n("298386"),
  s = n("446674"),
  i = n("427953"),
  r = n("191225"),
  o = n("534222"),
  u = n("170183"),
  d = n("130563"),
  c = n("233069"),
  f = n("373469"),
  h = n("271938"),
  C = n("42203"),
  p = n("305961"),
  m = n("957255"),
  E = n("945956"),
  g = n("282109"),
  I = n("800762"),
  S = n("49111");

function _(e) {
  var t, n, _;
  let N = (0, s.useStateFromStores)([g.default], () => g.default.isMuted(e)),
    T = (0, s.useStateFromStores)([p.default], () => p.default.getGuild(e)),
    A = (null === (t = (0, u.default)(e)) || void 0 === t ? void 0 : t.length) > 0,
    L = (0, o.useGuildActiveEvent)(e),
    v = (null === (n = (0, d.default)()) || void 0 === n ? void 0 : n.guild_id) === e,
    x = (0, s.useStateFromStores)([h.default], () => h.default.getId()),
    {
      selectedVoiceGuildId: R,
      selectedVoiceChannelId: M
    } = (0, s.useStateFromStoresObject)([E.default], () => ({
      selectedVoiceGuildId: E.default.getGuildId(),
      selectedVoiceChannelId: E.default.getChannelId()
    })),
    O = R === e,
    y = (0, s.useStateFromStores)([f.default], () => !!O && null != f.default.getActiveStreamForUser(x, e)),
    D = null == T ? void 0 : T.afkChannelId,
    {
      guildHasVoice: b,
      guildHasVideo: j,
      selectedVoiceChannelHasVideo: G
    } = (0, s.useStateFromStoresObject)([I.default, C.default, m.default], () => {
      let t = !1,
        n = !1,
        l = I.default.getVoiceStates(e);
      for (let e in l) {
        let s = C.default.getBasicChannel(l[e].channelId);
        null != s && s.type !== a.ChannelTypes.GUILD_STAGE_VOICE && D !== s.id && m.default.canBasicChannel(S.BasicPermissions.VIEW_CHANNEL, s) && (t = !0, l[e].selfVideo && (n = !0))
      }
      return {
        guildHasVoice: t,
        guildHasVideo: n,
        selectedVoiceChannelHasVideo: null != M && I.default.hasVideo(M)
      }
    }, [D, e, M]),
    U = (0, s.useStateFromStores)([f.default], () => f.default.getAllApplicationStreams().some(t => t.guildId === e)),
    P = (0, s.useStateFromStores)([r.default], () => r.default.getEmbeddedActivitiesForGuild(e)),
    w = (0, i.useIsActivitiesInTextEnabled)(null === (_ = P[0]) || void 0 === _ ? void 0 : _.channelId, "GuildMediaState"),
    F = (0, s.useStateFromStores)([C.default], () => {
      if (w) return P.length > 0;
      for (let e of P) {
        let t = C.default.getChannel(e.channelId);
        if (null != t && (0, c.isVoiceChannel)(t.type)) return !0
      }
      return !1
    }),
    B = (0, s.useStateFromStores)([r.default], () => Array.from(r.default.getSelfEmbeddedActivities().values()).some(t => {
      let {
        guildId: n
      } = t;
      return n === e
    })),
    V = !1,
    H = !1,
    k = !1,
    Y = !1,
    K = !1,
    W = !1;
  return O ? (V = !0, H = (null == L ? void 0 : L.channel_id) === M, k = v, Y = O && G, K = y, W = B) : !N && (V = b, H = null != L, k = A, Y = j, K = U, W = F), l.useMemo(() => ({
    audio: V,
    video: Y,
    screenshare: K,
    liveStage: k,
    activeEvent: H,
    activity: W,
    isCurrentUserConnected: O || v
  }), [V, Y, K, k, H, W, O, v])
}