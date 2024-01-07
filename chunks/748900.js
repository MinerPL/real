            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var a, s = n("917351"),
                i = n.n(s),
                l = n("446674"),
                r = n("913144"),
                o = n("191225"),
                u = n("499031"),
                d = n("42203"),
                c = n("26989"),
                E = n("305961"),
                f = n("260320"),
                _ = n("169602"),
                h = n("42887"),
                C = n("824563"),
                T = n("945956"),
                I = n("27618"),
                S = n("18494"),
                N = n("843823"),
                A = n("697218"),
                m = n("800762"),
                p = n("599110"),
                g = n("449008"),
                R = n("773336"),
                O = n("578287"),
                L = n("65810"),
                v = n("694352"),
                M = n("49111"),
                P = n("954016"),
                D = n("353927");
            a = class {
                loadServer() {
                    for (let e of (R.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
                    let e = this.rpcCommandHandlers;
                    for (let [t, n] of Object.entries(e)) this.rpcServer.setCommandHandler(t, n);
                    let t = this.rpcEventHandlers;
                    for (let [e, n] of Object.entries(t)) this.rpcServer.setEventHandler(e, n)
                }
                init() {
                    this.rpcServer.getCurrentUser = () => A.default.getCurrentUser(), this.rpcServer.onConnect = e => {
                        r.default.dispatch({
                            type: "RPC_APP_CONNECTED",
                            socketId: e.id,
                            application: e.application
                        }), p.default.track(M.AnalyticEvents.AUTHORIZED_APP_CONNECTED, {
                            app_id: e.application.id,
                            transport: e.transport
                        })
                    }, this.rpcServer.onDisconnect = (e, t) => {
                        r.default.dispatch({
                            type: "RPC_APP_DISCONNECTED",
                            socketId: e.id,
                            application: e.application,
                            reason: t
                        })
                    };
                    let e = [d.default, c.default, C.default, m.default, h.default, T.default],
                        t = new l.BatchedStoreListener(e.concat(this.stores), () => this.rpcServer.updateSubscriptions());
                    t.attach("RPCServerManager"), r.default.subscribe("MESSAGE_CREATE", e => this.handleMessage(e)), r.default.subscribe("MESSAGE_UPDATE", e => this.handleMessage(e)), r.default.subscribe("MESSAGE_DELETE", e => this.handleMessage(e)), r.default.subscribe("SPEAKING", e => this.handleSpeaking(e)), r.default.subscribe("OAUTH2_TOKEN_REVOKE", e => this.handleOAuth2TokenRevoke(e)), r.default.subscribe("GUILD_CREATE", e => this.handleGuildCreate(e)), r.default.subscribe("CHANNEL_CREATE", e => this.handleChannelCreate(e)), r.default.subscribe("LOGOUT", () => this.handleLogout()), r.default.subscribe("VOICE_CHANNEL_SELECT", e => this.handleVoiceChannelSelect(e)), r.default.subscribe("RPC_NOTIFICATION_CREATE", e => this.handleNotificationCreate(e)), r.default.subscribe("ACTIVITY_JOIN", e => this.handleActivityJoin(e)), r.default.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", e => this.handleActivityLayoutModeUpdate(e)), r.default.subscribe("THERMAL_STATE_CHANGE", e => this.handleThermalStateChange(e)), r.default.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", e => this.handleScreenOrientationUpdate(e)), r.default.subscribe("EMBEDDED_ACTIVITY_INSTANCE_CHANGE", e => this.handleActivityInstanceChange(e)), (0, L.subscribeToActivityInstanceConnectedParticipants)(e => this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), r.default.subscribe("RELATIONSHIP_ADD", e => this.handleRelationshipAdd(e)), r.default.subscribe("RELATIONSHIP_REMOVE", e => this.handleRelationshipRemove(e)), r.default.subscribe("PRESENCE_UPDATES", e => this.handlePresenceUpdate(e)), r.default.subscribe("PRESENCES_REPLACE", () => this.handlePresencesReplace()), r.default.subscribe("LOBBY_UPDATE", e => this.handleLobbyUpdate(e)), r.default.subscribe("LOBBY_DELETE", e => this.handleLobbyDelete(e)), r.default.subscribe("LOBBY_MEMBER_CONNECT", e => this.handleLobbyMemberConnect(e)), r.default.subscribe("LOBBY_MEMBER_UPDATE", e => this.handleLobbyMemberUpdate(e)), r.default.subscribe("LOBBY_MEMBER_DISCONNECT", e => this.handleLobbyMemberDisconnect(e)), r.default.subscribe("LOBBY_MESSAGE", e => this.handleLobbyMessage(e)), r.default.subscribe("ENTITLEMENT_CREATE", e => this.handleEntitlementCreate(e)), r.default.subscribe("ENTITLEMENT_DELETE", e => this.handleEntitlementDelete(e)), r.default.subscribe("USER_ACHIEVEMENT_UPDATE", e => this.handleUserAchievementUpdate(e))
                }
                handleMessage(e) {
                    let t, n, a;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
                    let s = null;
                    switch (e.type) {
                        case "MESSAGE_CREATE":
                            if ("SENDING" === e.message.state) return;
                            t = M.RPCEvents.MESSAGE_CREATE, n = e.channelId, a = e.message, s = "".concat(t).concat(e.message.id);
                            break;
                        case "MESSAGE_UPDATE":
                            t = M.RPCEvents.MESSAGE_UPDATE, n = e.message.channel_id, a = e.message;
                            break;
                        case "MESSAGE_DELETE":
                            t = M.RPCEvents.MESSAGE_DELETE, n = e.channelId, a = {
                                id: e.id
                            }, s = "".concat(t).concat(e.id);
                            break;
                        default:
                            return (0, g.assertNever)(e)
                    }
                    null != n && this.rpcServer.dispatchToSubscriptions(t, {
                        channel_id: n
                    }, {
                        channel_id: n,
                        message: (0, O.transformInternalTextMessage)(a)
                    }, s)
                }
                handleSpeaking(e) {
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let t = 0 !== e.speakingFlags ? M.RPCEvents.SPEAKING_START : M.RPCEvents.SPEAKING_STOP;
                    if (e.context === D.MediaEngineContextTypes.DEFAULT) {
                        let n = S.default.getVoiceChannelId();
                        if (null != n) {
                            let a = d.default.getChannel(n);
                            if (null == a) return;
                            let s = m.default.getVoiceState(a.getGuildId(), e.userId);
                            if (null == s) return;
                            this.rpcServer.dispatchToSubscriptions(t, {
                                channel_id: s.channelId
                            }, {
                                channel_id: s.channelId,
                                user_id: e.userId
                            })
                        }
                    } else _.default.getLobbyIdsForUser(e.userId).forEach(n => {
                        let a = f.default.getLobby(n);
                        null != a && a.application_id === e.context && this.rpcServer.dispatchToSubscriptions(t, {}, {
                            lobby_id: n,
                            user_id: e.userId
                        })
                    })
                }
                handleVoiceChannelSelect(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.VOICE_CHANNEL_SELECT, {}, {
                        channel_id: n,
                        guild_id: t
                    })
                }
                handleNotificationCreate(e) {
                    let {
                        channelId: t,
                        message: n,
                        icon: a,
                        title: s,
                        body: i
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.NOTIFICATION_CREATE, {}, {
                        channel_id: t,
                        message: (0, O.transformInternalTextMessage)(n),
                        icon_url: null != a ? (0, O.getRemoteIconURL)(a) : null,
                        title: s,
                        body: i
                    })
                }
                handleActivityJoin(e) {
                    let {
                        applicationId: t,
                        secret: n,
                        intent: a,
                        embedded: s
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let i = {
                        secret: n
                    };
                    s && (i.intent = a), this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_JOIN, e => e.socket.application.id === t, i), this.rpcServer.dispatchToSubscriptions(M.RPCEvents.GAME_JOIN, e => e.socket.application.id === t, i)
                }
                handleActivityLayoutModeUpdate(e) {
                    let {
                        applicationId: t,
                        layoutMode: n
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let a = n !== P.ActivityLayoutMode.FOCUSED;
                    this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
                        is_pip_mode: a
                    });
                    this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
                        layout_mode: n
                    })
                }
                handleThermalStateChange(e) {
                    let {
                        applicationId: t,
                        rawThermalState: n
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length || null == t) return;
                    let a = {
                        thermal_state: (0, u.default)(n)
                    };
                    this.rpcServer.dispatchToSubscriptions(M.RPCEvents.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, a)
                }
                handleScreenOrientationUpdate(e) {
                    let {
                        screenOrientation: t
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let n = t === P.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
                    this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ORIENTATION_UPDATE, {}, {
                        screen_orientation: t,
                        orientation: n
                    })
                }
                handleActivityInstanceChange(e) {
                    let {
                        channelId: t,
                        instanceId: n
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let a = A.default.getCurrentUser();
                    if (null == a) return;
                    let s = o.default.getSelfEmbeddedActivityForChannel(t);
                    null != s && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_INSTANCE_UPDATE, e => e.socket.application.id === s.application_id, {
                        instance_id: n
                    })
                }
                handleActivityMessage(e) {
                    var t;
                    let {
                        channelId: n,
                        message: a
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let {
                        application: s,
                        activity: i
                    } = a;
                    if (null == s || null == i || null == i.party_id) return;
                    let l = A.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
                    if (null == l) return;
                    let r = A.default.getCurrentUser();
                    if (null == r || l.id === r.id) return;
                    let o = i.type === M.ActivityActionTypes.JOIN_REQUEST ? C.default.getApplicationActivity(r.id, s.id) : C.default.getApplicationActivity(l.id, s.id);
                    if (null == o || null == o.party || o.party.id !== i.party_id) return;
                    let u = o.application_id;
                    switch (i.type) {
                        case M.ActivityActionTypes.JOIN:
                            this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_INVITE, e => e.socket.application.id === u, {
                                user: (0, v.default)(l),
                                activity: o,
                                type: i.type,
                                channel_id: n,
                                message_id: a.id
                            });
                            break;
                        case M.ActivityActionTypes.JOIN_REQUEST:
                            this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === u, {
                                user: (0, v.default)(l)
                            })
                    }
                }
                handleOAuth2TokenRevoke(e) {
                    let {
                        accessToken: t
                    } = e;
                    this.rpcServer.sockets.forEach(e => {
                        e.authorization.accessToken === t && e.close(M.RPCCloseCodes.TOKEN_REVOKED, "Token revoked")
                    })
                }
                handleGuildCreate(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e, n = E.default.getGuild(t);
                    0 !== this.rpcServer.subscriptions.length && null != n && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.GUILD_CREATE, {}, {
                        id: t,
                        name: n.name
                    })
                }
                handleChannelCreate(e) {
                    let {
                        channel: {
                            id: t,
                            name: n,
                            type: a
                        }
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.CHANNEL_CREATE, {}, {
                        id: t,
                        name: n,
                        type: a
                    })
                }
                handleLogout() {
                    this.rpcServer.sockets.forEach(e => e.close(M.RPCCloseCodes.CLOSE_NORMAL, "User logout"))
                }
                handleRelationshipAdd(e) {
                    let {
                        relationship: {
                            id: t,
                            type: n
                        }
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, O.transformRelationship)(n, t))
                }
                handleRelationshipRemove(e) {
                    let {
                        relationship: {
                            id: t
                        }
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, O.transformRelationship)(M.RelationshipTypes.NONE, t))
                }
                handlePresenceUpdate(e) {
                    let {
                        updates: t
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && t.forEach(e => {
                        let {
                            guildId: t,
                            user: {
                                id: n
                            }
                        } = e;
                        if (null != t) return;
                        let a = I.default.getRelationshipType(n);
                        a === M.RelationshipTypes.NONE && N.default.getUserAffinitiesUserIds().has(n) && (a = M.RelationshipTypes.IMPLICIT), a !== M.RelationshipTypes.NONE && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, O.transformRelationship)(a, n))
                    })
                }
                handlePresencesReplace() {
                    0 !== this.rpcServer.subscriptions.length && i.forEach(I.default.getRelationships(), (e, t) => {
                        this.rpcServer.dispatchToSubscriptions(M.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, O.transformRelationship)(e, t))
                    })
                }
                handleLobbyUpdate(e) {
                    let {
                        lobby: t
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.LOBBY_UPDATE, {}, t)
                }
                handleLobbyDelete(e) {
                    let {
                        lobbyId: t
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.LOBBY_DELETE, {}, {
                        id: t
                    })
                }
                handleLobbyMemberConnect(e) {
                    let {
                        lobbyId: t,
                        member: n
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.LOBBY_MEMBER_CONNECT, {}, {
                        lobby_id: t,
                        member: n
                    })
                }
                handleLobbyMemberUpdate(e) {
                    let {
                        lobbyId: t,
                        member: n
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.LOBBY_MEMBER_UPDATE, {}, {
                        lobby_id: t,
                        member: n
                    })
                }
                handleLobbyMemberDisconnect(e) {
                    let {
                        lobbyId: t,
                        member: n
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.LOBBY_MEMBER_DISCONNECT, {}, {
                        lobby_id: t,
                        member: n
                    })
                }
                handleLobbyMessage(e) {
                    let {
                        lobbyId: t,
                        senderId: n,
                        data: a
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.LOBBY_MESSAGE, {}, {
                        lobby_id: t,
                        sender_id: n,
                        data: a
                    })
                }
                handleEntitlementCreate(e) {
                    let {
                        entitlement: t
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ENTITLEMENT_CREATE, e => e.socket.application.id === t.application_id, {
                        entitlement: t
                    })
                }
                handleEntitlementDelete(e) {
                    let {
                        entitlement: t
                    } = e;
                    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(M.RPCEvents.ENTITLEMENT_DELETE, e => e.socket.application.id === t.application_id, {
                        entitlement: t
                    })
                }
                handleUserAchievementUpdate(e) {
                    let {
                        userAchievement: t
                    } = e;
                    if (0 === this.rpcServer.subscriptions.length) return;
                    let {
                        application_id: n
                    } = t;
                    this.rpcServer.dispatchToSubscriptions(M.RPCEvents.USER_ACHIEVEMENT_UPDATE, e => e.socket.application.id === n, {
                        user_achievement: t
                    })
                }
                constructor(e) {
                    this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
                }
            }