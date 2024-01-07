            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("913144"),
                u = n("628454");
            let d = Object.freeze({}),
                c = {};

            function f(e) {
                let {
                    lobbyId: t
                } = e;
                delete c[t]
            }
            class h extends r.default.Store {
                getAllVoiceStates() {
                    return c
                }
                getVoiceStates(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : d
                }
                getVoiceState(e, t) {
                    return this.getVoiceStates(e)[t]
                }
                getLobbyIdsForUser(e) {
                    return Object.keys(c).filter(t => null != c[t][e])
                }
            }
            h.displayName = "LobbyVoiceStateStore";
            var C = new h(o.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    c = {}, l = t.id, a = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        lobbyVoiceStates: t,
                        user: n,
                        sessionId: s
                    } = e;
                    c = {}, i.each(t, (e, t) => {
                        c[t] = {}, i.each(e, (e, n) => {
                            c[t][n] = new u.default(e)
                        })
                    }), l = n.id, a = s
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {
                    var t;
                    let n, {
                            sessionId: s,
                            userId: i,
                            lobbyId: r,
                            channelId: o,
                            mute: d,
                            deaf: f,
                            selfMute: h,
                            selfDeaf: C
                        } = e,
                        p = i === l && s !== a,
                        m = null !== (t = c[r]) && void 0 !== t ? t : {},
                        E = m[i];
                    if (null != o && !p && (n = null == E ? new u.default({
                            userId: i,
                            sessionId: s,
                            channelId: o,
                            mute: d,
                            deaf: f,
                            selfMute: h,
                            selfDeaf: C
                        }) : E.merge({
                            userId: i,
                            sessionId: s,
                            channelId: o,
                            mute: d,
                            deaf: f,
                            selfMute: h,
                            selfDeaf: C
                        })), E === n) return !1;
                    null == n ? (m = {
                        ...m
                    }, delete m[i]) : m = {
                        ...m,
                        [i]: n
                    }, c[r] = m
                },
                LOBBY_DELETE: f,
                LOBBY_DISCONNECT: f
            })