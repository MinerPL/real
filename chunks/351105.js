"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var o = r("872717"),
  a = r("49111"),
  n = {
    async updateEstimate(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
        r = arguments.length > 2 ? arguments[2] : void 0,
        n = await o.default.get({
          url: a.Endpoints.GUILD_PRUNE(e),
          query: {
            days: t,
            include_roles: r
          },
          oldFormErrors: !0
        });
      return n.body.pruned
    },
    prune: (e, t, r) => o.default.post({
      url: a.Endpoints.GUILD_PRUNE(e),
      body: {
        days: t,
        compute_prune_count: !1,
        include_roles: r
      },
      oldFormErrors: !0
    })
  }