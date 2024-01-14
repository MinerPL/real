"use strict";
n.r(t), n.d(t, {
  RoleDot: function() {
    return u
  },
  RoleCircle: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("414055"),
  o = n("584115");

function l(e) {
  let {
    color: t,
    className: n,
    background: r = !0
  } = e;
  return null == t ? null : (0, i.jsxs)("svg", {
    className: s(o.svg, n),
    viewBox: "0 0 20 20",
    fill: "none",
    children: [r && (0, i.jsx)("path", {
      className: o.background,
      d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
    }), (0, i.jsx)("circle", {
      className: o.dotBorderBase,
      cx: "10",
      cy: "10",
      r: "6"
    }), (0, i.jsx)("circle", {
      className: o.dotBorderColor,
      cx: "10",
      cy: "10",
      r: "6",
      fill: t
    }), (0, i.jsx)("circle", {
      className: o.dot,
      cx: "10",
      cy: "10",
      r: "5",
      fill: t
    })]
  })
}

function u(e) {
  let {
    color: t,
    name: n,
    tooltip: r = !0
  } = e;
  return null == t ? null : r ? (0, i.jsx)(a.Tooltip, {
    text: n,
    children: t => (0, i.jsx)("span", {
      ...t,
      "aria-hidden": !0,
      children: (0, i.jsx)(l, {
        ...e
      })
    })
  }) : (0, i.jsx)(l, {
    ...e
  })
}

function c(e) {
  let {
    color: t,
    className: n
  } = e;
  return null == t ? null : (0, i.jsx)("span", {
    className: s(o.roleCircle, n),
    style: {
      backgroundColor: t
    }
  })
}