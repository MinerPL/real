"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("907002"),
  r = s("65597"),
  u = s("206230"),
  o = s("154889"),
  d = s("917247"),
  c = s("218435"),
  _ = s("881155"),
  E = s("646718"),
  I = s("49111"),
  T = s("895185"),
  f = function(e) {
    var t, s;
    let {
      isVisible: n,
      isFullscreen: f,
      subscriptionTier: S
    } = e, R = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, o.usePremiumDiscountOffer)(), p = (0, o.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, N = (0, r.default)([u.default], () => u.default.useReducedMotion), A = (0, i.useSpring)({
      transform: n ? "translateY(-100%)" : "translateY(0%)",
      opacity: n ? 1 : 0,
      config: {
        tension: 120,
        friction: 12
      },
      immediate: N
    }), g = {
      section: I.AnalyticsSections.MARKETING_FLOATING_CTA
    };
    return (0, a.jsx)(i.animated.div, {
      className: l(T.wrapper, {
        [T.fullscreenWrapper]: f,
        [T.invisible]: !n
      }),
      style: A,
      children: (0, a.jsxs)("div", {
        className: T.innerWrapper,
        children: [(0, a.jsx)(_.default, {
          className: T.button,
          shinyButtonClassName: T.shinyButton,
          subscriptionTier: null !== (s = null != S ? S : null == R ? void 0 : R.sku_id) && void 0 !== s ? s : p,
          premiumModalAnalyticsLocation: g,
          isPersistentCTA: !0
        }), (0, a.jsx)(c.default, {
          className: T.button,
          premiumModalAnalyticsLocation: g
        })]
      })
    })
  }