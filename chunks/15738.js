"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("907002"),
  r = n("336637");
let o = Object.freeze({
    tension: 400,
    friction: 30
  }),
  u = Object.freeze({
    opacity: 0,
    height: 8,
    x: -4
  });

function d(e) {
  let {
    selected: t = !1,
    hovered: n = !1,
    unread: a = !1,
    disabled: d = !1,
    className: c
  } = e;
  t = !d && t, n = !d && n, a = !d && a;
  let m = {
      opacity: 1,
      height: t ? 40 : n ? 20 : 8,
      x: 0
    },
    f = (0, i.useTransition)(t || n || a, {
      config: o,
      keys: e => e ? "pill" : "empty",
      immediate: !n && !document.hasFocus(),
      initial: t || n || a ? m : null,
      from: u,
      leave: u,
      enter: m,
      update: m
    });
  return (0, l.jsx)("div", {
    className: s(c, r.wrapper),
    "aria-hidden": !0,
    children: f((e, t) => t && (0, l.jsx)(i.animated.span, {
      className: r.item,
      style: e
    }))
  })
}