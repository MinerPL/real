            "use strict";
            n.r(t), n.d(t, {
                LobbyError: function() {
                    return u
                },
                default: function() {
                    return f
                }
            }), n("424973");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("49111");
            class u {
                constructor(e) {
                    this.code = e
                }
            }
            let o = {},
                d = {};

            function c(e, t) {
                if (null == d[e]) return null;
                let {
                    socketId: n,
                    timeout: i,
                    resolve: a,
                    reject: l
                } = d[e];
                return delete d[e], null != i && clearTimeout(i), null != a && null != l && t(a, l), n
            }

            function _(e) {
                let {
                    lobbyId: t,
                    member: {
                        user: n,
                        metadata: i
                    }
                } = e, a = o[t];
                if (null == a) return !1;
                let l = a.members.find(e => e.user.id === n.id);
                null != l ? (l.user = n, l.metadata = i) : a.members.push({
                    user: n,
                    metadata: i
                })
            }
            class E extends l.default.Store {
                getLobbies() {
                    return o
                }
                getLobbiesWithVoice() {
                    return a.filter(o, e => e.voice)
                }
                getLobby(e) {
                    return o[e]
                }
                getPendingLobbies() {
                    return a.map(d, (e, t) => {
                        let {
                            secret: n
                        } = e;
                        return {
                            id: t,
                            secret: n
                        }
                    })
                }
            }
            E.displayName = "LobbyStore";
            var f = new E(s.default, {
                CONNECTION_OPEN: function() {
                    o = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    o = e.lobbies
                },
                LOBBY_CONNECT: function(e) {
                    let {
                        socketId: t,
                        lobbyId: n,
                        lobbySecret: i,
                        resolve: a,
                        reject: l
                    } = e;
                    if (null != d[n] || null != o[n]) {
                        null != l && l(new u(r.LobbyErrors.ALREADY_CONNECTING));
                        return
                    }
                    d[n] = {
                        socketId: t,
                        secret: i,
                        resolve: a,
                        reject: l,
                        timeout: __OVERLAY__ ? null : setTimeout(() => {
                            s.default.dispatch({
                                type: "LOBBY_DELETE",
                                lobbyId: n,
                                reason: r.LobbyErrors.SERVICE_UNAVAILABLE
                            })
                        }, 15e3)
                    }
                },
                LOBBY_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e;
                    c(t, (e, t) => t(new u(r.LobbyErrors.NO_ERROR)))
                },
                LOBBY_CREATE: function(e) {
                    let {
                        lobby: t
                    } = e, n = c(t.id, e => e(t));
                    null != n && (o[t.id] = {
                        socketId: n,
                        voice: !1,
                        ...o[t.id],
                        ...t
                    })
                },
                LOBBY_UPDATE: function(e) {
                    let {
                        lobby: t
                    } = e, n = o[t.id];
                    null != n && (o[t.id] = {
                        ...n,
                        ...t
                    })
                },
                LOBBY_DELETE: function(e) {
                    let {
                        lobbyId: t,
                        reason: n
                    } = e;
                    delete o[t], c(t, (e, t) => t(new u(n)))
                },
                LOBBY_MEMBER_CONNECT: _,
                LOBBY_MEMBER_UPDATE: _,
                LOBBY_MEMBER_DISCONNECT: function(e) {
                    let {
                        lobbyId: t,
                        member: {
                            user: n
                        }
                    } = e, i = o[t];
                    if (null == i) return !1;
                    i.members = i.members.filter(e => e.user.id !== n.id)
                },
                LOBBY_VOICE_CONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e, n = o[t];
                    if (null == n) return !1;
                    n.voice = !0
                },
                LOBBY_VOICE_DISCONNECT: function(e) {
                    let {
                        lobbyId: t
                    } = e, n = o[t];
                    if (null == n) return !1;
                    n.voice = !1
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    a.forEach(o, e => {
                        e.socketId === t && s.default.dispatch({
                            type: "LOBBY_DISCONNECT",
                            lobbyId: e.id
                        })
                    })
                }
            })