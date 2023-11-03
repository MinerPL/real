(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41737"], {
        497660: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var n = l("37983"),
                u = l("884691"),
                a = l("446674"),
                d = l("77078"),
                s = l("713841"),
                i = l("592407"),
                r = l("305961"),
                o = l("957255"),
                f = l("49111"),
                c = l("782340"),
                E = l("460856");

            function M(e, t, l) {
                let M = r.default.getGuild(t),
                    C = (0, a.useStateFromStores)([o.default], () => null != M ? o.default.can(f.Permissions.MANAGE_GUILD, M) : null),
                    p = u.useCallback(() => {
                        i.default.open(t, f.GuildSettingsSections.INTEGRATIONS), s.default.setSection(f.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    S = l === f.AppContext.POPOUT;
                return e.bot && C && !S ? (0, n.jsx)(d.MenuItem, {
                    id: "manage-integration",
                    label: (0, n.jsx)("div", {
                        className: E.labelWrapper,
                        children: (0, n.jsx)("span", {
                            className: E.label,
                            children: c.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: p
                }) : null
            }
        },
        242757: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                canViewInviteModal: function() {
                    return u
                }
            });
            var n = l("49111");

            function u(e, t, l, u) {
                let a = null != l ? l : t,
                    d = null != a && e.can(n.Permissions.CREATE_INSTANT_INVITE, a);
                return d || null != t && null != t.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
            }
        },
        539593: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("77078"),
                a = l("272030"),
                d = l("838446"),
                s = l("158534"),
                i = l("846883"),
                r = l("812204"),
                o = l("861370"),
                f = l("230947"),
                c = l("497660"),
                E = l("170990"),
                M = l("304582"),
                C = l("72057"),
                p = l("300925"),
                S = l("489836"),
                m = l("406703"),
                N = l("314838"),
                T = l("383161"),
                g = l("421602"),
                _ = l("459870"),
                h = l("692986"),
                A = l("806179"),
                I = l("97508"),
                O = l("816106"),
                U = l("623879"),
                v = l("49111"),
                x = l("782340"),
                j = (0, s.default)((0, d.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        showModalItems: d = !0,
                        showMediaItems: s = !1,
                        showChatItems: r = !0,
                        context: j,
                        onSelect: L
                    } = e, P = (0, A.default)(t.id, l), b = (0, T.default)(t, l, j), G = (0, g.default)(t.id, j), R = (0, U.default)(t.id), V = (0, m.default)(t, j), y = (0, C.default)({
                        user: t,
                        guildId: l,
                        context: j
                    }), F = (0, M.default)(t), k = (0, O.default)(t.id), D = (0, h.default)(t.id), B = (0, f.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: v.AnalyticsPages.GUILD_CHANNEL,
                            section: v.AnalyticsSections.CHAT_USERNAME,
                            object: v.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: j
                    }), w = (0, c.default)(t, l), H = (0, N.default)(t, l), X = (0, i.default)(null, t), Y = (0, E.default)(t), K = (0, S.default)(t), W = (0, p.default)(t, l), q = (0, I.default)(t.id, l), z = (0, _.default)(t, l), J = (0, o.default)({
                        id: t.id,
                        label: x.default.Messages.COPY_ID_USER
                    }), Q = t.isNonUserBot();
                    return (0, n.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: L,
                        children: [!Q && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(u.MenuGroup, {
                                children: [d && P, r && b, G, V, d && y, d && F, R]
                            }), s && (0, n.jsx)(u.MenuGroup, {
                                children: k
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: d && X
                            }), (0, n.jsxs)(u.MenuGroup, {
                                children: [s && D, d && B, d && H, Y, w, d && K]
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: W
                            }), (0, n.jsxs)(u.MenuGroup, {
                                children: [q, z]
                            })]
                        }), (0, n.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: v.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GUILD_USER_MENU])
        },
        421602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("77078"),
                a = l("450911"),
                d = l("54239"),
                s = l("271938"),
                i = l("49111"),
                r = l("782340");

            function o(e, t) {
                let l = s.default.getId(),
                    o = t === i.AppContext.POPOUT;
                return l === e || o ? null : (0, n.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: r.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        a.default.openPrivateChannel(e), (0, d.popLayer)()
                    }
                })
            }
        },
        459870: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("446674"),
                a = l("77078"),
                d = l("851387"),
                s = l("987317"),
                i = l("679653"),
                r = l("271938"),
                o = l("42203"),
                f = l("923959"),
                c = l("26989"),
                E = l("305961"),
                M = l("957255"),
                C = l("27618"),
                p = l("697218"),
                S = l("800762"),
                m = l("404008"),
                N = l("991170"),
                T = l("49111"),
                g = l("782340");

            function _(e, t) {
                let l = (0, u.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    _ = (0, u.useStateFromStores)([S.default, o.default], () => {
                        let l = S.default.getUserVoiceChannelId(t, e.id);
                        return o.default.getChannel(l)
                    }, [t, e.id]),
                    h = (0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (h || null == _) return null;
                let A = e.id === r.default.getId();
                if (!A && !M.default.can(T.Permissions.MOVE_MEMBERS, _)) return null;
                let I = l.filter(t => {
                    let {
                        channel: l
                    } = t;
                    return l.id !== _.id && (A ? M.default.can(T.Permissions.CONNECT, l) && !(0, m.isChannelFull)(l, S.default, E.default) : M.default.can(T.Permissions.MOVE_MEMBERS, l) && (M.default.can(T.Permissions.CONNECT, l) || N.default.can({
                        permission: T.Permissions.CONNECT,
                        user: e,
                        context: l
                    })) && !(0, m.isChannelFull)(l, S.default, E.default))
                });
                return 0 === I.length ? null : (0, n.jsx)(a.MenuItem, {
                    id: "voice-move",
                    label: g.default.Messages.MOVE_TO,
                    children: I.map(l => {
                        let {
                            channel: u
                        } = l;
                        return (0, n.jsx)(a.MenuItem, {
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
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("446674"),
                a = l("77078"),
                d = l("629109"),
                s = l("42887"),
                i = l("697218"),
                r = l("829536"),
                o = l("773336"),
                f = l("353927"),
                c = l("782340");

            function E(e) {
                var t;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT,
                    E = (0, u.useStateFromStores)([s.default], () => s.default.getLocalVolume(e, l), [e, l]),
                    M = e === (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    C = l === f.MediaEngineContextTypes.STREAM;
                return M ? null : (0, n.jsx)(a.MenuControlItem, {
                    id: "user-volume",
                    label: C ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME,
                    control: (t, u) => (0, n.jsx)(a.MenuSliderControl, {
                        ...t,
                        ref: u,
                        value: (0, r.amplitudeToPerceptual)(E),
                        maxValue: o.isPlatformEmbedded ? 200 : 100,
                        onChange: t => d.default.setLocalVolume(e, (0, r.perceptualToAmplitude)(t), l),
                        "aria-label": C ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);