"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var r = n("907002"),
  s = n("65597"),
  l = n("77078"),
  a = n("206230"),
  u = n("812204"),
  o = n("685665"),
  d = n("21526"),
  c = n("393414"),
  f = n("49111"),
  m = n("782340"),
  p = n("526380"),
  S = n("34125"),
  E = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, o.default)(), E = (0, s.default)([a.default], () => a.default.useReducedMotion), P = (0, r.useSpring)({
      immediate: E,
      delay: 800,
      from: {
        transform: "translate(0, -100%)"
      },
      to: {
        transform: "translate(0, 0)"
      }
    }), _ = () => {
      t(), (0, c.transitionTo)(f.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      })
    };
    return (0, i.jsxs)(r.animated.div, {
      style: P,
      className: p.container,
      children: [(0, i.jsx)("img", {
        className: p.image,
        src: S,
        alt: ""
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: m.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, i.jsx)(l.Clickable, {
            className: p.link,
            onClick: _,
            children: e
          }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
        })
      })]
    })
  }