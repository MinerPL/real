            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("282109"),
                r = n("34676"),
                o = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "mute-events",
                    label: o.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void l.default.updateGuildNotificationSettings(e, n, r.NotificationLabel.mutedEvents(n.mute_scheduled_events))
                    },
                    checked: t
                })
            }