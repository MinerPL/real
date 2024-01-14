"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var l = s("37983");
s("884691");
var n = s("414456"),
  r = s.n(n),
  o = s("446674"),
  a = s("77078"),
  i = s("915639"),
  u = s("697218"),
  c = s("10514"),
  d = s("521012"),
  f = s("719923"),
  E = s("153160"),
  _ = s("646718"),
  I = s("782340"),
  C = s("545627"),
  L = e => {
    var t;
    let {
      className: s
    } = e, n = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser()), L = (0, o.useStateFromStores)([i.default], () => i.default.locale), h = (0, o.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), N = (0, o.useStateFromStores)([c.default], () => null != h ? c.default.get(h.planId) : void 0), p = null !== (t = (0, o.useStateFromStores)([c.default], () => null != N ? c.default.getForSkuAndInterval(_.PremiumSubscriptionSKUs.GUILD, N.interval, N.intervalCount) : void 0)) && void 0 !== t ? t : _.SubscriptionPlanInfo[_.SubscriptionPlans.PREMIUM_MONTH_GUILD];
    return (0, l.jsxs)("div", {
      className: r(C.wrapper, s),
      children: [(0, l.jsx)(a.Heading, {
        className: C.heading,
        variant: "heading-xl/semibold",
        children: I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: function(e) {
          let {
            currentUser: t,
            locale: s,
            guildBoostingPlanId: n,
            interval: r,
            intervalCount: o
          } = e, a = f.default.getDefaultPrice(n, f.default.isPremium(t)), i = f.default.getDefaultPrice(n, !1), u = (0, E.formatRate)((0, E.formatPrice)(a.amount, a.currency), r, o), c = (0, E.formatRate)((0, E.formatPrice)(i.amount, i.currency), r, o);
          return f.default.isPremium(t, _.PremiumTypes.TIER_2) ? I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
            price: u,
            originalPrice: c,
            originalPriceHook: (e, t) => (0, l.jsx)("span", {
              className: C.originalPrice,
              children: e
            }, t),
            freeSubscriptionCount: _.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            discountPercent: (0, E.formatPercent)(s, _.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          }) : f.default.isPremium(t, _.PremiumTypes.TIER_1) ? I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
            price: u,
            originalPrice: c,
            originalPriceHook: (e, t) => (0, l.jsx)("span", {
              className: C.originalPrice,
              children: e
            }, t),
            discountPercent: (0, E.formatPercent)(s, _.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          }) : I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
            price: u
          })
        }({
          currentUser: n,
          locale: L,
          guildBoostingPlanId: p.id,
          interval: p.interval,
          intervalCount: p.intervalCount
        })
      })]
    })
  }