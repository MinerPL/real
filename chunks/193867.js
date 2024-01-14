"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("37983"),
  i = n("884691"),
  l = n("446674"),
  r = n("77078"),
  o = n("812204"),
  a = n("685665"),
  u = n("67069"),
  c = n("635956"),
  d = n("697218"),
  f = n("258078"),
  h = n("599110"),
  p = n("719923"),
  v = n("49111"),
  I = n("75015"),
  E = n("646718"),
  C = n("782340"),
  _ = n("123342");

function R(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, R = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), g = p.default.canUseAnimatedAvatar(R), M = p.default.canUsePremiumProfileCustomization(R), m = n === I.UploadTypes.BANNER && M || n === I.UploadTypes.AVATAR && g, {
    sourceAnalyticsLocations: x
  } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (i.useEffect(() => {
      !m && h.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: x
      })
    }, [m, t, x]), m) return null;
  let L = (0, s.jsx)(c.default, {
    className: _.getNitroLink,
    size: r.Button.Sizes.SMALL,
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    buttonText: C.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: v.AnalyticsObjects.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, s.jsx)(u.default, {
    reducedRightPadding: !0,
    className: _.nitroPreviewUpsell,
    text: C.default.Messages.PREMIUM_PREVIEW.format(),
    textSize: f.default.Sizes.SIZE_14,
    textColor: f.default.Colors.HEADER_PRIMARY,
    button: L
  })
}