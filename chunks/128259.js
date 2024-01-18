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
  C = n("377253"),
  T = n("27618"),
  S = n("18494"),
  I = n("599110"),
  A = n("49111"),
  D = n("782340");

function N(e, t) {
  var n;
  let s = v.default.getChannel(S.default.getChannelId());
  return !!(null == s || s.type !== A.ChannelTypes.DM || T.default.isFriend(null !== (n = s.getRecipientId()) && void 0 !== n ? n : "")) && e === t
}

function O(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
    {
      trusted: T,
      onClick: N,
      onConfirm: O,
      shouldConfirm: b,
      messageId: P,
      channelId: k
    } = e,
    R = i.sanitizeUrl(e.href);
  if (null == R) {
    null != t && t.preventDefault(), r.default.show({
      title: D.default.Messages.HOLD_UP,
      body: D.default.Messages.MALFORMED_LINK_BODY.format({
        url: e.href
      }),
      isDismissable: !0
    });
    return
  }
  let V = null,
    M = !1,
    w = P,
    L = k,
    U = null;
  if (null != P && null != k) {
    var G, F, x;
    let e = C.default.getMessage(k, P),
      t = v.default.getBasicChannel(k);
    V = null !== (x = null == t ? void 0 : t.guild_id) && void 0 !== x ? x : null;
    let n = E.default.getGuild(V),
      s = (null == e ? void 0 : null === (G = e.messageReference) || void 0 === G ? void 0 : G.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(A.MessageFlags.IS_CROSSPOST)) && null != V;
    s && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? (w = e.messageReference.message_id, L = e.messageReference.channel_id, U = e.messageReference.guild_id) : U = V;
    let i = (null == t ? void 0 : t.type) === A.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(A.GuildFeatures.COMMUNITY)) === !0,
      r = (null == e ? void 0 : e.hasFlag(A.MessageFlags.EPHEMERAL)) === !0;
    M = null != e && !r && (s || i)
  }
  let B = v.default.getChannel(S.default.getChannelId()),
    H = E.default.getGuild(null == B ? void 0 : B.getGuildId());
  if (null != B && null != H && H.hasFeature(A.GuildFeatures.DISCOVERABLE) && I.default.track(A.AnalyticEvents.URL_CLICKED, {
      url_domain: (0, y.getHostname)(R),
      guild_id: H.id,
      channel_id: B.id
    }), _.default.trackLinkClicked(R), null != N) {
    if (N(t)) return
  } else {
    let {
      default: e
    } = n("572544"), i = e(R, {
      skipExtensionCheck: void 0,
      analyticsLocations: s
    });
    if (null != i && i(t)) return
  }
  let Y = () => {
      if (M && _.default.trackAnnouncementMessageLinkClicked({
          messageId: w,
          channelId: k,
          guildId: V,
          sourceChannelId: L,
          sourceGuildId: U
        }), null != O) {
        O();
        return
      }(0, o.default)(R)
    },
    j = u.default.isBlockedDomain(R);
  if (null !== j) {
    null == t || t.preventDefault(), d.default.show(R);
    return
  }
  if (null != (0, h.isSuspiciousDownload)(R)) {
    null == t || t.preventDefault(), m.default.show(R);
    return
  }
  if ((0, f.shouldShowLinkNotDiscordWarning)(R)) {
    null == t || t.preventDefault(), l.default.show(R);
    return
  }
  let K = "function" == typeof T ? T() : T,
    W = (0, y.getProtocol)(R),
    z = !("http:" === W || "https:" === W);
  if (!z && (K || p.default.isTrustedDomain(R)) || z && p.default.isTrustedProtocol(R)) {
    null == t || null != b && b ? Y() : M && _.default.trackAnnouncementMessageLinkClicked({
      messageId: w,
      channelId: k,
      guildId: V,
      sourceChannelId: L,
      sourceGuildId: U
    });
    return
  }
  if (null != t && t.preventDefault(), z) g.default.show({
    url: R,
    trustUrl: a.trustProtocol,
    onConfirm: Y,
    isProtocol: !0
  });
  else {
    let e = (0, c.punycodeLink)(R),
      t = null != e ? e.displayTarget : R;
    g.default.show({
      url: t,
      trustUrl: a.trustDomain,
      onConfirm: Y,
      isProtocol: !1
    })
  }
}