"use strict";
n.r(t), n.d(t, {
  isLinkTrusted: function() {
    return N
  },
  handleClick: function() {
    return O
  }
});
var s = n("132710"),
  i = n.n(s),
  r = n("404118"),
  a = n("145292"),
  o = n("545158"),
  d = n("195052"),
  u = n("352266"),
  l = n("630869"),
  f = n("537025"),
  _ = n("765089"),
  c = n("647374"),
  g = n("91984"),
  m = n("835174"),
  h = n("566271"),
  v = n("42203"),
  E = n("305961"),
  p = n("569983"),
  y = n("48703"),
  T = n("377253"),
  C = n("27618"),
  S = n("18494"),
  I = n("599110"),
  A = n("49111"),
  D = n("782340");

function N(e, t) {
  var n;
  let s = v.default.getChannel(S.default.getChannelId());
  return !!(null == s || s.type !== A.ChannelTypes.DM || C.default.isFriend(null !== (n = s.getRecipientId()) && void 0 !== n ? n : "")) && e === t
}

function O(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
    {
      trusted: C,
      onClick: N,
      onConfirm: O,
      shouldConfirm: b,
      messageId: P,
      channelId: R
    } = e,
    V = i.sanitizeUrl(e.href);
  if (null == V) {
    null != t && t.preventDefault(), r.default.show({
      title: D.default.Messages.HOLD_UP,
      body: D.default.Messages.MALFORMED_LINK_BODY.format({
        url: e.href
      }),
      isDismissable: !0
    });
    return
  }
  let k = null,
    M = !1,
    w = P,
    L = R,
    U = null;
  if (null != P && null != R) {
    var G, F, x;
    let e = T.default.getMessage(R, P),
      t = v.default.getBasicChannel(R);
    k = null !== (x = null == t ? void 0 : t.guild_id) && void 0 !== x ? x : null;
    let n = E.default.getGuild(k),
      s = (null == e ? void 0 : null === (G = e.messageReference) || void 0 === G ? void 0 : G.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(A.MessageFlags.IS_CROSSPOST)) && null != k;
    s && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? (w = e.messageReference.message_id, L = e.messageReference.channel_id, U = e.messageReference.guild_id) : U = k;
    let i = (null == t ? void 0 : t.type) === A.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(A.GuildFeatures.COMMUNITY)) === !0,
      r = (null == e ? void 0 : e.hasFlag(A.MessageFlags.EPHEMERAL)) === !0;
    M = null != e && !r && (s || i)
  }
  let B = v.default.getChannel(S.default.getChannelId()),
    H = E.default.getGuild(null == B ? void 0 : B.getGuildId());
  if (null != B && null != H && H.hasFeature(A.GuildFeatures.DISCOVERABLE) && I.default.track(A.AnalyticEvents.URL_CLICKED, {
      url_domain: (0, y.getHostname)(V),
      guild_id: H.id,
      channel_id: B.id
    }), _.default.trackLinkClicked(V), null != N) {
    if (N(t)) return
  } else {
    let {
      default: e
    } = n("572544"), i = e(V, {
      skipExtensionCheck: void 0,
      analyticsLocations: s
    });
    if (null != i && i(t)) return
  }
  let Y = () => {
      if (M && _.default.trackAnnouncementMessageLinkClicked({
          messageId: w,
          channelId: R,
          guildId: k,
          sourceChannelId: L,
          sourceGuildId: U
        }), null != O) {
        O();
        return
      }(0, o.default)(V)
    },
    j = u.default.isBlockedDomain(V);
  if (null !== j) {
    null == t || t.preventDefault(), d.default.show(V);
    return
  }
  if (null != (0, h.isSuspiciousDownload)(V)) {
    null == t || t.preventDefault(), m.default.show(V);
    return
  }
  if ((0, f.shouldShowLinkNotDiscordWarning)(V)) {
    null == t || t.preventDefault(), l.default.show(V);
    return
  }
  let K = "function" == typeof C ? C() : C,
    W = (0, y.getProtocol)(V),
    z = !("http:" === W || "https:" === W);
  if (!z && (K || p.default.isTrustedDomain(V)) || z && p.default.isTrustedProtocol(V)) {
    null == t || null != b && b ? Y() : M && _.default.trackAnnouncementMessageLinkClicked({
      messageId: w,
      channelId: R,
      guildId: k,
      sourceChannelId: L,
      sourceGuildId: U
    });
    return
  }
  if (null != t && t.preventDefault(), z) g.default.show({
    url: V,
    trustUrl: a.trustProtocol,
    onConfirm: Y,
    isProtocol: !0
  });
  else {
    let e = (0, c.punycodeLink)(V),
      t = null != e ? e.displayTarget : V;
    g.default.show({
      url: t,
      trustUrl: a.trustDomain,
      onConfirm: Y,
      isProtocol: !1
    })
  }
}