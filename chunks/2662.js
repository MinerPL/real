"use strict";
E.r(_), E.d(_, {
  RefreshIcon: function() {
    return r
  }
});
var t = E("37983");
E("884691");
var o = E("669491"),
  n = E("75196");
let r = e => {
  let {
    width: _ = 24,
    height: E = 24,
    color: r = o.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...a
  } = e;
  return (0, t.jsx)("svg", {
    ...(0, n.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: _,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, t.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M21 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.93A8 8 0 0 0 6.97 5.78a1 1 0 0 1-1.26-1.56A9.98 9.98 0 0 1 20 6V3a1 1 0 0 1 1-1ZM3 22a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5.07a8 8 0 0 0 11.96 2.22 1 1 0 1 1 1.26 1.56A9.99 9.99 0 0 1 4 18v3a1 1 0 0 1-1 1Z",
      className: i
    })
  })
}