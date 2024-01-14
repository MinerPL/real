"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("77078"),
  o = n("812204"),
  s = n("685665"),
  a = n("649844"),
  u = n("551305"),
  d = n("978679"),
  c = n("158998"),
  f = n("49111"),
  p = n("646718"),
  m = n("782340"),
  h = n("537461"),
  E = i.memo(function(e) {
    let {
      disabled: t,
      channel: n
    } = e, {
      analyticsLocations: i
    } = (0, s.default)(o.default.GIFT_BUTTON), E = (0, c.useDirectMessageRecipient)(n);
    if (t) return null;
    let S = () => (0, a.default)({
      isGift: !0,
      giftRecipient: null === E ? void 0 : E,
      initialPlanId: null,
      subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
      analyticsLocations: i,
      analyticsObject: {
        page: n.isPrivate() ? f.AnalyticsPages.DM_CHANNEL : f.AnalyticsPages.GUILD_CHANNEL,
        section: f.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: f.AnalyticsObjects.BUTTON_ICON,
        objectType: f.AnalyticsObjectTypes.GIFT
      }
    });
    return (0, l.jsx)(r.Tooltip, {
      text: m.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
      children: e => (0, l.jsx)(u.default, {
        ...e,
        innerClassName: h.button,
        isActive: !1,
        "aria-label": m.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
        "aria-haspopup": "dialog",
        onClick: S,
        children: (0, l.jsx)(d.default, {})
      })
    })
  })