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
  l = n("748820"),
  a = n("291077");
let o = (0, l.v4)();
var u = e => {
  let {
    open: t,
    className: n,
    withHighlight: i = !1
  } = e;
  return (0, r.jsxs)("svg", {
    width: "18",
    height: "18",
    className: s(a.button, n, {
      [a.open]: t,
      [a.withHighlight]: i
    }),
    children: [i && (0, r.jsx)("defs", {
      children: (0, r.jsxs)("linearGradient", {
        id: o,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, r.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, r.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, r.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, r.jsx)("path", {
        stroke: i ? "url(#".concat(o, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, r.jsx)("path", {
        stroke: i ? "url(#".concat(o, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}