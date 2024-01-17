"use strict";
n.r(e), n.d(e, {
  default: function() {
    return E
  }
});
var r = n("37983");
n("884691");
var u = n("626301"),
  a = n("552917"),
  i = n("843647"),
  o = n("789946"),
  l = n("646718"),
  s = n("49111"),
  c = n("782340"),
  d = n("718116"),
  f = n("431036");

function E(t) {
  let {
    onClose: e,
    analyticsSource: n,
    onLearnMore: E,
    ..._
  } = t;

  function S() {
    null == E || E(), e(), (0, u.navigateToPremiumMarketingPage)()
  }
  let {
    isLoading: T,
    suggestedPremiumType: p
  } = (0, i.default)({
    autoTrackExposure: !0,
    experiment: a.default,
    location: "video_backgrounds_upsell"
  }), I = p === l.PremiumTypes.TIER_0 ? l.PremiumSubscriptionSKUs.TIER_0 : l.PremiumSubscriptionSKUs.TIER_2, A = I === l.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
    onLearnMore: S
  }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: S
  });
  return (0, r.jsx)(o.default, {
    artURL: f,
    artContainerClassName: d.videoBackgroundArt,
    type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: A,
    glowUp: A,
    analyticsSource: n,
    analyticsLocation: {
      page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: s.AnalyticsObjects.BUTTON_CTA
    },
    onClose: e,
    subscriptionTier: I,
    isLoading: T,
    ..._
  })
}