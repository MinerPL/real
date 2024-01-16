"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  s = n("126501"),
  l = n("816092"),
  d = n("782340");

function o(e) {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.isCollapsed(e.id), [e.id]);
  return __OVERLAY__ ? null : (0, a.jsx)(u.MenuCheckboxItem, {
    id: "hide-voice-names",
    label: d.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
    action: () => s.default.update(e.id),
    checked: t
  })
}