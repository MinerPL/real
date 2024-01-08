            "use strict";
            let l, u;
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var r = n("917351"),
                i = n.n(r),
                a = n("446674"),
                o = n("913144"),
                s = n("628454");
            let d = Object.freeze({}),
                f = {};

            function c(t) {
                let {
                    lobbyId: e
                } = t;
                delete f[e]
            }
            class E extends a.default.Store {
                getAllVoiceStates() {
                    return f
                }
                getVoiceStates(t) {
                    var e;
                    return null !== (e = f[t]) && void 0 !== e ? e : d
                }
                getVoiceState(t, e) {
                    return this.getVoiceStates(t)[e]
                }
                getLobbyIdsForUser(t) {
                    return Object.keys(f).filter(e => null != f[e][t])
                }
            }
            E.displayName = "LobbyVoiceStateStore";
            var I = new E(o.default, {
                CONNECTION_OPEN: function(t) {
                    let {
                        user: e,
                        sessionId: n
                    } = t;
                    f = {}, l = e.id, u = n
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        lobbyVoiceStates: e,
                        user: n,
                        sessionId: r
                    } = t;
                    f = {}, i.each(e, (t, e) => {
                        f[e] = {}, i.each(t, (t, n) => {
                            f[e][n] = new s.default(t)
                        })
                    }), l = n.id, u = r
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    var e;
                    let n, {
                            sessionId: r,
                            userId: i,
                            lobbyId: a,
                            channelId: o,
                            mute: d,
                            deaf: c,
                            selfMute: E,
                            selfDeaf: I
                        } = t,
                        g = i === l && r !== u,
                        S = null !== (e = f[a]) && void 0 !== e ? e : {},
                        O = S[i];
                    if (null != o && !g && (n = null == O ? new s.default({
                            userId: i,
                            sessionId: r,
                            channelId: o,
                            mute: d,
                            deaf: c,
                            selfMute: E,
                            selfDeaf: I
                        }) : O.merge({
                            userId: i,
                            sessionId: r,
                            channelId: o,
                            mute: d,
                            deaf: c,
                            selfMute: E,
                            selfDeaf: I
                        })), O === n) return !1;
                    null == n ? (S = {
                        ...S
                    }, delete S[i]) : S = {
                        ...S,
                        [i]: n
                    }, f[a] = S
                },
                LOBBY_DELETE: c,
                LOBBY_DISCONNECT: c
            })