            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            }), i("222007"), i("702976");
            var n = i("37983"),
                s = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("65597"),
                d = i("225389"),
                o = i("833222"),
                u = i("77078"),
                c = i("519705"),
                S = i("282109"),
                h = i("593195"),
                g = i("956089"),
                N = i("34676"),
                f = i("277796"),
                _ = i("546770"),
                E = i("286844"),
                T = i("507313"),
                m = i("49111"),
                I = i("133335"),
                O = i("397336"),
                M = i("782340"),
                x = i("297697"),
                C = i("587621");
            let p = () => [{
                value: T.Presets.ALL_MESSAGES,
                name: M.default.Messages.NOTIFICATION_PRESET_1
            }, {
                value: T.Presets.MENTIONS,
                name: M.default.Messages.NOTIFICATION_PRESET_2
            }, {
                value: T.Presets.NOTHING,
                name: M.default.Messages.NOTIFICATION_PRESET_3
            }, {
                value: T.Presets.CUSTOM,
                name: M.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function L(e) {
                let {
                    guildId: t
                } = e, i = (0, r.default)([S.default], () => S.default.getGuildFlags(t)), a = (0, r.default)([S.default], () => {
                    let e = S.default.getGuildUnreadSetting(t),
                        i = S.default.getMessageNotifications(t);
                    return e === I.UnreadSetting.UNSET ? i === m.UserNotificationSettings.ALL_MESSAGES ? I.UnreadSetting.ALL_MESSAGES : I.UnreadSetting.ONLY_MENTIONS : e
                }), l = (0, r.default)([S.default], () => S.default.getMessageNotifications(t)), [h, g] = (0, s.useState)(!1), C = h ? T.Presets.CUSTOM : (0, T.presetFromSettings)(a, l), L = e => {
                    if (e === T.Presets.CUSTOM) {
                        g(!0);
                        return
                    }
                    g(!1), (0, _.updateGuildPreset)(t, e)
                };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(u.SegmentedControl, {
                        value: C,
                        options: p(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return L(t)
                        },
                        look: "pill"
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        children: [(0, n.jsx)(A, {
                            unreadSetting: a
                        }), (0, n.jsx)(v, {
                            notificationSetting: l
                        })]
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        children: [(0, n.jsx)(u.SingleSelect, {
                            value: a,
                            className: x.input,
                            onChange: e => {
                                g(!1), c.default.updateGuildNotificationSettings(t, {
                                    flags: (0, f.withGuildUnreadFlags)(i, e === I.UnreadSetting.ALL_MESSAGES ? O.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : O.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                }, N.NotificationLabel.unreads(e))
                            },
                            options: (0, E.getUnreadSelectOptions)({
                                notificationSetting: l
                            }),
                            renderOptionLabel: e => {
                                let t = e.disabled && e.value === I.UnreadSetting.ONLY_MENTIONS && a !== I.UnreadSetting.ONLY_MENTIONS;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        children: (0, n.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            color: e.disabled ? "text-muted" : void 0,
                                            children: e.label
                                        })
                                    }), t && (0, n.jsx)(u.Tooltip, {
                                        text: M.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                                        children: e => (0, n.jsx)(o.DenyIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: x.muted
                                        })
                                    })]
                                })
                            }
                        }), (0, n.jsx)(u.SingleSelect, {
                            className: x.input,
                            value: l,
                            onChange: e => {
                                g(!1);
                                let i = {
                                    message_notifications: e
                                };
                                e === m.UserNotificationSettings.ALL_MESSAGES && a !== I.UnreadSetting.ALL_MESSAGES && (i.flags = (0, f.withGuildUnreadFlags)(S.default.getGuildFlags(t), O.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, i, N.NotificationLabel.notifications(e))
                            },
                            options: (0, E.getPushNotificationSelectOptions)({
                                notificationSetting: l
                            }),
                            renderOptionLabel: e => {
                                let t = e.value === m.UserNotificationSettings.ALL_MESSAGES && a !== I.UnreadSetting.ALL_MESSAGES && l !== m.UserNotificationSettings.ALL_MESSAGES;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        children: e.label
                                    }), t && (0, n.jsx)(u.Tooltip, {
                                        text: M.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                                        children: e => (0, n.jsx)(d.CircleInformationIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: x.muted
                                        })
                                    })]
                                })
                            }
                        })]
                    })]
                })
            }

            function A(e) {
                let {
                    unreadSetting: t
                } = e, i = [{
                    badged: !0,
                    unread: !0,
                    muted: !1,
                    name: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
                }, {
                    badged: !1,
                    unread: !0,
                    muted: !0,
                    name: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
                }, {
                    badged: !1,
                    unread: !1,
                    muted: !0,
                    name: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
                }];
                return t === I.UnreadSetting.ALL_MESSAGES && (i[1].muted = !1), (0, n.jsx)("div", {
                    className: x.channeList,
                    children: i.map(e => (0, n.jsxs)("div", {
                        className: x.channelListChannel,
                        children: [(0, n.jsxs)("div", {
                            className: x.channelListChannelName,
                            children: [(0, n.jsx)("div", {
                                className: l(x.unread, {
                                    [x.hidden]: !e.unread,
                                    [x.unreadMuted]: e.muted
                                })
                            }), (0, n.jsx)(h.default, {
                                height: 12,
                                width: 12,
                                className: l(x.channelListChannelIcon, {
                                    [x.muted]: e.muted
                                })
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, n.jsx)("div", {
                            className: l(x.badge, {
                                [x.hidden]: !e.badged
                            }),
                            children: (0, n.jsx)(g.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function v(e) {
                return (0, n.jsxs)("div", {
                    className: x.mockMessage,
                    children: [e.notificationSetting === m.UserNotificationSettings.NO_MESSAGES && (0, n.jsx)("div", {
                        className: x.mockMessageDisabled
                    }), (0, n.jsx)("div", {
                        children: (0, n.jsx)("img", {
                            className: x.mockMessageAvatar,
                            src: C,
                            alt: ""
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
                        }), e.notificationSetting === m.UserNotificationSettings.ALL_MESSAGES && (0, n.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== m.UserNotificationSettings.ALL_MESSAGES && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                tag: "span",
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                            })]
                        })]
                    })]
                })
            }