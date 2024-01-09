            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return N
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("519705"),
                u = n("437756"),
                r = n("277796"),
                o = n("507313"),
                d = n("282109"),
                f = n("34676"),
                c = n("49111"),
                _ = n("133335"),
                S = n("397336"),
                g = n("782340");

            function E(e) {
                let t = (0, u.useChannelPresetSettings)(e),
                    n = (0, u.useChannelPresetInheritance)(e),
                    l = t.preset === o.Presets.CUSTOM && !n.inherited,
                    [r, d] = a.useState(l),
                    [f, _] = a.useState(!1),
                    S = f ? o.Presets.CUSTOM : t.preset,
                    E = N(e, () => _(!1));
                if (e.type === c.ChannelTypes.GUILD_VOICE) return null;
                let M = "parent" === n.inheritedFrom ? g.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : g.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === c.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: g.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === c.UserNotificationSettings.NO_MESSAGES ? g.default.Messages.FORM_LABEL_NOTHING : g.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, u.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== c.UserNotificationSettings.NO_MESSAGES,
                        label: g.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, u.updateChannelNotificationSetting)(e.guild_id, e.id, c.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: g.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === c.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, u.updateChannelNotificationSetting)(e.guild_id, e.id, c.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: g.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        group: "channel_notification_settings",
                        checked: n.inherited && !f,
                        subtext: n.inheritedPreset,
                        action: () => ((0, u.updateChannelToGuildDefault)(e.guild_id, e.id), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && S === o.Presets.ALL_MESSAGES,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, o.Presets.ALL_MESSAGES), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && S === o.Presets.MENTIONS,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, o.Presets.MENTIONS), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && S === o.Presets.NOTHING,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, o.Presets.NOTHING), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: f || !n.inherited && S === o.Presets.CUSTOM,
                        action: () => (d(!0), _(!0))
                    }), (r || l) && E]
                })
            }

            function N(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, u.useChannelPresetSettings)(e), o = e => {
                    e(), t()
                }, E = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === c.UserNotificationSettings.ALL_MESSAGES && a !== _.UnreadSetting.ALL_MESSAGES && (n.flags = (0, r.withChannelUnreadFlags)(d.default.getChannelIdFlags(e.guild_id, e.id), S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), l.default.updateChannelOverrideSettings(e.guild_id, e.id, n, f.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsxs)(s.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === _.UnreadSetting.ALL_MESSAGES,
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => o(() => (0, u.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === _.UnreadSetting.ONLY_MENTIONS,
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== _.UnreadSetting.ONLY_MENTIONS && n === c.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== _.UnreadSetting.ONLY_MENTIONS && n === c.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => o(() => (0, u.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                        id: "push_settings",
                        label: g.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === c.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== _.UnreadSetting.ALL_MESSAGES && n !== c.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => o(() => E(c.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === c.UserNotificationSettings.ONLY_MENTIONS,
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => o(() => E(c.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === c.UserNotificationSettings.NO_MESSAGES,
                            action: () => o(() => E(c.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }