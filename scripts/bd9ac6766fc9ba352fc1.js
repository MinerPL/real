(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73650"], {
        497660: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var l = a("920040"),
                d = a("773670"),
                u = a("498225"),
                s = a("77078"),
                n = a("713841"),
                i = a("592407"),
                o = a("305961"),
                r = a("957255"),
                f = a("49111"),
                c = a("782340"),
                M = a("717578");

            function E(e, t, a) {
                let E = o.default.getGuild(t),
                    g = (0, u.useStateFromStores)([r.default], () => null != E ? r.default.can(f.Permissions.MANAGE_GUILD, E) : null),
                    S = d.useCallback(() => {
                        i.default.open(t, f.GuildSettingsSections.INTEGRATIONS), n.default.setSection(f.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    _ = a === f.AppContext.POPOUT;
                return e.bot && g && !_ ? (0, l.jsx)(s.MenuItem, {
                    id: "manage-integration",
                    label: (0, l.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: M.label,
                            children: c.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: S
                }) : null
            }
        },
        539593: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            });
            var l = a("920040");
            a("773670");
            var d = a("77078"),
                u = a("272030"),
                s = a("838446"),
                n = a("158534"),
                i = a("846883"),
                o = a("812204"),
                r = a("861370"),
                f = a("230947"),
                c = a("497660"),
                M = a("170990"),
                E = a("304582"),
                g = a("72057"),
                S = a("300925"),
                _ = a("489836"),
                N = a("406703"),
                A = a("314838"),
                T = a("383161"),
                b = a("421602"),
                m = a("459870"),
                O = a("692986"),
                U = a("806179"),
                x = a("97508"),
                C = a("816106"),
                L = a("623879"),
                I = a("49111"),
                p = a("782340"),
                D = (0, n.default)((0, s.default)(function(e) {
                    let {
                        user: t,
                        guildId: a,
                        showModalItems: s = !0,
                        showMediaItems: n = !1,
                        showChatItems: o = !0,
                        context: D,
                        onSelect: h
                    } = e, j = (0, U.default)(t.id, a), v = (0, T.default)(t, a, D), V = (0, b.default)(t.id, D), G = (0, L.default)(t.id), k = (0, N.default)(t, D), R = (0, g.default)({
                        user: t,
                        guildId: a,
                        context: D
                    }), B = (0, E.default)(t), F = (0, C.default)(t.id), y = (0, O.default)(t.id), P = (0, f.default)({
                        guildId: a,
                        userId: t.id,
                        analyticsLocation: {
                            page: I.AnalyticsPages.GUILD_CHANNEL,
                            section: I.AnalyticsSections.CHAT_USERNAME,
                            object: I.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: D
                    }), w = (0, c.default)(t, a), X = (0, A.default)(t, a), Y = (0, i.default)(null, t), H = (0, M.default)(t), W = (0, _.default)(t), q = (0, S.default)(t, a), z = (0, x.default)(t.id, a), J = (0, m.default)(t, a), K = (0, r.default)({
                        id: t.id,
                        label: p.default.Messages.COPY_ID_USER
                    }), Q = t.isNonUserBot();
                    return (0, l.jsxs)(d.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: h,
                        children: [!Q && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)(d.MenuGroup, {
                                children: [s && j, o && v, V, k, s && R, s && B, G]
                            }), n && (0, l.jsx)(d.MenuGroup, {
                                children: F
                            }), (0, l.jsx)(d.MenuGroup, {
                                children: s && Y
                            }), (0, l.jsxs)(d.MenuGroup, {
                                children: [n && y, s && P, s && X, H, w, s && W]
                            }), (0, l.jsx)(d.MenuGroup, {
                                children: q
                            }), (0, l.jsxs)(d.MenuGroup, {
                                children: [z, J]
                            })]
                        }), (0, l.jsx)(d.MenuGroup, {
                            children: K
                        })]
                    })
                }, {
                    object: I.AnalyticsObjects.CONTEXT_MENU
                }), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])
        },
        692986: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var l = a("920040");
            a("773670");
            var d = a("498225"),
                u = a("77078"),
                s = a("404118"),
                n = a("629109"),
                i = a("235004"),
                o = a("42887"),
                r = a("945956"),
                f = a("162771"),
                c = a("697218"),
                M = a("423487"),
                E = a("599110"),
                g = a("49111"),
                S = a("860604"),
                _ = a("782340"),
                N = a("838442");

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.MediaEngineContextTypes.DEFAULT,
                    a = (0, d.useStateFromStores)([c.default], () => {
                        var t;
                        return (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    A = (0, d.useStateFromStores)([i.default], () => i.default.isLocalSoundboardMuted(e)),
                    {
                        muted: T,
                        deafened: b = !1,
                        localVideoDisabled: m = !1,
                        localVideoAutoDisabled: O = !1
                    } = (0, d.useStateFromStoresObject)([o.default], () => a ? {
                        muted: o.default.isSelfMute(t),
                        deafened: o.default.isSelfDeaf(t)
                    } : {
                        muted: o.default.isLocalMute(e, t),
                        localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
                    }, [a, t, e]),
                    U = o.default.supports(S.Features.DISABLE_VIDEO) && !a ? (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "disable-video",
                        label: _.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (O) {
                                s.default.show({
                                    title: _.default.Messages.UNSTABLE_CONNECTION,
                                    body: _.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: _.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: _.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => n.default.setDisableLocalVideo(e, g.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let a = m ? g.VideoToggleState.MANUAL_ENABLED : g.VideoToggleState.DISABLED;
                            n.default.setDisableLocalVideo(e, a, t)
                        },
                        checked: m,
                        subtext: O ? (0, l.jsxs)("div", {
                            className: N.videoPaused,
                            children: [(0, l.jsx)(M.default, {
                                width: 12,
                                className: N.warningCircle
                            }), _.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    x = a ? null : (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: _.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let a = r.default.getRTCConnection();
                            E.default.track(g.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: f.default.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == a ? void 0 : a.getMediaSessionId(),
                                parent_media_session_id: null == a ? void 0 : a.parentMediaSessionId,
                                mute_soundboard: !A
                            }), n.default.toggleLocalSoundboardMute(e, t)
                        },
                        checked: A
                    }, "soundboard-sound-mute");
                return a ? [(0, l.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: _.default.Messages.SOUND_MUTE,
                    action: () => n.default.toggleSelfMute({
                        context: t
                    }),
                    checked: T
                }, "self-mute"), (0, l.jsx)(u.MenuCheckboxItem, {
                    id: "deafen",
                    label: _.default.Messages.DEAFEN,
                    action: () => n.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: b
                }, "self-deafen"), U] : [(0, l.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: _.default.Messages.SOUND_MUTE,
                    action: () => n.default.toggleLocalMute(e, t),
                    checked: T
                }, "self-mute"), x, U]
            }
        },
        816106: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var l = a("920040");
            a("773670");
            var d = a("498225"),
                u = a("77078"),
                s = a("629109"),
                n = a("42887"),
                i = a("697218"),
                o = a("829536"),
                r = a("773336"),
                f = a("860604"),
                c = a("782340");

            function M(e) {
                var t;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT,
                    M = (0, d.useStateFromStores)([n.default], () => n.default.getLocalVolume(e, a), [e, a]),
                    E = e === (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    g = a === f.MediaEngineContextTypes.STREAM;
                return E ? null : (0, l.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: g ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME,
                    control: (t, d) => (0, l.jsx)(u.MenuSliderControl, {
                        ...t,
                        ref: d,
                        value: (0, o.amplitudeToPerceptual)(M),
                        maxValue: r.isPlatformEmbedded ? 200 : 100,
                        onChange: t => s.default.setLocalVolume(e, (0, o.perceptualToAmplitude)(t), a),
                        "aria-label": g ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);