"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  r = s.n(n),
  l = s("819855"),
  i = s("77078"),
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
    } = e, T = (0, u.default)(), f = (0, l.isThemeDark)(T) || s, S = f ? i.ButtonColors.WHITE : i.ButtonColors.BRAND, R = E === d.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.GIFT_NITRO_TIER_0 : c.default.Messages.GIFT_NITRO;
    return (0, a.jsx)(o.default, {
      isGift: !0,
      color: S,
      look: i.ButtonLooks.OUTLINED,
      hover: i.ButtonHovers.BRAND,
      buttonText: R,
      giftMessage: n,
      className: r(t, f ? _.buttonWhite : _.buttonBrand),
      subscriptionTier: E,
      ...I
    })
  }