"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("543289"),
  i = n("782340"),
  r = n("651245");

function o(e) {
  let {
    Icon: t,
    header: n,
    tip: o,
    disableStars: u
  } = e;
  return (0, l.jsxs)("div", {
    className: r.container,
    children: [(0, l.jsxs)("div", {
      className: r.iconContainer,
      children: [(0, l.jsx)(t, {
        className: r.icon,
        width: 36,
        height: 36
      }), u ? null : (0, l.jsx)(s.default, {
        className: r.stars
      })]
    }), (0, l.jsx)(a.Heading, {
      className: r.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, l.jsxs)(a.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      children: [u ? null : (0, l.jsxs)(a.Text, {
        tag: "span",
        className: r.protip,
        variant: "text-xs/bold",
        color: "text-positive",
        children: [i.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
      }), o]
    })]
  })
}