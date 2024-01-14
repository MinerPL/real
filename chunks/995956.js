"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("701909"),
  i = s("719923"),
  r = s("153160"),
  o = s("49111"),
  d = s("646718"),
  u = s("782340"),
  c = s("400111"),
  S = function(e) {
    let {
      hasAppliedGuildBoosts: t,
      isUserPremiumTier2: s,
      hasGuildAffinitiesOrInGuild: S
    } = e, {
      subtitle: E,
      flavor: f
    } = function(e) {
      let {
        hasAppliedGuildBoosts: t,
        isUserPremiumTier2: s,
        hasGuildAffinitiesOrInGuild: a
      } = e;
      if (!a) return {
        subtitle: u.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE
      };
      if (t) return {
        subtitle: u.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
        flavor: u.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({
          helpdeskArticle: l.default.getArticleURL(o.HelpdeskArticles.GUILD_SUBSCRIPTIONS)
        })
      };
      let n = d.SubscriptionPlanInfo[d.SubscriptionPlans.PREMIUM_MONTH_GUILD],
        c = i.default.getDefaultPrice(n.id, s),
        S = (0, r.formatRate)((0, r.formatPrice)(c.amount, c.currency), n.interval, n.intervalCount);
      return {
        subtitle: s ? u.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : u.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
        flavor: u.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({
          monthlyGuildBoostPrice: S
        })
      }
    }({
      hasAppliedGuildBoosts: t,
      isUserPremiumTier2: s,
      hasGuildAffinitiesOrInGuild: S
    });
    return (0, a.jsxs)("div", {
      className: c.wrapper,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        className: c.subtitle,
        children: E
      }), null != f && (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: f
      })]
    })
  }