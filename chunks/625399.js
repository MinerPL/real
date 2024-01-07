            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return E
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                s = n("884691"),
                a = n("77078"),
                o = n("519705"),
                l = n("437756"),
                S = n("277796"),
                r = n("507313"),
                d = n("282109"),
                u = n("34676"),
                g = n("49111"),
                N = n("133335"),
                _ = n("397336"),
                c = n("782340");

            function f(e) {
                let t = (0, l.useChannelPresetSettings)(e),
                    n = (0, l.useChannelPresetInheritance)(e),
                    o = t.preset === r.Presets.CUSTOM && !n.inherited,
                    [S, d] = s.useState(o),
                    [u, N] = s.useState(!1),
                    _ = u ? r.Presets.CUSTOM : t.preset,
                    f = E(e, () => N(!1));
                if (e.type === g.ChannelTypes.GUILD_VOICE) return null;
                let M = "parent" === n.inheritedFrom ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === g.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(a.MenuItem, {
                    id: "channel_notification_settings",
                    label: c.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === g.UserNotificationSettings.NO_MESSAGES ? c.default.Messages.FORM_LABEL_NOTHING : c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, l.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== g.UserNotificationSettings.NO_MESSAGES,
                        label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, l.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: c.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === g.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, l.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(a.MenuItem, {
                    id: "channel_notification_settings",
                    label: c.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        group: "channel_notification_settings",
                        checked: n.inherited && !u,
                        subtext: n.inheritedPreset,
                        action: () => ((0, l.updateChannelToGuildDefault)(e.guild_id, e.id), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && _ === r.Presets.ALL_MESSAGES,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, r.Presets.ALL_MESSAGES), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && _ === r.Presets.MENTIONS,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, r.Presets.MENTIONS), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && _ === r.Presets.NOTHING,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, r.Presets.NOTHING), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: u || !n.inherited && _ === r.Presets.CUSTOM,
                        action: () => (d(!0), N(!0))
                    }), (S || o) && f]
                })
            }

            function E(e, t) {
                let {
                    notification: n,
                    unread: s
                } = (0, l.useChannelPresetSettings)(e), r = e => {
                    e(), t()
                }, f = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === g.UserNotificationSettings.ALL_MESSAGES && s !== N.UnreadSetting.ALL_MESSAGES && (n.flags = (0, S.withChannelUnreadFlags)(d.default.getChannelIdFlags(e.guild_id, e.id), _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), o.default.updateChannelOverrideSettings(e.guild_id, e.id, n, u.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(a.MenuGroup, {
                    children: [(0, i.jsxs)(a.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(a.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: s === N.UnreadSetting.ALL_MESSAGES,
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => r(() => (0, l.updateChannelUnreadSetting)(e.guild_id, e.id, N.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(a.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: s === N.UnreadSetting.ONLY_MENTIONS,
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: s !== N.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES,
                            subtext: s !== N.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES ? c.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => r(() => (0, l.updateChannelUnreadSetting)(e.guild_id, e.id, N.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(a.MenuItem, {
                        id: "push_settings",
                        label: c.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === g.UserNotificationSettings.ALL_MESSAGES,
                            subtext: s !== N.UnreadSetting.ALL_MESSAGES && n !== g.UserNotificationSettings.ALL_MESSAGES ? c.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => r(() => f(g.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === g.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => r(() => f(g.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === g.UserNotificationSettings.NO_MESSAGES,
                            action: () => r(() => f(g.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }