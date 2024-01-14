"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var l = i("719923"),
  a = i("673044"),
  n = i("954016"),
  r = i("646718");

function d(e, t) {
  let i = (0, a.default)(e.activity);
  return i || null == e.activity.premium_tier_requirement || (0, l.isPremiumExactly)(t, r.PremiumTypes.TIER_2) ? n.ActivityAccessStatus.UNLOCKED : n.ActivityAccessStatus.NEEDS_NITRO
}