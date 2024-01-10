            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                s = n("884691"),
                a = n("446674"),
                l = n("77078"),
                u = n("519705"),
                o = n("277796"),
                d = n("546770"),
                r = n("507313"),
                c = n("282109"),
                S = n("34676"),
                f = n("49111"),
                g = n("133335"),
                E = n("397336"),
                _ = n("782340");

            function N(e) {
                return (0, i.jsxs)(l.MenuItem, {
                    id: "notification",
                    label: _.default.Messages.NOTIFICATIONS,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("747593").then(n.bind(n, "747593"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                guildId: e
                            })
                        })
                    },
                    children: [function(e) {
                        let [t, n] = s.useState(!1), [N, M] = s.useState(!1), h = (0, a.useStateFromStores)([c.default], () => c.default.getGuildUnreadSetting(e)), I = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e)), T = N ? r.Presets.CUSTOM : (0, r.presetFromSettings)(h, I), A = t => {
                            M(!1);
                            let n = {
                                message_notifications: t
                            };
                            t === f.UserNotificationSettings.ALL_MESSAGES && h !== g.UnreadSetting.ALL_MESSAGES && (n.flags = (0, o.withGuildUnreadFlags)(c.default.getGuildFlags(e), E.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), u.default.updateGuildNotificationSettings(e, n, S.NotificationLabel.notifications(t))
                        }, L = t => {
                            M(!1);
                            let n = c.default.getGuildFlags(e);
                            u.default.updateGuildNotificationSettings(e, {
                                flags: (0, o.withGuildUnreadFlags)(n, t === g.UnreadSetting.ALL_MESSAGES ? E.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : E.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                            }, S.NotificationLabel.unreads(t))
                        };
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsx)(l.MenuRadioItem, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: T === r.Presets.ALL_MESSAGES,
                                    label: _.default.Messages.NOTIFICATION_PRESET_1,
                                    action: () => ((0, d.updateGuildPreset)(e, r.Presets.ALL_MESSAGES), M(!1))
                                }), (0, i.jsx)(l.MenuRadioItem, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: T === r.Presets.MENTIONS,
                                    label: _.default.Messages.NOTIFICATION_PRESET_2,
                                    action: () => ((0, d.updateGuildPreset)(e, r.Presets.MENTIONS), M(!1))
                                }), (0, i.jsx)(l.MenuRadioItem, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: T === r.Presets.NOTHING,
                                    label: _.default.Messages.NOTIFICATION_PRESET_3,
                                    action: () => ((0, d.updateGuildPreset)(e, r.Presets.NOTHING), M(!1))
                                }), (0, i.jsx)(l.MenuRadioItem, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: T === r.Presets.CUSTOM,
                                    action: () => (n(!0), M(!0)),
                                    label: _.default.Messages.NOTIFICATION_PRESET_CUSTOM
                                })]
                            }), (T === r.Presets.CUSTOM || t) && (0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsxs)(l.MenuItem, {
                                    id: "unread_setting",
                                    label: "Unread Badges",
                                    children: [(0, i.jsx)(l.MenuRadioItem, {
                                        id: "unread_setting_all_messages",
                                        group: "unread_setting",
                                        checked: h === g.UnreadSetting.ALL_MESSAGES,
                                        label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                        action: () => L(g.UnreadSetting.ALL_MESSAGES)
                                    }), (0, i.jsx)(l.MenuRadioItem, {
                                        id: "unread_setting_mention_only",
                                        group: "unread_setting",
                                        checked: h === g.UnreadSetting.ONLY_MENTIONS,
                                        label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                        action: () => L(g.UnreadSetting.ONLY_MENTIONS),
                                        disabled: h !== g.UnreadSetting.ONLY_MENTIONS && I === f.UserNotificationSettings.ALL_MESSAGES,
                                        subtext: h !== g.UnreadSetting.ONLY_MENTIONS && I === f.UserNotificationSettings.ALL_MESSAGES ? _.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0
                                    })]
                                }, "unread_setting"), (0, i.jsxs)(l.MenuItem, {
                                    id: "push_settings",
                                    label: _.default.Messages.NOTIFICATIONS,
                                    children: [(0, i.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything",
                                        label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                        checked: I === f.UserNotificationSettings.ALL_MESSAGES,
                                        action: () => A(f.UserNotificationSettings.ALL_MESSAGES),
                                        subtext: h !== g.UnreadSetting.ALL_MESSAGES && I !== f.UserNotificationSettings.ALL_MESSAGES ? _.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0
                                    }), (0, i.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything_mention",
                                        checked: I === f.UserNotificationSettings.ONLY_MENTIONS,
                                        label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                        action: () => A(f.UserNotificationSettings.ONLY_MENTIONS)
                                    }), (0, i.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything_nothing",
                                        label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                                        checked: I === f.UserNotificationSettings.NO_MESSAGES,
                                        action: () => A(f.UserNotificationSettings.NO_MESSAGES)
                                    })]
                                }, "push_settings")]
                            })]
                        })
                    }(e), function(e) {
                        let t = (0, a.useStateFromStoresObject)([c.default], () => ({
                                highligths: c.default.getNotifyHighlights(e),
                                mobilePush: c.default.isMobilePushEnabled(e),
                                suppressRoles: c.default.isSuppressRolesEnabled(e),
                                suppressEveryone: c.default.isSuppressEveryoneEnabled(e),
                                muteScheduledEvents: c.default.isMuteScheduledEventsEnabled(e)
                            })),
                            n = u.default.updateGuildNotificationSettings;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "mention",
                                    checked: t.suppressEveryone,
                                    label: _.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => n(e, {
                                        suppress_everyone: !t.suppressEveryone
                                    }, S.NotificationLabel.suppressEveryone(!t.suppressEveryone))
                                }), (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "roles",
                                    checked: t.suppressRoles,
                                    label: _.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => n(e, {
                                        suppress_roles: !t.suppressRoles
                                    }, S.NotificationLabel.suppressRoles(!t.suppressRoles))
                                }), (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "hightlight",
                                    label: _.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    checked: t.highligths === f.HighlightSettings.ENABLED,
                                    action: () => n(e, {
                                        notify_highlights: t.highligths === f.HighlightSettings.ENABLED ? f.HighlightSettings.DISABLED : f.HighlightSettings.ENABLED
                                    }, S.NotificationLabel.highlights(t.highligths !== f.HighlightSettings.ENABLED))
                                })]
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "event",
                                    checked: t.muteScheduledEvents,
                                    label: _.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                                    action: () => n(e, {
                                        mute_scheduled_events: !t.muteScheduledEvents
                                    }, S.NotificationLabel.mutedEvents(!t.muteScheduledEvents))
                                }), (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "mobile_push",
                                    checked: t.mobilePush,
                                    label: _.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => n(e, {
                                        mobile_push: !t.mobilePush
                                    }, S.NotificationLabel.mobilePush(!t.mobilePush))
                                })]
                            })]
                        })
                    }(e)]
                })
            }