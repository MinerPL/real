"use strict";
n.r(t), n.d(t, {
  FloatingActionButton: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("102253");
let i = e => {
  let {
    text: t,
    icon: n,
    onClick: i
  } = e;
  return (0, l.jsxs)(a.Button, {
    className: s.button,
    innerClassName: s.buttonInner,
    onClick: i,
    children: [(0, l.jsx)(n, {}), (0, l.jsx)(a.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: t
    })]
  })
}