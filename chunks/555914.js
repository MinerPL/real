"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var s = n("446674"),
  a = n("77078"),
  l = n("952451"),
  u = n("542827"),
  d = n("782340");

function o(e, t) {
  let n = e.id,
    o = (0, s.useStateFromStores)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
  return (0, i.jsx)(a.MenuItem, {
    id: "mark-guild-read",
    label: d.default.Messages.MARK_AS_READ,
    icon: void 0,
    action: () => (0, u.default)([n], t.section),
    disabled: !o
  })
}