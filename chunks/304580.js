"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var i, l, s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  o = n("394846"),
  c = n("77078"),
  u = n("945330"),
  d = n("381546"),
  f = n("782340"),
  h = n("955892");
(i = l || (l = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
let p = e => {
  let {
    closeAction: t,
    variant: n,
    keybind: i,
    className: l
  } = e;
  return (0, s.jsxs)("div", {
    className: a(h.container, l),
    children: [(0, s.jsx)(c.Clickable, {
      className: a(h.closeButton, {
        [h.closeButtonBold]: "Bold" === n,
        [h.closeButtonSolid]: "Solid" === n
      }),
      onClick: t,
      "aria-label": f.default.Messages.CLOSE,
      children: "Solid" === n ? (0, s.jsx)(d.default, {
        width: 24,
        height: 24,
        "aria-hidden": !0
      }) : (0, s.jsx)(u.default, {
        width: 18,
        height: 18,
        "aria-hidden": !0
      })
    }), o.isMobile ? null : (0, s.jsx)("div", {
      className: a(h.keybind),
      "aria-hidden": !0,
      children: i
    })]
  })
};
p.defaultProps = {
  variant: ""
}, p.Variants = l;
var v = p