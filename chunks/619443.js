            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("808653"), n("70102");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("987317"),
                u = n("723939"),
                o = n("605250"),
                d = n("374014"),
                c = n("374363"),
                _ = n("271938"),
                E = n("950104"),
                f = n("42203"),
                h = n("260320"),
                p = n("42887"),
                T = n("945956"),
                C = n("590401"),
                m = n("18494"),
                S = n("101125"),
                I = n("205817"),
                g = n("447214"),
                A = n("518916"),
                N = n("571420"),
                O = n("399010"),
                R = n("49111"),
                y = n("397336");
            let v = window.DiscordNative;
            (0, A.setDispatchSocketMessageFunction)(O.default);
            let M = new o.default("ConnectionStore"),
                L = 0,
                D = null,
                U = !0;
            async function P(e) {
                L = Date.now(), D = e.sessionId, A.localPresenceState.handleConnectionOpen();
                let t = {},
                    n = m.default.getVoiceChannelId();
                if (null != n) {
                    var i, a, l, s, u, o, d, c;
                    let e = (null === (u = window) || void 0 === u ? void 0 : null === (s = u.performance) || void 0 === s ? void 0 : null === (l = s.getEntriesByType) || void 0 === l ? void 0 : null === (a = l.call(s, "navigation")) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (o = await (null == v ? void 0 : null === (c = v.processUtils) || void 0 === c ? void 0 : null === (d = c.getLastCrash) || void 0 === d ? void 0 : d.call(c))) || void 0 === o ? void 0 : o.rendererCrashReason) != null;
                    if (e || !U) {
                        let e = f.default.getChannel(n);
                        null != e && (t = {
                            guildId: e.getGuildId(),
                            channelId: n
                        })
                    } else T.default.setLastSessionVoiceChannelId(null != n ? n : null), r.default.selectVoiceChannel(null)
                }
                A.localVoiceState.update(t, !0), A.localLobbyVoiceStates.update({}, !0), U = !1
            }

            function b() {
                A.localVoiceState.update()
            }

            function G() {
                return A.localVoiceState.update(), A.localLobbyVoiceStates.update(), !1
            }

            function k() {
                return A.localPresenceState.update(), !1
            }

            function F() {
                return A.localLobbyVoiceStates.update(), !1
            }

            function w(e) {
                A.socket.isSessionEstablished() && A.socket.streamDelete(e)
            }
            class H extends l.default.Store {
                initialize() {
                    this.waitFor(_.default, m.default, f.default, E.default, h.default, c.default), this.syncWith([p.default], G), this.syncWith([S.default], k)
                }
                getSocket() {
                    return A.socket
                }
                isTryingToConnect() {
                    return !A.socket.isClosed()
                }
                isConnected() {
                    return A.socket.isSessionEstablished()
                }
                isConnectedOrOverlay() {
                    return A.socket.isSessionEstablished() || __OVERLAY__
                }
                lastTimeConnectedChanged() {
                    return L
                }
            }
            H.displayName = "GatewayConnectionStore";
            var x = new H(s.default, {
                START_SESSION: function() {
                    return A.socket.isClosed() ? (M.verbose("Socket is reconnecting because of starting new session"), A.socket.connect()) : (M.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
                },
                LOGIN_SUCCESS: function() {
                    return M.verbose("session refresh dispatched", {
                        isEstablished: A.socket.isSessionEstablished()
                    }), !!A.socket.isSessionEstablished() && (A.socket.close(), A.socket.connect())
                },
                LOGOUT: function(e) {
                    e.isSwitchingAccount && A.localPresenceState.handleAccountSwitch(), M.verbose("Closing socket because of logout"), A.socket.close()
                },
                CLEAR_CACHES: function(e) {
                    return A.socket.close(), A.socket.clearDispatchQueue(), A.socket.connect(), !1
                },
                CONNECTION_OPEN: e => {
                    P(e)
                },
                CONNECTION_CLOSED: function() {
                    M.verbose("connection closed dispatched"), L = Date.now()
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (e.state !== R.RTCConnectionStates.DISCONNECTED) return !1;
                    e.willReconnect && (null != e.streamKey ? A.socket.streamPing(e.streamKey) : A.socket.voiceServerPing())
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    return A.localVoiceState.update({
                        guildId: e.guildId,
                        channelId: e.channelId
                    }), !1
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        if (_.default.getId() !== t.userId) return e;
                        if (t.sessionId === D) A.localVoiceState.setState({
                            guildId: t.guildId,
                            channelId: t.channelId
                        });
                        else {
                            if (t.guildId !== A.localVoiceState.guildId) return e;
                            A.localVoiceState.setState({
                                guildId: null,
                                channelId: null
                            })
                        }
                        return !0
                    }, !1)
                },
                GUILD_DELETE: function(e) {
                    e.guild.id === A.localVoiceState.guildId && A.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    t.id === A.localVoiceState.channelId && A.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    t === A.localVoiceState.channelId && A.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                },
                APP_STATE_UPDATE: function(e) {
                    return e.state === R.AppStates.ACTIVE && (N.setIsPaused(!1), _.default.isAuthenticated() && A.socket.resetBackoff("App state is active")), !1
                },
                GUILD_MEMBERS_REQUEST: function(e) {
                    return A.socket.isSessionEstablished() && ("userIds" in e ? a(e.userIds).chunk(100).forEach(t => {
                        A.socket.requestGuildMembers(e.guildIds, {
                            userIds: t,
                            presences: !!e.presences
                        })
                    }) : A.socket.requestGuildMembers(e.guildIds, {
                        query: e.query,
                        limit: e.limit,
                        presences: !!e.presences
                    })), !1
                },
                GUILD_SEARCH_RECENT_MEMBERS: function(e) {
                    let {
                        guildId: t,
                        query: n,
                        continuationToken: i
                    } = e;
                    A.socket.isSessionEstablished() && A.socket.searchRecentMembers(t, {
                        query: n,
                        continuationToken: i
                    })
                },
                GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
                    let {
                        guildId: t,
                        subscriptions: n
                    } = e;
                    return A.socket.isSessionEstablished() && A.socket.updateGuildSubscriptions(t, n), !1
                },
                CALL_CONNECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return A.socket.isSessionEstablished() && A.socket.callConnect(t), !1
                },
                CALL_CONNECT_MULTIPLE: function(e) {
                    let {
                        channelIds: t
                    } = e;
                    return A.socket.isSessionEstablished() && t.forEach(e => {
                        A.socket.callConnect(e)
                    }), !1
                },
                LOBBY_CONNECT: function(e) {
                    let {
                        lobbyId: t,
                        lobbySecret: n
                    } = e;
                    return A.socket.isSessionEstablished() && A.socket.lobbyConnect(t, n), !1
                },
                LOBBY_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e;
                    return A.socket.isSessionEstablished() && A.socket.lobbyDisconnect(t), A.localLobbyVoiceStates.update(), !1
                },
                LOBBY_VOICE_CONNECT: F,
                LOBBY_VOICE_DISCONNECT: F,
                RPC_APP_DISCONNECTED: F,
                STREAM_CREATE: b,
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: i
                    } = e;
                    if (A.socket.isSessionEstablished()) {
                        var a, l;
                        let e = null != n ? null === (a = f.default.getChannel(i)) || void 0 === a ? void 0 : a.rtcRegion : null === (l = E.default.getCall(i)) || void 0 === l ? void 0 : l.region;
                        A.socket.streamCreate(t, n, i, null != e ? e : C.default.getPreferredRegion())
                    }
                    return !1
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t,
                        allowMultiple: n
                    } = e;
                    return A.socket.isSessionEstablished() && (n || ! function() {
                        let e = function() {
                            return I.default.getAllActiveStreamKeys().find(e => (0, d.decodeStreamKey)(e).ownerId === _.default.getId())
                        }();
                        I.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => w(e))
                    }(), A.socket.streamWatch(t)), !1
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    return w(t), b(), !1
                },
                STREAM_SET_PAUSED: function(e) {
                    let {
                        streamKey: t,
                        paused: n
                    } = e;
                    A.socket.isSessionEstablished() && A.socket.streamSetPaused(t, n)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    return A.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
                },
                EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
                    var t, n;
                    let {
                        channelId: i,
                        applicationId: a
                    } = e, l = null !== (n = null === (t = f.default.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
                    A.socket.embeddedActivityClose(l, i, a)
                },
                REQUEST_FORUM_UNREADS: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        threads: i
                    } = e;
                    A.socket.requestForumUnreads(t, n, i)
                },
                REQUEST_SOUNDBOARD_SOUNDS: function(e) {
                    let {
                        guildIds: t
                    } = e;
                    A.socket.requestSoundboardSounds(t)
                },
                REMOTE_COMMAND: function(e) {
                    let {
                        sessionId: t,
                        payload: n
                    } = e;
                    return A.socket.isSessionEstablished() && A.socket.remoteCommand(t, n), !1
                },
                RESET_CONNECTION: function(e) {
                    A.socket.connectionState !== g.ConnectionState.WILL_RECONNECT && (e.badCache ? (u.default.replaceDisableAllDatabases("RESET_CONNECTION"), A.socket.resetSocketOnError(Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")) : A.socket.resetSocketOnError(Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION"))
                },
                RTC_SPEED_TEST_START_TEST: function() {
                    return A.socket.isSessionEstablished() && A.socket.speedTestCreate(C.default.getPreferredRegion()), !1
                },
                RTC_SPEED_TEST_STOP_TEST: function() {
                    return A.socket.isSessionEstablished() && A.socket.speedTestDelete(), !1
                },
                CLIPS_SETTINGS_UPDATE: b,
                RUNNING_GAMES_CHANGE: b,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    e.settings.type === y.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && b()
                }
            })