"use strict";
l.r(t), l.d(t, {
  UserPlayIcon: function() {
    return i
  }
});
var n = l("37983");
l("884691");
var a = l("669491"),
  s = l("75196");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h5.73c.37 0 .61-.38.5-.73a7 7 0 0 1 3.65-8.61c.4-.2.46-.78.05-.95a9.5 9.5 0 0 0-3.61-.71h-.94Z",
      className: r
    }), (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.77-.2-3.33-2.5a.25.25 0 0 0-.4.2v5c0 .2.24.32.4.2l3.33-2.5c.14-.1.14-.3 0-.4Z",
      clipRule: "evenodd",
      className: r
    })]
  })
}