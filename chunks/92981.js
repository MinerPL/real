"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("206230"),
  o = n("300322"),
  u = n("271938"),
  d = n("957255"),
  c = n("491605"),
  f = n("49111"),
  h = n("782340"),
  C = n("50435");
let p = () => n.el("170206").then(n.t.bind(n, "170206", 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});
var m = a.memo(function(e) {
  let {
    channel: t,
    isLastItem: n
  } = e, a = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), m = (0, l.useStateFromStores)([d.default], () => d.default.can(f.Permissions.SEND_MESSAGES_IN_THREADS, t)), g = (0, o.useIsNonModInLockedThread)(t), E = (0, l.useStateFromStores)([u.default], () => u.default.getId());
  return n ? m && !g && t.ownerId !== E ? (0, s.jsxs)("div", {
    className: C.box,
    children: [(0, s.jsx)(c.default, {
      importData: p,
      shouldAnimate: !a,
      className: C.animation
    }), (0, s.jsxs)("div", {
      className: C.textContainer,
      children: [(0, s.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: h.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: h.default.Messages.FORUM_START_THE_CONVERSATION_DESCRIPTION
      })]
    })]
  }) : null : (0, s.jsx)("div", {
    className: C.divider
  })
})