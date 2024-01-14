"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  u = n.n(i),
  l = n("931138"),
  o = n("206453"),
  s = n("49111"),
  a = n("323755");
let d = {
    [s.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
    [s.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
    [s.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
    [s.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
  },
  c = {
    [s.BoostedGuildTiers.NONE]: a.iconTierNone,
    [s.BoostedGuildTiers.TIER_1]: a.iconTierOne,
    [s.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
    [s.BoostedGuildTiers.TIER_3]: a.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: i,
    size: s
  } = e;
  return (0, r.jsx)(l.default, {
    className: u(n, d[t]),
    size: s,
    children: (0, r.jsx)(o.default, {
      tier: t,
      className: u(i, a.boostedGuildIconGem, c[t])
    })
  })
}