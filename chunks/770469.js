"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return r
  },
  LocalizedPricingBadgeIcon: function() {
    return er
  }
}), n("222007");
var r, i, s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  o = n("446674"),
  u = n("102985"),
  c = n("959905"),
  d = n("485138"),
  f = n("49111"),
  p = n("876894"),
  _ = n("479490"),
  m = n("492689"),
  E = n("621231"),
  I = n("80371"),
  h = n("445908"),
  C = n("31581"),
  S = n("176261"),
  g = n("6618"),
  T = n("852384"),
  N = n("908707"),
  A = n("825425"),
  v = n("46894"),
  R = n("725607"),
  O = n("570954"),
  x = n("369380"),
  D = n("167023"),
  b = n("294012"),
  M = n("746068"),
  L = n("943354"),
  y = n("590798"),
  P = n("51388"),
  j = n("659562"),
  U = n("404339"),
  G = n("66779"),
  w = n("958562"),
  B = n("948574"),
  F = n("193776"),
  k = n("876884"),
  V = n("990988"),
  H = n("69548"),
  Y = n("177364"),
  W = n("325478"),
  Z = n("84816"),
  z = n("503742"),
  q = n("671478"),
  K = n("704716"),
  Q = n("2289"),
  X = n("234299"),
  J = n("77978"),
  $ = n("30993"),
  ee = n("859495"),
  et = n("867820");
(i = r || (r = {}))[i.PrivateMessages = 0] = "PrivateMessages", i[i.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", Z],
  ["PH", z],
  ["CL", C],
  ["CO", S],
  ["AR", _],
  ["JP", j],
  ["VN", et],
  ["TH", ee],
  ["ID", M],
  ["MY", H],
  ["MX", V],
  ["KR", U],
  ["BG", I],
  ["CZ", T],
  ["HU", b],
  ["RO", Q],
  ["SE", X],
  ["CY", g],
  ["EE", A],
  ["IS", y],
  ["IE", L],
  ["LV", F],
  ["LI", G],
  ["LT", w],
  ["LU", B],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", x],
  ["FI", R],
  ["PT", K],
  ["NO", W],
  ["BE", E],
  ["AT", m],
  ["CH", h],
  ["FR", O],
  ["DE", N],
  ["ES", v],
  ["IT", P],
  ["NL", Y],
  ["PL", q],
  ["HR", D]
]);

function er(e) {
  let {
    entryPoint: t,
    className: n
  } = e, i = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), l = (0, c.useLocalizedPromoQuery)(), _ = null == l ? void 0 : l.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, _), null == _ || !en.has(_) || i) return null;
  let m = en.get(_),
    E = "badgeIcon" + r[t];
  return (0, s.jsx)("img", {
    className: a(n, p[E]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: m
  })
}