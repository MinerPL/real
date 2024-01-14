"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  u = n("748820"),
  r = n("469563"),
  i = n("917798"),
  d = n("75196"),
  s = (0, r.replaceIcon)(function(e) {
    let {
      width: t = 16,
      height: n = 16,
      color: r = "currentColor",
      foreground: i,
      ...s
    } = e, [o] = a.useState(() => (0, u.v4)());
    return (0, l.jsxs)("svg", {
      ...(0, d.default)(s),
      width: t,
      height: n,
      viewBox: "0 0 24 24",
      children: [(0, l.jsx)("g", {
        clipPath: "url(".concat(o, ")"),
        children: (0, l.jsx)("path", {
          className: i,
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.83075 2H13.2444C14.817 2 16.0751 3.13475 15.9965 4.55319V11H14.5025V4.69504H3.57264V18.8085H6V22H4.83075C3.25811 22 2 20.8652 2 19.4468V4.55319C2 3.13475 3.25811 2 4.83075 2Z",
          fill: r
        })
      }), (0, l.jsx)("path", {
        d: "M10.5646 13H19.4354C20.5365 13 21.4507 13.7808 21.5303 14.7893L21.9965 20.6997C22.0492 21.3677 21.5021 21.9485 20.7746 21.9968C20.7429 21.9989 20.7111 22 20.6792 22C19.8442 22 19.1157 21.4795 18.9105 20.7363L18.5495 19.4286H11.4504L11.0894 20.7363C10.8842 21.4795 10.1557 22 9.3207 22C8.5913 22 8 21.4571 8 20.7873C8 20.7581 8.00115 20.7289 8.00345 20.6997L8.46966 14.7893C8.5492 13.7808 9.46342 13 10.5646 13Z",
        className: i,
        fill: r
      }), (0, l.jsx)("defs", {
        children: (0, l.jsx)("clipPath", {
          id: o,
          children: (0, l.jsx)("rect", {
            width: "14",
            height: "21",
            fill: r,
            transform: "translate(2 2)"
          })
        })
      })]
    })
  }, i.MobilePhoneControllerIcon, void 0, {
    size: 16
  })