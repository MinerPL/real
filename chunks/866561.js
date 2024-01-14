"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var l = s("37983");
s("884691");
var n = s("446674"),
  r = s("77078"),
  o = s("626301"),
  a = s("400307"),
  i = s("697218"),
  u = s("719923"),
  c = s("646718"),
  d = s("782340"),
  f = s("157997");
let E = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, l.jsx)(r.Button, {
    className: f.tier0Button,
    color: r.Button.Colors.BRAND,
    look: r.Button.Looks.INVERTED,
    onClick: () => {
      (0, o.navigateToPremiumMarketingPage)(), null != t && t()
    },
    children: d.default.Messages.LEARN_MORE
  });
  return (0, l.jsxs)("div", {
    className: f.tier0Container,
    children: [(0, l.jsx)(r.Heading, {
      className: f.tier0Heading,
      variant: "heading-xxl/extrabold",
      children: d.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
    }), (0, l.jsx)(a.Tier2Card, {
      className: f.tier0Card,
      ctaButton: s,
      featureSet: a.Tier2FeatureSet.BOOSTING,
      showWumpus: !0,
      showYearlyPrice: !0
    })]
  })
};
var _ = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
  return u.default.isPremium(s, c.PremiumTypes.TIER_2) ? null : (0, l.jsx)(E, {
    onOpenPremiumClick: t
  })
}