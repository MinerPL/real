"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("424973");
var l = n("37983"),
  i = n("884691"),
  r = n("394846"),
  o = n("446674"),
  s = n("798609"),
  a = n("206230"),
  u = n("427953"),
  d = n("383018"),
  c = n("619935"),
  f = n("540692"),
  p = n("53253"),
  m = n("1607"),
  h = n("328511"),
  E = n("585722"),
  S = n("697218"),
  g = n("719923"),
  C = n("998206"),
  T = n("35385"),
  v = n("695369"),
  y = n("198"),
  x = n("315814"),
  I = n("108486"),
  N = n("923582"),
  _ = n("80921"),
  A = n("954016"),
  R = n("646718"),
  O = n("537461");

function M(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    enabled: r
  } = p.default.useExperiment({
    location: "dc120b_1"
  }, {
    autoTrackExposure: !1
  }), o = (0, p.useIsSeasonalGiftingActive)();
  i.useEffect(() => {
    o && p.default.trackExposure({
      location: "dc120b_2"
    })
  }, [o]);
  let s = r && o;
  return s ? (0, l.jsx)(I.default, {
    disabled: t,
    channel: n
  }) : (0, l.jsx)(y.default, {
    disabled: t,
    channel: n
  })
}
var k = i.memo(function(e) {
  var t, n, i, p, y, I, k, b, P;
  let {
    type: L,
    disabled: U,
    channel: j,
    handleSubmit: D,
    isEmpty: w
  } = e, B = (0, o.useStateFromStores)([a.default], () => a.default.isSubmitButtonEnabled), H = (0, o.useStateFromStores)([h.default], () => h.default.getStickerPreview(j.id, L.drafts.type)), F = null != H && H.length > 0, G = (0, o.useStateFromStores)([E.default], () => E.default.getUploads(j.id, L.drafts.type)), {
    activeCommand: K,
    activeCommandOption: V
  } = (0, o.useStateFromStoresObject)([d.default], () => ({
    activeCommand: d.default.getActiveCommand(j.id),
    activeCommandOption: d.default.getActiveOption(j.id)
  })), {
    paymentsBlocked: W
  } = c.default.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: !1
  }), Y = [], {
    enabled: q
  } = m.default.getCurrentConfig({
    location: "dc120b_4"
  }, {
    autoTrackExposure: !1
  }), z = S.default.getCurrentUser(), Q = null !== (p = (0, o.useStateFromStores)([f.default], () => q && g.default.isPremiumExactly(z, R.PremiumTypes.TIER_2) ? f.default.getReferralsRemaining() : 0)) && void 0 !== p ? p : 0, X = (0, o.useStateFromStores)([f.default], () => {
    if (!j.isDM() || void 0 === j.recipients || j.recipients.length > 1 || !q) return !1;
    let e = j.recipients[0],
      t = f.default.getSentUserIds();
    return t.includes(e)
  }), [Z, J] = (0, o.useStateFromStoresArray)([f.default, S.default], () => {
    let e = [!1, !1];
    if (!j.isDM() || void 0 === j.recipients || j.recipients.length > 1) return e;
    let t = j.recipients[0],
      n = S.default.getUser(t);
    if (null == n) return e;
    let l = n.bot;
    if (l) return e;
    let i = X || Q > 0,
      r = f.default.getRecipientEligibility(t);
    return [q && i && r, r]
  }), $ = (0, u.useIsActivitiesInTextEnabled)(j.id, "ChannelTextAreaButtons");
  return (!r.isMobile && (j.isDM() && (null === (y = L.gifts) || void 0 === y ? void 0 : y.button) != null && null == K && (g.default.isPremiumExactly(z, R.PremiumTypes.TIER_2) && J && m.default.trackExposure({
    location: "dc120b_5"
  }), Z && Y.push((0, l.jsx)(x.default, {
    disabled: U,
    referralsRemaining: Q,
    channel: j,
    isResending: X
  }, "referral"))), $ && A.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(j.type) && null == K && (null === (I = L.commands) || void 0 === I ? void 0 : I.enabled) && Y.push((0, l.jsx)(C.default, {
    disabled: U,
    channel: j,
    type: L
  }, "activity")), (null === (k = L.gifts) || void 0 === k ? void 0 : k.button) != null && null == K && !W && Y.push((0, l.jsx)(M, {
    disabled: U,
    channel: j
  }, "gift")), (null === (b = L.gifs) || void 0 === b ? void 0 : b.button) != null && null == K && Y.push((0, l.jsx)(v.default, {
    disabled: U,
    type: L
  }, "gif")), (null === (P = L.stickers) || void 0 === P ? void 0 : P.button) != null && null == K && Y.push((0, l.jsx)(_.default, {
    disabled: U,
    type: L
  }, "sticker"))), (null === (t = L.emojis) || void 0 === t ? void 0 : t.button) != null && (null == K || null != V && V.type !== s.ApplicationCommandOptionType.ATTACHMENT) && Y.push((0, l.jsx)(T.default, {
    disabled: U,
    type: L
  }, "emoji")), (null === (n = L.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (i = L.submit) || void 0 === i ? void 0 : i.ignorePreference) || B) && Y.push((0, l.jsx)(N.default, {
    onClick: D,
    disabled: U || 0 === G.length && w && !F
  }, "submit")), 0 === Y.length) ? null : (0, l.jsx)("div", {
    className: O.buttons,
    children: Y
  })
})