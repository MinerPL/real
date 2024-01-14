"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("461380"),
  i = s("155207"),
  r = s("782340"),
  o = s("125559");

function d(e) {
  let {
    role: t,
    onClick: s
  } = e;
  return (0, a.jsxs)(n.Clickable, {
    className: o.container,
    onClick: s,
    children: [(0, a.jsx)("div", {
      className: o.icon,
      children: (0, a.jsx)(i.default, {
        width: 20,
        height: 20
      })
    }), (0, a.jsxs)("div", {
      className: o.description,
      children: [(0, a.jsx)(n.Text, {
        className: o.label,
        color: "none",
        variant: "text-md/bold",
        children: r.default.Messages.ROLE_EVERYONE_LABEL
      }), (0, a.jsxs)(n.Text, {
        color: "none",
        variant: "text-xs/normal",
        children: [t.name, " • ", r.default.Messages.ROLE_EVERYONE_DESCRIPTION]
      })]
    }), (0, a.jsx)(l.default, {
      className: o.arrow,
      direction: l.default.Directions.RIGHT
    })]
  })
}