"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("339023"),
  r = n("555857");

function o(e) {
  let t, {
    className: n,
    children: a,
    verified: o,
    roleColor: u,
    roleName: d
  } = e;
  return t = o ? (0, s.jsx)(i.default, {
    size: 12,
    color: u,
    className: r.linkedRoleColor
  }) : (0, s.jsx)("div", {
    className: r.roleColor,
    style: {
      backgroundColor: u
    }
  }), (0, s.jsxs)("div", {
    className: l(n, r.role),
    children: [t, d, a]
  })
}