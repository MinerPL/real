"use strict";
s.r(t), s.d(t, {
  fetchStatisticsForApplication: function() {
    return i
  }
});
var a = s("872717"),
  n = s("913144"),
  r = s("333805"),
  l = s("49111");
async function i(e) {
  n.default.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = await a.default.get({
        url: l.Endpoints.APPLICATION_ACTIVITY_STATISTICS(e),
        oldFormErrors: !0
      }),
      s = t.body;
    return n.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: s,
      applicationId: e
    }), s
  } catch (t) {
    throw n.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new r.default(t)
  }
}