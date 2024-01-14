"use strict";
n.r(t), n.d(t, {
  Directions: function() {
    return l
  },
  default: function() {
    return d
  }
}), n("70102");
var l, r, o = n("37983");
n("884691");
var u = n("414456"),
  i = n.n(u),
  c = n("75196"),
  s = n("741460");
(r = l || (l = {})).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT";
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = "currentColor",
    direction: r,
    foreground: u,
    className: a,
    title: d,
    ...f
  } = e;
  return (0, o.jsxs)("svg", {
    ...(0, c.default)(f),
    width: t,
    height: n,
    className: i(a, function(e) {
      switch (e) {
        case "LEFT":
          return s.left;
        case "RIGHT":
          return s.right;
        case "UP":
          return null;
        case "DOWN":
          return s.down;
        case "UP_LEFT":
          return s.upLeft;
        case "DOWN_RIGHT":
          return s.downRight;
        default:
          throw Error("Invalid Direction ".concat(e))
      }
    }(r)),
    viewBox: "0 0 24 24",
    children: [null != d ? (0, o.jsx)("title", {
      children: d
    }) : null, (0, o.jsx)("polygon", {
      className: u,
      fill: l,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  })
};
a.Directions = l;
var d = a