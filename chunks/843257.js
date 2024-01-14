"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return a
  },
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return d
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return h
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return _
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return C
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return p
  }
}), n("249654");
var r = n("716241"),
  i = n("250666"),
  u = n("305961"),
  l = n("697218");
n("531034");
var o = n("49111"),
  s = n("782340");

function a(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: u
  } = e, {
    content: l,
    formatParams: o
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: u
  });
  return l.format(o)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: u
  } = e, {
    content: l,
    formatParams: o
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: u
  });
  return l.astFormat(o)
}

function c(e, t) {
  var n, r;
  let i = u.default.getGuild(e),
    l = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0,
    o = null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r;
  return {
    guild: i,
    totalMonthsSubscribed: l,
    showWithDuration: l > 0,
    isRenewal: o
  }
}

function f(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r,
      roleSubscriptionOnClickHandler: i,
      guildId: u,
      roleSubscriptionData: l
    } = e,
    {
      guild: o,
      totalMonthsSubscribed: a,
      showWithDuration: d,
      isRenewal: f
    } = c(u, l);
  t = d ? f ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN;
  let h = {
    username: n,
    usernameHook: r,
    guildName: null == o ? void 0 : o.name,
    handleGuildNameClick: i,
    tierName: null == l ? void 0 : l.tier_name,
    months: a
  };
  return {
    content: t,
    formatParams: h
  }
}

function h(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = o.NOOP,
      roleSubscriptionOnClickHandler: i = o.NOOP,
      guildId: u,
      roleSubscriptionData: l
    } = e,
    {
      guild: a,
      totalMonthsSubscribed: d,
      showWithDuration: f,
      isRenewal: h
    } = c(u, l),
    _ = {
      guildName: null == a ? void 0 : a.name,
      tierName: null == l ? void 0 : l.tier_name,
      username: n,
      usernameOnClick: r,
      roleSubscriptionOnClick: i
    };
  return t = f ? h ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ..._,
    months: d
  }) : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ..._,
    months: d
  }) : h ? s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(_) : s.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(_)
}

function _(e) {
  return (0, i.isCreatorMonetizationEnabledGuild)(e)
}

function C(e, t, n, i) {
  var u;
  r.default.trackWithMetadata(o.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (u = l.default.getCurrentUser()) || void 0 === u ? void 0 : u.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function p(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}