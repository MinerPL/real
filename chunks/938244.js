"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("145131"),
  i = n("661569");

function r(e) {
  let {
    icon: t,
    onClick: n,
    label: r
  } = e;
  return (0, s.jsx)(a.Button, {
    look: a.Button.Looks.BLANK,
    size: a.Button.Sizes.MIN,
    className: i.button,
    onClick: n,
    children: (0, s.jsxs)(l.default, {
      align: l.default.Align.CENTER,
      children: [(0, s.jsx)("div", {
        className: i.buttonIcon,
        children: t
      }), (0, s.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "none",
        children: r
      })]
    })
  })
}