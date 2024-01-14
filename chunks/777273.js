"use strict";
s.r(t), s.d(t, {
  fetchUserAffinities: function() {
    return i
  }
});
var n = s("872717"),
  r = s("913144"),
  a = s("843823"),
  l = s("49111");

function i() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return a.default.needsRefresh() ? (r.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), n.default.get({
    url: l.Endpoints.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    r.default.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: t
    })
  }, () => {
    r.default.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}