"use strict";
a.r(e), a.d(e, {
  GameControllerIcon: function() {
    return c
  }
});
var t = a("37983");
a("884691");
var s = a("669491"),
  n = a("75196");
let c = l => {
  let {
    width: e = 24,
    height: a = 24,
    color: c = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...r
  } = l;
  return (0, t.jsx)("svg", {
    ...(0, n.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, t.jsx)("path", {
      fill: "string" == typeof c ? c : c.css,
      fillRule: "evenodd",
      d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
      clipRule: "evenodd",
      className: i
    })
  })
}