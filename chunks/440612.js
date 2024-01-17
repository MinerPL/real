"use strict";
n.r(t), n.d(t, {
  FloatingActionButton: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("102253");
let i = e => {
  let {
    text: t,
    icon: n,
    onClick: i
  } = e;
  return (0, a.jsxs)(l.Button, {
    className: s.button,
    innerClassName: s.buttonInner,
    onClick: i,
    children: [(0, a.jsx)(n, {}), (0, a.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: t
    })]
  })
}