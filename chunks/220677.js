"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("584074"),
  r = e => {
    let {
      value: t = 0,
      text: n,
      className: l,
      ...r
    } = e;
    return null != n ? (0, a.jsx)("div", {
      className: s(i.wrapper, l),
      ...r,
      children: n
    }) : t > 0 ? (0, a.jsx)("div", {
      className: s(i.wrapper, l),
      ...r,
      children: t
    }) : null
  }