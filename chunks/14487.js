"use strict";
n.r(t), n.d(t, {
  ClockXIcon: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var i = n("669491"),
  l = n("75196");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...r
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, l.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M12.53 22.99c.32-.02.52-.34.49-.65a3 3 0 0 1 .86-2.46l.52-.53a.5.5 0 0 0 0-.7l-.52-.53a3 3 0 0 1-.72-3.09.56.56 0 0 0-.12-.57L11.3 12.7A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.38c0 .13.05.26.15.35l1.3 1.31c.16.15.38.19.58.12a3 3 0 0 1 3.1.72l.52.52c.2.2.5.2.7 0l.53-.52a3 3 0 0 1 2.46-.86c.31.03.63-.17.65-.49L23 12a11 11 0 1 0-10.47 10.99Z",
      className: u
    }), (0, a.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M15.3 15.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L20.42 19l2.3 2.3a1 1 0 0 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 0 1 0-1.4Z",
      className: u
    })]
  })
}