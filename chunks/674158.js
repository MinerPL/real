"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  u = n.n(i),
  l = n("288264");

function a(e) {
  let {
    icon: t,
    iconClassName: n,
    description: i,
    color: a
  } = e;
  return (0, r.jsxs)("div", {
    className: l.perkRow,
    children: [(0, r.jsx)("div", {
      className: l.perkIconContainer,
      children: (0, r.jsx)(t, {
        color: a,
        className: u(l.perkIcon, n)
      })
    }), (0, r.jsx)("div", {
      className: l.perkDescription,
      children: i
    })]
  })
}