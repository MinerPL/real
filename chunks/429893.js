"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("75196"),
  r = l("592353");

function o(e) {
  let {
    width: t = 16,
    height: l = 16,
    color: a = "currentColor",
    foreground: o,
    className: d,
    ...u
  } = e;
  return (0, n.jsx)("svg", {
    className: s(r.updateAvailable, d),
    ...(0, i.default)(u),
    width: t,
    height: l,
    viewBox: "0 0 24 24",
    children: (0, n.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, n.jsx)("path", {
        fill: a,
        className: o,
        fillRule: "nonzero",
        d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z"
      }), (0, n.jsx)("polygon", {
        points: "24 0 0 0 0 24 24 24"
      })]
    })
  })
}