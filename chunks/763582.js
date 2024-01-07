            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var a = t("37983");
            t("884691");
            var s = t("866227"),
                d = t.n(s),
                u = t("77078"),
                r = t("272030"),
                i = t("931318"),
                o = t("815384"),
                l = t("782340");

            function c(e) {
                let {
                    message: n
                } = e, t = (0, o.useMessageReminderDurations)(n, e => (0, i.updateReminderDueAt)(n.id, d().add(e, "millisecond").toDate()));
                return (0, a.jsx)(u.Menu, {
                    navId: "message-reminder-snooze",
                    onClose: r.closeContextMenu,
                    "aria-label": l.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: () => {},
                    children: t
                })
            }