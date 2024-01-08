            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return en
                }
            }), n("424973"), n("808653"), n("222007");
            var i = n("627445"),
                a = n.n(i),
                l = n("917351"),
                s = n.n(l),
                r = n("446674"),
                u = n("913144"),
                o = n("191225"),
                d = n("605250"),
                c = n("76393"),
                _ = n("374014"),
                E = n("373469"),
                f = n("271938"),
                h = n("950104"),
                p = n("42203"),
                T = n("18494"),
                C = n("280168"),
                m = n("697218"),
                S = n("555035"),
                I = n("800762"),
                g = n("949719"),
                A = n("99795"),
                N = n("49111");
            let O = new d.default("ChannelRTCStore"),
                R = Object.freeze([]),
                y = [],
                v = {},
                M = {},
                D = {},
                L = {},
                U = {},
                P = {},
                b = {},
                G = {},
                k = {},
                F = {};

            function w(e) {
                let t = v[e];
                return null == t && (t = new g.default(e), v[e] = t), t
            }

            function V(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return t.reduce((t, n) => {
                    let i = w(n);
                    return e(i) ? (function(e) {
                        let t = w(e);
                        if (0 === t.size()) return;
                        let n = ee(e) || j(t) ? N.ChannelModes.VIDEO : N.ChannelModes.VOICE;
                        n === N.ChannelModes.VOICE ? (delete L[e], delete U[e]) : L[e] = n
                    }(n), function(e) {
                        let t = f.default.getId(),
                            n = w(e);
                        if (0 === n.size() || T.default.getVoiceChannelId() !== e) {
                            K(e, null);
                            return
                        }
                        let i = A.ParticipantSelectionTypes.NONE,
                            l = n.toArray(g.ChannelRTCParticipantsIndexes.STREAM).find(e => e.type === A.ParticipantTypes.STREAM && E.default.getActiveStreamForStreamKey(e.id));
                        if (null != l) a(l.type === A.ParticipantTypes.STREAM, "Impossible condition"), i = l.id;
                        else if (1 === n.size()) i = t;
                        else if (1 === n.size(g.ChannelRTCParticipantsIndexes.VIDEO)) {
                            let [e] = n.toArray(g.ChannelRTCParticipantsIndexes.VIDEO);
                            i = e.id
                        } else {
                            var s;
                            let e = n.toArray().find(e => e.type === A.ParticipantTypes.USER && e.id !== t && !e.ringing);
                            i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t
                        }
                        let [r] = x(e);
                        if (r !== A.ParticipantSelectionTypes.AUTO && r !== A.ParticipantSelectionTypes.NONE) {
                            let e = n.getParticipant(r);
                            (null == e || e.type === A.ParticipantTypes.STREAM && null == E.default.getActiveStreamForStreamKey(e.id)) && (r = A.ParticipantSelectionTypes.NONE)
                        }
                        K(e, [r, i])
                    }(n), !0) : t
                }, !1)
            }

            function H(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return V(t => t.updateParticipant(e), t)
            }

            function x(e) {
                var t;
                let n = p.default.getChannel(e),
                    i = (null == n ? void 0 : n.isDM()) ? A.ParticipantSelectionTypes.AUTO : A.ParticipantSelectionTypes.NONE;
                return null !== (t = M[e]) && void 0 !== t ? t : [i, A.ParticipantSelectionTypes.NONE]
            }

            function B(e) {
                let t = M[e];
                if (null == t) return !1;
                let [n] = M[e];
                return n !== A.ParticipantSelectionTypes.NONE
            }

            function Y(e) {
                null == D[e] && (D[e] = {
                    gridDurationMs: 0,
                    focusDurationMs: 0,
                    toggleCount: 0,
                    lastUpdate: 0
                });
                let t = D[e],
                    n = performance.now(),
                    i = B(e);
                if (t.lastUpdate > 0) {
                    let e = n - t.lastUpdate;
                    t[i ? "focusDurationMs" : "gridDurationMs"] += e
                }
                t.lastUpdate = n
            }

            function K(e, t) {
                Y(e);
                let n = B(e);
                null == t ? delete M[e] : M[e] = t;
                let i = B(e);
                n !== i && D[e].toggleCount++
            }

            function j(e) {
                return e.size(g.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(g.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
            }

            function W(e) {
                delete v[e], delete M[e], delete L[e], delete U[e]
            }

            function z() {
                return V(e => e.rebuild(), function() {
                    let e = [],
                        t = T.default.getChannelId();
                    null != t && e.push(t);
                    let n = T.default.getVoiceChannelId();
                    null != n && !e.includes(n) && e.push(n);
                    let i = c.default.getRemoteSessionId(),
                        a = I.default.getVoiceStateForSession(f.default.getId(), i);
                    (null == a ? void 0 : a.channelId) != null && e.push(null == a ? void 0 : a.channelId), s.difference(y, e).forEach(W);
                    let l = s.difference(e, y);
                    return y = e, l
                }())
            }

            function q() {
                return V(e => e.updateEmbeddedActivities())
            }

            function Q(e) {
                let {
                    userId: t
                } = e;
                return V(e => e.updateParticipantSpeaking(t))
            }

            function X(e) {
                let {
                    user: t
                } = e;
                return H(t.id)
            }

            function Z(e) {
                let {
                    channelId: t
                } = e;
                return V(e => e.rebuild(), [t])
            }

            function J(e) {
                let {
                    channel: {
                        id: t
                    }
                } = e;
                return delete G[t], delete k[t], W(t)
            }

            function $(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    ownerId: i
                } = (0, _.decodeStreamKey)(t);
                return H(i, [n])
            }

            function ee(e) {
                var t;
                return !!(null === (t = p.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
            }
            class et extends r.default.Store {
                initialize() {
                    this.waitFor(E.default, f.default, h.default, p.default, o.default, T.default, C.default, m.default, S.default, I.default), this.syncWith([o.default], q), this.syncWith([c.default], z)
                }
                getParticipantsVersion(e) {
                    return w(e).version
                }
                getParticipants(e) {
                    var t;
                    return null !== (t = w(e).toArray()) && void 0 !== t ? t : R
                }
                getSpeakingParticipants(e) {
                    var t;
                    return null !== (t = w(e).toArray(g.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : R
                }
                getFilteredParticipants(e) {
                    return b[e] ? w(e).toArray(g.ChannelRTCParticipantsIndexes.FILTERED) : w(e).toArray()
                }
                getVideoParticipants(e) {
                    var t;
                    return null !== (t = w(e).toArray(g.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : R
                }
                getStreamParticipants(e) {
                    var t;
                    return null !== (t = w(e).toArray(g.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : R
                }
                getActivityParticipants(e) {
                    var t;
                    return null !== (t = w(e).toArray(g.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : R
                }
                getParticipant(e, t) {
                    return w(e).getParticipant(t)
                }
                getUserParticipantCount(e) {
                    let t = w(e);
                    return t.size() - t.size(g.ChannelRTCParticipantsIndexes.STREAM) - t.size(g.ChannelRTCParticipantsIndexes.ACTIVITY)
                }
                getParticipantsOpen(e) {
                    var t;
                    return null === (t = P[e]) || void 0 === t || t
                }
                getVoiceParticipantsHidden(e) {
                    var t;
                    return null !== (t = b[e]) && void 0 !== t && t
                }
                getSelectedParticipantId(e) {
                    let [t, n] = x(e);
                    return t === A.ParticipantSelectionTypes.NONE ? null : t !== A.ParticipantSelectionTypes.AUTO ? t : n === A.ParticipantSelectionTypes.NONE || n === A.ParticipantSelectionTypes.AUTO ? null : n
                }
                getSelectedParticipant(e) {
                    let t = this.getSelectedParticipantId(e);
                    return null == t ? null : w(e).getParticipant(t)
                }
                getSelectedParticipantStats(e) {
                    let t = D[e];
                    return null == t ? {} : {
                        view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                        view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                        view_mode_toggle_count: t.toggleCount
                    }
                }
                getMode(e) {
                    var t;
                    return null !== (t = L[e]) && void 0 !== t ? t : ee(e) ? N.ChannelModes.VIDEO : N.ChannelModes.VOICE
                }
                getLayout(e) {
                    var t, n;
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.AppContext.APP;
                    if (__OVERLAY__) return N.ChannelLayouts.NORMAL;
                    let a = p.default.getChannel(e),
                        l = ee(e) || (null == a ? void 0 : a.isBroadcastChannel());
                    return null !== (n = null === (t = U[e]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : l ? N.ChannelLayouts.NO_CHAT : N.ChannelLayouts.NORMAL
                }
                getChatOpen(e) {
                    var t;
                    return null !== (t = G[e]) && void 0 !== t && t
                }
                isFullscreenInContext() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.AppContext.APP;
                    return Object.values(U).some(t => t[e] === N.ChannelLayouts.FULL_SCREEN)
                }
                getStageStreamSize(e) {
                    return k[e]
                }
                getStageVideoLimitBoostUpsellDismissed(e) {
                    return F[e]
                }
            }
            et.displayName = "ChannelRTCStore";
            var en = new et(u.default, {
                CONNECTION_OPEN: z,
                CONNECTION_OPEN_SUPPLEMENTAL: z,
                THREAD_LIST_SYNC: z,
                OVERLAY_INITIALIZE: z,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        currentVoiceChannelId: n
                    } = e;
                    return null != t ? delete D[t] : null != n && (delete G[n], delete k[n], Y(n)), z()
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, i = z(), a = p.default.getChannel(t);
                    return null == t || null == n || (null == a ? void 0 : a.type) !== N.ChannelTypes.GUILD_VOICE && (null == a ? void 0 : a.type) !== N.ChannelTypes.GUILD_STAGE_VOICE || G[t] ? i : (G[t] = !0, !0)
                },
                CHANNEL_RTC_ACTIVE_CHANNELS: z,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t,
                        initial: n
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: i,
                            channelId: a
                        } = t;
                        return n && null != a && !y.includes(a) ? e : H(i) || e
                    }, !1)
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.type === N.ChannelTypes.GROUP_DM) {
                        let e = t.originChannelId;
                        if (null != e) {
                            var n, i;
                            return U[t.id] = {
                                [N.AppContext.APP]: null !== (i = null === (n = U[e]) || void 0 === n ? void 0 : n[N.AppContext.APP]) && void 0 !== i ? i : N.ChannelLayouts.NORMAL
                            }, !0
                        }
                        t.isBroadcastChannel() && (U[t.id] = {
                            [N.AppContext.APP]: N.ChannelLayouts.NO_CHAT
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
                    } = e, i = w(t), a = null == n;
                    a && i.toArray(g.ChannelRTCParticipantsIndexes.STREAM).forEach(e => {
                        (0, A.isStreamParticipant)(e) && i.updateParticipant(e.user.id)
                    });
                    let [, l] = x(t);
                    if (K(t, [null != n ? n : A.ParticipantSelectionTypes.NONE, l]), (0, _.isStreamKey)(n)) {
                        try {
                            let {
                                ownerId: e
                            } = (0, _.decodeStreamKey)(n);
                            e === f.default.getId() && H(e, [t])
                        } catch (e) {
                            O.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                        }!j(i) && (P[t] = !1)
                    }
                },
                CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
                    let {
                        channelId: t,
                        layout: n,
                        appContext: i
                    } = e;
                    U[t] = {
                        ...U[t],
                        [i]: n
                    }
                },
                CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
                    let {
                        channelId: t,
                        participantsOpen: n
                    } = e;
                    P[t] = n
                },
                CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        voiceParticipantsHidden: n
                    } = e;
                    b[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
                    let {
                        channelId: t,
                        large: n
                    } = e;
                    k[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
                    let {
                        channelId: t,
                        dismissed: n
                    } = e;
                    F[t] = n
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        selfStreamHidden: n
                    } = e, i = f.default.getId();
                    if (n) {
                        let [e] = x(t), n = (0, _.isStreamKey)(e);
                        n && e.includes(i) && K(t, null)
                    }
                    H(i, [t])
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    let {
                        channelId: t,
                        chatOpen: n
                    } = e;
                    G[t] = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return H(n, [t])
                },
                RTC_CONNECTION_PLATFORM: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return H(n, [t])
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    let {
                        userId: t
                    } = e;
                    return H(t)
                },
                MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
                    let {
                        channelId: t,
                        senderUserId: n,
                        maxResolution: i,
                        maxFrameRate: a
                    } = e;
                    return V(e => e.updateParticipantQuality(n, i, a), [t])
                },
                STREAM_CLOSE: $,
                STREAM_DELETE: $,
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, {
                        channelId: n,
                        ownerId: i
                    } = (0, _.decodeStreamKey)(t);
                    return H(i, [n])
                },
                SPEAKING: Q,
                GUILD_SOUNDBOARD_SOUND_PLAY_START: Q,
                GUILD_SOUNDBOARD_SOUND_PLAY_END: Q,
                USER_UPDATE: X,
                GUILD_MEMBER_UPDATE: X,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e, n = [];
                    if (s.forEach(y, e => {
                            let i = p.default.getChannel(e);
                            (null == i || i.getGuildId() === t.id) && n.push(e)
                        }), 0 === n.length) return !1;
                    s.forEach(n, e => W(e))
                }
            })