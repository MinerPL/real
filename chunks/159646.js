"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  r = s.n(n),
  l = s("77078"),
  i = s("79112"),
  u = s("423487"),
  o = s("701909"),
  d = s("719923"),
  c = s("182650"),
  _ = s("646718"),
  E = s("49111"),
  I = s("782340"),
  T = s("507759"),
  f = e => {
    let t, {
        premiumSubscription: s,
        className: n,
        isFullscreen: f = !1
      } = e,
      S = (0, c.useIsInPremiumOfferExperience)();
    if (null == s) return null;
    let R = null != s ? d.default.getPremiumPlanItem(s) : null,
      p = d.default.isBoostOnlySubscription(s);
    if (p ? t = I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != R && (t = d.default.getDisplayPremiumType(R.planId)), null == t) return null;
    let m = () => i.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
      N = null != R ? d.default.getSkuIdForPlan(R.planId) : null,
      A = N === _.PremiumSubscriptionSKUs.TIER_1;
    return (0, a.jsxs)(l.Card, {
      className: r(T.container, n, {
        [T.lightTextLink]: f,
        [T.centerText]: S
      }),
      type: l.Card.Types.CUSTOM,
      children: [(0, a.jsx)(u.default, {
        className: r(T.icon, {
          [T.lightThemeColorOnly]: S || f
        })
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: S || f ? "always-white" : "text-normal",
        children: A ? I.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
          helpdeskArticle: o.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
          onSubscriptionsClick: m
        }) : I.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
          subscriptionName: t,
          onSubscriptionsClick: m
        })
      })]
    })
  }