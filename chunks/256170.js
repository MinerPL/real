"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("469563"),
  r = n("384737"),
  o = n("996674"),
  u = (0, i.replaceIcon)(function(e) {
    let {
      width: t = 24,
      height: n = 24,
      color: a = "currentColor",
      className: i,
      foreground: r,
      open: u = !1
    } = e;
    return (0, l.jsx)("svg", {
      className: s(o.arrow, i, {
        [o.open]: u
      }),
      width: t,
      height: n,
      viewBox: "0 0 24 24",
      children: (0, l.jsx)("path", {
        className: r,
        fill: a,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
      })
    })
  }, r.ChevronSmallDownIcon, void 0, {
    size: 24
  })