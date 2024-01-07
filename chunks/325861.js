            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007"), n("808653");
            var i, a, l = n("917351"),
                s = n.n(l),
                r = n("446674"),
                u = n("913144"),
                o = n("42203"),
                d = n("923959"),
                c = n("26989"),
                _ = n("305961"),
                E = n("697218"),
                f = n("800762"),
                h = n("991170"),
                p = n("923510"),
                T = n("808422");
            (a = i || (i = {})).SPEAKER = "speaker", a.MODERATOR = "moderator";
            let C = {},
                m = {
                    speaker: !1,
                    moderator: !1
                };

            function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == C[t] && (C[t] = {});
                let i = function(e, t) {
                    var n, i, a;
                    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = o.default.getChannel(t),
                        r = null == s ? void 0 : s.getGuildId(),
                        u = _.default.getGuild(r);
                    if (null == u || null == s || !s.isGuildStageVoice()) return m;
                    return {
                        speaker: function(e, t) {
                            let n = f.default.getVoiceStateForChannel(t, e);
                            return (0, T.getAudienceRequestToSpeakState)(n) === T.RequestToSpeakStates.ON_STAGE
                        }(e, t),
                        moderator: l ? (n = e, i = u, a = s, h.default.can({
                            permission: p.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                            user: n,
                            context: i,
                            overwrites: a.permissionOverwrites,
                            roles: i.roles
                        })) : null
                    }
                }(e, t, n);
                return C[t][e] = i, i
            }

            function I(e, t) {
                var n;
                if (null == t) return !1;
                let i = o.default.getChannel(t);
                return !!(null != i && i.isGuildStageVoice()) && (null === (n = C[t]) || void 0 === n || delete n[e], !0)
            }

            function g(e) {
                let t = d.default.getChannels(e)[d.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGuildStageVoice()
                });
                for (let {
                        channel: e
                    }
                    of t) delete C[e.id];
                return t.length > 0
            }

            function A(e) {
                let {
                    guildId: t,
                    user: n
                } = e;
                return null != n && null != t && function(e, t) {
                    for (let n in C) {
                        let i = o.default.getBasicChannel(n);
                        if (null != i) i.guild_id === t && delete C[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function N(e) {
                let {
                    guild: t
                } = e;
                for (let e in C) {
                    let n = o.default.getBasicChannel(e);
                    (null == n || n.guild_id === t.id) && delete C[e]
                }
            }
            class O extends r.default.Store {
                initialize() {
                    this.waitFor(c.default, o.default, _.default, E.default, f.default)
                }
                isSpeaker(e, t) {
                    return this.getPermissionsForUser(e, t).speaker
                }
                isModerator(e, t) {
                    var n;
                    return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n
                }
                isAudienceMember(e, t) {
                    let n = this.getPermissionsForUser(e, t);
                    return !n.speaker && !n.moderator
                }
                getPermissionsForUser(e, t) {
                    var n;
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return m;
                    let a = null === (n = C[t]) || void 0 === n ? void 0 : n[e];
                    if (null != a) return i && null == a.moderator ? S(e, t, !0) : a;
                    return S(e, t, i)
                }
            }
            O.displayName = "StageChannelRoleStore";
            var R = new O(u.default, {
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) delete C[e.id]
                },
                CONNECTION_OPEN: function() {
                    C = {}
                },
                GUILD_MEMBER_REMOVE: A,
                GUILD_MEMBER_UPDATE: A,
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    g(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = g(e.guildId);
                    for (let i of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = I(i.userId, i.channelId) || n;
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return !s.isEmpty(C) && t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: i
                        } = t;
                        return I(n, i) || e
                    }, !1)
                },
                GUILD_CREATE: N,
                GUILD_DELETE: N
            })