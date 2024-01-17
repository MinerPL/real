"use strict";
s.r(t), s.d(t, {
  fetchStatisticsForApplication: function() {
    return r
  }
});
var a = s("872717"),
  n = s("913144"),
  l = s("333805"),
  i = s("49111");
async function r(e) {
  n.default.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = await a.default.get({
        url: i.Endpoints.APPLICATION_ACTIVITY_STATISTICS(e),
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
    }), new l.default(t)
  }
}