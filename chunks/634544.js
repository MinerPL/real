"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  u = n("77078"),
  l = n("118503"),
  o = n("427459"),
  s = n("782340"),
  c = n("884737"),
  d = e => {
    let t, n, a, {
        guildFeature: d,
        guild: f,
        className: E,
        hideTooltip: p = !1,
        tooltipPosition: _ = "left",
        onClick: T
      } = e,
      S = f.hasFeature(d),
      h = (0, o.minimumRequiredTierForGuildFeature)(d);
    return (S ? (null != h && (a = s.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.default, {
        className: c.unlockedIcon
      }), (0, r.jsx)(u.Heading, {
        variant: "eyebrow",
        className: c.description,
        children: s.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
      })]
    })) : (null != h && (a = s.default.Messages.CLICK_TO_LEARN_MORE), t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.default, {
        className: c.icon
      }), (0, r.jsx)(u.Heading, {
        variant: "eyebrow",
        className: c.description,
        children: null != h && (0, o.getShortenedTierName)(h)
      })]
    })), n = p || null == a ? (0, r.jsx)("div", {
      className: i(c.availabilityIndicator, E),
      children: t
    }) : (0, r.jsx)(u.Tooltip, {
      position: _,
      text: a,
      children: e => (0, r.jsx)("div", {
        ...e,
        className: i(c.availabilityIndicator, E),
        children: t
      })
    }), null == T || S) ? n : (0, r.jsx)(u.Clickable, {
      onClick: T,
      className: c.clickable,
      children: n
    })
  }