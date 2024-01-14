"use strict";
n.r(t), n.d(t, {
  fetchLiveBuild: function() {
    return f
  }
});
var i = n("872717"),
  r = n("398183"),
  s = n("862337"),
  a = n("913144"),
  o = n("915639"),
  l = n("686470"),
  u = n("645672"),
  c = n("49111");
let d = {};
async function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    E = o.default.locale;
  return a.default.dispatch({
    type: "APPLICATION_BUILD_FETCH_START",
    applicationId: e,
    branchId: t,
    locale: E
  }), n && await (0, r.sleep)(6e4 * Math.random()), i.default.get({
    url: c.Endpoints.APPLICATION_LIVE_BUILD(e, t),
    query: {
      platform: (0, u.getBuildPlatform)(),
      locale: E
    },
    oldFormErrors: !0
  }).then(n => {
    let i = n.body;
    if (0 === i.manifests.length) {
      a.default.dispatch({
        type: "APPLICATION_BUILD_NOT_FOUND",
        applicationId: e,
        branchId: t
      });
      return
    }
    a.default.dispatch({
      type: "APPLICATION_BUILD_FETCH_SUCCESS",
      applicationId: e,
      branchId: t,
      locale: E,
      build: i
    })
  }, n => {
    let {
      status: i
    } = n;
    if (404 === i) a.default.dispatch({
      type: "APPLICATION_BUILD_NOT_FOUND",
      applicationId: e,
      branchId: t
    });
    else {
      var r, o;
      r = e, null == d[o = t] && (d[o] = new s.Timeout), d[o].start(6e5 + 6e5 * Math.random(), () => {
        let e = l.default.getLibraryApplication(r, o);
        null != e && f(r, o)
      })
    }
  })
}