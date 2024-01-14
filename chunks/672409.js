"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("37983");
n("884691");
var a = n("77078"),
  r = n("272030"),
  c = n("835487"),
  l = n("782340");

function s(e) {
  let {
    target: t,
    onSelect: n
  } = e, s = (0, c.default)({
    type: t.getAttribute("data-type"),
    packId: t.getAttribute("data-pack-id")
  });
  return (0, u.jsx)(a.Menu, {
    navId: "expression-picker",
    onClose: r.closeContextMenu,
    "aria-label": l.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
    onSelect: n,
    className: "context-menu",
    children: (0, u.jsx)(a.MenuGroup, {
      children: s
    })
  })
}