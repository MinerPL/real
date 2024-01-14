"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var r = n("422244"),
  l = n("77078"),
  i = n("812204"),
  a = n("685665"),
  u = n("393414"),
  o = n("21526"),
  c = n("49111"),
  d = n("782340"),
  f = n("898689"),
  m = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, a.default)(), m = () => {
      t(), (0, u.transitionTo)(c.Routes.COLLECTIBLES_SHOP), (0, o.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: i.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      })
    };
    return (0, s.jsxs)("div", {
      className: f.container,
      children: [(0, s.jsx)("div", {
        className: f.iconBackground,
        children: (0, s.jsx)(r.ShopIcon, {
          width: 20,
          height: 20,
          color: l.tokens.colors.WHITE
        })
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: d.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(l.Clickable, {
            className: f.link,
            onClick: m,
            children: e
          })
        })
      })]
    })
  }