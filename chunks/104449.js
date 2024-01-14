"use strict";
n.r(e), n.d(e, {
  getApplicationSubscriptionGroupListingsForApplication: function() {
    return a
  },
  getEntitlementsForGuild: function() {
    return o
  },
  getSubscriptionGroupForSubscriptionPlan: function() {
    return s
  },
  fetchApplication: function() {
    return c
  },
  fetchEligibleApplicationSubscriptionGuilds: function() {
    return S
  }
});
var u = n("872717"),
  i = n("913144"),
  r = n("599417"),
  l = n("49111");
let a = async (t, e) => {
  let n = await u.default.get({
    url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
  });
  return n.body
}, o = async function(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = await u.default.get({
      url: l.Endpoints.GUILD_ENTITLEMENTS(t),
      query: {
        with_sku: !0,
        with_application: !0,
        exclude_deleted: e
      }
    });
  return n.body
}, s = async t => {
  let e = await u.default.get({
    url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
  });
  return e.body
};

function c(t) {
  return i.default.dispatch({
    type: "APPLICATION_FETCH",
    applicationId: t
  }), u.default.get({
    url: l.Endpoints.APPLICATION_PUBLIC(t)
  }).then(t => (i.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: t.body
  }), t.body)).catch(e => (i.default.dispatch({
    type: "APPLICATION_FETCH_FAIL",
    applicationId: t
  }), Promise.reject(new r.default(e))))
}
async function S(t) {
  let e = await u.default.get({
    url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
    query: {
      application_id: t
    }
  });
  return e.body
}