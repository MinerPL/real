"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var s = a("37983");
a("884691");
var r = a("77078"),
  l = a("543289"),
  n = a("959097"),
  d = a("300322"),
  u = a("782340"),
  i = a("590545");

function o(e) {
  let {
    channel: t,
    header: a,
    startThread: o
  } = e, c = (0, d.useCanStartPublicThread)(t), f = (0, d.useCanStartPrivateThread)(t);
  return (0, s.jsxs)("div", {
    className: i.container,
    children: [(0, s.jsxs)("div", {
      className: i.iconContainer,
      children: [(0, s.jsx)("div", {
        className: i.icon,
        children: (0, s.jsx)(n.default, {
          width: 36,
          height: 36
        })
      }), (0, s.jsx)(l.default, {
        className: i.stars
      })]
    }), (0, s.jsx)(r.Heading, {
      className: i.header,
      variant: "heading-xl/semibold",
      children: a
    }), (0, s.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      children: u.default.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT
    }), c || f ? (0, s.jsx)(r.Button, {
      className: i.cta,
      onClick: o,
      children: u.default.Messages.CREATE_THREAD
    }) : null]
  })
}