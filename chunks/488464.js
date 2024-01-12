            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("714617"),
                i = n.n(r),
                l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                o = n("407846"),
                d = n("913144"),
                s = n("374014"),
                E = n("373469"),
                _ = n("271938"),
                c = n("42203"),
                I = n("305961"),
                S = n("957255"),
                T = n("27618"),
                f = n("280168"),
                p = n("697218"),
                N = n("800762"),
                C = n("316133"),
                A = n("998716"),
                R = n("325861"),
                h = n("834052");
            let O = "NO_GUILD",
                L = new o.default(e => [function(e) {
                    var t;
                    return null !== (t = e.getGuildId()) && void 0 !== t ? t : O
                }(e)], e => e.id),
                g = new Set,
                P = {};

            function m(e) {
                return L.values(null != e ? e : void 0, !0).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })
            }

            function y(e) {
                !g.has(e) && (g.add(e), u(c.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
                    U(e) && L.set(e.id, e)
                }))
            }

            function v(e) {
                let t = P[e];
                if (null != t) return t;
                let n = c.default.getChannel(e);
                return null != n && n.isGuildStageVoice() ? (y(n.guild_id), U(n)) ? D(e) : null : null
            }

            function D(e) {
                let t = P[e];
                return null == t && (t = new A.default(e), P[e] = t, t.rebuild()), t
            }

            function U(e) {
                return null != e && e.isGuildStageVoice() && C.default.countVoiceStatesForChannel(e.id) > 0
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
                return t.reduce((t, n) => {
                    let r = D(n),
                        i = e(r);
                    return i ? (! function(e, t) {
                        let n = c.default.getChannel(e);
                        null != n && n.isGuildStageVoice() ? 0 === t.size() ? w(n.id) : null == L.get(n.id) && L.set(n.id, n) : w(e)
                    }(n, r), !0) : t
                }, !1)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
                return M(t => t.updateParticipant(e), t)
            }

            function w(e) {
                return null != e && (delete P[e], L.delete(e), !0)
            }

            function B() {
                g.clear(), L.clear(), P = {}
            }

            function b(e, t, n) {
                if (null == n || e.has(n)) return;
                let r = c.default.getChannel(n);
                (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n))
            }

            function x(e) {
                let {
                    user: t
                } = e;
                return G(t.id)
            }

            function F(e) {
                let {
                    relationship: t
                } = e;
                return G(t.id)
            }

            function V(e) {
                let {
                    guild: t
                } = e;
                ! function(e) {
                    let t = L.values(e);
                    for (let e of t) L.delete(e.id), delete P[e.id];
                    g.delete(e)
                }(t.id)
            }

            function H(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    guildId: r,
                    ownerId: i
                } = (0, s.decodeStreamKey)(t);
                return !!(null != r && g.has(r)) && G(i, [n])
            }
            let k = [];
            class K extends a.default.Store {
                initialize() {
                    this.waitFor(_.default, p.default, c.default, f.default, N.default, S.default, C.default, I.default, R.default, T.default, h.default, E.default)
                }
                getParticipantsVersion(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
                getMutableParticipants(e, t) {
                    var n, r;
                    return null == e ? k : null !== (r = null === (n = v(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : k
                }
                getMutableRequestToSpeakParticipants(e) {
                    var t, n;
                    return null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : k
                }
                getRequestToSpeakParticipantsVersion(e) {
                    var t, n;
                    return null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
                getParticipantCount(e, t) {
                    var n, r;
                    return null !== (r = null === (n = v(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
                }
                getChannels(e) {
                    return y(null != e ? e : O), L.values(null != e ? e : O)
                }
                getChannelsVersion() {
                    return L.version
                }
                getParticipant(e, t) {
                    var n, r;
                    return null !== (r = null === (n = v(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
                }
            }
            K.displayName = "StageChannelParticipantStore";
            var Y = new K(d.default, {
                CONNECTION_OPEN: B,
                OVERLAY_INITIALIZE: B,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = new Set;
                    return t.reduce((e, t) => {
                        if (null == t.guildId || !g.has(t.guildId)) return e;
                        let r = new Set;
                        return (b(n, r, t.oldChannelId), b(n, r, t.channelId), 0 === r.size) ? e : G(t.userId, Array.from(r)) || e
                    }, !1)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return w(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    for (let e of t) n = G(e.user.id) || n;
                    return n
                },
                USER_UPDATE: x,
                GUILD_MEMBER_REMOVE: x,
                GUILD_MEMBER_UPDATE: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = t.reduce((e, t) => {
                        if (!t.isGuildStageVoice() || !g.has(t.guild_id)) return e;
                        let n = L.get(t.id);
                        return null == n || i(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), L.set(t.id, t), e)
                    }, []);
                    return M(e => e.rebuild(), n), n.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (g.has(t)) return M(e => e.rebuild(), m(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        userId: r
                    } = e;
                    return !!(null != n && g.has(n)) && G(r, [t])
                },
                STREAM_CLOSE: H,
                STREAM_DELETE: H,
                RELATIONSHIP_ADD: F,
                RELATIONSHIP_REMOVE: F,
                GUILD_CREATE: V,
                GUILD_DELETE: V,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = !1;
                    for (let n of m(e.guildId)) t = D(n).rebuild() || t;
                    return t
                }
            })