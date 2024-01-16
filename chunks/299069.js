"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("819855"),
  a = n("77078"),
  u = n("997289"),
  d = n("841098"),
  c = n("812204"),
  f = n("685665"),
  p = n("626301"),
  m = n("635956"),
  h = n("599110"),
  E = n("719923"),
  S = n("23106"),
  g = n("553372"),
  C = n("49111"),
  T = n("646718"),
  v = n("782340"),
  y = n("665946"),
  x = n("350028");

function I(e) {
  var t;
  let {
    onClose: r,
    closePopout: I,
    sound: N,
    channel: _
  } = e, A = (0, d.default)(), [R, O] = i.useState(!1), {
    location: M
  } = (0, u.useAnalyticsContext)(), k = i.useMemo(() => ({
    ...M,
    section: C.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
  }), [M]), {
    analyticsLocations: b
  } = (0, f.default)(c.default.PREMIUM_UPSELL), {
    previewSound: P
  } = (0, S.default)(N, null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : null), L = (0, g.PreviewButton)({
    sound: N,
    previewSound: P,
    tooltipPosition: "left"
  }), U = (0, s.isThemeLight)(A) ? n("602291") : n("609708");
  i.useEffect(() => {
    h.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: T.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
      is_external: !0,
      location: {
        ...k,
        object: C.AnalyticsObjects.SOUNDBOARD_SOUND
      },
      location_stack: b,
      sku_id: E.default.getSkuIdForPremiumType(T.PremiumTypes.TIER_2)
    })
  }, [b, k]);
  let j = i.useCallback(() => {
    h.default.track(C.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_section: C.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
    }), (0, p.navigateToPremiumMarketingPage)(), I()
  }, [I]);
  return (0, l.jsxs)("div", {
    className: o(x.premiumPromo, y.container),
    children: [(0, l.jsx)(a.Clickable, {
      className: x.premiumPromoClose,
      onClick: r,
      children: v.default.Messages.CLOSE
    }), (0, l.jsx)("img", {
      "aria-hidden": !0,
      alt: "",
      className: o(x.premiumPromoImage, x.premiumPromoImageSmaller, y.image),
      src: U
    }), (0, l.jsx)(a.Heading, {
      variant: "heading-lg/normal",
      color: "header-primary",
      className: x.premiumPromoTitle,
      children: v.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
    }), (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: x.premiumPromoDescription,
      children: v.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
        onClick: j
      })
    }), (0, l.jsxs)("div", {
      className: y.buttonContainer,
      children: [(0, l.jsx)("div", {
        className: y.previewButtonContainer,
        children: L
      }), (0, l.jsx)(m.default, {
        subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
        submitting: R,
        premiumModalAnalyticsLocation: {
          section: C.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
          object: C.AnalyticsObjects.BUTTON_CTA
        },
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.GREEN,
        onClick: () => {
          O(!0)
        },
        onSubscribeModalClose: e => {
          O(!1), e && r()
        }
      })]
    })]
  })
}