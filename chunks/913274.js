            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("377114"),
                s = n("907566"),
                u = n("870190"),
                r = n("782340");

            function d(e) {
                return (0, u.canReportMessage)(e) ? (0, a.jsx)(i.MenuItem, {
                    id: "report",
                    label: r.default.Messages.REPORT_MESSAGE_MENU_OPTION,
                    action: () => (0, l.showReportModalForMessage)(e),
                    icon: s.default,
                    color: "danger"
                }) : null
            }