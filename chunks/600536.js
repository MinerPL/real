"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("77078"),
  i = n("650509"),
  r = n("186211"),
  o = n("90592"),
  u = n("910861"),
  d = n("153335"),
  c = n("49111"),
  f = n("782340");

function E(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, E = (0, i.useApplication)(t), {
    listingsLoaded: _
  } = (0, i.useFetchListingsForApplication)(t, null == E ? void 0 : E.primarySkuId), T = (0, l.useStateFromStores)([r.default], () => r.default.getSubscriptionGroupListingForApplication(t), [t]), I = null != T ? (0, o.getPayableSubscriptionListing)(T) : null, {
    openModal: m,
    canOpenModal: N
  } = (0, d.default)({
    listing: I,
    guildId: n,
    groupListingId: null == T ? void 0 : T.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE
  });
  return (0, s.jsx)(u.default, {
    size: a.Button.Sizes.MEDIUM,
    onClick: () => m(),
    disabled: !N || !_,
    children: f.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  })
}