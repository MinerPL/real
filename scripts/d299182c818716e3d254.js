(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99277"], {
        158534: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("920040");
            a("773670");
            var s = a("685665");

            function u(e, t) {
                return function(a) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, s.default)(t);
                    return (0, l.jsx)(u, {
                        children: (0, l.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        497660: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var l = a("920040"),
                s = a("773670"),
                u = a("498225"),
                d = a("77078"),
                n = a("713841"),
                i = a("592407"),
                o = a("305961"),
                r = a("957255"),
                c = a("49111"),
                f = a("782340"),
                M = a("717578");

            function E(e, t, a) {
                let E = o.default.getGuild(t),
                    N = (0, u.useStateFromStores)([r.default], () => null != E ? r.default.can(c.Permissions.MANAGE_GUILD, E) : null),
                    S = s.useCallback(() => {
                        i.default.open(t, c.GuildSettingsSections.INTEGRATIONS), n.default.setSection(c.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    g = a === c.AppContext.POPOUT;
                return e.bot && N && !g ? (0, l.jsx)(d.MenuItem, {
                    id: "manage-integration",
                    label: (0, l.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: M.label,
                            children: f.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: S
                }) : null
            }
        },
        839107: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("920040");
            a("773670");
            var s = a("77078"),
                u = a("272030"),
                d = a("901582"),
                n = a("158534"),
                i = a("812204"),
                o = a("861370"),
                r = a("230947"),
                c = a("497660"),
                f = a("300925"),
                M = a("625187"),
                E = a("692986"),
                N = a("97508"),
                S = a("49111"),
                g = a("782340"),
                _ = (0, n.default)(function(e) {
                    let {
                        user: t,
                        guildId: a,
                        channelId: n,
                        analyticsContext: i,
                        onSelect: _
                    } = e, A = (0, E.default)(t.id), b = (0, r.default)({
                        guildId: a,
                        userId: t.id,
                        analyticsLocation: {
                            page: S.AnalyticsPages.GUILD_CHANNEL,
                            section: S.AnalyticsSections.CHAT_USERNAME,
                            object: S.AnalyticsObjects.CONTEXT_MENU_ITEM
                        }
                    }), I = (0, c.default)(t, a), x = (0, f.default)(t, a, n), T = (0, N.default)(t.id, a), O = (0, M.default)(t, a), h = (0, o.default)({
                        id: t.id,
                        label: g.default.Messages.COPY_ID_USER
                    }), m = t.isNonUserBot();
                    return (0, l.jsx)(d.default, {
                        context: i,
                        object: S.AnalyticsObjects.CONTEXT_MENU,
                        children: (0, l.jsxs)(s.Menu, {
                            navId: "user-context",
                            onClose: u.closeContextMenu,
                            "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
                            onSelect: _,
                            children: [!m && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)(s.MenuGroup, {
                                    children: [A, b, I]
                                }), (0, l.jsx)(s.MenuGroup, {
                                    children: x
                                }), (0, l.jsx)(s.MenuGroup, {
                                    children: T
                                }), (0, l.jsx)(s.MenuGroup, {
                                    children: O
                                })]
                            }), t.isClyde() && (0, l.jsx)(s.MenuGroup, {
                                children: x
                            }), (0, l.jsx)(s.MenuGroup, {
                                children: h
                            })]
                        })
                    })
                }, [i.default.CONTEXT_MENU, i.default.GUILD_SETTINGS_USER_MENU])
        },
        625187: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("920040");
            a("773670");
            var s = a("498225"),
                u = a("77078"),
                d = a("305961"),
                n = a("697218"),
                i = a("782340");

            function o(e, t) {
                let o = (0, s.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
                    r = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(t));
                return null == r || null == o || e.id === r.ownerId || e.bot || !r.isOwnerWithRequiredMfaLevel(o) ? null : (0, l.jsx)(u.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: i.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("878551").then(a.bind(a, "878551"));
                        return a => (0, l.jsx)(t, {
                            ...a,
                            guild: r,
                            fromUser: o,
                            toUser: e
                        })
                    })
                })
            }
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
            var s = a("498225"),
                u = a("77078"),
                d = a("404118"),
                n = a("629109"),
                i = a("235004"),
                o = a("42887"),
                r = a("945956"),
                c = a("162771"),
                f = a("697218"),
                M = a("423487"),
                E = a("599110"),
                N = a("49111"),
                S = a("860604"),
                g = a("782340"),
                _ = a("838442");

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.MediaEngineContextTypes.DEFAULT,
                    a = (0, s.useStateFromStores)([f.default], () => {
                        var t;
                        return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    A = (0, s.useStateFromStores)([i.default], () => i.default.isLocalSoundboardMuted(e)),
                    {
                        muted: b,
                        deafened: I = !1,
                        localVideoDisabled: x = !1,
                        localVideoAutoDisabled: T = !1
                    } = (0, s.useStateFromStoresObject)([o.default], () => a ? {
                        muted: o.default.isSelfMute(t),
                        deafened: o.default.isSelfDeaf(t)
                    } : {
                        muted: o.default.isLocalMute(e, t),
                        localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(e, t)
                    }, [a, t, e]),
                    O = o.default.supports(S.Features.DISABLE_VIDEO) && !a ? (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "disable-video",
                        label: g.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (T) {
                                d.default.show({
                                    title: g.default.Messages.UNSTABLE_CONNECTION,
                                    body: g.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: g.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: g.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => n.default.setDisableLocalVideo(e, N.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let a = x ? N.VideoToggleState.MANUAL_ENABLED : N.VideoToggleState.DISABLED;
                            n.default.setDisableLocalVideo(e, a, t)
                        },
                        checked: x,
                        subtext: T ? (0, l.jsxs)("div", {
                            className: _.videoPaused,
                            children: [(0, l.jsx)(M.default, {
                                width: 12,
                                className: _.warningCircle
                            }), g.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    h = a ? null : (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: g.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let a = r.default.getRTCConnection();
                            E.default.track(N.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.default.getGuildId(),
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
                    label: g.default.Messages.SOUND_MUTE,
                    action: () => n.default.toggleSelfMute({
                        context: t
                    }),
                    checked: b
                }, "self-mute"), (0, l.jsx)(u.MenuCheckboxItem, {
                    id: "deafen",
                    label: g.default.Messages.DEAFEN,
                    action: () => n.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: I
                }, "self-deafen"), O] : [(0, l.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: g.default.Messages.SOUND_MUTE,
                    action: () => n.default.toggleLocalMute(e, t),
                    checked: b
                }, "self-mute"), h, O]
            }
        }
    }
]);