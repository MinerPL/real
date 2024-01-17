"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var n = r("37983");
r("884691");
var s = r("414456"),
  u = r.n(s),
  i = r("77078"),
  l = r("254686"),
  o = r("851706");
let a = Object.freeze({
    SIZE_10: o.size10,
    SIZE_12: o.size12,
    SIZE_14: o.size14,
    SIZE_16: o.size16,
    SIZE_20: o.size20,
    SIZE_24: o.size24,
    SIZE_32: o.size32
  }),
  c = e => {
    let {
      id: t,
      muted: r = !1,
      className: s = l.wrapper,
      size: o = a.SIZE_14,
      selectable: c = !1,
      children: d,
      color: f,
      onClick: h,
      onContextMenu: p,
      style: E,
      title: I,
      uppercase: v
    } = e;
    return (0, n.jsx)(i.H, {
      role: null != h ? "button" : void 0,
      onClick: h,
      onContextMenu: p,
      id: t,
      className: u(s, {
        [l.base]: !0,
        [o]: !0,
        [l.selectable]: c,
        [l.muted]: r,
        [l.uppercase]: v
      }),
      title: I,
      style: null != f ? {
        ...E,
        color: f
      } : E,
      children: d
    })
  };
c.Sizes = a;
var d = c