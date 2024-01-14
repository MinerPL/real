"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  i = n("77078"),
  u = n("568131"),
  d = n("686470"),
  c = n("535974");

function o(t, e) {
  let n = (0, r.useStateFromStores)([c.default], () => c.default.getLaunchOptions(t.id, t.branchId)),
    o = (0, r.useStateFromStores)([d.default], () => d.default.getActiveLaunchOptionId(t.id, t.branchId));
  return n.length < 2 ? null : n.map(n => (0, a.jsx)(i.MenuItem, {
    id: n.id,
    label: n.name,
    action: a => {
      n.id !== o && u.setActiveLaunchOptionId(t.id, t.branchId, n.id), null == e || e(a)
    }
  }, n.id))
}