"use strict";
n.r(t), n.d(t, {
  fetchActivityStatistics: function() {
    return r
  }
});
var a = n("872717"),
  s = n("913144"),
  i = n("251013"),
  l = n("49111");
async function r() {
  let e = i.default.lastFetched;
  if (!(null != e && Date.now() - e < 216e5)) try {
    let e = await a.default.get({
      url: l.Endpoints.USER_ACTIVITY_STATISTICS,
      oldFormErrors: !0
    });
    s.default.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}