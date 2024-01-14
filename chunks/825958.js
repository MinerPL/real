"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("743053"),
  i = s("595426"),
  r = s("697218"),
  o = s("719923"),
  d = s("646718");

function u() {
  let e = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, o.isPremiumExactly)(e, d.PremiumTypes.TIER_2);
  return t ? (0, a.jsx)(l.default, {}) : (0, a.jsx)(i.default, {})
}