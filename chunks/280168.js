            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007"), n("702976"), n("808653");
            var i = n("446674"),
                a = n("913144"),
                l = n("991170"),
                s = n("42203"),
                r = n("42887"),
                u = n("945956"),
                o = n("18494"),
                d = n("49111"),
                c = n("353927");
            let _ = new Map,
                E = null,
                f = null,
                h = null;

            function p(e, t) {
                let n = _.get(e);
                if (null == n) return !1;
                let i = n.delete(t);
                return 0 === n.size && _.delete(e), i
            }

            function T(e, t, n) {
                var i, a, l;
                let s = null !== (l = null === (a = _.get(e)) || void 0 === a ? void 0 : null === (i = a.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== l ? l : c.SpeakingFlags.NONE;
                return (s & n) === n
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = _.get(e);
                if (null == i) return !1;
                for (let [e, {
                        flags: a
                    }] of i)
                    if ((!n || e !== E) && (a & t) === t) return !0;
                return !1
            }

            function m(e) {
                let {
                    user: t,
                    sessionId: n
                } = e;
                E = t.id, f = n, h = null
            }
            class S extends i.default.Store {
                initialize() {
                    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(u.default)
                }
                getSpeakingDuration(e, t) {
                    var n, i;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MediaEngineContextTypes.DEFAULT,
                        l = null === (i = _.get(a)) || void 0 === i ? void 0 : null === (n = i.get(e)) || void 0 === n ? void 0 : n.since;
                    return null != l ? t - l : 0
                }
                getSpeakers() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
                    return Array.from(null !== (t = null === (e = _.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => T(n, e, c.SpeakingFlags.VOICE))
                }
                isSpeaking(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
                    return T(t, e, c.SpeakingFlags.VOICE)
                }
                isPrioritySpeaker(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
                    return T(t, e, c.SpeakingFlags.PRIORITY)
                }
                isSoundSharing(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
                    return T(t, e, c.SpeakingFlags.SOUNDSHARE)
                }
                isAnyoneElseSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
                    return C(e, c.SpeakingFlags.VOICE, !0)
                }
                isCurrentUserSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
                    return null != E && this.isSpeaking(E, e)
                }
                isAnyonePrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
                    return C(e, c.SpeakingFlags.VOICE | c.SpeakingFlags.PRIORITY)
                }
                isCurrentUserPrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
                    return null != E && this.isPrioritySpeaker(E, e) && this.isSpeaking(E, e)
                }
            }
            S.displayName = "SpeakingStore";
            var I = new S(a.default, {
                CONNECTION_OPEN: m,
                OVERLAY_INITIALIZE: m,
                SPEAKING: function(e) {
                    let {
                        context: t,
                        userId: n,
                        speakingFlags: i
                    } = e;
                    if ((i & c.SpeakingFlags.PRIORITY) === c.SpeakingFlags.PRIORITY) {
                        let e = s.default.getChannel(o.default.getVoiceChannelId());
                        null != e && l.default.can({
                            permission: d.Permissions.PRIORITY_SPEAKER,
                            user: n,
                            context: e
                        }) ? r.default.setCanHavePriority(n, !0) : (r.default.setCanHavePriority(n, !1), i &= ~c.SpeakingFlags.PRIORITY)
                    }
                    return function(e, t, n) {
                        var i, a;
                        let l = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT,
                                    t = _.get(e);
                                return null == t && (t = new Map, _.set(e, t)), t
                            }(e),
                            s = l.get(t),
                            r = null !== (i = null == s ? void 0 : s.flags) && void 0 !== i ? i : 0;
                        if (0 === r && 0 === n) return !1;
                        if (0 === n) l.delete(t), 0 === l.size && _.delete(e);
                        else {
                            let e = null !== (a = null == s ? void 0 : s.since) && void 0 !== a ? a : null,
                                i = (r & c.SpeakingFlags.VOICE) === c.SpeakingFlags.VOICE,
                                u = (n & c.SpeakingFlags.VOICE) === c.SpeakingFlags.VOICE;
                            i !== u && (e = u ? Date.now() : null), l.set(t, {
                                flags: n,
                                since: e
                            })
                        }
                        return !0
                    }(t, n, i)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: i,
                            sessionId: a
                        } = t, l = !1, s = h;
                        return n === E && a === f && (h = null != i ? i : null), s !== h && (l = _.delete(c.MediaEngineContextTypes.DEFAULT) || l), null == i ? l = n === E && a === f ? _.delete(c.MediaEngineContextTypes.DEFAULT) || l : p(c.MediaEngineContextTypes.DEFAULT, n) || l : n === E && a !== f ? l = _.delete(c.MediaEngineContextTypes.DEFAULT) || l : n !== E && i !== u.default.getChannelId() && (l = p(c.MediaEngineContextTypes.DEFAULT, n) || l), l || e
                    }, !1)
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {}
            })