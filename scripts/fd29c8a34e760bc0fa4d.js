(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8181"], {
        497660: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("37983"),
                u = l("884691"),
                d = l("446674"),
                s = l("77078"),
                n = l("713841"),
                i = l("592407"),
                o = l("305961"),
                r = l("957255"),
                f = l("49111"),
                c = l("782340"),
                M = l("460856");

            function E(e, t, l) {
                let E = o.default.getGuild(t),
                    g = (0, d.useStateFromStores)([r.default], () => null != E ? r.default.can(f.Permissions.MANAGE_GUILD, E) : null),
                    S = u.useCallback(() => {
                        i.default.open(t, f.GuildSettingsSections.INTEGRATIONS), n.default.setSection(f.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    _ = l === f.AppContext.POPOUT;
                return e.bot && g && !_ ? (0, a.jsx)(s.MenuItem, {
                    id: "manage-integration",
                    label: (0, a.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, a.jsx)("span", {
                            className: M.label,
                            children: c.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: S
                }) : null
            }
        },
        539593: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("77078"),
                d = l("272030"),
                s = l("838446"),
                n = l("158534"),
                i = l("846883"),
                o = l("812204"),
                r = l("861370"),
                f = l("230947"),
                c = l("497660"),
                M = l("170990"),
                E = l("304582"),
                g = l("72057"),
                S = l("300925"),
                _ = l("489836"),
                N = l("406703"),
                m = l("314838"),
                C = l("383161"),
                A = l("421602"),
                O = l("459870"),
                T = l("692986"),
                b = l("806179"),
                I = l("97508"),
                U = l("816106"),
                h = l("623879"),
                x = l("49111"),
                L = l("782340"),
                p = (0, n.default)((0, s.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        showModalItems: s = !0,
                        showMediaItems: n = !1,
                        showChatItems: o = !0,
                        context: p,
                        onSelect: v
                    } = e, D = (0, b.default)(t.id, l), j = (0, C.default)(t, l, p), V = (0, A.default)(t.id, p), G = (0, h.default)(t.id), P = (0, N.default)(t, p), R = (0, g.default)({
                        user: t,
                        guildId: l,
                        context: p
                    }), k = (0, E.default)(t), F = (0, U.default)(t.id), B = (0, T.default)(t.id), y = (0, f.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: x.AnalyticsPages.GUILD_CHANNEL,
                            section: x.AnalyticsSections.CHAT_USERNAME,
                            object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: p
                    }), w = (0, c.default)(t, l), Y = (0, m.default)(t, l), H = (0, i.default)(null, t), X = (0, M.default)(t), W = (0, _.default)(t), K = (0, S.default)(t, l), q = (0, I.default)(t.id, l), z = (0, O.default)(t, l), J = (0, r.default)({
                        id: t.id,
                        label: L.default.Messages.COPY_ID_USER
                    }), Q = t.isNonUserBot();
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: d.closeContextMenu,
                        "aria-label": L.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: v,
                        children: [!Q && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(u.MenuGroup, {
                                children: [s && D, o && j, V, P, s && R, s && k, G]
                            }), n && (0, a.jsx)(u.MenuGroup, {
                                children: F
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: s && H
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [n && B, s && y, s && Y, X, w, s && W]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: K
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [q, z]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: x.AnalyticsObjects.CONTEXT_MENU
                }), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])
        },
        421602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("77078"),
                d = l("450911"),
                s = l("54239"),
                n = l("271938"),
                i = l("49111"),
                o = l("782340");

            function r(e, t) {
                let l = n.default.getId(),
                    r = t === i.AppContext.POPOUT;
                return l === e || r ? null : (0, a.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: o.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        d.default.openPrivateChannel(e), (0, s.popLayer)()
                    }
                })
            }
        },
        459870: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return O
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("446674"),
                d = l("77078"),
                s = l("851387"),
                n = l("987317"),
                i = l("679653"),
                o = l("271938"),
                r = l("42203"),
                f = l("923959"),
                c = l("26989"),
                M = l("305961"),
                E = l("957255"),
                g = l("27618"),
                S = l("697218"),
                _ = l("800762"),
                N = l("404008"),
                m = l("991170"),
                C = l("49111"),
                A = l("782340");

            function O(e, t) {
                let l = (0, u.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    O = (0, u.useStateFromStores)([_.default, r.default], () => {
                        let l = _.default.getUserVoiceChannelId(t, e.id);
                        return r.default.getChannel(l)
                    }, [t, e.id]),
                    T = (0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (T || null == O) return null;
                let b = e.id === o.default.getId();
                if (!b && !E.default.can(C.Permissions.MOVE_MEMBERS, O)) return null;
                let I = l.filter(t => {
                    let {
                        channel: l
                    } = t;
                    return l.id !== O.id && (b ? E.default.can(C.Permissions.CONNECT, l) && !(0, N.isChannelFull)(l, _.default, M.default) : E.default.can(C.Permissions.MOVE_MEMBERS, l) && (E.default.can(C.Permissions.CONNECT, l) || m.default.can({
                        permission: C.Permissions.CONNECT,
                        user: e,
                        context: l
                    })) && !(0, N.isChannelFull)(l, _.default, M.default))
                });
                return 0 === I.length ? null : (0, a.jsx)(d.MenuItem, {
                    id: "voice-move",
                    label: A.default.Messages.MOVE_TO,
                    children: I.map(l => {
                        let {
                            channel: u
                        } = l;
                        return (0, a.jsx)(d.MenuItem, {
                            id: u.id,
                            action: () => {
                                var l;
                                return l = u, void(e.id === o.default.getId() ? n.default.selectVoiceChannel(l.id) : s.default.setChannel(t, e.id, l.id))
                            },
                            label: (0, i.computeChannelName)(u, S.default, g.default)
                        }, u.id)
                    })
                })
            }
        },
        692986: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("446674"),
                d = l("77078"),
                s = l("404118"),
                n = l("629109"),
                i = l("235004"),
                o = l("42887"),
                r = l("945956"),
                f = l("162771"),
                c = l("697218"),
                M = l("423487"),
                E = l("599110"),
                g = l("49111"),
                S = l("353927"),
                _ = l("782340"),
                N = l("113508");

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.MediaEngineContextTypes.DEFAULT,
                    l = (0, u.useStateFromStores)([c.default], () => {
                        var t;
                        return (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    m = (0, u.useStateFromStores)([i.default], () => i.default.isLocalSoundboardMuted(e)),
                    {
                        muted: C,
                        deafened: A = !1,
                        localVideoDisabled: O = !1,
                        localVideoAutoDisabled: T = !1
                    } = (0, u.useStateFromStoresObject)([o.default], () => l ? {
                        muted: o.default.isSelfMute(t),
                        deafened: o.default.isSelfDeaf(t)
                    } : {
                        muted: o.default.isLocalMute(e, t),
                        localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
                    }, [l, t, e]),
                    b = o.default.supports(S.Features.DISABLE_VIDEO) && !l ? (0, a.jsx)(d.MenuCheckboxItem, {
                        id: "disable-video",
                        label: _.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (T) {
                                s.default.show({
                                    title: _.default.Messages.UNSTABLE_CONNECTION,
                                    body: _.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: _.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: _.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => n.default.setDisableLocalVideo(e, g.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let l = O ? g.VideoToggleState.MANUAL_ENABLED : g.VideoToggleState.DISABLED;
                            n.default.setDisableLocalVideo(e, l, t)
                        },
                        checked: O,
                        subtext: T ? (0, a.jsxs)("div", {
                            className: N.videoPaused,
                            children: [(0, a.jsx)(M.default, {
                                width: 12,
                                className: N.warningCircle
                            }), _.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    I = l ? null : (0, a.jsx)(d.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: _.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let l = r.default.getRTCConnection();
                            E.default.track(g.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: f.default.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == l ? void 0 : l.getMediaSessionId(),
                                parent_media_session_id: null == l ? void 0 : l.parentMediaSessionId,
                                mute_soundboard: !m
                            }), n.default.toggleLocalSoundboardMute(e, t)
                        },
                        checked: m
                    }, "soundboard-sound-mute");
                return l ? [(0, a.jsx)(d.MenuCheckboxItem, {
                    id: "mute",
                    label: _.default.Messages.SOUND_MUTE,
                    action: () => n.default.toggleSelfMute({
                        context: t
                    }),
                    checked: C
                }, "self-mute"), (0, a.jsx)(d.MenuCheckboxItem, {
                    id: "deafen",
                    label: _.default.Messages.DEAFEN,
                    action: () => n.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: A
                }, "self-deafen"), b] : [(0, a.jsx)(d.MenuCheckboxItem, {
                    id: "mute",
                    label: _.default.Messages.SOUND_MUTE,
                    action: () => n.default.toggleLocalMute(e, t),
                    checked: C
                }, "self-mute"), I, b]
            }
        },
        816106: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("446674"),
                d = l("77078"),
                s = l("629109"),
                n = l("42887"),
                i = l("697218"),
                o = l("829536"),
                r = l("773336"),
                f = l("353927"),
                c = l("782340");

            function M(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT,
                    M = (0, u.useStateFromStores)([n.default], () => n.default.getLocalVolume(e, l), [e, l]),
                    E = e === (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    g = l === f.MediaEngineContextTypes.STREAM;
                return E ? null : (0, a.jsx)(d.MenuControlItem, {
                    id: "user-volume",
                    label: g ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME,
                    control: (t, u) => (0, a.jsx)(d.MenuSliderControl, {
                        ...t,
                        ref: u,
                        value: (0, o.amplitudeToPerceptual)(M),
                        maxValue: r.isPlatformEmbedded ? 200 : 100,
                        onChange: t => s.default.setLocalVolume(e, (0, o.perceptualToAmplitude)(t), l),
                        "aria-label": g ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);