"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  u = n("255397"),
  o = n("191145"),
  d = n("782340");

function r(e) {
  let t = (0, i.useStateFromStores)([o.default], () => o.default.getVoiceParticipantsHidden(e));
  return (0, l.jsx)(a.MenuCheckboxItem, {
    id: "no-video-hide",
    label: d.default.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
  })
}