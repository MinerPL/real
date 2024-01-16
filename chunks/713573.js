"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  l = n("77078"),
  a = n("254686"),
  u = n("851706");
let o = Object.freeze({
    SIZE_10: u.size10,
    SIZE_12: u.size12,
    SIZE_14: u.size14,
    SIZE_16: u.size16,
    SIZE_20: u.size20,
    SIZE_24: u.size24,
    SIZE_32: u.size32
  }),
  d = e => {
    let {
      id: t,
      muted: n = !1,
      className: i = a.wrapper,
      size: u = o.SIZE_14,
      selectable: d = !1,
      children: c,
      color: h,
      onClick: f,
      onContextMenu: m,
      style: p,
      title: I,
      uppercase: v
    } = e;
    return (0, s.jsx)(l.H, {
      role: null != f ? "button" : void 0,
      onClick: f,
      onContextMenu: m,
      id: t,
      className: r(i, {
        [a.base]: !0,
        [u]: !0,
        [a.selectable]: d,
        [a.muted]: n,
        [a.uppercase]: v
      }),
      title: I,
      style: null != h ? {
        ...p,
        color: h
      } : p,
      children: c
    })
  };
d.Sizes = o;
var c = d