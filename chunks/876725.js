            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("377114"),
                i = n("907566"),
                r = n("398604"),
                s = n("782340");

            function o(e) {
                let t = (0, u.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]);
                return null == e || null == t ? null : (0, l.jsx)(a.MenuItem, {
                    id: "report-event",
                    label: s.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                    action: () => (0, d.showReportModalForGuildScheduledEvent)(t),
                    icon: i.default,
                    color: "danger"
                })
            }