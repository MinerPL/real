"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  u = s("77078"),
  o = s("913144"),
  d = s("850068"),
  c = s("583367"),
  _ = s("775433"),
  E = s("642950"),
  I = s("812204"),
  T = s("685665"),
  f = s("619935"),
  S = s("308592"),
  R = s("245187"),
  m = s("102985"),
  p = s("697218"),
  N = s("521012"),
  A = s("599110"),
  g = s("764364"),
  P = s("446488"),
  C = s("456015"),
  O = s("982457"),
  M = s("300962"),
  h = s("781084"),
  L = s("959905"),
  x = s("154889"),
  v = s("917247"),
  U = s("254893"),
  b = s("840326"),
  j = s("646718"),
  D = s("49111"),
  G = s("265921"),
  B = function(e) {
    let {
      entrypoint: t = j.PremiumMarketingEntrypoints.UserSettings
    } = e, s = (0, f.useBlockedPaymentsConfig)(), {
      AnalyticsLocationProvider: l,
      sourceAnalyticsLocations: B
    } = (0, T.default)(I.default.PREMIUM_MARKETING), {
      enabled: y
    } = (0, M.default)(), k = (0, r.useStateFromStores)([N.default], () => N.default.hasFetchedSubscriptions()), K = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentUser()), H = (0, v.usePremiumTrialOffer)(), F = (0, x.usePremiumDiscountOffer)(), W = (0, S.useSubscriptionPlansLoaded)(), [w, V] = n.useState(!0), Y = n.useRef(0), z = (0, g.isPremiumExactly)(K, j.PremiumTypes.TIER_2), X = (0, L.useLocalizedPromoQuery)(), Q = null == X ? void 0 : X.countryCode, Z = (0, r.useStateFromStores)([P.default], () => P.default.hasFetched);
    n.useEffect(() => {
      !Z && d.getNitroAffinity()
    }, [Z]), n.useEffect(() => {
      o.default.wait(async () => {
        let e = Date.now();
        await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(Q, null, D.RevenueSurfaces.DISCOVERY)]), Y.current = Date.now() - e, V(!1)
      })
    }, [Q]), n.useEffect(() => {
      if (s && (null != H || null != F)) {
        let {
          enabled: e
        } = h.default.getCurrentConfig({
          location: "PremiumMarketingPage"
        }, {
          autoTrackExposure: !1
        });
        e ? (0, C.acknowledgeUserOffer)(H, F) : null != H && null == H.expires_at && O.default.acknowledgeUserTrialOffer(H)
      }
    }, [s, H, F]), n.useEffect(() => {
      !w && A.default.track(D.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
        location_stack: B,
        load_duration_ms: Y.current
      })
    }, [B, w]);
    let J = (0, r.useStateFromStores)([m.default], () => m.default.enabled);
    if (J) return (0, a.jsx)(E.default, {});
    if (s) return (0, a.jsx)(R.BlockedPaymentsContentSettings, {});
    let q = t === j.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return q && z && !y ? (0, a.jsx)(l, {
      children: (0, a.jsx)(b.default, {})
    }) : k && W && !w ? (0, a.jsx)(l, {
      children: (0, a.jsx)(U.default, {
        entrypoint: t
      })
    }) : (0, a.jsx)("div", {
      className: i(G.container, G.loading),
      children: (0, a.jsx)(u.Spinner, {})
    })
  }