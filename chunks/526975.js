"use strict";
A.r(t), A.d(t, {
  default: function() {
    return i
  }
});
var a = A("37983"),
  l = A("884691"),
  n = A("266937"),
  r = A("286458"),
  s = A("29799");
let o = (0, n.CustomPicker)(e => (0, a.jsxs)("div", {
  className: s.wrapper,
  children: [(0, a.jsx)("div", {
    className: s.saturation,
    children: (0, a.jsx)(r.Saturation, {
      ...e
    })
  }), (0, a.jsx)("div", {
    className: s.hue,
    children: (0, a.jsx)(r.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
var i = l.memo(o)