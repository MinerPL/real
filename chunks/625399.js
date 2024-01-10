            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return E
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                r = n("519705"),
                o = n("437756"),
                l = n("277796"),
                d = n("507313"),
                u = n("282109"),
                S = n("34676"),
                f = n("49111"),
                c = n("133335"),
                g = n("397336"),
                N = n("782340");

            function _(e) {
                let t = (0, o.useChannelPresetSettings)(e),
                    n = (0, o.useChannelPresetInheritance)(e),
                    r = t.preset === d.Presets.CUSTOM && !n.inherited,
                    [l, u] = a.useState(r),
                    [S, c] = a.useState(!1),
                    g = S ? d.Presets.CUSTOM : t.preset,
                    _ = E(e, () => c(!1));
                if (e.type === f.ChannelTypes.GUILD_VOICE) return null;
                let h = "parent" === n.inheritedFrom ? N.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === f.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === f.UserNotificationSettings.NO_MESSAGES ? N.default.Messages.FORM_LABEL_NOTHING : N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== f.UserNotificationSettings.NO_MESSAGES,
                        label: N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, f.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: N.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === f.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, f.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        group: "channel_notification_settings",
                        checked: n.inherited && !S,
                        subtext: n.inheritedPreset,
                        action: () => ((0, o.updateChannelToGuildDefault)(e.guild_id, e.id), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && g === d.Presets.ALL_MESSAGES,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, d.Presets.ALL_MESSAGES), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && g === d.Presets.MENTIONS,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, d.Presets.MENTIONS), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && g === d.Presets.NOTHING,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, d.Presets.NOTHING), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: S || !n.inherited && g === d.Presets.CUSTOM,
                        action: () => (u(!0), c(!0))
                    }), (l || r) && _]
                })
            }

            function E(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, o.useChannelPresetSettings)(e), d = e => {
                    e(), t()
                }, _ = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === f.UserNotificationSettings.ALL_MESSAGES && a !== c.UnreadSetting.ALL_MESSAGES && (n.flags = (0, l.withChannelUnreadFlags)(u.default.getChannelIdFlags(e.guild_id, e.id), g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), r.default.updateChannelOverrideSettings(e.guild_id, e.id, n, S.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsxs)(s.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === c.UnreadSetting.ALL_MESSAGES,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => d(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === c.UnreadSetting.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== c.UnreadSetting.ONLY_MENTIONS && n === f.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== c.UnreadSetting.ONLY_MENTIONS && n === f.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => d(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                        id: "push_settings",
                        label: N.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === f.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== c.UnreadSetting.ALL_MESSAGES && n !== f.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => d(() => _(f.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === f.UserNotificationSettings.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => d(() => _(f.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === f.UserNotificationSettings.NO_MESSAGES,
                            action: () => d(() => _(f.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }