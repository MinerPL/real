"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  },
  openBurstReactionsUpsellModal: function() {
    return T
  }
});
var a = i("37983");
i("884691");
var l = i("77078"),
  n = i("79112"),
  o = i("154889"),
  s = i("917247"),
  r = i("789946"),
  u = i("646718"),
  d = i("49111"),
  c = i("782340"),
  p = i("61791"),
  h = i("277064");

function f(e) {
  var t, i;
  let {
    onClose: l,
    analyticsSource: f,
    ...T
  } = e, m = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
    onClick: () => {
      n.default.open(d.UserSettingsSections.PREMIUM), l()
    }
  }), E = (0, s.usePremiumTrialOffer)(), g = (0, o.usePremiumDiscountOffer)();
  return (0, a.jsx)(r.default, {
    artURL: h,
    artContainerClassName: p.artContainer,
    modalClassName: p.modalContainer,
    bodyClassName: p.bodyContainer,
    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
    title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
    body: m,
    glowUp: m,
    analyticsSource: f,
    analyticsLocation: {
      page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
      object: d.AnalyticsObjects.BUTTON_CTA
    },
    onClose: l,
    subscribeButtonText: null != E || null != g ? void 0 : c.default.Messages.PREMIUM_SETTINGS_GET,
    subscriptionTier: null !== (i = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
    backButtonText: c.default.Messages.NO_THANKS,
    ...T
  })
}

function T(e) {
  let {
    analytics: t
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await i.el("85589").then(i.bind(i, "85589"));
    return i => (0, a.jsx)(e, {
      analyticsSource: t,
      ...i
    })
  })
}