"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("77078"),
  r = n("158998"),
  o = n("833381"),
  u = e => {
    let {
      user: t,
      fill: n
    } = e, s = "\xa0(@".concat(r.default.getUserTag(t, {
      decoration: "never"
    }), ")");
    return (0, a.jsxs)(l.Text, {
      className: i([o.text, {
        [o.fill]: n
      }]),
      variant: "text-md/medium",
      children: [(0, a.jsx)("span", {
        className: o.username,
        children: r.default.getName(t)
      }), (0, a.jsx)("span", {
        className: o.discriminator,
        children: s
      })]
    })
  }