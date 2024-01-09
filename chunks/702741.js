            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("377114"),
                u = n("834052"),
                l = n("907566"),
                o = n("782340");

            function r(e) {
                let t = u.default.isLive(e.id);
                return e.isGuildStageVoice() && t ? (0, a.jsx)(i.MenuItem, {
                    id: "report-stage",
                    label: o.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
                    action: () => (0, s.showReportModalForStageChannel)(e),
                    icon: l.default,
                    color: "danger"
                }) : null
            }