            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return en
                }
            }), n("424973"), n("808653"), n("222007");
            var s = n("627445"),
                i = n.n(s),
                r = n("917351"),
                a = n.n(r),
                o = n("446674"),
                d = n("913144"),
                u = n("191225"),
                l = n("605250"),
                f = n("76393"),
                _ = n("374014"),
                c = n("373469"),
                g = n("271938"),
                m = n("950104"),
                h = n("42203"),
                v = n("18494"),
                E = n("280168"),
                p = n("697218"),
                y = n("555035"),
                T = n("800762"),
                C = n("949719"),
                S = n("99795"),
                I = n("49111");
            let A = new l.default("ChannelRTCStore"),
                D = Object.freeze([]),
                N = [],
                O = {},
                b = {},
                P = {},
                V = {},
                R = {},
                k = {},
                M = {},
                w = {},
                L = {},
                U = {};

            function G(e) {
                let t = O[e];
                return null == t && (t = new C.default(e), O[e] = t), t
            }

            function F(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
                return t.reduce((t, n) => {
                    let s = G(n);
                    return e(s) ? (function(e) {
                        let t = G(e);
                        if (0 === t.size()) return;
                        let n = ee(e) || K(t) ? I.ChannelModes.VIDEO : I.ChannelModes.VOICE;
                        n === I.ChannelModes.VOICE ? (delete V[e], delete R[e]) : V[e] = n
                    }(n), function(e) {
                        let t = g.default.getId(),
                            n = G(e);
                        if (0 === n.size() || v.default.getVoiceChannelId() !== e) {
                            j(e, null);
                            return
                        }
                        let s = S.ParticipantSelectionTypes.NONE,
                            r = n.toArray(C.ChannelRTCParticipantsIndexes.STREAM).find(e => e.type === S.ParticipantTypes.STREAM && c.default.getActiveStreamForStreamKey(e.id));
                        if (null != r) i(r.type === S.ParticipantTypes.STREAM, "Impossible condition"), s = r.id;
                        else if (1 === n.size()) s = t;
                        else if (1 === n.size(C.ChannelRTCParticipantsIndexes.VIDEO)) {
                            let [e] = n.toArray(C.ChannelRTCParticipantsIndexes.VIDEO);
                            s = e.id
                        } else {
                            var a;
                            let e = n.toArray().find(e => e.type === S.ParticipantTypes.USER && e.id !== t && !e.ringing);
                            s = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t
                        }
                        let [o] = B(e);
                        if (o !== S.ParticipantSelectionTypes.AUTO && o !== S.ParticipantSelectionTypes.NONE) {
                            let e = n.getParticipant(o);
                            (null == e || e.type === S.ParticipantTypes.STREAM && null == c.default.getActiveStreamForStreamKey(e.id)) && (o = S.ParticipantSelectionTypes.NONE)
                        }
                        j(e, [o, s])
                    }(n), !0) : t
                }, !1)
            }

            function x(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
                return F(t => t.updateParticipant(e), t)
            }

            function B(e) {
                var t;
                let n = h.default.getChannel(e),
                    s = (null == n ? void 0 : n.isDM()) ? S.ParticipantSelectionTypes.AUTO : S.ParticipantSelectionTypes.NONE;
                return null !== (t = b[e]) && void 0 !== t ? t : [s, S.ParticipantSelectionTypes.NONE]
            }

            function H(e) {
                let t = b[e];
                if (null == t) return !1;
                let [n] = b[e];
                return n !== S.ParticipantSelectionTypes.NONE
            }

            function Y(e) {
                null == P[e] && (P[e] = {
                    gridDurationMs: 0,
                    focusDurationMs: 0,
                    toggleCount: 0,
                    lastUpdate: 0
                });
                let t = P[e],
                    n = performance.now(),
                    s = H(e);
                if (t.lastUpdate > 0) {
                    let e = n - t.lastUpdate;
                    t[s ? "focusDurationMs" : "gridDurationMs"] += e
                }
                t.lastUpdate = n
            }

            function j(e, t) {
                Y(e);
                let n = H(e);
                null == t ? delete b[e] : b[e] = t;
                let s = H(e);
                n !== s && P[e].toggleCount++
            }

            function K(e) {
                return e.size(C.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(C.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
            }

            function W(e) {
                delete O[e], delete b[e], delete V[e], delete R[e]
            }

            function z() {
                return F(e => e.rebuild(), function() {
                    let e = [],
                        t = v.default.getChannelId();
                    null != t && e.push(t);
                    let n = v.default.getVoiceChannelId();
                    null != n && !e.includes(n) && e.push(n);
                    let s = f.default.getRemoteSessionId(),
                        i = T.default.getVoiceStateForSession(g.default.getId(), s);
                    (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), a.difference(N, e).forEach(W);
                    let r = a.difference(e, N);
                    return N = e, r
                }())
            }

            function q() {
                return F(e => e.updateEmbeddedActivities())
            }

            function X(e) {
                let {
                    userId: t
                } = e;
                return F(e => e.updateParticipantSpeaking(t))
            }

            function Q(e) {
                let {
                    user: t
                } = e;
                return x(t.id)
            }

            function Z(e) {
                let {
                    channelId: t
                } = e;
                return F(e => e.rebuild(), [t])
            }

            function J(e) {
                let {
                    channel: {
                        id: t
                    }
                } = e;
                return delete w[t], delete L[t], W(t)
            }

            function $(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    ownerId: s
                } = (0, _.decodeStreamKey)(t);
                return x(s, [n])
            }

            function ee(e) {
                var t;
                return !!(null === (t = h.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
            }
            class et extends o.default.Store {
                initialize() {
                    this.waitFor(c.default, g.default, m.default, h.default, u.default, v.default, E.default, p.default, y.default, T.default), this.syncWith([u.default], q), this.syncWith([f.default], z)
                }
                getParticipantsVersion(e) {
                    return G(e).version
                }
                getParticipants(e) {
                    var t;
                    return null !== (t = G(e).toArray()) && void 0 !== t ? t : D
                }
                getSpeakingParticipants(e) {
                    var t;
                    return null !== (t = G(e).toArray(C.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : D
                }
                getFilteredParticipants(e) {
                    return M[e] ? G(e).toArray(C.ChannelRTCParticipantsIndexes.FILTERED) : G(e).toArray()
                }
                getVideoParticipants(e) {
                    var t;
                    return null !== (t = G(e).toArray(C.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : D
                }
                getStreamParticipants(e) {
                    var t;
                    return null !== (t = G(e).toArray(C.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : D
                }
                getActivityParticipants(e) {
                    var t;
                    return null !== (t = G(e).toArray(C.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : D
                }
                getParticipant(e, t) {
                    return G(e).getParticipant(t)
                }
                getUserParticipantCount(e) {
                    let t = G(e);
                    return t.size() - t.size(C.ChannelRTCParticipantsIndexes.STREAM) - t.size(C.ChannelRTCParticipantsIndexes.ACTIVITY)
                }
                getParticipantsOpen(e) {
                    var t;
                    return null === (t = k[e]) || void 0 === t || t
                }
                getVoiceParticipantsHidden(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t && t
                }
                getSelectedParticipantId(e) {
                    let [t, n] = B(e);
                    return t === S.ParticipantSelectionTypes.NONE ? null : t !== S.ParticipantSelectionTypes.AUTO ? t : n === S.ParticipantSelectionTypes.NONE || n === S.ParticipantSelectionTypes.AUTO ? null : n
                }
                getSelectedParticipant(e) {
                    let t = this.getSelectedParticipantId(e);
                    return null == t ? null : G(e).getParticipant(t)
                }
                getSelectedParticipantStats(e) {
                    let t = P[e];
                    return null == t ? {} : {
                        view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                        view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                        view_mode_toggle_count: t.toggleCount
                    }
                }
                getMode(e) {
                    var t;
                    return null !== (t = V[e]) && void 0 !== t ? t : ee(e) ? I.ChannelModes.VIDEO : I.ChannelModes.VOICE
                }
                getLayout(e) {
                    var t, n;
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I.AppContext.APP;
                    if (__OVERLAY__) return I.ChannelLayouts.NORMAL;
                    let i = h.default.getChannel(e),
                        r = ee(e) || (null == i ? void 0 : i.isBroadcastChannel());
                    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t[s]) && void 0 !== n ? n : r ? I.ChannelLayouts.NO_CHAT : I.ChannelLayouts.NORMAL
                }
                getChatOpen(e) {
                    var t;
                    return null !== (t = w[e]) && void 0 !== t && t
                }
                isFullscreenInContext() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.AppContext.APP;
                    return Object.values(R).some(t => t[e] === I.ChannelLayouts.FULL_SCREEN)
                }
                getStageStreamSize(e) {
                    return L[e]
                }
                getStageVideoLimitBoostUpsellDismissed(e) {
                    return U[e]
                }
            }
            et.displayName = "ChannelRTCStore";
            var en = new et(d.default, {
                CONNECTION_OPEN: z,
                CONNECTION_OPEN_SUPPLEMENTAL: z,
                THREAD_LIST_SYNC: z,
                OVERLAY_INITIALIZE: z,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        currentVoiceChannelId: n
                    } = e;
                    return null != t ? delete P[t] : null != n && (delete w[n], delete L[n], Y(n)), z()
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, s = z(), i = h.default.getChannel(t);
                    return null == t || null == n || (null == i ? void 0 : i.type) !== I.ChannelTypes.GUILD_VOICE && (null == i ? void 0 : i.type) !== I.ChannelTypes.GUILD_STAGE_VOICE || w[t] ? s : (w[t] = !0, !0)
                },
                CHANNEL_RTC_ACTIVE_CHANNELS: z,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t,
                        initial: n
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: s,
                            channelId: i
                        } = t;
                        return n && null != i && !N.includes(i) ? e : x(s) || e
                    }, !1)
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.type === I.ChannelTypes.GROUP_DM) {
                        let e = t.originChannelId;
                        if (null != e) {
                            var n, s;
                            return R[t.id] = {
                                [I.AppContext.APP]: null !== (s = null === (n = R[e]) || void 0 === n ? void 0 : n[I.AppContext.APP]) && void 0 !== s ? s : I.ChannelLayouts.NORMAL
                            }, !0
                        }
                        t.isBroadcastChannel() && (R[t.id] = {
                            [I.AppContext.APP]: I.ChannelLayouts.NO_CHAT
                        })
                    }
                    return !1
                },
                CHANNEL_DELETE: J,
                THREAD_DELETE: J,
                CALL_CREATE: Z,
                CALL_UPDATE: Z,
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return W(t)
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    let {
                        channelId: t,
                        id: n
                    } = e, s = G(t), i = null == n;
                    i && s.toArray(C.ChannelRTCParticipantsIndexes.STREAM).forEach(e => {
                        (0, S.isStreamParticipant)(e) && s.updateParticipant(e.user.id)
                    });
                    let [, r] = B(t);
                    if (j(t, [null != n ? n : S.ParticipantSelectionTypes.NONE, r]), (0, _.isStreamKey)(n)) {
                        try {
                            let {
                                ownerId: e
                            } = (0, _.decodeStreamKey)(n);
                            e === g.default.getId() && x(e, [t])
                        } catch (e) {
                            A.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                        }!K(s) && (k[t] = !1)
                    }
                },
                CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
                    let {
                        channelId: t,
                        layout: n,
                        appContext: s
                    } = e;
                    R[t] = {
                        ...R[t],
                        [s]: n
                    }
                },
                CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
                    let {
                        channelId: t,
                        participantsOpen: n
                    } = e;
                    k[t] = n
                },
                CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        voiceParticipantsHidden: n
                    } = e;
                    M[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
                    let {
                        channelId: t,
                        large: n
                    } = e;
                    L[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
                    let {
                        channelId: t,
                        dismissed: n
                    } = e;
                    U[t] = n
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        selfStreamHidden: n
                    } = e, s = g.default.getId();
                    if (n) {
                        let [e] = B(t), n = (0, _.isStreamKey)(e);
                        n && e.includes(s) && j(t, null)
                    }
                    x(s, [t])
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    let {
                        channelId: t,
                        chatOpen: n
                    } = e;
                    w[t] = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return x(n, [t])
                },
                RTC_CONNECTION_PLATFORM: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return x(n, [t])
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    let {
                        userId: t
                    } = e;
                    return x(t)
                },
                MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
                    let {
                        channelId: t,
                        senderUserId: n,
                        maxResolution: s,
                        maxFrameRate: i
                    } = e;
                    return F(e => e.updateParticipantQuality(n, s, i), [t])
                },
                STREAM_CLOSE: $,
                STREAM_DELETE: $,
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, {
                        channelId: n,
                        ownerId: s
                    } = (0, _.decodeStreamKey)(t);
                    return x(s, [n])
                },
                SPEAKING: X,
                GUILD_SOUNDBOARD_SOUND_PLAY_START: X,
                GUILD_SOUNDBOARD_SOUND_PLAY_END: X,
                USER_UPDATE: Q,
                GUILD_MEMBER_UPDATE: Q,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e, n = [];
                    if (a.forEach(N, e => {
                            let s = h.default.getChannel(e);
                            (null == s || s.getGuildId() === t.id) && n.push(e)
                        }), 0 === n.length) return !1;
                    a.forEach(n, e => W(e))
                }
            })