"use strict";
n.r(t), n.d(t, {
  PinUprightSlashIcon: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("669491"),
  s = n("75196");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM4.5 1h13.17a.5.5 0 0 1 .36.85L4.62 15.25c-.2.22-.56.2-.6-.1A1 1 0 0 1 4 15v-.95a2 2 0 0 1 .61-1.44L8 9.35V5h-.91C5.39 5 4 3.48 4 1.6v-.1c0-.28.22-.5.5-.5ZM17.77 11.05a.5.5 0 0 0-.7 0l-4.1 4.1a.5.5 0 0 0 .36.85H19a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44l-1.62-1.56ZM11.08 17.25a.5.5 0 0 0-.36.15l-.36.37a.5.5 0 0 0-.14.46l.99 4.38a.5.5 0 0 0 .49.39h.6a.5.5 0 0 0 .49-.39l1.07-4.75a.5.5 0 0 0-.49-.61h-2.3Z",
      className: r
    })
  })
}