"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("917351"),
  r = s.n(i),
  o = s("446674"),
  d = s("77078"),
  u = s("697218"),
  c = s("10514"),
  S = s("521012"),
  E = s("216422"),
  f = s("719923"),
  T = s("541554"),
  m = s("646718"),
  _ = s("782340"),
  g = s("704129");

function h(e) {
  let {
    user: t,
    planId: s,
    count: n,
    userPremiumSubscription: i
  } = e, [r, u] = (0, o.useStateFromStoresArray)([c.default], () => [c.default.get(s), null != i ? c.default.get(i.planId) : null]);
  if (null == r || f.default.getInterval(s).intervalType !== m.SubscriptionIntervalTypes.MONTH) return null;
  let S = null != u ? u.skuId : null,
    T = r.skuId === S,
    h = f.default.getDisplayName(s);
  return (0, a.jsxs)("div", {
    className: g.accountCreditRow,
    children: [(0, a.jsx)("div", {
      className: l({
        [g.iconBackgroundTier0]: r.skuId === m.PremiumSubscriptionSKUs.TIER_0,
        [g.iconBackgroundTier1]: r.skuId === m.PremiumSubscriptionSKUs.TIER_1,
        [g.iconBackgroundTier2]: r.skuId === m.PremiumSubscriptionSKUs.TIER_2
      }),
      children: (0, a.jsx)(E.default, {
        className: g.icon
      })
    }), (0, a.jsxs)("div", {
      className: g.rowDetails,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        children: _.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT.format({
          planName: h
        })
      }), t.hasFreePremium() ? null : (0, a.jsx)(d.Heading, {
        className: g.rowApplied,
        variant: "heading-sm/semibold",
        color: "header-secondary",
        children: T && null != i ? _.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_ON.format({
          date: i.currentPeriodEnd
        }) : _.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_MISMATCHED_PLAN.format({
          planName: h
        })
      })]
    }), (0, a.jsx)(d.Text, {
      className: g.rowCreditCount,
      variant: "text-md/semibold",
      children: _.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT_COUNT_MONTHS.format({
        count: n
      })
    })]
  })
}
var I = function(e) {
  let {
    className: t,
    entitlements: s
  } = e, n = r(Array.from(s)).filter(e => {
    let {
      subscriptionPlanId: t,
      parentId: s,
      consumed: a
    } = e;
    return null != t && null != s && !a
  }).groupBy(e => e.subscriptionPlanId).value(), i = (0, o.useStateFromStores)([S.default], () => S.default.getPremiumSubscription()), c = (0, o.useStateFromStores)([S.default], () => null == S.default.getPremiumTypeSubscription()), E = Object.keys(n).some(e => e === m.SubscriptionPlans.PREMIUM_MONTH_TIER_1), f = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser());
  return null == f ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: l(t, g.premiumSubscriptionAccountCredit),
      children: Object.keys(n).map(e => (0, a.jsx)(h, {
        planId: e,
        count: n[e].length,
        userPremiumSubscription: i,
        user: f
      }, e))
    }), E && c && (0, a.jsxs)("div", {
      children: [(0, a.jsx)(d.Text, {
        className: g.tier1AccountCreditHeader,
        variant: "text-md/normal",
        children: _.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_HEADER
      }), (0, a.jsx)(T.Tier1AccountCreditBanner, {})]
    })]
  })
}