"use strict";
s.r(l), s.d(l, {
  default: function() {
    return d
  }
});
var t = s("37983");
s("884691");
var a = s("77078"),
  n = s("461380"),
  i = s("30679");

function d(e) {
  let {
    url: l,
    text: s
  } = e;
  return (0, t.jsx)(a.Anchor, {
    href: l,
    className: i.externalLinkWrapper,
    children: (0, t.jsxs)(a.Clickable, {
      className: i.childButton,
      children: [(0, t.jsx)(a.Text, {
        className: i.childText,
        variant: "text-md/semibold",
        children: s
      }), (0, t.jsx)(n.default, {
        className: i.childIcon,
        direction: n.default.Directions.RIGHT
      })]
    })
  })
}