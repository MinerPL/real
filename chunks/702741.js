"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("377114"),
  u = n("834052"),
  s = n("907566"),
  d = n("782340");

function o(e) {
  let t = u.default.isLive(e.id);
  return e.isGuildStageVoice() && t ? (0, a.jsx)(i.MenuItem, {
    id: "report-stage",
    label: d.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
    action: () => (0, l.showReportModalForStageChannel)(e),
    icon: s.default,
    color: "danger"
  }) : null
}