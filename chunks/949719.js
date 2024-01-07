            "use strict";
            n.r(t), n.d(t, {
                ChannelRTCParticipantsIndexes: function() {
                    return i
                },
                default: function() {
                    return a
                }
            }), n("222007"), n("808653"), n("424973");
            var i, a, l, s = n("917351"),
                r = n("407846"),
                u = n("899633"),
                o = n("191225"),
                d = n("374014"),
                c = n("373469"),
                _ = n("271938"),
                E = n("950104"),
                f = n("42203"),
                h = n("42887"),
                p = n("280168"),
                T = n("697218"),
                C = n("555035"),
                m = n("800762"),
                S = n("387111"),
                I = n("246846"),
                g = n("99795"),
                A = n("49111"),
                N = n("353927");
            let O = "__EMBEDDED_ACTIVITIES__";

            function R(e) {
                switch (e.type) {
                    case g.ParticipantTypes.ACTIVITY:
                        return "\x00".concat(e.sortKey);
                    case g.ParticipantTypes.HIDDEN_STREAM:
                    case g.ParticipantTypes.STREAM:
                        return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, I.default)(e.userNick, e.user), "\x02");
                    case g.ParticipantTypes.USER:
                        var t, n;
                        let i = "\x04";
                        return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? i = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (i = "\x03"), "".concat(i).concat((0, I.default)(e.userNick, e.user))
                }
            }(l = i || (i = {})).VIDEO = "VIDEO", l.STREAM = "STREAM", l.FILTERED = "FILTERED", l.SPEAKING = "SPEAKING", l.ACTIVITY = "ACTIVITY", a = class {
                get version() {
                    return this.participantByIndex.version
                }
                size(e) {
                    return this.participantByIndex.size(e)
                }
                toArray(e) {
                    return this.participantByIndex.values(e, !0)
                }
                rebuild() {
                    let e = f.default.getChannel(this.channelId);
                    if (null == e || e.type === A.ChannelTypes.GUILD_TEXT) return !1;
                    if (this.call = E.default.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
                    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(m.default.getVoiceStatesForChannel(e.id)) : e.recipients);
                    return t.add(_.default.getId()), c.default.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
                        let {
                            ownerId: n
                        } = e;
                        return t.add(n)
                    }), this.participantByIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), this.updateEmbeddedActivities(), !0
                }
                getParticipant(e) {
                    var t;
                    return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
                }
                updateEmbeddedActivities() {
                    return this.updateParticipant(O)
                }
                hasEmbeddedActivity() {
                    let e = this.participants[O];
                    return null != e && e.length > 0
                }
                updateParticipant(e) {
                    let t = this.participants[e],
                        n = e === O ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
                    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                        this.participantByIndex.delete(e.id)
                    }), n.forEach(e => {
                        this.participantByIndex.set(e.id, e)
                    }), this.participants[e] = n, !0)
                }
                updateParticipantSpeaking(e) {
                    var t, n;
                    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
                        if (n.type === g.ParticipantTypes.USER) {
                            let t = (0, u.getIsSpeaking)({
                                userId: e,
                                checkIsMuted: !0
                            });
                            return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
                                ...n,
                                speaking: t,
                                lastSpoke: this.lastSpoke[e],
                                soundsharing: p.default.isSoundSharing(e)
                            }), !0
                        }
                        return t
                    }, !1)) && void 0 !== n && n
                }
                updateParticipantQuality(e, t, n) {
                    var i, a;
                    return null !== (a = null === (i = this.participants[e]) || void 0 === i ? void 0 : i.reduce((e, i) => i.type === g.ParticipantTypes.STREAM ? (this.participantByIndex.set(i.id, {
                        ...i,
                        maxResolution: t,
                        maxFrameRate: n
                    }), !0) : e, !1)) && void 0 !== a && a
                }
                _getEmbeddedActivities() {
                    let e = o.default.getEmbeddedActivitiesForChannel(this.channelId),
                        t = o.default.getSelfEmbeddedActivityForChannel(this.channelId);
                    return null == t ? e : (0, s.uniqBy)([...e, t], "application_id")
                }
                _getParticipantsForEmbeddedActivities() {
                    return this._getEmbeddedActivities().map((e, t) => {
                        var n, i, a, l;
                        return {
                            type: g.ParticipantTypes.ACTIVITY,
                            id: e.application_id,
                            activityType: e.type,
                            activityUrl: e.url,
                            participants: new Set(e.connections.keys()),
                            canJoin: (null == e ? void 0 : null === (n = e.secrets) || void 0 === n ? void 0 : n.join) != null,
                            joinSecret: null == e ? void 0 : null === (i = e.secrets) || void 0 === i ? void 0 : i.join,
                            guildId: null !== (l = null === (a = f.default.getChannel(this.channelId)) || void 0 === a ? void 0 : a.getGuildId()) && void 0 !== l ? l : null,
                            sortKey: t.toString()
                        }
                    })
                }
                _getParticipantsForUser(e) {
                    var t, n, i, a, l, s;
                    let r, o;
                    let E = [],
                        I = T.default.getUser(e);
                    if (null == I) return E;
                    let A = m.default.getVoiceStateForChannel(this.channelId, e),
                        O = m.default.getVoicePlatformForChannel(this.channelId, e),
                        R = f.default.getChannel(this.channelId),
                        y = null !== (i = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== i && i;
                    (null != A || y) && (r = {
                        type: g.ParticipantTypes.USER,
                        ...C.default.getUserStreamData(e, null == R ? void 0 : R.getGuildId()),
                        user: I,
                        id: I.id,
                        voiceState: A,
                        voicePlatform: O,
                        speaking: (0, u.getIsSpeaking)({
                            userId: e,
                            checkIsMuted: !0
                        }),
                        lastSpoke: null !== (a = this.lastSpoke[e]) && void 0 !== a ? a : 0,
                        soundsharing: p.default.isSoundSharing(e),
                        ringing: y,
                        userNick: S.default.getName(null == R ? void 0 : R.getGuildId(), this.channelId, I),
                        localVideoDisabled: h.default.isLocalVideoDisabled(I.id)
                    }, E.push(r));
                    let v = null !== (l = c.default.getStreamForUser(e, null == R ? void 0 : R.getGuildId())) && void 0 !== l ? l : c.default.getActiveStreamForUser(e, null == R ? void 0 : R.getGuildId());
                    if (null != v && v.channelId === this.channelId) {
                        let t = (0, d.encodeStreamKey)(v),
                            n = this.getParticipant(t),
                            i = v.ownerId === _.default.getId() && c.default.isSelfStreamHidden(this.channelId),
                            a = (null == n ? void 0 : n.type) === g.ParticipantTypes.STREAM ? {
                                maxResolution: null != n.maxResolution ? {
                                    ...n.maxResolution
                                } : void 0,
                                maxFrameRate: n.maxFrameRate
                            } : null;
                        o = {
                            ...C.default.getUserStreamData(e, null == R ? void 0 : R.getGuildId(), N.MediaEngineContextTypes.STREAM),
                            ...a,
                            type: i ? g.ParticipantTypes.HIDDEN_STREAM : g.ParticipantTypes.STREAM,
                            id: t,
                            userVideo: null !== (s = null == A ? void 0 : A.selfVideo) && void 0 !== s && s,
                            user: I,
                            userNick: S.default.getName(null == R ? void 0 : R.getGuildId(), this.channelId, I),
                            stream: v
                        }, E.push(o)
                    }
                    return E
                }
                constructor(e) {
                    this.participants = {}, this.lastSpoke = {}, this.participantByIndex = new r.default(e => {
                        var t;
                        let n = [];
                        return e.type === g.ParticipantTypes.USER && e.speaking && n.push("SPEAKING"), e.type === g.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push("VIDEO"), !e.localVideoDisabled && n.push("FILTERED")) : (0, g.isStreamParticipant)(e) && (n.push("STREAM"), e.type !== g.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push("FILTERED")), e.type === g.ParticipantTypes.ACTIVITY && n.push("ACTIVITY"), n
                    }, R), this.channelId = e
                }
            }