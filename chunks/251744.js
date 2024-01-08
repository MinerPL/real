            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("917351"),
                s = n.n(a),
                i = n("233736"),
                l = n("299285"),
                r = n("373469"),
                o = n("42203"),
                u = n("305961"),
                d = n("260320"),
                c = n("42887"),
                E = n("945956"),
                f = n("568307"),
                _ = n("697218"),
                h = n("800762"),
                C = n("861309"),
                I = n("578287"),
                T = n("65810"),
                S = n("961400"),
                N = n("694352"),
                A = n("492249"),
                m = n("49111");

            function p(e) {
                var t;
                let {
                    args: {
                        channel_id: n
                    },
                    socket: a
                } = e, s = o.default.getChannel(n);
                if (null == s || !(0, I.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new C.default(A.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(n));
                if (s.isNSFW() && (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new C.default(A.RPCErrors.INVALID_CHANNEL, "Invalid nsfw channel id: ".concat(s.id))
            }

            function g(e) {
                let {
                    args: {
                        lobby_id: t,
                        channel_id: n
                    }
                } = e;
                if (null != n) {
                    let e = o.default.getChannel(n);
                    if (null == e) throw new C.default(A.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(n))
                }
                if (null != t) {
                    let e = d.default.getLobby(t);
                    if (null == e) throw new C.default(A.RPCErrors.INVALID_LOBBY, "Invalid lobby id: ".concat(t))
                }
            }
            let R = {
                [m.RPCEvents.GUILD_STATUS]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler(e) {
                        let {
                            args: {
                                guild_id: t
                            }
                        } = e;
                        if (null == u.default.getGuild(t)) throw new C.default(A.RPCErrors.INVALID_GUILD, "Invalid guild id: ".concat(t));
                        return e => {
                            var n;
                            let {
                                prevState: a,
                                dispatch: i
                            } = e, l = u.default.getGuild(t);
                            if (null == l) return;
                            let r = {
                                guild: {
                                    id: l.id,
                                    name: l.name,
                                    icon_url: null !== (n = l.getIconURL(128)) && void 0 !== n ? n : null
                                },
                                online: 0
                            };
                            return !s.isEqual(a, r) && i(r), r
                        }
                    }
                },
                [m.RPCEvents.VOICE_STATE_CREATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VOICE_READ]
                    },
                    handler(e) {
                        let {
                            args: {
                                channel_id: t
                            }
                        } = e;
                        if (null == o.default.getChannel(t)) throw new C.default(A.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
                        return e => {
                            let {
                                prevState: n,
                                dispatch: a
                            } = e, i = o.default.getChannel(t);
                            if (null == i) return;
                            let l = i.getGuildId(),
                                r = Object.values(h.default.getVoiceStatesForChannel(i.id));
                            if (n) {
                                let e = s.differenceBy(r, n, e => {
                                    let {
                                        userId: t
                                    } = e;
                                    return t
                                });
                                e.forEach(e => a((0, I.transformVoiceState)(l, i.id, e)))
                            }
                            return r
                        }
                    }
                },
                [m.RPCEvents.VOICE_STATE_DELETE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VOICE_READ]
                    },
                    handler(e) {
                        let {
                            args: {
                                channel_id: t
                            }
                        } = e;
                        if (null == o.default.getChannel(t)) throw new C.default(A.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
                        return e => {
                            let {
                                prevState: n,
                                dispatch: a
                            } = e, i = o.default.getChannel(t);
                            if (null == i) return;
                            let l = i.getGuildId(),
                                r = Object.values(h.default.getVoiceStatesForChannel(i.id)),
                                u = s.differenceBy(n, r, e => {
                                    let {
                                        userId: t
                                    } = e;
                                    return t
                                });
                            return u.forEach(e => a((0, I.transformVoiceState)(l, i.id, e))), r
                        }
                    }
                },
                [m.RPCEvents.VOICE_STATE_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VOICE_READ]
                    },
                    handler(e) {
                        let {
                            args: {
                                channel_id: t
                            }
                        } = e;
                        if (null == o.default.getChannel(t)) throw new C.default(A.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
                        return e => {
                            let {
                                prevState: n,
                                dispatch: a
                            } = e, i = o.default.getChannel(t);
                            if (null == i) return;
                            let l = i.getGuildId(),
                                r = Object.values(h.default.getVoiceStatesForChannel(i.id)).map(e => (0, I.transformVoiceState)(l, i.id, e)),
                                u = s.differenceWith(r, n, s.isEqual);
                            return u.forEach(e => a(e)), r
                        }
                    }
                },
                [m.RPCEvents.VOICE_CONNECTION_STATUS]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VOICE_READ]
                    },
                    handler: () => e => {
                        let {
                            prevState: t,
                            dispatch: n
                        } = e, a = {
                            state: (0, I.getVoiceConnectionState)(E.default.getState()),
                            hostname: E.default.getHostname(),
                            pings: E.default.getPings(),
                            average_ping: E.default.getAveragePing(),
                            last_ping: E.default.getLastPing()
                        };
                        return !s.isEqual(a, t) && n(a), a
                    }
                },
                [m.RPCEvents.MESSAGE_CREATE]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler: p
                },
                [m.RPCEvents.MESSAGE_UPDATE]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler: p
                },
                [m.RPCEvents.MESSAGE_DELETE]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler: p
                },
                [m.RPCEvents.SPEAKING_START]: {
                    [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VOICE_READ, A.RPC_LOCAL_SCOPE],
                    handler: g
                },
                [m.RPCEvents.SPEAKING_STOP]: {
                    [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VOICE_READ, A.RPC_LOCAL_SCOPE],
                    handler: g
                },
                [m.RPCEvents.GUILD_CREATE]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler() {}
                },
                [m.RPCEvents.CHANNEL_CREATE]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler() {}
                },
                [m.RPCEvents.GAME_JOIN]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.GAME_SPECTATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_JOIN]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_SPECTATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_INVITE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [m.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.activityInstanceConnectedParticipantsUpdateEvent,
                [m.RPCEvents.THERMAL_STATE_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ORIENTATION_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ACTIVITY_INSTANCE_UPDATE]: {
                    handler() {}
                },
                [m.RPCEvents.VOICE_CHANNEL_SELECT]: {
                    scope: m.OAuth2Scopes.RPC,
                    handler() {}
                },
                [m.RPCEvents.NOTIFICATION_CREATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ALL]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
                    },
                    handler() {}
                },
                [m.RPCEvents.RELATIONSHIP_UPDATE]: {
                    scope: A.RPC_LOCAL_SCOPE,
                    handler() {}
                },
                [m.RPCEvents.CURRENT_USER_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_LOCAL_SCOPE, m.OAuth2Scopes.IDENTIFY]
                    },
                    handler: () => e => {
                        let {
                            prevState: t,
                            dispatch: n
                        } = e, a = {
                            currentUser: _.default.getCurrentUser()
                        };
                        return null != a.currentUser && (null == t || !(0, i.default)(a, t)) && n((0, N.default)(a.currentUser)), a
                    }
                },
                [m.RPCEvents.LOBBY_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.LOBBY_DELETE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.LOBBY_MEMBER_CONNECT]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.LOBBY_MEMBER_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.LOBBY_MEMBER_DISCONNECT]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.LOBBY_MESSAGE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ENTITLEMENT_CREATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_LOCAL_SCOPE, A.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.ENTITLEMENT_DELETE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_LOCAL_SCOPE, A.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler() {}
                },
                [m.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
                    scope: A.RPC_LOCAL_SCOPE,
                    handler() {}
                },
                [m.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ALL]: [A.RPC_LOCAL_SCOPE, m.OAuth2Scopes.RPC_SCREENSHARE_READ]
                    },
                    handler: () => e => {
                        var t, n;
                        let {
                            prevState: a,
                            dispatch: i
                        } = e, o = r.default.getStreamerActiveStreamMetadata(), u = (null == o ? void 0 : o.pid) != null ? f.default.getGameForPID(o.pid) : null, d = (null == u ? void 0 : u.id) != null ? l.default.getApplication(u.id) : null, c = null != d ? (0, S.default)(d) : null, E = null == o ? void 0 : o.sourceName, _ = {
                            active: null != o,
                            pid: null !== (t = null == o ? void 0 : o.pid) && void 0 !== t ? t : null,
                            application: (n = null != c, n) ? {
                                name: E
                            } : null
                        };
                        return !s.isEqual(_, a) && i(_), _
                    }
                },
                [m.RPCEvents.VIDEO_STATE_UPDATE]: {
                    scope: {
                        [A.RPC_SCOPE_CONFIG.ALL]: [A.RPC_LOCAL_SCOPE, m.OAuth2Scopes.RPC_VIDEO_READ]
                    },
                    handler: () => e => {
                        let {
                            prevState: t,
                            dispatch: n
                        } = e, a = {
                            active: c.default.isVideoEnabled()
                        };
                        return !s.isEqual(a, t) && n(a), a
                    }
                }
            };
            var O = R