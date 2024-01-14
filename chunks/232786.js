"use strict";
i.r(t), i.d(t, {
  default: function() {
    return N
  }
});
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("235855"),
  o = i("77078"),
  u = i("997289"),
  c = i("685665"),
  d = i("649844"),
  f = i("552917"),
  E = i("843647"),
  m = i("791106"),
  I = i("945330"),
  p = i("216422"),
  g = i("599110"),
  _ = i("719923"),
  S = i("49111"),
  h = i("646718"),
  C = i("782340"),
  T = i("624698"),
  N = function(e) {
    let {
      bodyCopy: t = C.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
      className: i,
      onDismiss: s,
      onCtaClick: N
    } = e, {
      location: A
    } = (0, u.useAnalyticsContext)(), {
      analyticsLocations: y
    } = (0, c.default)(), {
      isLoading: v,
      suggestedPremiumType: j
    } = (0, E.default)({
      autoTrackExposure: !0,
      experiment: f.default,
      location: h.PremiumUpsellTypes.EMOJI_PICKER_SEARCH
    }), R = l.useRef(!1), O = l.useCallback(() => {
      (0, d.default)({
        subscriptionTier: _.default.getSkuIdForPremiumType(j),
        analyticsLocations: y,
        analyticsObject: {
          ...A,
          object: S.AnalyticsObjects.BUTTON_CTA,
          objectType: S.AnalyticsObjectTypes.TIER_2
        }
      }), null == N || N()
    }, [y, A, N, j]), M = j === h.PremiumTypes.TIER_0;
    return (0, n.jsx)("div", {
      className: a(T.wrapper, i),
      children: v ? (0, n.jsx)(o.Spinner, {
        type: o.SpinnerTypes.PULSING_ELLIPSIS
      }) : (0, n.jsx)(r.default, {
        onChange: e => {
          e && !R.current && (g.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
            type: h.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
            location: A,
            location_stack: y,
            sku_id: _.default.getSkuIdForPremiumType(j)
          }), R.current = !0)
        },
        children: (0, n.jsxs)("div", {
          className: T.upsell,
          children: [(0, n.jsx)(p.default, {
            color: M ? m.GradientCssUrls.PREMIUM_TIER_0 : m.GradientCssUrls.PREMIUM_TIER_2,
            className: T.premiumIcon
          }), (0, n.jsx)(o.Text, {
            color: "interactive-normal",
            className: T.body,
            variant: "text-sm/normal",
            children: M ? C.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
              planName: (0, _.getTierDisplayName)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
            }) : t
          }), (0, n.jsx)(o.Button, {
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.LINK,
            onClick: O,
            children: M ? C.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : C.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
          }), null != s && (0, n.jsx)(o.Button, {
            onClick: s,
            className: T.dismissButton,
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            children: (0, n.jsx)(I.default, {
              className: T.dismissIcon
            })
          })]
        })
      })
    })
  }