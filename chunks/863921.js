"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  u = n("931138"),
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
    iconClassName: r,
    size: s
  } = e;
  return (0, i.jsx)(u.default, {
    className: l(n, d[t]),
    size: s,
    children: (0, i.jsx)(o.default, {
      tier: t,
      className: l(r, a.boostedGuildIconGem, c[t])
    })
  })
}