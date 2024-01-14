"use strict";
s.r(a), s.d(a, {
  default: function() {
    return _
  }
});
var n = s("37983");
s("884691");
var t = s("77078"),
  l = s("906104"),
  E = s("529861");

function _(e) {
  let {
    icon: a,
    message: s,
    onClick: _,
    autoFocus: d
  } = e;
  return (0, n.jsxs)("button", {
    className: l.container,
    onClick: _,
    autoFocus: d,
    children: [(0, n.jsx)("img", {
      className: l.icon,
      alt: "",
      src: a
    }), (0, n.jsx)(t.Text, {
      className: l.text,
      variant: "text-md/bold",
      children: s
    }), (0, n.jsx)("img", {
      className: l.arrow,
      alt: "",
      src: E
    })]
  })
}