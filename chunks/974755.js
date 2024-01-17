"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  u = n("446674"),
  o = n("77078"),
  s = n("51565"),
  a = n("95039"),
  d = n("863921"),
  c = n("26989"),
  f = n("697218"),
  S = n("580357"),
  E = n("40469"),
  h = n("427459"),
  g = n("49111"),
  p = n("782340"),
  _ = n("129818");

function C(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  } = e, l = (0, u.useStateFromStores)([f.default, c.default], () => {
    let e = f.default.getCurrentUser();
    return c.default.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: s,
    premiumSubscriberCount: S
  } = t;
  if (0 === S && s === g.BoostedGuildTiers.NONE) return null;
  let E = e => {
      e.stopPropagation(), e.preventDefault(), l && !r && (0, a.openGuildBoostingMarketingModal)({
        guildId: t.id,
        location: {
          section: g.AnalyticsSections.GUILD_HEADER,
          object: g.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    },
    C = s === g.BoostedGuildTiers.NONE ? p.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : h.getTierName(s),
    m = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: _.tierTooltipTitle,
        children: C
      }), (0, i.jsx)("div", {
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: S
        })
      })]
    });
  return (0, i.jsx)("div", {
    className: _.guildIconContainer,
    children: (0, i.jsx)(o.Tooltip, {
      text: m,
      position: "bottom",
      "aria-label": null != C ? C : "",
      children: e => (0, i.jsx)(o.Clickable, {
        ...e,
        className: _.premiumGuildIcon,
        onClick: E,
        children: (0, i.jsx)(d.default, {
          premiumTier: s,
          iconBackgroundClassName: n ? _.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: n && s !== g.BoostedGuildTiers.TIER_3 ? _.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function m(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: r
  } = e, u = (0, s.default)(t);
  return u ? (0, i.jsx)("div", {
    className: _.guildIconV2Container,
    children: (0, i.jsx)(E.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l(_.guildBadge, {
        [_.disableColor]: n
      }),
      disableBoostClick: r
    })
  }) : (0, i.jsx)("div", {
    className: _.guildIconContainer,
    children: (0, i.jsx)(S.default, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      className: l(_.guildBadge, {
        [_.disableColor]: n
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  } = e, l = (0, s.default)(t);
  if (l) return (0, i.jsx)(m, {
    guild: t,
    disableColor: !1,
    disableBoostClick: r
  });
  let u = t.hasFeature(g.GuildFeatures.VERIFIED) || t.hasFeature(g.GuildFeatures.PARTNERED);
  return u ? (0, i.jsx)(m, {
    guild: t,
    disableColor: !n
  }) : (0, i.jsx)(C, {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: r
  })
}