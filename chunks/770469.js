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
var a = n("414456"),
  l = n.n(a),
  u = n("446674"),
  o = n("102985"),
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
  T = n("176261"),
  g = n("6618"),
  S = n("852384"),
  A = n("908707"),
  v = n("825425"),
  N = n("46894"),
  R = n("725607"),
  O = n("570954"),
  x = n("369380"),
  D = n("167023"),
  M = n("294012"),
  b = n("746068"),
  L = n("943354"),
  y = n("590798"),
  U = n("51388"),
  P = n("659562"),
  G = n("404339"),
  j = n("66779"),
  w = n("958562"),
  F = n("948574"),
  B = n("193776"),
  H = n("876884"),
  V = n("990988"),
  k = n("69548"),
  Y = n("177364"),
  W = n("325478"),
  Z = n("84816"),
  q = n("503742"),
  z = n("671478"),
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
  ["PH", q],
  ["CL", C],
  ["CO", T],
  ["AR", _],
  ["JP", P],
  ["VN", et],
  ["TH", ee],
  ["ID", b],
  ["MY", k],
  ["MX", V],
  ["KR", G],
  ["BG", I],
  ["CZ", S],
  ["HU", M],
  ["RO", Q],
  ["SE", X],
  ["CY", g],
  ["EE", v],
  ["IS", y],
  ["IE", L],
  ["LV", B],
  ["LI", j],
  ["LT", w],
  ["LU", F],
  ["MT", H],
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
  ["DE", A],
  ["ES", N],
  ["IT", U],
  ["NL", Y],
  ["PL", z],
  ["HR", D]
]);

function er(e) {
  let {
    entryPoint: t,
    className: n
  } = e, i = (0, u.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), a = (0, c.useLocalizedPromoQuery)(), _ = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, _), null == _ || !en.has(_) || i) return null;
  let m = en.get(_),
    E = "badgeIcon" + r[t];
  return (0, s.jsx)("img", {
    className: l(n, p[E]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: m
  })
}