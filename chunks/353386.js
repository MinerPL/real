"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var s = n("421898"),
  r = n.n(s),
  l = n("249907"),
  a = e => {
    let {
      open: t = !1,
      className: n,
      ...s
    } = e;
    return (0, i.jsxs)("button", {
      type: "button",
      className: r(l.btnHamburger, {
        [l.btnHamburgerOpen]: t
      }, n),
      ...s,
      children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
    })
  }