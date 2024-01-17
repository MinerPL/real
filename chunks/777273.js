"use strict";
n.r(t), n.d(t, {
  fetchUserAffinities: function() {
    return s
  }
});
var l = n("872717"),
  i = n("913144"),
  r = n("843823"),
  a = n("49111");

function s() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return r.default.needsRefresh() ? (i.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), l.default.get({
    url: a.Endpoints.USER_AFFINITIES,
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