"use strict";
n.r(e), n.d(e, {
  createCreatorMonetizationEnableRequest: function() {
    return l
  },
  getCreatorMonetizationEligibility: function() {
    return u
  },
  acceptCreatorMonetizationTerms: function() {
    return c
  },
  acceptCreatorMonetizationTermsV2: function() {
    return d
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return T
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return E
  },
  ownershipTransferOnboard: function() {
    return _
  },
  acceptNewTerms: function() {
    return C
  },
  acceptNewTermsDemonetized: function() {
    return R
  },
  removeMonetization: function() {
    return f
  }
});
var a = n("872717"),
  i = n("913144"),
  o = n("651057"),
  r = n("49111"),
  s = n("988268");
async function l(t) {
  await a.default.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(t)
  })
}
async function u(t) {
  let e = await a.default.get({
    url: r.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(t)
  });
  return e.body
}
async function c(t, e) {
  await a.default.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(t, e)
  })
}
async function d(t) {
  await a.default.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t)
  })
}
async function T(t) {
  let e = await a.default.get({
    url: r.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t)
  });
  return e.body
}
async function E(t) {
  try {
    let e = await a.default.get({
      url: r.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: t
      }
    });
    i.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: e.body.eligible_guilds
    })
  } catch (t) {}
}
async function _(t, e) {
  let n = await a.default.post({
      url: r.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
      body: {
        team_id: e
      }
    }),
    o = n.body;
  return null != o.application && i.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: o.application
  }), o
}

function C(t) {
  return a.default.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t)
  })
}

function R(t) {
  return a.default.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t)
  })
}
async function O(t) {
  await a.default.post({
    url: r.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
    body: {}
  })
}
async function f(t) {
  return await O(t), await o.default.getApplicationsForGuild(t, {
    type: s.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}