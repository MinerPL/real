"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var a = n("850068"),
  s = n("524503"),
  l = n("393414"),
  o = n("162771"),
  u = n("642906"),
  r = n("385179"),
  c = n("49111");

function d(e) {
  let {
    onClose: t,
    initialPlanId: n,
    analyticsObject: d,
    analyticsLocation: p,
    analyticsLocations: h,
    analyticsSubscriptionType: m,
    renderHeader: f,
    planGroup: y,
    reviewWarningMessage: S,
    applicationId: v,
    guildId: x,
    onComplete: C,
    forcesTransitionToGuild: F,
    skuId: g,
    ...E
  } = e, {
    subscriptionMetadataRequest: w
  } = (0, u.usePaymentContext)();
  return (0, i.jsx)(r.PaymentModal, {
    ...E,
    initialPlanId: n,
    skuId: g,
    onClose: e => {
      t();
      let n = null == w ? void 0 : w.guild_id;
      e && null != n && (a.fetchSubscriptions(), (0, s.fetchEntitlementsForGuild)(n), null == C || C(), null != n && (F || o.default.getGuildId() !== n) && (0, l.transitionTo)(c.Routes.CHANNEL(n)))
    },
    analyticsLocations: h,
    analyticsObject: d,
    analyticsLocation: p,
    analyticsSubscriptionType: m,
    renderHeader: f,
    planGroup: y,
    reviewWarningMessage: S,
    applicationId: v,
    guildId: x,
    forceNewPaymentModal: !0
  })
}