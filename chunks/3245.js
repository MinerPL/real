"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("872717"),
  n = s("49111"),
  l = {
    fetchTeams() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return a.default.get({
        url: n.Endpoints.TEAMS,
        query: {
          include_payout_account_status: e
        }
      })
    }
  }