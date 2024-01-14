"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  r = s("77078"),
  l = s("915639"),
  i = s("521012"),
  u = s("909469"),
  o = s("485138"),
  d = s("585624"),
  c = s("49111"),
  _ = s("110694"),
  E = function(e) {
    let {
      localizedPricingPromo: t
    } = e, s = t.countryCode, E = (0, n.useStateFromStores)([l.default], () => l.default.locale);
    (0, o.useTrackLocalizedPricingPromoImpression)(c.AnalyticsSections.SETTINGS_PREMIUM_BANNER, s);
    let I = (0, n.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()),
      {
        localizedPricingBannerBody: T
      } = (0, u.getLocalizedPricingBannerStrings)({
        localizedPricingPromo: t,
        subscription: I,
        forceSingleLine: !0,
        userLocale: E
      });
    return (0, a.jsxs)("div", {
      className: _.bannerContainer,
      children: [(0, a.jsx)(d.default, {
        className: _.badge,
        countryCode: s
      }), (0, a.jsx)("div", {
        className: _.bannerBodyContainer,
        children: (0, a.jsx)(r.Text, {
          color: "none",
          variant: "text-md/normal",
          className: _.bannerBody,
          children: T
        })
      })]
    })
  }