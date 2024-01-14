"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("37983");
a("884691");
var l = a("446674"),
  i = a("77078"),
  u = a("535974"),
  r = a("269180"),
  d = a("773336"),
  s = a("782340");

function c(e, t) {
  let a = e.getBranchedName(t),
    c = (0, l.useStateFromStores)([u.default], () => {
      let t = u.default.getState(e.id, e.branchId);
      return null == t ? void 0 : t.installPath
    }, [e.branchId, e.id]);
  return null != c && (0, d.isDesktop)() ? (0, n.jsx)(i.MenuItem, {
    id: "create-shortcut",
    label: s.default.Messages.APPLICATION_CONTEXT_MENU_CREATE_DESKTOP_SHORTCUT,
    action: () => r.default.createShortcuts(!0, !1, a, e.id, c)
  }) : null
}