"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  o = n("446674"),
  r = n("154889"),
  a = n("917247"),
  c = n("801388"),
  u = n("770469"),
  d = n("641078"),
  h = n("773367"),
  f = n("160299"),
  m = n("324929"),
  p = n("890903");

function S(e) {
  let t, {
      decoration: n,
      label: i,
      isSelected: S
    } = e,
    C = (0, a.usePremiumTrialOffer)(),
    b = (0, r.usePremiumDiscountOffer)(),
    _ = (0, d.useIsEligibleForBogoPromotion)(),
    x = (0, o.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled),
    v = x && null == C && null == n;
  return t = _ ? (0, s.jsx)(c.default, {}) : null != b ? (0, s.jsx)(h.PremiumDiscountOfferTabBadge, {
    isTabSelected: S,
    userDiscount: b,
    includesAmountOff: !1
  }) : null != C ? (0, s.jsx)(h.PremiumTrialOfferTabBadge, {
    isTabSelected: S,
    trialOffer: C
  }) : null != n ? n : v ? (0, s.jsx)(u.LocalizedPricingBadgeIcon, {
    entryPoint: u.BadgeEntryPoint.SettingsMenu
  }) : (0, s.jsx)(m.default, {
    isSelected: S
  }), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: l(p.premiumLabel, {
        [p.selected]: (S || v) && !_
      }),
      children: [i, t]
    }), (0, s.jsx)("div", {
      className: l(p.background, {
        [p.auPromo]: v && !S,
        [p.auPromoSelected]: v && S,
        [p.selectedBackground]: !v && !_ && S
      })
    })]
  })
}