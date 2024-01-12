            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("282109"),
                d = n("34676"),
                o = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mute-events",
                    label: o.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void l.default.updateGuildNotificationSettings(e, n, d.NotificationLabel.mutedEvents(n.mute_scheduled_events))
                    },
                    checked: t
                })
            }