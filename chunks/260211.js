"use strict";
i.r(t), i.d(t, {
  default: function() {
    return h
  }
});
var n = i("37983");
i("884691");
var l = i("414456"),
  s = i.n(l),
  a = i("446674"),
  r = i("77078"),
  o = i("206230"),
  u = i("154889"),
  c = i("917247"),
  d = i("956597"),
  f = i("635956"),
  E = i("945330"),
  m = i("216422"),
  I = i("58608"),
  p = i("49111"),
  g = i("646718"),
  _ = i("782340"),
  S = i("9014");

function h(e) {
  var t, i;
  let {
    onDismiss: l
  } = e, h = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion), C = _.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, T = (0, c.usePremiumTrialOffer)(), N = (0, u.usePremiumDiscountOffer)(), A = (null == T ? void 0 : T.subscription_trial) != null, y = A || null != N, v = {
    object: p.AnalyticsObjects.BUTTON_CTA,
    section: p.AnalyticsSections.SUPER_REACTION_PICKER
  };
  return (0, n.jsxs)("div", {
    className: S.wrapper,
    children: [(0, n.jsx)(r.Clickable, {
      onClick: l,
      className: S.closeButton,
      "aria-label": _.default.Messages.DISMISS,
      children: (0, n.jsx)(E.default, {
        width: 24,
        height: 24
      })
    }), (0, n.jsxs)("div", {
      className: S.content,
      children: [(0, n.jsx)("div", {
        className: S.contentFill,
        children: (0, n.jsx)(I.default, {
          className: s(S.banner, {
            [S.hasTrialOffer]: y
          }),
          src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
          loop: !0,
          autoPlay: !h,
          muted: !0,
          controls: !0
        })
      }), y ? (0, n.jsx)(d.default, {
        type: g.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null !== (i = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : g.PremiumSubscriptionSKUs.TIER_2,
        headingText: _.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
        analyticsLocationObject: v,
        discountOffer: N,
        trialOffer: T,
        children: C
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: S.header,
          children: [(0, n.jsx)(m.default, {
            className: S.nitroWheel,
            width: 32,
            height: 32
          }), (0, n.jsx)(r.Heading, {
            className: S.headerText,
            variant: "heading-xl/bold",
            children: _.default.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
          })]
        }), (0, n.jsx)(r.Text, {
          className: S.subheaderText,
          variant: "text-md/normal",
          children: C
        }), (0, n.jsx)("div", {
          className: S.ctaActionWrapper,
          children: (0, n.jsx)(f.default, {
            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
            buttonText: _.default.Messages.UNLOCK_WITH_NITRO
          })
        })]
      })]
    })]
  })
}