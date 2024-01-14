"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("782340"),
  u = n("909550");

function d(e) {
  let {
    className: t,
    onJump: n
  } = e, [s, d] = a.useState(!1);
  return (0, l.jsx)(r.Clickable, {
    className: i(u.jumpButton, t),
    onClick: e => {
      d(!0), n(e)
    },
    children: s ? (0, l.jsx)(r.Spinner, {
      type: r.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      className: u.text,
      children: o.default.Messages.JUMP
    })
  })
}