"use strict";
n.r(t), n.d(t, {
  NameWithRoleAnchor: function() {
    return f
  },
  NameWithRole: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("446674"),
  o = n("459462"),
  l = n("206230"),
  u = n("236532"),
  c = n("478517");

function d(e) {
  let {
    roleStyle: t,
    name: n,
    color: r,
    roleName: a,
    dotAlignment: o = "left",
    className: l
  } = e, d = "username" === t, f = "dot" === t ? (0, i.jsx)(u.RoleDot, {
    color: r,
    name: a,
    className: "left" === o ? c.roleDotLeft : c.roleDotRight
  }) : null;
  return (0, i.jsxs)("span", {
    style: {
      color: d && null != r ? r : void 0
    },
    className: s(l, {
      [c.username]: d
    }),
    children: ["left" === o && f, n, "right" === o && f]
  })
}

function f(e) {
  let {
    name: t,
    color: n,
    roleName: r,
    dotAlignment: s,
    className: u,
    ...c
  } = e, f = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle), E = "username" === f, h = (0, i.jsx)(d, {
    roleStyle: f,
    name: t,
    color: n,
    roleName: r,
    dotAlignment: s,
    className: u
  }), p = E ? {
    color: n
  } : void 0;
  return (0, i.jsx)(o.Anchor, {
    ...c,
    children: h,
    style: p
  })
}

function E(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle);
  return (0, i.jsx)(d, {
    ...e,
    roleStyle: t
  })
}