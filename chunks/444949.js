"use strict";
n.r(t), n.d(t, {
  fetchActivityStatistics: function() {
    return u
  }
});
var a = n("872717"),
  s = n("913144"),
  i = n("251013"),
  l = n("718517"),
  r = n("49111");
let o = 6 * l.default.Millis.HOUR;
async function u() {
  let e = i.default.lastFetched;
  if (!(null != e && Date.now() - e < o)) try {
    let e = await a.default.get({
      url: r.Endpoints.USER_ACTIVITY_STATISTICS,
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