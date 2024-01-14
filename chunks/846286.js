"use strict";
n.r(t), n.d(t, {
  openApplicationSubscriptionPaymentModal: function() {
    return m
  },
  openActivityApplicationPaymentModal: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("627445"),
  l = n.n(r),
  a = n("77078"),
  s = n("316718"),
  u = n("55620"),
  o = n("524503"),
  d = n("186211"),
  c = n("90592"),
  f = n("651057"),
  p = n("299285"),
  h = n("635357"),
  S = n("49111");

function m(e) {
  let {
    initialPlanId: t,
    activeSubscription: r,
    analyticsObject: l,
    analyticsLocation: s,
    analyticsLocations: u,
    analyticsSubscriptionType: o,
    renderHeader: d,
    planGroup: c,
    skuId: f,
    guildId: p,
    reviewWarningMessage: m,
    listing: _,
    application: I,
    showBenefitsFirst: E,
    eligibleApplicationSubscriptionGuilds: C,
    onComplete: T,
    forcesTransitionToGuild: g
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await n.el("642906").then(n.bind(n, "642906")), a = (await n.el("452113").then(n.bind(n, "452113"))).default, {
      getApplicationSubscriptionPaymentSteps: S
    } = await n.el("590749").then(n.bind(n, "590749")), A = S({
      guildId: p,
      application: I,
      listing: _,
      showBenefitsFirst: E,
      eligibleApplicationSubscriptionGuilds: C
    });
    return n => (0, i.jsx)(e, {
      applicationId: I.id,
      activeSubscription: r,
      stepConfigs: A,
      skuIDs: [f],
      children: (0, i.jsx)(h.GiftContextProvider, {
        children: (0, i.jsx)(a, {
          ...n,
          initialPlanId: t,
          skuId: f,
          analyticsLocations: u,
          analyticsObject: l,
          analyticsLocation: s,
          analyticsSubscriptionType: o,
          renderHeader: d,
          planGroup: c,
          reviewWarningMessage: m,
          applicationId: I.id,
          guildId: null != p ? p : void 0,
          onComplete: T,
          forcesTransitionToGuild: g
        })
      })
    })
  }, {
    onCloseRequest: S.NOOP
  })
}
let _ = async e => {
  let t = p.default.getApplication(e);
  if (null != t) return t;
  await f.default.fetchApplications([e], !1);
  let n = p.default.getApplication(e);
  return l(null != n, "Failed to find application with ID %s", e), n
}, I = async e => {
  let t = d.default.getSubscriptionGroupListingForApplication(e);
  if (null != t) return t;
  let n = await (0, u.fetchAllStoreListingsForApplication)(e),
    i = n.find(e => e.sku.type === S.SKUTypes.SUBSCRIPTION_GROUP);
  l(null != i, "Failed to find subscription store listing"), await (0, o.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
  let r = d.default.getSubscriptionGroupListingForApplication(e);
  return l(null != r, "Failed to find subscription group listing"), r
}, E = async (e, t) => {
  let n = await (0, s.fetchUserEntitlementsForApplication)(e),
    i = n.find(e => e.sku_id === t);
  l(null == i, "User already has an active subscription to this SKU")
};
async function C(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: r,
    analyticsLocations: a,
    renderHeader: s
  } = e, u = await _(t), o = await I(t), d = (0, c.getPayableSubscriptionListing)(o);
  l(null != d, "Failed to find subscription listing");
  let f = (0, c.isApplicationUserSubscription)(d.sku_flags);
  l(f, "Guild application subscriptions unsupported!"), l(d.published, "Subscription listing not published"), await E(t, n);
  let p = {
    initialPlanId: null != i ? i : null == d ? void 0 : d.subscription_plans[0].id,
    activeSubscription: null,
    analyticsLocations: a,
    analyticsLocationObject: r,
    analyticsSubscriptionType: S.SubscriptionTypes.APPLICATION,
    renderHeader: s,
    planGroup: o.subscription_listings_ids,
    skuId: n,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    application: u,
    listing: d
  };
  m(p)
}