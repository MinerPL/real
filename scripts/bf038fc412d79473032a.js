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
                n = l("446674"),
                d = l("77078"),
                s = l("713841"),
                i = l("592407"),
                r = l("305961"),
                o = l("957255"),
                f = l("49111"),
                c = l("782340"),
                M = l("460856");

            function E(e, t, l) {
                let E = r.default.getGuild(t),
                    C = (0, n.useStateFromStores)([o.default], () => null != E ? o.default.can(f.Permissions.MANAGE_GUILD, E) : null),
                    p = u.useCallback(() => {
                        i.default.open(t, f.GuildSettingsSections.INTEGRATIONS), s.default.setSection(f.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    S = l === f.AppContext.POPOUT;
                return e.bot && C && !S ? (0, a.jsx)(d.MenuItem, {
                    id: "manage-integration",
                    label: (0, a.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, a.jsx)("span", {
                            className: M.label,
                            children: c.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: p
                }) : null
            }
        },
        539593: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("77078"),
                n = l("272030"),
                d = l("838446"),
                s = l("158534"),
                i = l("846883"),
                r = l("812204"),
                o = l("861370"),
                f = l("230947"),
                c = l("497660"),
                M = l("170990"),
                E = l("304582"),
                C = l("72057"),
                p = l("300925"),
                S = l("489836"),
                m = l("406703"),
                g = l("314838"),
                N = l("383161"),
                h = l("421602"),
                O = l("459870"),
                T = l("692986"),
                _ = l("806179"),
                A = l("97508"),
                U = l("816106"),
                x = l("623879"),
                I = l("49111"),
                v = l("782340"),
                j = (0, s.default)((0, d.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        showModalItems: d = !0,
                        showMediaItems: s = !1,
                        showChatItems: r = !0,
                        context: j,
                        onSelect: L
                    } = e, b = (0, _.default)(t.id, l), G = (0, N.default)(t, l, j), P = (0, h.default)(t.id, j), R = (0, x.default)(t.id), V = (0, m.default)(t, j), F = (0, C.default)({
                        user: t,
                        guildId: l,
                        context: j
                    }), y = (0, E.default)(t), k = (0, U.default)(t.id), D = (0, T.default)(t.id), B = (0, f.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: I.AnalyticsPages.GUILD_CHANNEL,
                            section: I.AnalyticsSections.CHAT_USERNAME,
                            object: I.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: j
                    }), H = (0, c.default)(t, l), X = (0, g.default)(t, l), w = (0, i.default)(null, t), Y = (0, M.default)(t), K = (0, S.default)(t), W = (0, p.default)(t, l), q = (0, A.default)(t.id, l), z = (0, O.default)(t, l), J = (0, o.default)({
                        id: t.id,
                        label: v.default.Messages.COPY_ID_USER
                    }), Q = t.isNonUserBot();
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: n.closeContextMenu,
                        "aria-label": v.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: L,
                        children: [!Q && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(u.MenuGroup, {
                                children: [d && b, r && G, P, V, d && F, d && y, R]
                            }), s && (0, a.jsx)(u.MenuGroup, {
                                children: k
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: d && w
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [s && D, d && B, d && X, Y, H, d && K]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: W
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [q, z]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: I.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GUILD_USER_MENU])
        },
        421602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("77078"),
                n = l("450911"),
                d = l("54239"),
                s = l("271938"),
                i = l("49111"),
                r = l("782340");

            function o(e, t) {
                let l = s.default.getId(),
                    o = t === i.AppContext.POPOUT;
                return l === e || o ? null : (0, a.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: r.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        n.default.openPrivateChannel(e), (0, d.popLayer)()
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
                n = l("77078"),
                d = l("851387"),
                s = l("987317"),
                i = l("679653"),
                r = l("271938"),
                o = l("42203"),
                f = l("923959"),
                c = l("26989"),
                M = l("305961"),
                E = l("957255"),
                C = l("27618"),
                p = l("697218"),
                S = l("800762"),
                m = l("404008"),
                g = l("991170"),
                N = l("49111"),
                h = l("782340");

            function O(e, t) {
                let l = (0, u.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    O = (0, u.useStateFromStores)([S.default, o.default], () => {
                        let l = S.default.getUserVoiceChannelId(t, e.id);
                        return o.default.getChannel(l)
                    }, [t, e.id]),
                    T = (0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (T || null == O) return null;
                let _ = e.id === r.default.getId();
                if (!_ && !E.default.can(N.Permissions.MOVE_MEMBERS, O)) return null;
                let A = l.filter(t => {
                    let {
                        channel: l
                    } = t;
                    return l.id !== O.id && (_ ? E.default.can(N.Permissions.CONNECT, l) && !(0, m.isChannelFull)(l, S.default, M.default) : E.default.can(N.Permissions.MOVE_MEMBERS, l) && (E.default.can(N.Permissions.CONNECT, l) || g.default.can({
                        permission: N.Permissions.CONNECT,
                        user: e,
                        context: l
                    })) && !(0, m.isChannelFull)(l, S.default, M.default))
                });
                return 0 === A.length ? null : (0, a.jsx)(n.MenuItem, {
                    id: "voice-move",
                    label: h.default.Messages.MOVE_TO,
                    children: A.map(l => {
                        let {
                            channel: u
                        } = l;
                        return (0, a.jsx)(n.MenuItem, {
                            id: u.id,
                            action: () => {
                                var l;
                                return l = u, void(e.id === r.default.getId() ? s.default.selectVoiceChannel(l.id) : d.default.setChannel(t, e.id, l.id))
                            },
                            label: (0, i.computeChannelName)(u, p.default, C.default)
                        }, u.id)
                    })
                })
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
                n = l("77078"),
                d = l("629109"),
                s = l("42887"),
                i = l("697218"),
                r = l("829536"),
                o = l("773336"),
                f = l("353927"),
                c = l("782340");

            function M(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT,
                    M = (0, u.useStateFromStores)([s.default], () => s.default.getLocalVolume(e, l), [e, l]),
                    E = e === (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    C = l === f.MediaEngineContextTypes.STREAM;
                return E ? null : (0, a.jsx)(n.MenuControlItem, {
                    id: "user-volume",
                    label: C ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME,
                    control: (t, u) => (0, a.jsx)(n.MenuSliderControl, {
                        ...t,
                        ref: u,
                        value: (0, r.amplitudeToPerceptual)(M),
                        maxValue: o.isPlatformEmbedded ? 200 : 100,
                        onChange: t => d.default.setLocalVolume(e, (0, r.perceptualToAmplitude)(t), l),
                        "aria-label": C ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);