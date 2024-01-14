"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  i = n("272030"),
  u = n("525402"),
  d = n("782340");

function c(t) {
  let {
    libraryApplication: e,
    onPlay: n,
    onSelect: c
  } = t, o = (0, u.default)(e, n);
  return (0, a.jsx)(r.Menu, {
    navId: "launch-context",
    onClose: i.closeContextMenu,
    "aria-label": d.default.Messages.APPLICATION_ACTIONS_MENU_LABEL,
    onSelect: c,
    children: o
  })
}