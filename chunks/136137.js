"use strict";
t.r(u), t.d(u, {
  default: function() {
    return d
  }
});
var n = t("37983");
t("884691");
var a = t("77078"),
  l = t("272030"),
  s = t("692356"),
  r = t("206059"),
  o = t("782340");

function d(e) {
  let {
    guildId: u,
    onSelect: t,
    onPickerClose: d
  } = e, i = (0, r.default)(u, d), c = (0, s.default)();
  return (0, n.jsx)(a.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": o.default.Messages.USER_ACTIONS_MENU_LABEL,
    className: "context-menu",
    onSelect: t,
    children: (0, n.jsxs)(a.MenuGroup, {
      children: [c, i]
    })
  })
}