"use strict";
n.r(t), n.d(t, {
  ChatAlertIcon: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("75196");
let u = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: u = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...s
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, l.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      fill: "string" == typeof u ? u : u.css,
      d: "M12.03 21.5c-.05.28-.27.5-.54.5H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.32-3.77c-.01.12-.17.14-.22.04a3.06 3.06 0 0 0-5.3 0l-3.95 6.9c-.19.32-.3.65-.37.98Z",
      className: o
    }), (0, i.jsx)("path", {
      fill: "string" == typeof u ? u : u.css,
      fillRule: "evenodd",
      d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd",
      className: o
    })]
  })
}