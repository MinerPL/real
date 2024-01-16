"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("194250"),
  i = n("782340"),
  r = n("11644");

function u(e) {
  let {
    isSlideReady: t,
    ...n
  } = e;
  return (0, l.jsxs)("div", {
    className: r.slideContainer,
    children: [(0, l.jsxs)("div", {
      className: r.header,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: i.default.Messages.GUILD_EVENT_CREATE_HEADER
      }), (0, l.jsx)(a.Text, {
        color: "header-secondary",
        className: r.text,
        variant: "text-sm/normal",
        children: i.default.Messages.GUILD_EVENT_CREATE_BODY
      })]
    }), (0, l.jsx)(s.default, {
      ...n,
      canSetFocus: t
    })]
  })
}