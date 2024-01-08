            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            }), n("222007"), n("808653"), n("424973");
            var i = n("714617"),
                a = n.n(i),
                l = n("917351"),
                s = n.n(l),
                r = n("446674"),
                u = n("407846"),
                o = n("913144"),
                d = n("374014"),
                c = n("373469"),
                _ = n("271938"),
                E = n("42203"),
                f = n("305961"),
                h = n("957255"),
                p = n("27618"),
                T = n("280168"),
                C = n("697218"),
                m = n("800762"),
                S = n("316133"),
                I = n("998716"),
                g = n("325861"),
                A = n("834052");
            let N = "NO_GUILD",
                O = new u.default(e => [function(e) {
                    var t;
                    return null !== (t = e.getGuildId()) && void 0 !== t ? t : N
                }(e)], e => e.id),
                R = new Set,
                y = {};

            function v(e) {
                return O.values(null != e ? e : void 0, !0).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })
            }

            function M(e) {
                !R.has(e) && (R.add(e), s(E.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
                    U(e) && O.set(e.id, e)
                }))
            }

            function D(e) {
                let t = y[e];
                if (null != t) return t;
                let n = E.default.getChannel(e);
                return null != n && n.isGuildStageVoice() ? (M(n.guild_id), U(n)) ? L(e) : null : null
            }

            function L(e) {
                let t = y[e];
                return null == t && (t = new I.default(e), y[e] = t, t.rebuild()), t
            }

            function U(e) {
                return null != e && e.isGuildStageVoice() && S.default.countVoiceStatesForChannel(e.id) > 0
            }

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v();
                return t.reduce((t, n) => {
                    let i = L(n),
                        a = e(i);
                    return a ? (! function(e, t) {
                        let n = E.default.getChannel(e);
                        null != n && n.isGuildStageVoice() ? 0 === t.size() ? G(n.id) : null == O.get(n.id) && O.set(n.id, n) : G(e)
                    }(n, i), !0) : t
                }, !1)
            }

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v();
                return P(t => t.updateParticipant(e), t)
            }

            function G(e) {
                return null != e && (delete y[e], O.delete(e), !0)
            }

            function k() {
                R.clear(), O.clear(), y = {}
            }

            function F(e, t, n) {
                if (null == n || e.has(n)) return;
                let i = E.default.getChannel(n);
                (null == i ? void 0 : i.isGuildStageVoice()) && (t.add(n), e.add(n))
            }

            function w(e) {
                let {
                    user: t
                } = e;
                return b(t.id)
            }

            function V(e) {
                let {
                    relationship: t
                } = e;
                return b(t.id)
            }

            function H(e) {
                let {
                    guild: t
                } = e;
                ! function(e) {
                    let t = O.values(e);
                    for (let e of t) O.delete(e.id), delete y[e.id];
                    R.delete(e)
                }(t.id)
            }

            function x(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    guildId: i,
                    ownerId: a
                } = (0, d.decodeStreamKey)(t);
                return !!(null != i && R.has(i)) && b(a, [n])
            }
            let B = [];
            class Y extends r.default.Store {
                initialize() {
                    this.waitFor(_.default, C.default, E.default, T.default, m.default, h.default, S.default, f.default, g.default, p.default, A.default, c.default)
                }
                getParticipantsVersion(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
                getMutableParticipants(e, t) {
                    var n, i;
                    return null == e ? B : null !== (i = null === (n = D(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== i ? i : B
                }
                getMutableRequestToSpeakParticipants(e) {
                    var t, n;
                    return null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : B
                }
                getRequestToSpeakParticipantsVersion(e) {
                    var t, n;
                    return null !== (n = null === (t = D(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
                getParticipantCount(e, t) {
                    var n, i;
                    return null !== (i = null === (n = D(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== i ? i : 0
                }
                getChannels(e) {
                    return M(null != e ? e : N), O.values(null != e ? e : N)
                }
                getChannelsVersion() {
                    return O.version
                }
                getParticipant(e, t) {
                    var n, i;
                    return null !== (i = null === (n = D(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== i ? i : null
                }
            }
            Y.displayName = "StageChannelParticipantStore";
            var K = new Y(o.default, {
                CONNECTION_OPEN: k,
                OVERLAY_INITIALIZE: k,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = new Set;
                    return t.reduce((e, t) => {
                        if (null == t.guildId || !R.has(t.guildId)) return e;
                        let i = new Set;
                        return (F(n, i, t.oldChannelId), F(n, i, t.channelId), 0 === i.size) ? e : b(t.userId, Array.from(i)) || e
                    }, !1)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return G(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    for (let e of t) n = b(e.user.id) || n;
                    return n
                },
                USER_UPDATE: w,
                GUILD_MEMBER_REMOVE: w,
                GUILD_MEMBER_UPDATE: w,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = t.reduce((e, t) => {
                        if (!t.isGuildStageVoice() || !R.has(t.guild_id)) return e;
                        let n = O.get(t.id);
                        return null == n || a(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), O.set(t.id, t), e)
                    }, []);
                    return P(e => e.rebuild(), n), n.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (R.has(t)) return P(e => e.rebuild(), v(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        userId: i
                    } = e;
                    return !!(null != n && R.has(n)) && b(i, [t])
                },
                STREAM_CLOSE: x,
                STREAM_DELETE: x,
                RELATIONSHIP_ADD: V,
                RELATIONSHIP_REMOVE: V,
                GUILD_CREATE: H,
                GUILD_DELETE: H,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = !1;
                    for (let n of v(e.guildId)) t = L(n).rebuild() || t;
                    return t
                }
            })