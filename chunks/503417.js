"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
});
var t = E("37983");
E("884691");
var o = E("414456"),
  n = E.n(o),
  r = E("945330"),
  i = E("774223"),
  a = E("587974"),
  I = E("755250");

function s(e) {
  let {
    width: _ = 20,
    height: E = 20,
    className: o
  } = e;
  return (0, t.jsxs)("div", {
    className: n(I.icon, o),
    children: [(0, t.jsx)(a.default, {
      mask: a.default.Masks.STATUS_SCREENSHARE,
      width: _,
      height: E,
      children: (0, t.jsx)(i.default, {
        width: _,
        height: E
      })
    }), (0, t.jsx)(r.default, {
      className: I.badge
    })]
  })
}