"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("872717"),
  l = n("913144"),
  s = n("49111"),
  i = {
    fetchRegions(e) {
      a.default.get({
        url: s.Endpoints.REGIONS(e),
        retries: 1,
        oldFormErrors: !0
      }).then(t => l.default.dispatch({
        type: "LOAD_REGIONS",
        regions: t.body,
        guildId: e
      }), () => l.default.dispatch({
        type: "LOAD_REGIONS",
        regions: [],
        guildId: e
      }))
    },
    changeCallRegion(e, t) {
      a.default.patch({
        url: s.Endpoints.CALL(e),
        body: {
          region: t
        },
        oldFormErrors: !0
      })
    }
  }