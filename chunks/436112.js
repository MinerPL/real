            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Y
                }
            }), s("424973"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("446674"),
                u = s("77078"),
                c = s("404118"),
                S = s("193990");
            s("519705");
            var E = s("533280"),
                f = s("408166"),
                T = s("298878"),
                m = s("54346"),
                _ = s("684581"),
                g = s("488284"),
                h = s("649649"),
                I = s("640497"),
                N = s("699668");
            s("748021");
            var p = s("168067"),
                C = s("820974"),
                A = s("385649"),
                O = s("282109"),
                x = s("368121"),
                R = s("599110"),
                M = s("566673"),
                v = s("773336"),
                D = s("709681"),
                L = s("845579"),
                P = s("872173"),
                j = s("77809"),
                b = s("49111");
            s("76618");
            var U = s("782340"),
                B = s("9162"),
                y = s("926622");

            function F(e) {
                let {
                    label: t,
                    enabled: s,
                    disabled: n,
                    onPreview: l,
                    onChange: i
                } = e;
                return (0, a.jsx)(u.FormSwitch, {
                    className: B.soundRow,
                    value: s,
                    onChange: i,
                    disabled: n,
                    children: (0, a.jsxs)("div", {
                        className: B.notificationSound,
                        children: [(0, a.jsx)("div", {
                            className: B.soundName,
                            children: t
                        }), (0, a.jsx)(u.Clickable, {
                            className: B.soundIcon,
                            onClick: l,
                            "aria-label": U.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
                            children: (0, a.jsx)(x.default, {
                                width: 16,
                                height: 16,
                                className: B.icon,
                                "aria-hidden": !0
                            })
                        })]
                    })
                })
            }

            function G(e) {
                let {
                    disabledSounds: t,
                    disableAllSounds: s,
                    notifyMessagesInSelectedChannel: l
                } = e, {
                    allowAprilFoolsSoundpack: r
                } = p.default.useExperiment({
                    location: "791c79_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enabled: o
                } = f.ActivitiesSoundsExperiment.useExperiment({
                    location: "791c79_2"
                }, {
                    autoTrackExposure: !1
                }), d = g.default.useIsRingtoneEligible();
                n.useEffect(() => {
                    p.default.trackExposure({
                        location: "791c79_3"
                    })
                }, []);
                let c = n.useRef(),
                    E = n.useCallback((e, t) => {
                        t.stopPropagation(), t.preventDefault(), null != c.current && c.current.stop(), c.current = D.playSound(e)
                    }, []),
                    T = n.useCallback((e, s) => {
                        let a = t.filter(t => t !== e);
                        !s && a.push(e), e === _.default.ringtone && R.default.track(b.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                            toggled_on: s,
                            sound_name: e
                        }), S.default.setDisabledSounds(a)
                    }, [t]);
                n.useEffect(() => () => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.stop()
                });
                let m = [{
                    label: U.default.Messages.SOUND_MESSAGE,
                    sound: "message1"
                }, {
                    label: U.default.Messages.SOUND_DEAFEN,
                    sound: "deafen"
                }, {
                    label: U.default.Messages.SOUND_UNDEAFEN,
                    sound: "undeafen"
                }, {
                    label: U.default.Messages.MUTE,
                    sound: "mute"
                }, {
                    label: U.default.Messages.UNMUTE,
                    sound: "unmute"
                }, {
                    label: U.default.Messages.SOUND_VOICE_DISCONNECTED,
                    sound: "disconnect"
                }, {
                    label: U.default.Messages.SOUND_PTT_ACTIVATE,
                    sound: "ptt_start"
                }, {
                    label: U.default.Messages.SOUND_PTT_DEACTIVATE,
                    sound: "ptt_stop"
                }, {
                    label: U.default.Messages.SOUND_USER_JOIN,
                    sound: "user_join"
                }, {
                    label: U.default.Messages.SOUND_USER_LEAVE,
                    sound: "user_leave"
                }, {
                    label: U.default.Messages.SOUND_USER_MOVED,
                    sound: "user_moved"
                }, {
                    label: U.default.Messages.SOUND_OUTGOING_RING,
                    sound: "call_calling"
                }, {
                    label: U.default.Messages.SOUND_INCOMING_RING,
                    sound: "call_ringing"
                }, ...d ? [{
                    label: _.default.getRingtoneSettingsLabel(),
                    sound: _.default.ringtone,
                    disabled: t.includes("call_ringing")
                }] : [], {
                    label: U.default.Messages.SOUND_STREAM_STARTED,
                    sound: "stream_started"
                }, {
                    label: U.default.Messages.SOUND_STREAM_STOPPED,
                    sound: "stream_ended"
                }, {
                    label: U.default.Messages.SOUND_VIEWER_JOIN,
                    sound: "stream_user_joined"
                }, {
                    label: U.default.Messages.SOUND_VIEWER_LEAVE,
                    sound: "stream_user_left"
                }, ...o ? [{
                    label: U.default.Messages.SOUND_ACTIVITY_START,
                    sound: "activity_launch"
                }, {
                    label: U.default.Messages.SOUND_ACTIVITY_END,
                    sound: "activity_end"
                }, {
                    label: U.default.Messages.SOUND_ACTIVITY_USER_JOIN,
                    sound: "activity_user_join"
                }, {
                    label: U.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
                    sound: "activity_user_left"
                }] : [], {
                    label: U.default.Messages.SOUND_INVITED_TO_SPEAK,
                    sound: "reconnect"
                }];
                return (0, a.jsxs)(u.FormSection, {
                    tag: u.FormTitleTags.H1,
                    title: U.default.Messages.SOUNDS,
                    children: [r ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.FormTitle, {
                            className: y.marginBottom20,
                            children: U.default.Messages.SOUNDPACK_LABEL
                        }), (0, a.jsx)(C.default, {
                            className: i(B.soundpackSelect, y.marginBottom40)
                        })]
                    }) : null, (0, a.jsx)(u.FormSwitch, {
                        note: U.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
                        value: l,
                        onChange: S.default.setNotifyMessagesInSelectedChannel,
                        children: U.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
                    }), (0, a.jsx)(u.FormSwitch, {
                        note: U.default.Messages.SOUND_DISABLE_ALL_NOTE,
                        value: s,
                        onChange: S.default.toggleDisableAllSounds,
                        children: U.default.Messages.SOUND_DISABLE_ALL
                    }), m.map(e => {
                        let {
                            label: n,
                            sound: l,
                            disabled: i
                        } = e;
                        return (0, a.jsx)(F, {
                            label: n,
                            disabled: s || !0 === i,
                            onChange: e => T(l, e),
                            onPreview: e => E(l, e),
                            enabled: !s && !t.includes(l)
                        }, l)
                    })]
                })
            }

            function k() {
                let e = (0, d.useStateFromStores)([m.default], () => m.default.getGuildAlertSettings()),
                    [t, s] = n.useState(null),
                    l = Object.keys(e).map(t => {
                        let s = e[t];
                        return {
                            label: s.guildName,
                            value: s.guildId
                        }
                    });
                return 0 === Object.keys(e).length ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(u.Heading, {
                        variant: "heading-lg/semibold",
                        className: i(B.titleWithBeta, y.marginBottom20),
                        children: [U.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(T.default, {})]
                    }), (0, a.jsx)(u.FormText, {
                        type: u.FormTextTypes.DESCRIPTION,
                        className: y.marginBottom20,
                        children: U.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
                    }), (0, a.jsxs)(u.FormItem, {
                        title: U.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
                        children: [(0, a.jsx)(u.SingleSelect, {
                            value: t,
                            onChange: e => {
                                s(e)
                            },
                            options: l
                        }), null != t ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.FormSwitch, {
                                className: i(y.marginBottom20, y.marginTop20),
                                note: U.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
                                value: !e[t].disableRaidAlertNag,
                                onChange: () => {
                                    (0, P.updateUserGuildSettings)(t, e => {
                                        e.disableRaidAlertNag = !e.disableRaidAlertNag
                                    }, P.UserSettingsDelay.INFREQUENT_USER_ACTION)
                                },
                                children: U.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
                            }), (0, a.jsx)(u.FormSwitch, {
                                className: y.marginBottom20,
                                note: U.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
                                value: !e[t].disableRaidAlertPush,
                                onChange: () => {
                                    (0, P.updateUserGuildSettings)(t, e => {
                                        e.disableRaidAlertPush = !e.disableRaidAlertPush
                                    }, P.UserSettingsDelay.INFREQUENT_USER_ACTION)
                                },
                                hideBorder: !0,
                                children: U.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
                            })]
                        }) : null]
                    }), (0, a.jsx)(u.FormDivider, {
                        className: i(null != t ? y.marginTop20 : y.marginTop40, y.marginBottom40)
                    })]
                })
            }
            class H extends n.PureComponent {
                handleDesktopChange(e) {
                    let t = e ? b.DesktopNotificationTypes.ALL : b.DesktopNotificationTypes.NEVER;
                    if (t !== b.DesktopNotificationTypes.NEVER) {
                        var s;
                        s = "UserSettingsModal", M.default.requestPermission(e => {
                            let t = e ? b.NotificationPermissionTypes.ENABLED : b.NotificationPermissionTypes.BLOCKED;
                            S.default.setPermissionsState(t, s)
                        })
                    } else S.default.setDesktopType(t)
                }
                handleTTSChange(e) {
                    let t = e.value;
                    S.default.setTTSType(t)
                }
                render() {
                    let {
                        desktopType: e,
                        afkTimeout: t,
                        disableUnreadBadge: s,
                        taskbarFlash: n,
                        disabledSounds: l,
                        disableAllSounds: r,
                        notifyMessagesInSelectedChannel: d
                    } = this.props, c = v.isPlatformEmbedded && (0, v.isWindows)(), S = o.range(1, 11).map(e => ({
                        value: 60 * e,
                        label: U.default.Messages.DURATION_MINUTES.format({
                            minutes: e
                        })
                    }));
                    return (0, a.jsxs)(u.FormSection, {
                        tag: u.FormTitleTags.H1,
                        title: U.default.Messages.NOTIFICATIONS,
                        children: [(0, a.jsx)(u.FormSwitch, {
                            className: y.marginBottom20,
                            value: e !== b.DesktopNotificationTypes.NEVER,
                            onChange: this.handleDesktopChange,
                            note: U.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
                            children: U.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
                        }), (0, a.jsx)(u.FormSwitch, {
                            className: c ? y.marginBottom20 : y.marginBottom40,
                            value: !s,
                            note: U.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
                            onChange: this.handleToggleShowUnreadBadge,
                            children: U.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
                        }), c ? (0, a.jsx)(u.FormSwitch, {
                            className: y.marginBottom40,
                            value: n,
                            note: U.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
                            onChange: this.handleToggleShowFlash,
                            children: U.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
                        }) : null, (0, a.jsx)(w, {}), (0, a.jsxs)(u.FormItem, {
                            title: U.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
                            children: [(0, a.jsx)(u.SingleSelect, {
                                value: t,
                                onChange: L.AfkTimeout.updateSetting,
                                options: S
                            }), (0, a.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                className: y.marginTop8,
                                children: U.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
                            }), (0, a.jsx)(u.FormDivider, {
                                className: i(y.marginTop40, y.marginBottom40)
                            })]
                        }), this.renderTTS(), (0, a.jsx)(u.FormDivider, {
                            className: i(y.marginTop40, y.marginBottom40)
                        }), (0, a.jsx)(k, {}), (0, a.jsx)(u.FormItem, {
                            children: (0, a.jsx)(G, {
                                disabledSounds: l,
                                disableAllSounds: r,
                                notifyMessagesInSelectedChannel: d
                            })
                        }), (0, a.jsx)(j.default, {})]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleToggleShowUnreadBadge = () => {
                        S.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
                    }, this.handleToggleShowFlash = () => {
                        S.default.setTaskbarFlash(!this.props.taskbarFlash)
                    }, this.renderTTS = () => {
                        if (!E.supported) return null;
                        let e = [{
                            name: U.default.Messages.TTS_ALLS,
                            value: b.TTSNotificationTypes.ALL_CHANNELS
                        }, {
                            name: U.default.Messages.TTS_CURRENT,
                            value: b.TTSNotificationTypes.SELECTED_CHANNEL
                        }, {
                            name: U.default.Messages.TTS_NEVER,
                            value: b.TTSNotificationTypes.NEVER
                        }];
                        return (0, a.jsxs)(u.FormItem, {
                            title: U.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
                            children: [(0, a.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                className: y.marginBottom8,
                                children: U.default.Messages.FORM_DESCRIPTION_TTS
                            }), (0, a.jsx)(u.RadioGroup, {
                                options: e,
                                onChange: this.handleTTSChange,
                                value: this.props.ttsType
                            })]
                        })
                    }
                }
            }

            function w() {
                let e = I.NotificationsExperiment.useExperiment({
                        location: "UserSettingsNotifications"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    {
                        manuallyOpen: t
                    } = I.UnreadsEntryPointExperiment.useExperiment({
                        location: "UserSettingsNotifications"
                    }, {
                        autoTrackExposure: !1
                    }),
                    s = (0, d.useStateFromStores)([O.default], () => O.default.useNewNotifications),
                    [l, i] = n.useState(!1);
                return e && (s || t) ? (0, a.jsxs)(a.Fragment, {
                    children: [s ? (0, a.jsx)(u.FormSwitch, {
                        className: y.marginBottom40,
                        style: {
                            marginTop: -20
                        },
                        value: s,
                        disabled: l || !s,
                        note: U.default.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
                        onChange: () => V(i),
                        children: U.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                    }) : t ? (0, a.jsx)(u.FormSwitch, {
                        className: y.marginBottom40,
                        style: {
                            marginTop: -20
                        },
                        value: s,
                        disabled: l || s,
                        note: "Turns on the new notification system",
                        onChange: () => V(i),
                        children: U.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                    }) : null, null]
                }) : null
            }
            async function V(e) {
                e(!0);
                let t = await (0, h.listSnapshots)();
                0 === t.length ? await (0, N.revertToOldSystem)() : c.default.show({
                    title: U.default.Messages.CONFIRM,
                    body: U.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
                        date: new Date(t[t.length - 1].recorded_at)
                    }),
                    cancelText: U.default.Messages.CANCEL,
                    confirmText: U.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
                    onConfirm: N.revertToOldSystem
                }), e(!1)
            }

            function Y() {
                let e = (0, d.useStateFromStoresObject)([A.default], () => ({
                    disableUnreadBadge: A.default.getDisableUnreadBadge(),
                    taskbarFlash: A.default.taskbarFlash,
                    disabledSounds: A.default.getDisabledSounds(),
                    disableAllSounds: A.default.getDisableAllSounds(),
                    desktopType: A.default.getDesktopType(),
                    ttsType: A.default.getTTSType(),
                    notifyMessagesInSelectedChannel: A.default.getNotifyMessagesInSelectedChannel()
                }));
                return (0, a.jsx)(H, {
                    ...e,
                    afkTimeout: L.AfkTimeout.useSetting()
                })
            }