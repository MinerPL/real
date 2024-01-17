"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("812204"),
  u = s("685665"),
  o = s("324878"),
  d = s("635956"),
  c = s("400307"),
  _ = s("782340"),
  E = s("4047"),
  I = s("230724"),
  T = e => {
    let {
      className: t
    } = e, {
      AnalyticsLocationProvider: s
    } = (0, u.default)(r.default.PREMIUM_MARKETING_HERO_CTA), n = (0, o.useHasActiveTrial)();
    return (0, a.jsx)(s, {
      children: (0, a.jsxs)("div", {
        className: l(E.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: I,
          alt: "",
          className: E.headerArt
        }), (0, a.jsxs)("div", {
          className: E.content,
          children: [(0, a.jsx)(c.PremiumPillWithSparkles, {
            text: _.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: l(E.trialPill, {
              [E.hidden]: !n
            }),
            colorOptions: c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(i.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: _.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: E.buttonContainer,
            children: (0, a.jsx)(d.default, {
              color: i.ButtonColors.BRAND,
              buttonText: _.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: E.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  }