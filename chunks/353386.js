"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("37983");
n("884691");
var r = n("421898"),
  i = n.n(r),
  s = n("249907"),
  a = e => {
    let {
      open: t = !1,
      className: n,
      ...r
    } = e;
    return (0, l.jsxs)("button", {
      type: "button",
      className: i(s.btnHamburger, {
        [s.btnHamburgerOpen]: t
      }, n),
      ...r,
      children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
    })
  }