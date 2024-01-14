"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var s = a("37983");
a("884691");
var n = a("669491"),
  r = a("819855"),
  l = a("77078"),
  o = a("841098"),
  d = e => {
    let {
      className: t
    } = e, a = (0, o.default)(), d = (0, l.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
    return (0, s.jsx)("svg", {
      width: "700",
      height: "120",
      viewBox: "0 0 700 120",
      className: t,
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, s.jsx)("path", {
        fill: (0, r.isThemeDark)(a) ? d : "white",
        opacity: "1",
        d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
      })
    })
  }