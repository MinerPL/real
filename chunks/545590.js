"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("90592"),
  i = l("910861"),
  r = l("153335"),
  o = l("191814"),
  u = l("8161"),
  d = l("613676"),
  c = l("713135"),
  f = l("999203"),
  m = l("609734"),
  p = l("777003"),
  E = l("49111"),
  T = l("782340"),
  _ = l("431375");

function S(e) {
  let {
    user: t,
    guildId: l
  } = e, S = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), h = null != S && (0, d.canInstallApplication)(S.id, S.customInstallUrl, S.installParams), {
    botUpgradeable: I,
    subscriptionGroupListing: A
  } = (0, f.default)({
    user: t,
    guildId: l
  }), g = null != A ? (0, s.getPayableSubscriptionListing)(A) : null, {
    openModal: v
  } = (0, r.default)({
    listing: g,
    guildId: l,
    groupListingId: null == A ? void 0 : A.id,
    showBenefitsFirst: !0,
    analyticsLocation: E.AnalyticsLocations.BOT_PROFILE_POPOUT
  });
  return h || I ? (0, n.jsx)(p.default, {
    children: (0, n.jsxs)("div", {
      className: _.buttonsContainer,
      children: [(0, n.jsx)(m.default, {
        application: S,
        className: _.button
      }), I && (0, n.jsx)(i.default, {
        onClick: v,
        className: _.button,
        children: (0, n.jsxs)("div", {
          className: _.botUpgradeButtonContent,
          children: [(0, n.jsx)(u.default, {
            width: 16,
            height: 16
          }), (0, n.jsx)(o.default, {
            size: 4,
            horizontal: !0
          }), T.default.Messages.BOT_PROFILE_UPGRADE_CTA]
        })
      })]
    })
  }) : null
}