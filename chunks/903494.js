"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var r = n("422244"),
  a = n("77078"),
  l = n("812204"),
  i = n("685665"),
  u = n("393414"),
  c = n("21526"),
  o = n("49111"),
  d = n("782340"),
  f = n("898689"),
  m = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, i.default)(), m = () => {
      t(), (0, u.transitionTo)(o.Routes.COLLECTIBLES_SHOP), (0, c.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: l.default.PREMIUM_PAYMENT_MODAL,
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
          color: a.tokens.colors.WHITE
        })
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: d.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(a.Clickable, {
            className: f.link,
            onClick: m,
            children: e
          })
        })
      })]
    })
  }