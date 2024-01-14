"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("37983");
n("884691");
var i = n("225389"),
  l = n("77078"),
  o = n("135898"),
  s = function(e) {
    let {
      message: t
    } = e;
    return (0, r.jsxs)("div", {
      className: o.container,
      children: [(0, r.jsx)(i.CircleInformationIcon, {
        className: o.icon,
        width: 20,
        height: 20,
        color: l.tokens.colors.TEXT_WARNING
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-muted",
        children: t
      })]
    })
  }