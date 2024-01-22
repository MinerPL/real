"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCardTierName: function() {
    return f
  },
  GuildRoleSubscriptionCardTierImage: function() {
    return h
  },
  GuildRoleSubscriptionCardBasicInfo: function() {
    return p
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("944371"),
  i = n("153160"),
  r = n("577357"),
  o = n("167109"),
  u = n("373622"),
  d = n("782340"),
  c = n("118338");
let f = e => {
  let {
    listingName: t
  } = e;
  return (0, a.jsx)(l.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: c.tierName,
    children: t
  })
};

function h(e) {
  let {
    image: t
  } = e;
  return null == t ? null : (0, a.jsx)("img", {
    src: t,
    alt: "",
    className: c.tierImage
  })
}
let p = e => {
  let {
    listingId: t,
    isListingPublished: n
  } = e, p = (0, u.default)(), [m] = o.useName(t), [E] = o.useImage(t, p), [C] = o.useSubscriptionPlan(t);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f, {
      listingName: m
    }), (0, a.jsx)(h, {
      image: E
    }), !n && (0, a.jsx)("div", {
      className: c.draftBadgeContainer,
      children: (0, a.jsx)(s.MonetizationListingDraftBadge, {})
    }), (0, a.jsx)(l.Text, {
      variant: "heading-xl/semibold",
      className: c.tierPrice,
      tag: "div",
      children: (0, i.formatPrice)(C.price, C.currency)
    }), (0, a.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "interactive-normal",
      className: c.tierPeriod,
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
        period: (0, r.formatPlanInterval)({
          interval: C.interval,
          interval_count: C.interval_count
        })
      })
    })]
  })
}