"use strict";
n.r(t), n.d(t, {
  isAtGuildCapAndNonPremium: function() {
    return r
  }
}), n("446674"), n("139321");
var s = n("305961"),
  l = n("697218"),
  a = n("719923"),
  i = n("49111");

function r() {
  let e = s.default.getGuildCount() >= i.MAX_USER_GUILDS,
    t = a.default.canUseIncreasedGuildCap(l.default.getCurrentUser());
  return e && !t
}