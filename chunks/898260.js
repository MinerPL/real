"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("841559"),
  u = n("782340"),
  c = n("359027"),
  o = a.forwardRef(function(e, t) {
    let {
      className: n,
      contentClassName: a,
      isUnread: s,
      children: o,
      id: d,
      role: f,
      "aria-label": E
    } = e;
    return (0, r.jsxs)("div", {
      className: i(n, {
        [c.divider]: !0,
        [c.isUnread]: s,
        [c.hasContent]: null != o
      }),
      ref: t,
      id: d,
      role: f,
      "aria-label": E,
      children: [null != o ? (0, r.jsx)("span", {
        className: i(c.content, a),
        children: o
      }) : null, s ? (0, r.jsxs)("span", {
        className: c.unreadPill,
        children: [(0, r.jsx)(l.default, {
          foreground: c.unreadPillCapStroke,
          className: c.unreadPillCap
        }), u.default.Messages.NEW]
      }) : null]
    })
  })