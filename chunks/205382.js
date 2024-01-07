            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return v
                }
            }), s("222007"), s("702976");
            var i = s("37983"),
                l = s("884691"),
                a = s("414456"),
                n = s.n(a),
                r = s("65597"),
                d = s("225389"),
                o = s("833222"),
                u = s("77078"),
                c = s("519705"),
                h = s("282109"),
                f = s("593195"),
                N = s("956089"),
                g = s("34676"),
                S = s("277796"),
                E = s("546770"),
                m = s("286844"),
                T = s("507313"),
                _ = s("49111"),
                x = s("133335"),
                I = s("397336"),
                p = s("782340"),
                O = s("297697"),
                C = s("587621");
            let M = () => [{
                value: T.Presets.ALL_MESSAGES,
                name: p.default.Messages.NOTIFICATION_PRESET_1
            }, {
                value: T.Presets.MENTIONS,
                name: p.default.Messages.NOTIFICATION_PRESET_2
            }, {
                value: T.Presets.NOTHING,
                name: p.default.Messages.NOTIFICATION_PRESET_3
            }, {
                value: T.Presets.CUSTOM,
                name: p.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function v(e) {
                let {
                    guildId: t
                } = e, s = (0, r.default)([h.default], () => h.default.getGuildFlags(t)), a = (0, r.default)([h.default], () => {
                    let e = h.default.getGuildUnreadSetting(t),
                        s = h.default.getMessageNotifications(t);
                    return e === x.UnreadSetting.UNSET ? s === _.UserNotificationSettings.ALL_MESSAGES ? x.UnreadSetting.ALL_MESSAGES : x.UnreadSetting.ONLY_MENTIONS : e
                }), n = (0, r.default)([h.default], () => h.default.getMessageNotifications(t)), [f, N] = (0, l.useState)(!1), C = f ? T.Presets.CUSTOM : (0, T.presetFromSettings)(a, n), v = e => {
                    if (e === T.Presets.CUSTOM) {
                        N(!0);
                        return
                    }
                    N(!1), (0, E.updateGuildPreset)(t, e)
                };
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(u.SegmentedControl, {
                        value: C,
                        options: M(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return v(t)
                        },
                        look: "pill"
                    }), (0, i.jsxs)("div", {
                        className: O.grid,
                        children: [(0, i.jsx)(L, {
                            unreadSetting: a
                        }), (0, i.jsx)(A, {
                            notificationSetting: n
                        })]
                    }), (0, i.jsxs)("div", {
                        className: O.grid,
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: O.grid,
                        children: [(0, i.jsx)(u.SingleSelect, {
                            value: a,
                            className: O.input,
                            onChange: e => {
                                N(!1), c.default.updateGuildNotificationSettings(t, {
                                    flags: (0, S.withGuildUnreadFlags)(s, e === x.UnreadSetting.ALL_MESSAGES ? I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : I.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                }, g.NotificationLabel.unreads(e))
                            },
                            options: (0, m.getUnreadSelectOptions)({
                                notificationSetting: n
                            }),
                            renderOptionLabel: e => {
                                let t = e.disabled && e.value === x.UnreadSetting.ONLY_MENTIONS && a !== x.UnreadSetting.ONLY_MENTIONS;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, i.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            color: e.disabled ? "text-muted" : void 0,
                                            children: e.label
                                        })
                                    }), t && (0, i.jsx)(u.Tooltip, {
                                        text: p.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                                        children: e => (0, i.jsx)(o.DenyIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: O.muted
                                        })
                                    })]
                                })
                            }
                        }), (0, i.jsx)(u.SingleSelect, {
                            className: O.input,
                            value: n,
                            onChange: e => {
                                N(!1);
                                let s = {
                                    message_notifications: e
                                };
                                e === _.UserNotificationSettings.ALL_MESSAGES && a !== x.UnreadSetting.ALL_MESSAGES && (s.flags = (0, S.withGuildUnreadFlags)(h.default.getGuildFlags(t), I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, s, g.NotificationLabel.notifications(e))
                            },
                            options: (0, m.getPushNotificationSelectOptions)({
                                notificationSetting: n
                            }),
                            renderOptionLabel: e => {
                                let t = e.value === _.UserNotificationSettings.ALL_MESSAGES && a !== x.UnreadSetting.ALL_MESSAGES && n !== _.UserNotificationSettings.ALL_MESSAGES;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        children: e.label
                                    }), t && (0, i.jsx)(u.Tooltip, {
                                        text: p.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                                        children: e => (0, i.jsx)(d.CircleInformationIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: O.muted
                                        })
                                    })]
                                })
                            }
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    unreadSetting: t
                } = e, s = [{
                    badged: !0,
                    unread: !0,
                    muted: !1,
                    name: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
                }, {
                    badged: !1,
                    unread: !0,
                    muted: !0,
                    name: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
                }, {
                    badged: !1,
                    unread: !1,
                    muted: !0,
                    name: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
                }];
                return t === x.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, i.jsx)("div", {
                    className: O.channeList,
                    children: s.map(e => (0, i.jsxs)("div", {
                        className: O.channelListChannel,
                        children: [(0, i.jsxs)("div", {
                            className: O.channelListChannelName,
                            children: [(0, i.jsx)("div", {
                                className: n(O.unread, {
                                    [O.hidden]: !e.unread,
                                    [O.unreadMuted]: e.muted
                                })
                            }), (0, i.jsx)(f.default, {
                                height: 12,
                                width: 12,
                                className: n(O.channelListChannelIcon, {
                                    [O.muted]: e.muted
                                })
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, i.jsx)("div", {
                            className: n(O.badge, {
                                [O.hidden]: !e.badged
                            }),
                            children: (0, i.jsx)(N.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function A(e) {
                return (0, i.jsxs)("div", {
                    className: O.mockMessage,
                    children: [e.notificationSetting === _.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
                        className: O.mockMessageDisabled
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            className: O.mockMessageAvatar,
                            src: C,
                            alt: ""
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
                        }), e.notificationSetting === _.UserNotificationSettings.ALL_MESSAGES && (0, i.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== _.UserNotificationSettings.ALL_MESSAGES && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                tag: "span",
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                            })]
                        })]
                    })]
                })
            }