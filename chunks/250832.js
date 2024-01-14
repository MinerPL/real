"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("476263"),
  s = n("328413"),
  i = n("550473"),
  r = function(e) {
    let {
      guild: t,
      children: n
    } = e, r = null != t ? (0, l.jsx)(a.default, {
      guild: t,
      size: a.default.Sizes.MEDIUM,
      className: i.icon,
      active: !0
    }) : null;
    return (0, l.jsxs)("span", {
      children: [(0, l.jsx)(s.default, {
        children: r
      }), (0, l.jsx)("span", {
        className: i.name,
        children: n
      })]
    })
  }