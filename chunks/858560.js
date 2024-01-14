"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionsExperiment: function() {
    return s
  },
  GuildRoleSubscriptionUsersExperiment: function() {
    return a
  },
  GuildRoleSubscriptionMaxTiersExperiment: function() {
    return o
  },
  GuildRoleSubscriptionsTierTemplatesExperiment: function() {
    return l
  },
  GuildRoleSubscriptionsTierTemplatesUserExperiment: function() {
    return u
  }
});
var i = n("862205"),
  r = n("677795");
let s = (0, i.createExperiment)({
    kind: "guild",
    id: "2021-06_guild_role_subscriptions",
    label: "Guild Role Subscriptions",
    defaultConfig: {
      enableRoleSubscriptionsForGuild: !1
    },
    treatments: [{
      id: 1,
      label: "Enables guild to create Guild Role Subscriptions",
      config: {
        enableRoleSubscriptionsForGuild: !0
      }
    }]
  }),
  a = (0, i.createExperiment)({
    kind: "user",
    id: "2021-08_guild_role_subscription_users",
    label: "Guild Role Subscription Users",
    defaultConfig: {
      enableRoleSubscriptionsForUser: !1
    },
    treatments: [{
      id: 1,
      label: "Enables users to create Guild Role Subscriptions",
      config: {
        enableRoleSubscriptionsForUser: !0
      }
    }]
  });
(0, i.createExperiment)({
  kind: "guild",
  id: "2022-01_guild_role_subscription_trials",
  label: "Guild Role Subscription Trials",
  defaultConfig: {
    enableRoleSubscriptionTrialsForGuild: !1
  },
  treatments: [{
    id: 1,
    label: "Enables guild to create Guild Role Subscription Trials",
    config: {
      enableRoleSubscriptionTrialsForGuild: !0
    }
  }]
});
let o = (0, i.createExperiment)({
  kind: "guild",
  id: "2022-07_guild_role_subscriptions_variable_max_tiers",
  label: "Guild Role Subscription Max Tiers",
  defaultConfig: {
    enabled: !1,
    maxTiers: r.MAX_SUBSCRIPTION_TIERS
  },
  treatments: [4, 5, 6].map(e => ({
    id: e,
    label: "Enables {n} maximum published tiers",
    config: {
      enabled: !0,
      maxTiers: e
    }
  }))
});
(0, i.createExperiment)({
  kind: "guild",
  id: "2022-12_mobile_guild_role_subscription_team_setup",
  label: "Mobile Guild Role Subscription Team Setup",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables guild to allow payout team setup on mobile",
    config: {
      enabled: !0
    }
  }]
});
let l = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-03_server_subscriptions_tier_templates",
    label: "Server Subscriptions Tier Templates",
    defaultConfig: {
      enabled: !1,
      showCreatorPortalLink: !1
    },
    treatments: [{
      id: 1,
      label: "299 basic tier + no link",
      config: {
        enabled: !0,
        showCreatorPortalLink: !1
      }
    }, {
      id: 2,
      label: "399 basic tier + no link",
      config: {
        enabled: !0,
        showCreatorPortalLink: !1
      }
    }, {
      id: 3,
      label: "399 basic tier + link",
      config: {
        enabled: !0,
        showCreatorPortalLink: !0
      }
    }]
  }),
  u = (0, i.createExperiment)({
    kind: "user",
    id: "2023-04_server_subscriptions_tier_templates_user",
    label: "Server Subscriptions Tier Templates",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable tier templates for user",
      config: {
        enabled: !0
      }
    }]
  })