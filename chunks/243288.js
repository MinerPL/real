"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  d = n("255397"),
  o = n("191145"),
  r = n("782340");

function s(e) {
  let t = (0, l.useStateFromStores)([o.default], () => o.default.getVoiceParticipantsHidden(e));
  return (0, a.jsx)(u.MenuCheckboxItem, {
    id: "no-video-hide",
    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
  })
}