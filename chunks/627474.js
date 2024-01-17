"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityVariants: function() {
    return n
  },
  default: function() {
    return N
  }
});
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  u = s.n(r),
  o = s("65597"),
  d = s("77078"),
  c = s("411691"),
  _ = s("521012"),
  E = s("719923"),
  I = s("367226"),
  T = s("628550"),
  f = s("558566"),
  S = s("646718"),
  R = s("782340"),
  m = s("650734");
(a = n || (n = {})).PERKS_DISCOVERABILITY = "perks_discoverability", a.WHATS_NEW = "whats_new";
let p = e => {
  let t = (0, o.default)([_.default], () => _.default.getPremiumTypeSubscription()),
    s = null != t ? E.default.getPremiumPlanItem(t) : null,
    a = null != s ? E.default.getSkuIdForPlan(s.planId) : null,
    n = a === S.PremiumSubscriptionSKUs.TIER_2;
  if (e) return n ? {
    title: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
    subtitle: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
  } : {
    title: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
    subtitle: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
  };
  return {
    title: R.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
    subtitle: R.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
  }
};
var N = e => {
  let {
    className: t,
    variant: s = "perks_discoverability",
    noBackground: a = !1,
    leftAlignHeaders: n = !1
  } = e, r = i.useRef(null), o = (0, I.useShouldScrollToWhatsNew)(), _ = (0, c.default)("perks-discoverability");
  (0, I.useClearNewBadge)();
  let E = "whats_new" === s;
  i.useEffect(() => {
    let e = r.current;
    if (null == e || !o || !E) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [r, o, E]);
  let S = (0, T.default)(),
    R = p(E),
    N = [];
  switch (s) {
    case "perks_discoverability":
      N = [S.profiles, S.clientThemes, S.serverBoosts];
      break;
    case "whats_new":
      N = [S.earlyAccess, _ !== c.CollectiblesShopMarketingVariants.DEFAULT ? S.specialShopPerks : S.specialMemberPricing, S.unlimitedSuperReactions]
  }
  let A = N.some(e => null != e.pillText);
  return (0, l.jsxs)("div", {
    ref: r,
    className: u(m.section, {
      [m.centerAlignSection]: !n,
      [m.leftAlignSection]: n
    }, t),
    children: [(0, l.jsx)(d.Heading, {
      variant: "heading-xxl/extrabold",
      color: "header-primary",
      className: m.heading,
      children: R.title
    }), (0, l.jsx)(d.Text, {
      variant: "text-lg/normal",
      color: "header-primary",
      className: u(m.subtitle, {
        [m.fullWidth]: E || n,
        [m.moreSubtitleMargin]: A,
        [m.leftAlignSubtitle]: n,
        [m.centerAlignSubtitle]: !n
      }),
      children: R.subtitle
    }), (0, l.jsx)("div", {
      className: m.cardContainer,
      children: N.map((e, t) => (0, l.jsx)(f.default, {
        ...e,
        forceShadow: a
      }, "".concat(e.name, "_").concat(t)))
    })]
  })
}