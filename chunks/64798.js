"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return p
  }
});
var s = n("37983"),
  r = n("884691"),
  l = n("77078"),
  i = n("78345"),
  a = n("203142"),
  u = n("392459"),
  o = n("26245"),
  c = n("21340"),
  d = n("159548"),
  f = n("897184"),
  m = n("990439"),
  _ = n("999641"),
  E = n("74771");
let I = {
    [i.PremiumGiftStyles.STANDARD_BOX]: f,
    [i.PremiumGiftStyles.CAKE]: m,
    [i.PremiumGiftStyles.CHEST]: _,
    [i.PremiumGiftStyles.COFFEE]: E,
    [i.PremiumGiftStyles.SNOWGLOBE]: "",
    [i.PremiumGiftStyles.BOX]: "",
    [i.PremiumGiftStyles.CUP]: "",
    [i.PremiumGiftStyles.SEASONAL_CAKE]: o,
    [i.PremiumGiftStyles.SEASONAL_CHEST]: c,
    [i.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [i.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  p = r.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: r,
      setSelectedGiftStyle: i,
      onFocus: u,
      onBlur: o
    } = e;
    return (0, s.jsx)(l.Clickable, {
      innerRef: t,
      onClick: () => i(r),
      onFocus: u,
      onBlur: o,
      children: (0, s.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: I[r],
        className: n ? a.customGiftBoxHighlighted : a.customGiftBox
      })
    })
  })