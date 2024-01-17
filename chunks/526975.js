"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  r = n("884691"),
  i = n("266937"),
  s = n("286458"),
  a = n("29799");
let o = (0, i.CustomPicker)(e => (0, l.jsxs)("div", {
  className: a.wrapper,
  children: [(0, l.jsx)("div", {
    className: a.saturation,
    children: (0, l.jsx)(s.Saturation, {
      ...e
    })
  }), (0, l.jsx)("div", {
    className: a.hue,
    children: (0, l.jsx)(s.Hue, {
      ...e,
      direction: "horizontal"
    })
  })]
}));
var u = r.memo(o)