"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144"),
  i = n("697218"),
  l = n("49111");
let r = null;
class o extends a.default.Store {
  getHouseMembership() {
    return r
  }
}
o.displayName = "HypeSquadStore";
var u = new o(s.default, {
  CONNECTION_OPEN: function() {
    let e = i.default.getCurrentUser();
    null != e && (e.hasFlag(l.UserFlags.HYPESQUAD_ONLINE_HOUSE_1) ? r = l.HypeSquadHouses.HOUSE_1 : e.hasFlag(l.UserFlags.HYPESQUAD_ONLINE_HOUSE_2) ? r = l.HypeSquadHouses.HOUSE_2 : e.hasFlag(l.UserFlags.HYPESQUAD_ONLINE_HOUSE_3) && (r = l.HypeSquadHouses.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    r = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    r = e.houseID
  }
})