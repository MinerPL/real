"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("560995"),
  l = n("233102"),
  s = n("440899"),
  o = n("970921");

function r(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d
  } = e;
  return (0, i.jsxs)(a.default, {
    className: o.wrapper,
    children: [(0, i.jsx)(l.default, {
      contained: !0,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(s.default, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: !0
    })]
  })
}