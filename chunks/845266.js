"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("37983");
a("884691");
var l = a("77078"),
  i = a("845579"),
  u = a("306160"),
  r = a("782340");

function d(e, t) {
  let a = t.primarySkuId,
    d = i.DeveloperMode.useSetting();
  return !__OVERLAY__ && d && u.SUPPORTS_COPY ? (0, n.jsxs)(l.MenuItem, {
    id: "application-dev",
    label: r.default.Messages.COPY,
    action: () => (0, u.copy)(t.id),
    children: [(0, n.jsx)(l.MenuItem, {
      id: "app-id",
      label: r.default.Messages.APPLICATION_CONTEXT_MENU_APPLICATION_ID,
      action: () => (0, u.copy)(t.id)
    }), null != e ? (0, n.jsx)(l.MenuItem, {
      id: "branch-id",
      label: r.default.Messages.APPLICATION_CONTEXT_MENU_BRANCH_ID,
      action: () => (0, u.copy)(e.branchId)
    }) : null, null != a ? (0, n.jsx)(l.MenuItem, {
      id: "sku-id",
      label: r.default.Messages.APPLICATION_CONTEXT_MENU_SKU_ID,
      action: () => (0, u.copy)(a)
    }) : null]
  }) : null
}