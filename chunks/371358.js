"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionsSettings: function() {
    return f
  },
  updateSubscriptionsSettings: function() {
    return _
  },
  fetchAllSubscriptionListingsDataForGuild: function() {
    return c
  },
  createSubscriptionGroupListing: function() {
    return g
  },
  fetchSubscriptionListingForPlan: function() {
    return m
  },
  deleteSubscriptionListing: function() {
    return h
  },
  archiveSubscriptionListing: function() {
    return v
  },
  updateSubscriptionTrial: function() {
    return E
  },
  createSubscriptionListing: function() {
    return y
  },
  updateSubscriptionListing: function() {
    return T
  },
  fetchMonetizationRestrictions: function() {
    return C
  }
}), n("222007");
var s = n("398183"),
  i = n("913144"),
  r = n("850068"),
  a = n("775433"),
  o = n("716241"),
  d = n("599110"),
  u = n("719726"),
  l = n("49111");
async function f(e) {
  let t = await u.getGuildRoleSubscriptionsSettings(e);
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: t
  })
}
async function _(e, t) {
  let n = await u.updateGuildRoleSubscriptionsSettings(e, t);
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
    settings: n
  })
}
async function c(e) {
  let {
    includeSoftDeleted: t = !0,
    countryCode: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
    guildId: e
  });
  try {
    let [s, a, o] = await Promise.all([u.getGuildRoleSubscriptionGroupListingsForGuild(e, {
      includeSoftDeleted: t,
      countryCode: n
    }), u.getGuildRoleSubscriptionsSettings(e), u.getGuildRoleSubscriptionTrials(e), (0, r.fetchSubscriptions)()]);
    i.default.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      guildId: e,
      groupListings: s,
      settings: a,
      subscriptionTrials: o
    })
  } catch (t) {
    i.default.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      guildId: e
    })
  }
}
async function g(e, t) {
  let n = await u.createGuildRoleSubscriptionGroupListing(e, t);
  return i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: n
  }), n
}
async function m(e) {
  var t;
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
    planId: e
  });
  let n = await u.getGuildRoleSubscriptionGroupForSubscriptionPlan(e);
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
    groupListing: n
  });
  let s = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
  for (let t of s) t.subscription_plans[0].id === e && await a.fetchSubscriptionPlansForSKU(t.id, void 0, void 0, !0)
}
async function h(e, t, n) {
  await u.deleteGuildRoleSubscriptionListing(e, t, n), i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
    listingId: n
  })
}
async function v(e, t, n) {
  let s = await u.archiveGuildRoleSubscriptionListing(e, t, n);
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: s
  })
}
async function E(e, t, n) {
  let s = await u.updateGuildRoleSubscriptionsTrial(e, t, n);
  i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
    subscriptionTrial: s
  })
}
async function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    s = await u.getGuildRoleSubscriptionGroupListing(e, t, n);
  return i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
    listing: s
  }), s
}
async function y(e) {
  let {
    guildId: t,
    groupListingId: n,
    data: s,
    analyticsContext: r,
    onBeforeDispatchNewListing: a
  } = e, f = await u.createGuildRoleSubscriptionListing(t, n, s);
  return d.default.track(l.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, {
    role_subscription_listing_id: f.id,
    role_subscription_group_listing_id: n,
    template_name: r.templateCategory,
    has_change_from_template: r.hasChangeFromTemplate,
    ...(0, o.collectGuildAnalyticsMetadata)(t)
  }), await p(t, n, {
    includeArchivedListings: !0
  }), null == a || a(f), i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: f
  }), f
}
async function T(e) {
  let {
    guildId: t,
    listingId: n,
    groupListingId: s,
    data: r
  } = e, a = await u.updateGuildRoleSubscriptionListing(t, s, n, r);
  return i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
    listing: a
  }), await p(t, s, {
    includeArchivedListings: !0
  }), a
}
async function C(e) {
  let {
    signal: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
  for (let r = 0; r < 3; r++) try {
    if (null == t ? void 0 : t.aborted) {
      i.default.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
        guildId: e
      });
      return
    }
    i.default.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
      guildId: e
    });
    let {
      restrictions: s
    } = await u.getGuildMonetizationRestrictions(e, {
      signal: t
    });
    i.default.dispatch({
      type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
      guildId: e,
      restrictions: null != s ? s : []
    }), n = !0;
    break
  } catch (e) {
    await (0, s.sleep)((r + 1) * 1e3)
  }!n && i.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
    guildId: e
  })
}