            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("446674"),
                a = s("77078"),
                n = s("519705"),
                r = s("282109"),
                d = s("34676"),
                o = s("49111"),
                u = s("782340"),
                c = s("775247");

            function h(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStoresObject)([r.default], () => ({
                    highligths: r.default.getNotifyHighlights(t),
                    mobilePush: r.default.isMobilePushEnabled(t),
                    suppressRoles: r.default.isSuppressRolesEnabled(t),
                    suppressEveryone: r.default.isSuppressEveryoneEnabled(t),
                    muteScheduledEvents: r.default.isMuteScheduledEventsEnabled(t)
                })), a = n.default.updateGuildNotificationSettings;
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(f, {
                        value: s.suppressEveryone,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        }, d.NotificationLabel.suppressEveryone(e))
                    }), (0, i.jsx)(f, {
                        value: s.suppressRoles,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        }, d.NotificationLabel.suppressRoles(e))
                    }), (0, i.jsx)(f, {
                        subtitle: u.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: s.highligths === o.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED
                        }, d.NotificationLabel.highlights(e))
                    }), (0, i.jsx)(f, {
                        value: s.muteScheduledEvents,
                        title: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        }, d.NotificationLabel.mutedEvents(e))
                    }), (0, i.jsx)(f, {
                        value: s.mobilePush,
                        title: u.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        }, d.NotificationLabel.mobilePush(e))
                    })]
                })
            }

            function f(e) {
                return (0, i.jsx)(a.FormSwitch, {
                    hideBorder: !0,
                    className: c.advanceSetting,
                    value: e.value,
                    onChange: e.onChange,
                    note: e.subtitle,
                    children: e.title
                })
            }