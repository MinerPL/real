"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  s = n("126501"),
  d = n("282109"),
  i = n("782340");

function r(e) {
  let t = (0, l.useStateFromStores)([d.default], () => d.default.isGuildCollapsed(e), [e]);
  return (0, a.jsx)(u.MenuCheckboxItem, {
    id: "hide-muted-channels",
    label: i.default.Messages.HIDE_MUTED_CHANNELS,
    action: () => s.default.toggleCollapseGuild(e),
    checked: t
  })
}