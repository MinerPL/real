"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("77078"),
  i = a("36694"),
  d = a("782340"),
  r = a("263405"),
  u = n.memo(function() {
    return (0, l.jsxs)("div", {
      className: r.container,
      children: [(0, l.jsxs)("div", {
        className: r.divider,
        children: [(0, l.jsx)("div", {
          className: r.line
        }), (0, l.jsx)("div", {
          className: r.icon,
          children: (0, l.jsx)(i.default, {
            height: 24,
            width: 24
          })
        }), (0, l.jsx)("div", {
          className: r.line
        })]
      }), (0, l.jsx)(s.Text, {
        className: r.title,
        color: "header-primary",
        variant: "text-md/semibold",
        children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_TITLE
      }), (0, l.jsx)(s.Text, {
        className: r.subtitle,
        color: "header-secondary",
        variant: "text-sm/normal",
        children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_SUBTITLE
      })]
    })
  })