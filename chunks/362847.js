"use strict";
n.r(t), n.d(t, {
  TvIcon: function() {
    return r
  }
});
var o = n("37983");
n("884691");
var s = n("669491"),
  i = n("75196");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = e;
  return (0, o.jsx)("svg", {
    ...(0, i.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, o.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
      className: a
    })
  })
}