"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("77078"),
  o = i("256170"),
  u = i("572935");
let c = l.memo(function(e) {
  let {
    children: t,
    className: i,
    icon: l,
    isCollapsed: s,
    onClick: c,
    "aria-label": d
  } = e;
  return (0, n.jsx)("div", {
    className: a(u.wrapper, i),
    children: (0, n.jsxs)(r.Clickable, {
      onClick: c,
      onKeyDown: e => e.stopPropagation(),
      className: a(u.header, {
        [u.interactive]: null != s
      }),
      "aria-expanded": null != s ? !s : void 0,
      "aria-label": d,
      children: [null != l && (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: u.headerIcon,
        children: l
      }), (0, n.jsx)("span", {
        className: u.headerLabel,
        children: t
      }), null != s ? (0, n.jsx)(o.default, {
        className: a(u.headerCollapseIcon, {
          [u.headerCollapseIconCollapsed]: s
        }),
        height: 16,
        width: 16
      }) : null]
    })
  })
});
var d = c