"use strict";
n.r(e), n.d(e, {
  AsteriskIcon: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  c = n("75196");
let o = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: o = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...a
  } = t;
  return (0, r.jsx)("svg", {
    ...(0, c.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M19.94 7.03c.58-.28 1.27.01 1.46.62l1 3.1c.2.6-.19 1.25-.81 1.36l-6.73 1.2 4.71 4.98c.44.46.37 1.2-.14 1.57l-2.62 1.92c-.52.38-1.25.21-1.55-.35l-3.22-6.06-3.29 6.07c-.3.56-1.03.72-1.54.35l-2.63-1.93a1.05 1.05 0 0 1-.14-1.57l4.7-4.98-6.72-1.2c-.62-.11-1-.75-.81-1.36l1-3.1c.2-.61.88-.9 1.45-.63l6.24 3.01-.93-6.84C9.3 2.56 9.77 2 10.41 2h3.2c.63 0 1.12.56 1.04 1.18l-.88 6.85 6.17-3Z",
      className: l
    })
  })
}