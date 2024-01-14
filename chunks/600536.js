"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("650509"),
  r = n("186211"),
  o = n("90592"),
  u = n("910861"),
  d = n("153335"),
  c = n("49111"),
  f = n("782340");

function m(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, m = (0, i.useApplication)(t), {
    listingsLoaded: E
  } = (0, i.useFetchListingsForApplication)(t, null == m ? void 0 : m.primarySkuId), _ = (0, s.useStateFromStores)([r.default], () => r.default.getSubscriptionGroupListingForApplication(t), [t]), h = null != _ ? (0, o.getPayableSubscriptionListing)(_) : null, {
    openModal: p,
    canOpenModal: I
  } = (0, d.default)({
    listing: h,
    guildId: n,
    groupListingId: null == _ ? void 0 : _.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE
  });
  return (0, a.jsx)(u.default, {
    size: l.Button.Sizes.MEDIUM,
    onClick: () => p(),
    disabled: !I || !E,
    children: f.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  })
}