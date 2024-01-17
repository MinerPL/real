"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return p
  }
});
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  l = n("78345"),
  i = n("203142"),
  u = n("392459"),
  c = n("26245"),
  o = n("21340"),
  d = n("159548"),
  f = n("897184"),
  m = n("990439"),
  _ = n("999641"),
  E = n("74771");
let I = {
    [l.PremiumGiftStyles.STANDARD_BOX]: f,
    [l.PremiumGiftStyles.CAKE]: m,
    [l.PremiumGiftStyles.CHEST]: _,
    [l.PremiumGiftStyles.COFFEE]: E,
    [l.PremiumGiftStyles.SNOWGLOBE]: "",
    [l.PremiumGiftStyles.BOX]: "",
    [l.PremiumGiftStyles.CUP]: "",
    [l.PremiumGiftStyles.SEASONAL_CAKE]: c,
    [l.PremiumGiftStyles.SEASONAL_CHEST]: o,
    [l.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [l.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  p = r.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: r,
      setSelectedGiftStyle: l,
      onFocus: u,
      onBlur: c
    } = e;
    return (0, s.jsx)(a.Clickable, {
      innerRef: t,
      onClick: () => l(r),
      onFocus: u,
      onBlur: c,
      children: (0, s.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: I[r],
        className: n ? i.customGiftBoxHighlighted : i.customGiftBox
      })
    })
  })