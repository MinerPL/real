            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return l
                }
            });
            var n = u("37983");
            u("884691");
            var a = u("446674"),
                s = u("77078"),
                d = u("519705"),
                r = u("282109"),
                c = u("34676"),
                i = u("782340");

            function l(e) {
                let t = (0, a.useStateFromStores)([r.default], () => r.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, n.jsx)(s.MenuCheckboxItem, {
                    id: "mute-events",
                    label: i.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var u;
                        return u = {
                            mute_scheduled_events: !t
                        }, void d.default.updateGuildNotificationSettings(e, u, c.NotificationLabel.mutedEvents(u.mute_scheduled_events))
                    },
                    checked: t
                })
            }