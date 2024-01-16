"use strict";
s.r(l), s.d(l, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var t = s("77078"),
  n = s("461380"),
  i = s("30679");

function d(e) {
  let {
    url: l,
    text: s
  } = e;
  return (0, a.jsx)(t.Anchor, {
    href: l,
    className: i.externalLinkWrapper,
    children: (0, a.jsxs)(t.Clickable, {
      className: i.childButton,
      children: [(0, a.jsx)(t.Text, {
        className: i.childText,
        variant: "text-md/semibold",
        children: s
      }), (0, a.jsx)(n.default, {
        className: i.childIcon,
        direction: n.default.Directions.RIGHT
      })]
    })
  })
}