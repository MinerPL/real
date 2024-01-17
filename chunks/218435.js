"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("819855"),
  r = s("77078"),
  u = s("841098"),
  o = s("635956"),
  d = s("646718"),
  c = s("782340"),
  _ = s("843051"),
  E = e => {
    let {
      className: t,
      forceWhite: s,
      giftMessage: n,
      subscriptionTier: E,
      ...I
    } = e, T = (0, u.default)(), f = (0, i.isThemeDark)(T) || s, S = f ? r.ButtonColors.WHITE : r.ButtonColors.BRAND, R = E === d.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.GIFT_NITRO_TIER_0 : c.default.Messages.GIFT_NITRO;
    return (0, a.jsx)(o.default, {
      isGift: !0,
      color: S,
      look: r.ButtonLooks.OUTLINED,
      hover: r.ButtonHovers.BRAND,
      buttonText: R,
      giftMessage: n,
      className: l(t, f ? _.buttonWhite : _.buttonBrand),
      subscriptionTier: E,
      ...I
    })
  }