"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  r = n.n(s),
  l = n("561445"),
  a = e => {
    let {
      aspectRatio: t,
      style: n,
      className: s,
      children: a
    } = e;
    return (0, i.jsx)("div", {
      className: r(l.outer, s),
      style: {
        paddingTop: "".concat(1 / t * 100, "%"),
        ...n
      },
      children: (0, i.jsx)("div", {
        className: l.inner,
        children: a
      })
    })
  }