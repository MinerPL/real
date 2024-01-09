            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return S
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("446674"),
                a = i("77078"),
                l = i("519705"),
                r = i("282109"),
                d = i("34676"),
                o = i("49111"),
                u = i("782340"),
                c = i("775247");

            function S(e) {
                let {
                    guildId: t
                } = e, i = (0, s.useStateFromStoresObject)([r.default], () => ({
                    highligths: r.default.getNotifyHighlights(t),
                    mobilePush: r.default.isMobilePushEnabled(t),
                    suppressRoles: r.default.isSuppressRolesEnabled(t),
                    suppressEveryone: r.default.isSuppressEveryoneEnabled(t),
                    muteScheduledEvents: r.default.isMuteScheduledEventsEnabled(t)
                })), a = l.default.updateGuildNotificationSettings;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(h, {
                        value: i.suppressEveryone,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        }, d.NotificationLabel.suppressEveryone(e))
                    }), (0, n.jsx)(h, {
                        value: i.suppressRoles,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        }, d.NotificationLabel.suppressRoles(e))
                    }), (0, n.jsx)(h, {
                        subtitle: u.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: i.highligths === o.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED
                        }, d.NotificationLabel.highlights(e))
                    }), (0, n.jsx)(h, {
                        value: i.muteScheduledEvents,
                        title: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        }, d.NotificationLabel.mutedEvents(e))
                    }), (0, n.jsx)(h, {
                        value: i.mobilePush,
                        title: u.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        }, d.NotificationLabel.mobilePush(e))
                    })]
                })
            }

            function h(e) {
                return (0, n.jsx)(a.FormSwitch, {
                    hideBorder: !0,
                    className: c.advanceSetting,
                    value: e.value,
                    onChange: e.onChange,
                    note: e.subtitle,
                    children: e.title
                })
            }