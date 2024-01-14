"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("77078"),
  o = l("707828");

function d(e) {
  let {
    children: t,
    icon: l,
    title: s
  } = e;
  return (0, n.jsxs)("header", {
    className: o.header,
    children: [(0, n.jsxs)("div", {
      className: o.name,
      children: [a.cloneElement(l, {
        className: i(l.props.className, o.icon),
        height: 24,
        width: 24
      }), (0, n.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        className: o.title,
        children: s
      })]
    }), t]
  })
}