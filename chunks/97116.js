"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
    return m
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("944371"),
  i = n("837899"),
  r = n("425190"),
  o = n("153160"),
  u = n("577357"),
  d = n("167109"),
  c = n("373622"),
  f = n("944256"),
  h = n("782340"),
  p = n("948286");
let m = e => {
  let {
    listingId: t,
    isListingPublished: n,
    expanded: m,
    onToggleExpanded: E
  } = e, C = (0, c.default)(), [g] = d.useName(t), [S] = d.useImage(t, C), [_] = d.useSubscriptionPlan(t);
  return (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsx)(f.GuildRoleSubscriptionCardTierImage, {
      image: S
    }), (0, a.jsxs)("div", {
      className: p.tierTextInfoContainer,
      children: [(0, a.jsx)(f.GuildRoleSubscriptionCardTierName, {
        listingName: g
      }), (0, a.jsxs)("div", {
        className: p.tierPriceContainer,
        children: [!n && (0, a.jsx)(s.MonetizationListingDraftBadge, {}), (0, a.jsxs)(l.Text, {
          variant: "text-xs/normal",
          className: p.tierPrice,
          children: [(0, o.formatPrice)(_.price, _.currency), " ", h.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, u.formatPlanInterval)({
              interval: _.interval,
              interval_count: _.interval_count
            })
          })]
        })]
      })]
    }), (0, a.jsx)(l.Clickable, {
      onClick: E,
      children: m ? (0, a.jsx)(r.default, {
        className: p.toggleButton
      }) : (0, a.jsx)(i.default, {
        className: p.toggleButton
      })
    })]
  })
}