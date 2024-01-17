"use strict";
n.r(t), n.d(t, {
  useIsEligibleForBogoPromotion: function() {
    return U
  },
  maybeFetchActiveBogoPromotion: function() {
    return N
  },
  isEligibleForBOGOAnnouncementModal: function() {
    return x
  },
  getBOGOPillCopy: function() {
    return A
  }
});
var i = n("866227"),
  r = n.n(i),
  l = n("65597"),
  s = n("151426"),
  a = n("850068"),
  o = n("174727"),
  u = n("619935"),
  d = n("10641"),
  c = n("915639"),
  m = n("697218"),
  f = n("521012"),
  _ = n("340412"),
  E = n("719923"),
  T = n("982457"),
  I = n("433947"),
  P = n("705337"),
  p = n("935566"),
  S = n("917247"),
  R = n("538620"),
  C = n("694540"),
  O = n("807345"),
  M = n("646718"),
  g = n("49111"),
  L = n("782340");

function v(e) {
  var t, n, i;
  let {
    experimentEnabled: l,
    premiumSubscription: s,
    mostRecentSubscription: a
  } = e, o = !1, u = !1;
  if (null != a && a.status === g.SubscriptionStatusTypes.ENDED) {
    let e = (null === (t = a.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? r(a.metadata.ended_at) : null,
      i = null === (n = (0, E.getPremiumPlanItem)(a)) || void 0 === n ? void 0 : n.planId,
      l = null != i && E.default.getPremiumType(i) === M.PremiumTypes.TIER_2;
    u = null != e && l && e.add(10, "days").isAfter(r())
  }
  if (null != s) {
    let e = null === (i = (0, E.getPremiumPlanItem)(s)) || void 0 === i ? void 0 : i.planId,
      t = null != e && E.default.getPremiumType(e) === M.PremiumTypes.TIER_2,
      n = m.default.getCurrentUser(),
      r = (null == s ? void 0 : s.trialId) != null && E.default.isPremiumExactly(n, M.PremiumTypes.TIER_0);
    o = t || r
  }
  return !l || o || u
}

function U() {
  var e;
  let {
    paymentsBlocked: t
  } = u.default.useExperiment({
    location: "153d31_1"
  }, {
    autoTrackExposure: !1
  }), {
    promotion: n
  } = (0, C.useBogoPromotion)(), {
    enabled: i
  } = (0, p.default)(), {
    mostRecentSubscription: r,
    premiumSubscription: s
  } = (0, l.useStateFromStoresObject)([f.default], () => ({
    mostRecentSubscription: f.default.getMostRecentPremiumTypeSubscription(),
    premiumSubscription: f.default.getPremiumTypeSubscription()
  })), a = (0, S.usePremiumTrialOffer)(), d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
  (0, o.default)(d, 1e3, void 0, d + 2e3 < Date.now());
  let c = !v({
      experimentEnabled: i,
      premiumSubscription: s,
      mostRecentSubscription: r
    }),
    m = c && null == a && null != n && !t,
    _ = Date.now(),
    {
      enabled: E
    } = P.default.useExperiment({
      location: "153d31_2"
    }, {
      autoTrackExposure: m,
      disable: !m
    });
  return !(_ > d) && E
}
async function h() {
  var e;
  let t = m.default.getCurrentUser(),
    n = !(null == t ? void 0 : t.isClaimed()),
    {
      paymentsBlocked: i
    } = u.default.getCurrentConfig({
      location: "153d31_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: r
    } = (0, p.isBogoPromotionExperimentEnabled)(),
    {
      enabled: l
    } = P.default.getCurrentConfig({
      location: "153d31_4"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: s
    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
      location: "153d31_5"
    }, {
      autoTrackExposure: !1
    });
  if (n || i || !r || !s && !l) return !1;
  if (_.default.shouldFetchOffer() && await T.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
  !f.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(M.PremiumSubscriptionSKUs.TIER_2)) && await (0, a.fetchMostRecentSubscription)(), !f.default.hasFetchedSubscriptions() && await (0, a.fetchSubscriptions)();
  let o = f.default.getMostRecentPremiumTypeSubscription(),
    d = f.default.getPremiumTypeSubscription();
  return !v({
    experimentEnabled: r,
    premiumSubscription: d,
    mostRecentSubscription: o
  })
}
async function N() {
  let e = await h();
  if (!e) return;
  let t = O.default.bogoPromotion;
  if (null != t) {
    let e = new Date(t.endDate).valueOf();
    if (e >= Date.now()) return
  }
  await (0, R.fetchActiveBogoPromotion)()
}
async function x() {
  let e = O.default.bogoPromotion,
    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
    n = (0, d.isDismissibleContentDismissed)(s.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
    i = await h(),
    {
      enabled: r
    } = p.BogoPromotionExperiment.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: l
    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: t && r && !n && i
    });
  return t && l && r && !n && i
}

function A() {
  let e = c.default.locale;
  switch (e) {
    case "de":
    case "es-ES":
    case "fr":
    case "hr":
    case "it":
    case "lt":
    case "nl":
    case "pl":
    case "pt-BR":
    case "ro":
    case "fi":
    case "sv-SE":
    case "tr":
    case "cs":
    case "el":
    case "bg":
    case "ru":
    case "uk":
    case "ja":
    case "ko":
      return L.default.Messages.NITRO_BADGE_TEXT;
    default:
      return L.default.Messages.BOGO_PILL
  }
}