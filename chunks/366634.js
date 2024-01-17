"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("37983");
a("884691");
var r = a("414456"),
  s = a.n(r),
  l = a("748820"),
  o = a("291077");
let u = (0, l.v4)();
var c = e => {
  let {
    open: t,
    className: a,
    withHighlight: r = !1
  } = e;
  return (0, n.jsxs)("svg", {
    width: "18",
    height: "18",
    className: s(o.button, a, {
      [o.open]: t,
      [o.withHighlight]: r
    }),
    children: [r && (0, n.jsx)("defs", {
      children: (0, n.jsxs)("linearGradient", {
        id: u,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, n.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, n.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, n.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, n.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, n.jsx)("path", {
        stroke: r ? "url(#".concat(u, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, n.jsx)("path", {
        stroke: r ? "url(#".concat(u, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}