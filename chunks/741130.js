"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s, l, a = n("37983");
n("884691");
var i = n("77078"),
  r = n("145131"),
  o = n("837899"),
  u = n("417462");
(s = l || (l = {})).SMALL = "SMALL", s.MEDIUM = "MEDIUM", s.LARGE = "LARGE";
let d = {
    SMALL: u.dropdownSmall,
    MEDIUM: u.dropdownMedium,
    LARGE: u.dropdownLarge
  },
  c = e => {
    let {
      onDropdownClick: t,
      children: n,
      contentClassName: s,
      dropdownSize: l = "MEDIUM",
      ...c
    } = e;
    return (0, a.jsx)(i.Button, {
      ...c,
      children: (0, a.jsxs)(r.default, {
        align: r.default.Align.CENTER,
        children: [(0, a.jsx)(r.default.Child, {
          className: s,
          children: n
        }), null != t ? (0, a.jsxs)(i.Clickable, {
          className: d[l],
          onClick: e => {
            e.stopPropagation(), null != t && t(e)
          },
          children: [(0, a.jsx)("div", {
            className: u.arrowSeparator
          }), (0, a.jsx)(o.default, {
            className: u.dropdownArrow
          })]
        }) : null]
      })
    })
  };
c.DropdownSizes = l, c.Sizes = i.Button.Sizes, c.Colors = i.Button.Colors, c.Looks = i.Button.Looks;
var f = c