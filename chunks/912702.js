"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("70102");
var l = s("37983");
s("884691");
var n = s("394716"),
  r = s("216773"),
  o = s("507006"),
  a = s("49111");

function i(e) {
  let {
    tier: t,
    ...s
  } = e;
  switch (t) {
    case a.BoostedGuildTiers.TIER_1:
      return (0, l.jsx)(n.default, {
        ...s
      });
    case a.BoostedGuildTiers.TIER_2:
      return (0, l.jsx)(r.default, {
        ...s
      });
    case a.BoostedGuildTiers.TIER_3:
      return (0, l.jsx)(o.default, {
        ...s
      });
    case a.BoostedGuildTiers.NONE:
      return null;
    default:
      throw Error("Not a valid tier type")
  }
}