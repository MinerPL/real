"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("62843"),
  u = n("132755"),
  d = n("782340"),
  c = n("760687");

function m(e) {
  let {
    onPlay: t,
    className: n,
    inactive: s
  } = e, m = a.useRef(null), f = (0, l.jsx)("div", {
    className: c.iconWrapper,
    ref: m,
    children: (0, l.jsx)(u.default, {
      className: i(c.icon)
    })
  });
  return (0, l.jsx)(o.MessagesInteractionContext.Consumer, {
    children: e => s || null == t ? (0, l.jsx)("div", {
      className: c.cover,
      children: f
    }) : (0, l.jsx)(r.Clickable, {
      className: i(n, c.cover, {
        [c.active]: !e.disableInteractions
      }),
      onClick: t,
      tabIndex: 0,
      "aria-label": d.default.Messages.PLAY,
      focusProps: {
        ringTarget: m
      },
      children: f
    })
  })
}