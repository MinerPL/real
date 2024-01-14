"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("782340"),
  i = s("245117"),
  r = function(e) {
    let {
      hasGuildBoostSlots: t,
      hasAppliedGuildBoosts: r,
      isUserPremiumTier2: o
    } = e;
    return (0, a.jsxs)("div", {
      className: i.wrapper,
      children: [(0, a.jsx)("div", {
        className: i.guildBoostGemWrapper,
        children: (0, a.jsx)("img", {
          alt: "",
          className: i.guildBoostGem,
          src: s("591779")
        })
      }), (0, a.jsxs)("div", {
        className: i.gradient,
        children: [(0, a.jsx)(n.Heading, {
          variant: "display-md",
          className: i.heading,
          children: function(e) {
            let {
              hasGuildBoostSlots: t,
              hasAppliedGuildBoosts: s,
              isUserPremiumTier2: a
            } = e;
            return t ? a && !s ? l.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_HAS_UNAPPLIED_FREE_GUILD_BOOSTS.format() : l.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_YOUR_GUILD_BOOSTS.format() : l.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_NO_GUILD_BOOSTS
          }({
            hasGuildBoostSlots: t,
            isUserPremiumTier2: o,
            hasAppliedGuildBoosts: r
          })
        }), (0, a.jsx)("svg", {
          viewBox: "0 0 660 210",
          className: i.wave,
          children: (0, a.jsx)("path", {
            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z"
          })
        })]
      })]
    })
  }