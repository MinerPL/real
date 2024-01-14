"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("37983"),
  i = n("884691"),
  a = n("77078"),
  l = n("850068"),
  r = n("598981"),
  u = n("650509"),
  o = n("90592"),
  c = n("94973"),
  d = n("782340"),
  f = n("358261");

function p(e) {
  let {
    listing: t
  } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), i = (0, o.isApplicationUserSubscription)(t.sku_flags);
  return i || n ? (0, s.jsxs)("div", {
    className: f.cta,
    children: [(0, s.jsx)(a.Heading, {
      variant: "heading-lg/bold",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, s.jsx)(a.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function h(e) {
  var t;
  let {
    guildId: n,
    applicationId: o,
    applicationPrimarySkuId: d,
    analyticsLocation: h,
    onComplete: I,
    forcesTransitionToGuild: E
  } = e, {
    listingsLoaded: C
  } = (0, u.useFetchListingsForApplication)(o, d), {
    entitlementsLoaded: _
  } = (0, u.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: v
  } = (0, u.useActiveSubscriptionListingForApplication)(o, n), T = (0, r.default)();
  i.useEffect(() => {
    T && l.fetchSubscriptions()
  }, [T]);
  let A = null == v ? void 0 : v.id,
    S = null == v ? void 0 : null === (t = v.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return C && (null == n || _) ? null == A || null == S || 0 === S.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: S.map(e => (0, s.jsxs)("div", {
      children: [(0, s.jsx)(p, {
        listing: e
      }, e.id), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: A,
        analyticsLocation: h,
        onComplete: I,
        forcesTransitionToGuild: E
      }, e.id)]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(a.Spinner, {})
  })
}