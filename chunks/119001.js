"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  r = n("167115"),
  l = n("77078"),
  o = n("956089"),
  u = n("782340"),
  c = n("301893");

function d(e) {
  let {
    className: t
  } = e;
  return (0, a.jsx)(o.TextBadge, {
    className: s(t, c.badge),
    disableColor: !0,
    text: (0, a.jsxs)("div", {
      className: c.innerBadge,
      children: [(0, a.jsx)(r.PollsIcon, {
        className: c.icon,
        color: l.tokens.colors.INTERACTIVE_ACTIVE
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "interactive-active",
        children: u.default.Messages.POLL
      })]
    })
  })
}