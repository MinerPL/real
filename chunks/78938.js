"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("918352"),
  l = n("929694");

function u(e) {
  let {
    copy: t,
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s(l.badgeContainer, n),
    children: [(0, r.jsx)("div", {
      className: l.newBadge,
      children: t
    }), (0, r.jsx)("span", {
      className: s(l.star, l.starLeft),
      children: (0, r.jsx)(a.default, {
        width: "10",
        height: "10"
      })
    }), (0, r.jsx)("span", {
      className: s(l.star, l.starRight),
      children: (0, r.jsx)(a.default, {
        width: "13",
        height: "13"
      })
    })]
  })
}