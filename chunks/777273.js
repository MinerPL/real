"use strict";
a.r(t), a.d(t, {
  fetchUserAffinities: function() {
    return r
  }
});
var n = a("872717"),
  i = a("913144"),
  s = a("843823"),
  l = a("49111");

function r() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return s.default.needsRefresh() ? (i.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), n.default.get({
    url: l.Endpoints.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    i.default.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: t
    })
  }, () => {
    i.default.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}