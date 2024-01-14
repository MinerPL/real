"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("587974"),
  r = n("467573");

function o(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)(i.default, {
    mask: i.default.Masks.SQUIRCLE,
    className: s(t, r.placeholderMask),
    width: 48,
    height: 48,
    style: {
      display: "block"
    },
    children: (0, l.jsx)("div", {
      className: r.dragInner
    })
  })
}