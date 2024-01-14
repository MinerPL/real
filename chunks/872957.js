"use strict";
l.r(t), l.d(t, {
  fetchBuildSize: function() {
    return r
  }
});
var a = l("872717"),
  s = l("913144"),
  n = l("677225"),
  i = l("49111");
async function r(e, t, l, r) {
  if (n.default.needsToFetchBuildSize(l)) {
    s.default.dispatch({
      type: "APPLICATION_BUILD_SIZE_FETCH_START",
      buildId: l
    });
    try {
      let n = await a.default.post({
        url: i.Endpoints.APPLICATION_BUILD_SIZE(e, t, l),
        body: {
          manifest_ids: r
        },
        oldFormErrors: !0
      });
      s.default.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
        buildId: l,
        sizeKB: n.body.size_kb
      })
    } catch (e) {
      s.default.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
        buildId: l
      })
    }
  }
}