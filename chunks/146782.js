"use strict";
n.r(t), n.d(t, {
  ConnectionUnknownIcon: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("669491"),
  s = n("75196");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M2 3a1 1 0 0 1 1-1c6.92 0 12.97 3.7 16.3 9.22.22.37-.15.86-.6.9-.2.02-.4.06-.6.12a.58.58 0 0 1-.67-.22C14.43 7.2 9.1 4 3 4a1 1 0 0 1-1-1ZM15.48 15.15a.5.5 0 0 0 .02-.47A14 14 0 0 0 3 7a1 1 0 0 0 0 2 12 12 0 0 1 10.95 7.09c.18.39.74.44.96.07l.57-1.01ZM2 13a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
      className: r
    }), (0, l.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd",
      className: r
    })]
  })
}