            "use strict";
            n.r(t), n.d(t, {
                StageChannelParticipantNamedIndex: function() {
                    return i
                },
                StageChannelParticipantTypes: function() {
                    return a
                },
                default: function() {
                    return l
                }
            }), n("424973"), n("222007");
            var i, a, l, s, r, u = n("407846"),
                o = n("246846"),
                d = n("374014"),
                c = n("373469"),
                _ = n("42203"),
                E = n("124948"),
                f = n("26989"),
                h = n("27618"),
                p = n("697218"),
                T = n("800762"),
                C = n("387111"),
                m = n("325861"),
                S = n("834052"),
                I = n("808422"),
                g = n("922673"),
                A = n("49111");

            function N(e) {
                var t;
                let {
                    speaker: n,
                    role: i,
                    user: a,
                    userNick: l,
                    connectedOn: s,
                    voiceState: r,
                    type: u
                } = e, d = r.selfMute ? "\x01" : "\x00", c = r.selfVideo ? "\x00" : "\x01", _ = "".concat(null !== (t = null == i ? void 0 : i.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(n ? "\x00" : "\x01").concat("STREAM" === u ? "\x00" : "\x01").concat(d).concat(c).concat(_).concat(s).concat((0, o.default)(l, a))
            }

            function O(e) {
                let {
                    user: t,
                    voiceState: n
                } = e, i = n.requestToSpeakTimestamp;
                return null == i ? t.id : "".concat(Date.parse(i)).concat(t.id)
            }

            function R(e) {
                return e === I.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === I.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function y(e) {
                let {
                    speaker: t,
                    role: n,
                    rtsState: i,
                    blocked: a,
                    isFriend: l
                } = e, s = [];
                return R(i) && s.push("ALL_REQUESTED_TO_SPEAK"), i === I.RequestToSpeakStates.REQUESTED_TO_SPEAK && s.push("REQUESTED_TO_SPEAK_ONLY"), t ? s.push("SPEAKER") : (null != n ? s.push(n.id) : s.push("NO_ROLE"), s.push("AUDIENCE")), a && s.push("BLOCKED"), l && s.push("FRIEND"), s
            }(s = i || (i = {})).SPEAKER = "SPEAKER", s.AUDIENCE = "AUDIENCE", s.NO_ROLE = "NO_ROLE", s.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", s.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", s.BLOCKED = "BLOCKED", s.FRIEND = "FRIEND", s.SELECTED = "SELECTED", s.MEDIA = "MEDIA", (r = a || (a = {})).VOICE = "VOICE", r.STREAM = "STREAM", l = class {
                _getParticipantsForUser(e, t) {
                    var n, i;
                    let a;
                    let l = [],
                        s = T.default.getVoiceStateForChannel(this.channelId, e);
                    if (null == s) return l;
                    let r = p.default.getUser(e);
                    if (null == r) return null != this.guildId && S.default.isPublic(this.channelId) && E.default.requestMember(this.guildId, e), l;
                    let u = null != t ? t[0] : null,
                        o = {
                            user: r,
                            userNick: C.default.getName(this.guildId, this.channelId, r),
                            voiceState: s,
                            role: (0, g.getHighestHoistedRole)(this.guildId, e),
                            speaker: m.default.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? f.default.getMember(this.guildId, e) : null,
                            blocked: h.default.getRelationships()[r.id] === A.RelationshipTypes.BLOCKED,
                            isFriend: h.default.isFriend(r.id),
                            connectedOn: null !== (n = null == u ? void 0 : u.connectedOn) && void 0 !== n ? n : Date.now()
                        },
                        _ = {
                            ...o,
                            type: "VOICE",
                            id: r.id,
                            rtsState: (0, I.getAudienceRequestToSpeakState)(s)
                        };
                    l.push(_);
                    let N = null !== (i = c.default.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : c.default.getActiveStreamForUser(e, this.guildId);
                    if (null != N && N.channelId === this.channelId) {
                        let e = (0, d.encodeStreamKey)(N);
                        a = {
                            ...o,
                            id: e,
                            type: "STREAM",
                            rtsState: I.RequestToSpeakStates.NONE
                        }, l.push(a)
                    }
                    return l
                }
                updateParticipant(e) {
                    let t = this.participants[e],
                        n = this._getParticipantsForUser(e, t);
                    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                        this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
                    }), n.forEach(t => {
                        this._participantsIndex.set(t.id, t), t.id === e && R(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
                    }), this.participants[e] = n, !0)
                }
                rebuild() {
                    let e = _.default.getChannel(this.channelId);
                    if (null == e || !e.isGuildStageVoice()) return !1;
                    let t = new Set(Object.keys(T.default.getVoiceStatesForChannel(e.id)));
                    return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0
                }
                get version() {
                    return this._participantsIndex.version
                }
                size(e) {
                    return this._participantsIndex.size(e)
                }
                toArray(e) {
                    return this._participantsIndex.values(e, !0)
                }
                getParticipant(e) {
                    var t;
                    return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
                }
                get requestToSpeakVersion() {
                    return this._requestToSpeakIndex.version
                }
                getRequestToSpeakParticipants() {
                    return this._requestToSpeakIndex.values(void 0, !0)
                }
                constructor(e) {
                    var t;
                    this.participants = {}, this._participantsIndex = new u.default(y, N), this._requestToSpeakIndex = new u.default(() => [], O), this.channelId = e, this.guildId = null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }
            }