"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var a = n("907002"),
  l = n("65597"),
  r = n("77078"),
  i = n("206230"),
  u = n("812204"),
  o = n("685665"),
  d = n("21526"),
  c = n("393414"),
  _ = n("49111"),
  f = n("782340"),
  E = n("526380"),
  I = n("34125"),
  m = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, o.default)(), m = (0, l.default)([i.default], () => i.default.useReducedMotion), S = (0, a.useSpring)({
      immediate: m,
      delay: 800,
      from: {
        transform: "translate(0, -100%)"
      },
      to: {
        transform: "translate(0, 0)"
      }
    }), p = () => {
      t(), (0, c.transitionTo)(_.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      })
    };
    return (0, s.jsxs)(a.animated.div, {
      style: S,
      className: E.container,
      children: [(0, s.jsx)("img", {
        className: E.image,
        src: I,
        alt: ""
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: f.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(r.Clickable, {
            className: E.link,
            onClick: p,
            children: e
          }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
        })
      })]
    })
  }