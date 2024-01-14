"use strict";
n.r(t), n.d(t, {
  fetchEULA: function() {
    return l
  }
});
var r = n("872717"),
  u = n("913144"),
  a = n("49111");
async function l(e) {
  let t = await r.default.get({
    url: a.Endpoints.STORE_EULA(e),
    oldFormErrors: !0
  });
  u.default.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}