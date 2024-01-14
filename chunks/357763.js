"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("272030"),
  i = n("380710"),
  r = n("592407"),
  s = n("724026"),
  d = n("49111"),
  o = n("782340");

function f(e) {
  let {
    guild: t,
    onSelect: n
  } = e, f = (0, s.default)(t.id), c = (0, i.isGuildOnboardingSettingsAvailable)(t.id);
  return (0, l.jsx)(u.Menu, {
    onSelect: n,
    navId: "guild-browse-channels-context-menu",
    "aria-label": o.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: a.closeContextMenu,
    children: (0, l.jsxs)(u.MenuGroup, {
      children: [c && (0, l.jsx)(u.MenuItem, {
        id: "go-to-settings",
        label: o.default.Messages.EDIT_ONBOARDING,
        action: () => {
          r.default.open(t.id, d.GuildSettingsSections.ONBOARDING)
        }
      }), f]
    })
  })
}