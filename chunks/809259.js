"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("126501"),
  s = n("816092"),
  d = n("782340");

function o(e) {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.isCollapsed(e.id), [e.id]);
  return __OVERLAY__ ? null : (0, a.jsx)(l.MenuCheckboxItem, {
    id: "hide-voice-names",
    label: d.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
    action: () => u.default.update(e.id),
    checked: t
  })
}