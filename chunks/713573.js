"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  l = n("77078"),
  u = n("254686"),
  r = n("851706");
let o = Object.freeze({
    SIZE_10: r.size10,
    SIZE_12: r.size12,
    SIZE_14: r.size14,
    SIZE_16: r.size16,
    SIZE_20: r.size20,
    SIZE_24: r.size24,
    SIZE_32: r.size32
  }),
  d = e => {
    let {
      id: t,
      muted: n = !1,
      className: i = u.wrapper,
      size: r = o.SIZE_14,
      selectable: d = !1,
      children: c,
      color: f,
      onClick: S,
      onContextMenu: E,
      style: g,
      title: _,
      uppercase: M
    } = e;
    return (0, s.jsx)(l.H, {
      role: null != S ? "button" : void 0,
      onClick: S,
      onContextMenu: E,
      id: t,
      className: a(i, {
        [u.base]: !0,
        [r]: !0,
        [u.selectable]: d,
        [u.muted]: n,
        [u.uppercase]: M
      }),
      title: _,
      style: null != f ? {
        ...g,
        color: f
      } : g,
      children: c
    })
  };
d.Sizes = o;
var c = d