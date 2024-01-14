"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var l = s("37983");
s("884691");
var a = s("77078"),
  n = s("145131"),
  i = s("619250");

function r(e) {
  let {
    description: t,
    icon: s,
    id: r,
    label: o,
    onChange: d,
    value: u
  } = e;
  return (0, l.jsxs)("div", {
    className: i.cardContent,
    children: [(0, l.jsxs)(n.default, {
      justify: n.default.Justify.BETWEEN,
      align: n.default.Align.CENTER,
      children: [s, (0, l.jsx)(n.default.Child, {
        grow: 1,
        children: (0, l.jsx)(a.Text, {
          variant: "text-md/semibold",
          children: o
        })
      }), null != d && null != u ? (0, l.jsx)(a.Switch, {
        id: r,
        checked: u,
        onChange: d
      }) : null]
    }), (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      className: i.cardDescription,
      children: t
    })]
  })
}