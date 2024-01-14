"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a, n, r = s("37983");
s("884691");
var l = s("77078"),
  i = s("145131"),
  u = s("837899"),
  o = s("417462");
(a = n || (n = {})).SMALL = "SMALL", a.MEDIUM = "MEDIUM", a.LARGE = "LARGE";
let d = {
    SMALL: o.dropdownSmall,
    MEDIUM: o.dropdownMedium,
    LARGE: o.dropdownLarge
  },
  c = e => {
    let {
      onDropdownClick: t,
      children: s,
      contentClassName: a,
      dropdownSize: n = "MEDIUM",
      ...c
    } = e;
    return (0, r.jsx)(l.Button, {
      ...c,
      children: (0, r.jsxs)(i.default, {
        align: i.default.Align.CENTER,
        children: [(0, r.jsx)(i.default.Child, {
          className: a,
          children: s
        }), null != t ? (0, r.jsxs)(l.Clickable, {
          className: d[n],
          onClick: e => {
            e.stopPropagation(), null != t && t(e)
          },
          children: [(0, r.jsx)("div", {
            className: o.arrowSeparator
          }), (0, r.jsx)(u.default, {
            className: o.dropdownArrow
          })]
        }) : null]
      })
    })
  };
c.DropdownSizes = n, c.Sizes = l.Button.Sizes, c.Colors = l.Button.Colors, c.Looks = l.Button.Looks;
var _ = c