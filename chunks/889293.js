"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("446674"),
  l = n("913144");
let a = [];
class i extends s.default.Store {
  getEligibleGuildsForNagActivate() {
    return a
  }
}
i.displayName = "CreatorMonetizationMarketingStore";
var r = new i(l.default, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    a = t
  }
})