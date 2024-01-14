"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("884691"),
  n = s("866227"),
  l = s.n(n),
  i = s("446674"),
  r = s("305961"),
  o = s("153160"),
  d = s("837008"),
  u = s("648825"),
  c = s("136185"),
  S = s("49111"),
  E = s("782340");

function f(e) {
  let t = (0, c.getRoleSubscriptionPlanId)(e),
    s = (0, i.useStateFromStores)([u.default], () => u.default.getSubscriptionListingForPlan(t)),
    n = (0, i.useStateFromStores)([u.default], () => null != s ? u.default.getSubscriptionGroupListingForSubscriptionListing(s.id) : null),
    f = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(null == n ? void 0 : n.guild_id)),
    [T, m] = a.useState(!1),
    {
      fetchSubscriptionsSettings: _
    } = (0, d.useFetchSubscriptionsSettings)();
  a.useEffect(() => {
    T && null != f && null == u.default.getSubscriptionSettings(f.id) && _(f.id)
  }, [T, f, _]);
  let g = null == s ? void 0 : function(e) {
    let {
      subscription: t
    } = e, s = l(t.currentPeriodEnd).format("M/D/YY"), a = null != t.price ? (0, o.formatPrice)(t.price, t.currency) : "", n = l(t.createdAt).format("M/D/YY"), i = t.status === S.SubscriptionStatusTypes.CANCELED, r = t.status === S.SubscriptionStatusTypes.PAST_DUE, d = null != t.trialId;
    return {
      memberSince: n,
      nextRenewalDate: s,
      nextRenewalLabel: i ? E.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBERSHIP_ENDS : E.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_NEXT_RENEWAL,
      subscriptionPrice: a,
      isCancelled: i,
      isPastDue: r,
      isTrial: d
    }
  }({
    subscription: e
  });
  return {
    guild: f,
    expanded: T,
    handleToggleExpanded: () => m(e => !e),
    listing: s,
    groupListing: n,
    subscriptionInfo: g
  }
}