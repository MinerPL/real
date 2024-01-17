"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("669491"),
  i = n("819855"),
  l = n("77078"),
  r = n("841098"),
  o = e => {
    let {
      className: t
    } = e, n = (0, r.default)(), o = (0, l.useToken)(s.default.colors.BACKGROUND_ACCENT).hex();
    return (0, a.jsx)("svg", {
      width: "700",
      height: "120",
      viewBox: "0 0 700 120",
      className: t,
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, a.jsx)("path", {
        fill: (0, i.isThemeDark)(n) ? o : "white",
        opacity: "1",
        d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
      })
    })
  }