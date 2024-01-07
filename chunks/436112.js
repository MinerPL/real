            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return W
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
                c = s("193990"),
                S = s("519705"),
                E = s("533280"),
                f = s("408166"),
                m = s("298878"),
                T = s("54346"),
                _ = s("684581"),
                g = s("488284"),
                h = s("649649"),
                I = s("640497"),
                N = s("699668"),
                p = s("168067"),
                C = s("820974"),
                A = s("385649"),
                O = s("282109"),
                x = s("697218"),
                M = s("368121"),
                R = s("599110"),
                v = s("566673"),
                L = s("773336"),
                D = s("709681"),
                P = s("845579"),
                j = s("872173"),
                b = s("77809"),
                U = s("49111"),
                y = s("76618"),
                B = s("782340"),
                F = s("9162"),
                G = s("926622");

            function k(e) {
                let {
                    label: t,
                    enabled: s,
                    disabled: n,
                    onPreview: l,
                    onChange: i
                } = e;
                return (0, a.jsx)(u.FormSwitch, {
                    className: F.soundRow,
                    value: s,
                    onChange: i,
                    disabled: n,
                    children: (0, a.jsxs)("div", {
                        className: F.notificationSound,
                        children: [(0, a.jsx)("div", {
                            className: F.soundName,
                            children: t
                        }), (0, a.jsx)(u.Clickable, {
                            className: F.soundIcon,
                            onClick: l,
                            "aria-label": B.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
                            children: (0, a.jsx)(M.default, {
                                width: 16,
                                height: 16,
                                className: F.icon,
                                "aria-hidden": !0
                            })
                        })]
                    })
                })
            }

            function w(e) {
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
                let S = n.useRef(),
                    E = n.useCallback((e, t) => {
                        t.stopPropagation(), t.preventDefault(), null != S.current && S.current.stop(), S.current = D.playSound(e)
                    }, []),
                    m = n.useCallback((e, s) => {
                        let a = t.filter(t => t !== e);
                        !s && a.push(e), e === _.default.ringtone && R.default.track(U.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                            toggled_on: s,
                            sound_name: e
                        }), c.default.setDisabledSounds(a)
                    }, [t]);
                n.useEffect(() => () => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.stop()
                });
                let T = [{
                    label: B.default.Messages.SOUND_MESSAGE,
                    sound: "message1"
                }, {
                    label: B.default.Messages.SOUND_DEAFEN,
                    sound: "deafen"
                }, {
                    label: B.default.Messages.SOUND_UNDEAFEN,
                    sound: "undeafen"
                }, {
                    label: B.default.Messages.MUTE,
                    sound: "mute"
                }, {
                    label: B.default.Messages.UNMUTE,
                    sound: "unmute"
                }, {
                    label: B.default.Messages.SOUND_VOICE_DISCONNECTED,
                    sound: "disconnect"
                }, {
                    label: B.default.Messages.SOUND_PTT_ACTIVATE,
                    sound: "ptt_start"
                }, {
                    label: B.default.Messages.SOUND_PTT_DEACTIVATE,
                    sound: "ptt_stop"
                }, {
                    label: B.default.Messages.SOUND_USER_JOIN,
                    sound: "user_join"
                }, {
                    label: B.default.Messages.SOUND_USER_LEAVE,
                    sound: "user_leave"
                }, {
                    label: B.default.Messages.SOUND_USER_MOVED,
                    sound: "user_moved"
                }, {
                    label: B.default.Messages.SOUND_OUTGOING_RING,
                    sound: "call_calling"
                }, {
                    label: B.default.Messages.SOUND_INCOMING_RING,
                    sound: "call_ringing"
                }, ...d ? [{
                    label: _.default.getRingtoneSettingsLabel(),
                    sound: _.default.ringtone,
                    disabled: t.includes("call_ringing")
                }] : [], {
                    label: B.default.Messages.SOUND_STREAM_STARTED,
                    sound: "stream_started"
                }, {
                    label: B.default.Messages.SOUND_STREAM_STOPPED,
                    sound: "stream_ended"
                }, {
                    label: B.default.Messages.SOUND_VIEWER_JOIN,
                    sound: "stream_user_joined"
                }, {
                    label: B.default.Messages.SOUND_VIEWER_LEAVE,
                    sound: "stream_user_left"
                }, ...o ? [{
                    label: B.default.Messages.SOUND_ACTIVITY_START,
                    sound: "activity_launch"
                }, {
                    label: B.default.Messages.SOUND_ACTIVITY_END,
                    sound: "activity_end"
                }, {
                    label: B.default.Messages.SOUND_ACTIVITY_USER_JOIN,
                    sound: "activity_user_join"
                }, {
                    label: B.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
                    sound: "activity_user_left"
                }] : [], {
                    label: B.default.Messages.SOUND_INVITED_TO_SPEAK,
                    sound: "reconnect"
                }];
                return (0, a.jsxs)(u.FormSection, {
                    tag: u.FormTitleTags.H1,
                    title: B.default.Messages.SOUNDS,
                    children: [r ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.FormTitle, {
                            className: G.marginBottom20,
                            children: B.default.Messages.SOUNDPACK_LABEL
                        }), (0, a.jsx)(C.default, {
                            className: i(F.soundpackSelect, G.marginBottom40)
                        })]
                    }) : null, (0, a.jsx)(u.FormSwitch, {
                        note: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
                        value: l,
                        onChange: c.default.setNotifyMessagesInSelectedChannel,
                        children: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
                    }), (0, a.jsx)(u.FormSwitch, {
                        note: B.default.Messages.SOUND_DISABLE_ALL_NOTE,
                        value: s,
                        onChange: c.default.toggleDisableAllSounds,
                        children: B.default.Messages.SOUND_DISABLE_ALL
                    }), T.map(e => {
                        let {
                            label: n,
                            sound: l,
                            disabled: i
                        } = e;
                        return (0, a.jsx)(k, {
                            label: n,
                            disabled: s || !0 === i,
                            onChange: e => m(l, e),
                            onPreview: e => E(l, e),
                            enabled: !s && !t.includes(l)
                        }, l)
                    })]
                })
            }

            function H() {
                let e = (0, d.useStateFromStores)([T.default], () => T.default.getGuildAlertSettings()),
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
                        className: i(F.titleWithBeta, G.marginBottom20),
                        children: [B.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(m.default, {})]
                    }), (0, a.jsx)(u.FormText, {
                        type: u.FormTextTypes.DESCRIPTION,
                        className: G.marginBottom20,
                        children: B.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
                    }), (0, a.jsxs)(u.FormItem, {
                        title: B.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
                        children: [(0, a.jsx)(u.SingleSelect, {
                            value: t,
                            onChange: e => {
                                s(e)
                            },
                            options: l
                        }), null != t ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.FormSwitch, {
                                className: i(G.marginBottom20, G.marginTop20),
                                note: B.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
                                value: !e[t].disableRaidAlertNag,
                                onChange: () => {
                                    (0, j.updateUserGuildSettings)(t, e => {
                                        e.disableRaidAlertNag = !e.disableRaidAlertNag
                                    }, j.UserSettingsDelay.INFREQUENT_USER_ACTION)
                                },
                                children: B.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
                            }), (0, a.jsx)(u.FormSwitch, {
                                className: G.marginBottom20,
                                note: B.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
                                value: !e[t].disableRaidAlertPush,
                                onChange: () => {
                                    (0, j.updateUserGuildSettings)(t, e => {
                                        e.disableRaidAlertPush = !e.disableRaidAlertPush
                                    }, j.UserSettingsDelay.INFREQUENT_USER_ACTION)
                                },
                                hideBorder: !0,
                                children: B.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
                            })]
                        }) : null]
                    }), (0, a.jsx)(u.FormDivider, {
                        className: i(null != t ? G.marginTop20 : G.marginTop40, G.marginBottom40)
                    })]
                })
            }
            class V extends n.PureComponent {
                handleDesktopChange(e) {
                    let t = e ? U.DesktopNotificationTypes.ALL : U.DesktopNotificationTypes.NEVER;
                    if (t !== U.DesktopNotificationTypes.NEVER) {
                        var s;
                        s = "UserSettingsModal", v.default.requestPermission(e => {
                            let t = e ? U.NotificationPermissionTypes.ENABLED : U.NotificationPermissionTypes.BLOCKED;
                            c.default.setPermissionsState(t, s)
                        })
                    } else c.default.setDesktopType(t)
                }
                handleTTSChange(e) {
                    let t = e.value;
                    c.default.setTTSType(t)
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
                    } = this.props, c = L.isPlatformEmbedded && (0, L.isWindows)(), S = o.range(1, 11).map(e => ({
                        value: 60 * e,
                        label: B.default.Messages.DURATION_MINUTES.format({
                            minutes: e
                        })
                    }));
                    return (0, a.jsxs)(u.FormSection, {
                        tag: u.FormTitleTags.H1,
                        title: B.default.Messages.NOTIFICATIONS,
                        children: [(0, a.jsx)(u.FormSwitch, {
                            className: G.marginBottom20,
                            value: e !== U.DesktopNotificationTypes.NEVER,
                            onChange: this.handleDesktopChange,
                            note: B.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
                            children: B.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
                        }), (0, a.jsx)(u.FormSwitch, {
                            className: c ? G.marginBottom20 : G.marginBottom40,
                            value: !s,
                            note: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
                            onChange: this.handleToggleShowUnreadBadge,
                            children: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
                        }), c ? (0, a.jsx)(u.FormSwitch, {
                            className: G.marginBottom40,
                            value: n,
                            note: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
                            onChange: this.handleToggleShowFlash,
                            children: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
                        }) : null, (0, a.jsx)(Y, {}), (0, a.jsxs)(u.FormItem, {
                            title: B.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
                            children: [(0, a.jsx)(u.SingleSelect, {
                                value: t,
                                onChange: P.AfkTimeout.updateSetting,
                                options: S
                            }), (0, a.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                className: G.marginTop8,
                                children: B.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
                            }), (0, a.jsx)(u.FormDivider, {
                                className: i(G.marginTop40, G.marginBottom40)
                            })]
                        }), this.renderTTS(), (0, a.jsx)(u.FormDivider, {
                            className: i(G.marginTop40, G.marginBottom40)
                        }), (0, a.jsx)(H, {}), (0, a.jsx)(u.FormItem, {
                            children: (0, a.jsx)(w, {
                                disabledSounds: l,
                                disableAllSounds: r,
                                notifyMessagesInSelectedChannel: d
                            })
                        }), (0, a.jsx)(b.default, {})]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleToggleShowUnreadBadge = () => {
                        c.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
                    }, this.handleToggleShowFlash = () => {
                        c.default.setTaskbarFlash(!this.props.taskbarFlash)
                    }, this.renderTTS = () => {
                        if (!E.supported) return null;
                        let e = [{
                            name: B.default.Messages.TTS_ALLS,
                            value: U.TTSNotificationTypes.ALL_CHANNELS
                        }, {
                            name: B.default.Messages.TTS_CURRENT,
                            value: U.TTSNotificationTypes.SELECTED_CHANNEL
                        }, {
                            name: B.default.Messages.TTS_NEVER,
                            value: U.TTSNotificationTypes.NEVER
                        }];
                        return (0, a.jsxs)(u.FormItem, {
                            title: B.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
                            children: [(0, a.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                className: G.marginBottom8,
                                children: B.default.Messages.FORM_DESCRIPTION_TTS
                            }), (0, a.jsx)(u.RadioGroup, {
                                options: e,
                                onChange: this.handleTTSChange,
                                value: this.props.ttsType
                            })]
                        })
                    }
                }
            }

            function Y() {
                var e;
                let t = I.default.useExperiment({
                        location: "UserSettingsNotifications"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    n = (0, d.useStateFromStores)([O.default], () => O.default.useNewNotifications);
                return t ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.FormItem, {
                        title: "New Notification System",
                        children: n ? (0, a.jsx)(u.Button, {
                            onClick: N.revertToOldSystem,
                            children: "Go back to the old system"
                        }) : (0, a.jsx)(u.Button, {
                            onClick: () => {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("923660").then(s.bind(s, "923660"));
                                    return t => (0, a.jsx)(e, {
                                        ...t
                                    })
                                })
                            },
                            children: "Try the new system"
                        })
                    }), (0, a.jsx)(u.FormDivider, {
                        className: i(G.marginTop40, G.marginBottom40)
                    }), n && (null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0 ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.FormItem, {
                            title: "New Notification Settings (Advancd, Staff Only)",
                            children: (0, a.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: 16
                                },
                                children: [(0, a.jsx)(u.Button, {
                                    onClick: h.restoreNewestSnapshot,
                                    children: "Restore most recent snapshot"
                                }), (0, a.jsx)(u.Button, {
                                    onClick: () => {
                                        (0, u.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await s.el("923660").then(s.bind(s, "923660"));
                                            return t => (0, a.jsx)(e, {
                                                ...t
                                            })
                                        })
                                    },
                                    children: "Launch Migration"
                                }), (0, a.jsx)(u.FormSwitch, {
                                    value: n,
                                    onChange: e => {
                                        S.default.setAccountFlag(y.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, e)
                                    },
                                    children: "Toggle new system on/off"
                                })]
                            })
                        }), (0, a.jsx)(u.FormDivider, {
                            className: i(G.marginTop40, G.marginBottom40)
                        })]
                    }) : null]
                }) : null
            }

            function W() {
                let e = (0, d.useStateFromStoresObject)([A.default], () => ({
                    disableUnreadBadge: A.default.getDisableUnreadBadge(),
                    taskbarFlash: A.default.taskbarFlash,
                    disabledSounds: A.default.getDisabledSounds(),
                    disableAllSounds: A.default.getDisableAllSounds(),
                    desktopType: A.default.getDesktopType(),
                    ttsType: A.default.getTTSType(),
                    notifyMessagesInSelectedChannel: A.default.getNotifyMessagesInSelectedChannel()
                }));
                return (0, a.jsx)(V, {
                    ...e,
                    afkTimeout: P.AfkTimeout.useSetting()
                })
            }