"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  l = n("77078"),
  u = n("118503"),
  o = n("427459"),
  s = n("782340"),
  c = n("884737"),
  d = e => {
    let t, n, i, {
        guildFeature: d,
        guild: f,
        className: E,
        hideTooltip: _ = !1,
        tooltipPosition: p = "left",
        onClick: T
      } = e,
      h = f.hasFeature(d),
      C = (0, o.minimumRequiredTierForGuildFeature)(d);
    return (h ? (null != C && (i = s.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.default, {
        className: c.unlockedIcon
      }), (0, a.jsx)(l.Heading, {
        variant: "eyebrow",
        className: c.description,
        children: s.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
      })]
    })) : (null != C && (i = s.default.Messages.CLICK_TO_LEARN_MORE), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.default, {
        className: c.icon
      }), (0, a.jsx)(l.Heading, {
        variant: "eyebrow",
        className: c.description,
        children: null != C && (0, o.getShortenedTierName)(C)
      })]
    })), n = _ || null == i ? (0, a.jsx)("div", {
      className: r(c.availabilityIndicator, E),
      children: t
    }) : (0, a.jsx)(l.Tooltip, {
      position: p,
      text: i,
      children: e => (0, a.jsx)("div", {
        ...e,
        className: r(c.availabilityIndicator, E),
        children: t
      })
    }), null == T || h) ? n : (0, a.jsx)(l.Clickable, {
      onClick: T,
      className: c.clickable,
      children: n
    })
  }