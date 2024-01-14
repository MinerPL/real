"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("446674"),
  a = n("913144");
let s = [];
class i extends l.default.Store {
  getEligibleGuildsForNagActivate() {
    return s
  }
}
i.displayName = "CreatorMonetizationMarketingStore";
var r = new i(a.default, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    s = t
  }
})