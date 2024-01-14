"use strict";
n.r(t), n.d(t, {
  ChannelRTCParticipantsIndexes: function() {
    return s
  },
  default: function() {
    return i
  }
}), n("222007"), n("808653"), n("424973");
var s, i, r, a = n("917351"),
  o = n("407846"),
  d = n("899633"),
  u = n("191225"),
  l = n("374014"),
  f = n("373469"),
  _ = n("271938"),
  c = n("950104"),
  g = n("42203"),
  m = n("42887"),
  h = n("280168"),
  v = n("697218"),
  E = n("555035"),
  p = n("800762"),
  y = n("387111"),
  T = n("246846"),
  C = n("99795"),
  S = n("49111"),
  I = n("353927");
let A = "__EMBEDDED_ACTIVITIES__";

function D(e) {
  switch (e.type) {
    case C.ParticipantTypes.ACTIVITY:
      return "\x00".concat(e.sortKey);
    case C.ParticipantTypes.HIDDEN_STREAM:
    case C.ParticipantTypes.STREAM:
      return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, T.default)(e.userNick, e.user), "\x02");
    case C.ParticipantTypes.USER:
      var t, n;
      let s = "\x04";
      return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? s = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (s = "\x03"), "".concat(s).concat((0, T.default)(e.userNick, e.user))
  }
}(r = s || (s = {})).VIDEO = "VIDEO", r.STREAM = "STREAM", r.FILTERED = "FILTERED", r.SPEAKING = "SPEAKING", r.ACTIVITY = "ACTIVITY", i = class {
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
    let e = g.default.getChannel(this.channelId);
    if (null == e || e.type === S.ChannelTypes.GUILD_TEXT) return !1;
    if (this.call = c.default.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(p.default.getVoiceStatesForChannel(e.id)) : e.recipients);
    return t.add(_.default.getId()), f.default.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
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
    return this.updateParticipant(A)
  }
  hasEmbeddedActivity() {
    let e = this.participants[A];
    return null != e && e.length > 0
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = e === A ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this.participantByIndex.delete(e.id)
    }), n.forEach(e => {
      this.participantByIndex.set(e.id, e)
    }), this.participants[e] = n, !0)
  }
  updateParticipantSpeaking(e) {
    var t, n;
    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
      if (n.type === C.ParticipantTypes.USER) {
        let t = (0, d.getIsSpeaking)({
          userId: e,
          checkIsMuted: !0
        });
        return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
          ...n,
          speaking: t,
          lastSpoke: this.lastSpoke[e],
          soundsharing: h.default.isSoundSharing(e)
        }), !0
      }
      return t
    }, !1)) && void 0 !== n && n
  }
  updateParticipantQuality(e, t, n) {
    var s, i;
    return null !== (i = null === (s = this.participants[e]) || void 0 === s ? void 0 : s.reduce((e, s) => s.type === C.ParticipantTypes.STREAM ? (this.participantByIndex.set(s.id, {
      ...s,
      maxResolution: t,
      maxFrameRate: n
    }), !0) : e, !1)) && void 0 !== i && i
  }
  _getEmbeddedActivities() {
    let e = u.default.getEmbeddedActivitiesForChannel(this.channelId),
      t = u.default.getSelfEmbeddedActivityForChannel(this.channelId);
    return null == t ? e : (0, a.uniqBy)([...e, t], "application_id")
  }
  _getParticipantsForEmbeddedActivities() {
    return this._getEmbeddedActivities().map((e, t) => {
      var n, s;
      return {
        type: C.ParticipantTypes.ACTIVITY,
        id: e.applicationId,
        activityType: S.ActivityTypes.PLAYING,
        activityUrl: e.url,
        participants: new Set(e.userIds),
        guildId: null !== (s = null === (n = g.default.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== s ? s : null,
        sortKey: t.toString()
      }
    })
  }
  _getParticipantsForUser(e) {
    var t, n, s, i, r, a;
    let o, u;
    let c = [],
      T = v.default.getUser(e);
    if (null == T) return c;
    let S = p.default.getVoiceStateForChannel(this.channelId, e),
      A = p.default.getVoicePlatformForChannel(this.channelId, e),
      D = g.default.getChannel(this.channelId),
      N = null !== (s = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== s && s;
    (null != S || N) && (o = {
      type: C.ParticipantTypes.USER,
      ...E.default.getUserStreamData(e, null == D ? void 0 : D.getGuildId()),
      user: T,
      id: T.id,
      voiceState: S,
      voicePlatform: A,
      speaking: (0, d.getIsSpeaking)({
        userId: e,
        checkIsMuted: !0
      }),
      lastSpoke: null !== (i = this.lastSpoke[e]) && void 0 !== i ? i : 0,
      soundsharing: h.default.isSoundSharing(e),
      ringing: N,
      userNick: y.default.getName(null == D ? void 0 : D.getGuildId(), this.channelId, T),
      localVideoDisabled: m.default.isLocalVideoDisabled(T.id)
    }, c.push(o));
    let O = null !== (r = f.default.getStreamForUser(e, null == D ? void 0 : D.getGuildId())) && void 0 !== r ? r : f.default.getActiveStreamForUser(e, null == D ? void 0 : D.getGuildId());
    if (null != O && O.channelId === this.channelId) {
      let t = (0, l.encodeStreamKey)(O),
        n = this.getParticipant(t),
        s = O.ownerId === _.default.getId() && f.default.isSelfStreamHidden(this.channelId),
        i = (null == n ? void 0 : n.type) === C.ParticipantTypes.STREAM ? {
          maxResolution: null != n.maxResolution ? {
            ...n.maxResolution
          } : void 0,
          maxFrameRate: n.maxFrameRate
        } : null;
      u = {
        ...E.default.getUserStreamData(e, null == D ? void 0 : D.getGuildId(), I.MediaEngineContextTypes.STREAM),
        ...i,
        type: s ? C.ParticipantTypes.HIDDEN_STREAM : C.ParticipantTypes.STREAM,
        id: t,
        userVideo: null !== (a = null == S ? void 0 : S.selfVideo) && void 0 !== a && a,
        user: T,
        userNick: y.default.getName(null == D ? void 0 : D.getGuildId(), this.channelId, T),
        stream: O
      }, c.push(u)
    }
    return c
  }
  constructor(e) {
    this.participants = {}, this.lastSpoke = {}, this.participantByIndex = new o.default(e => {
      var t;
      let n = [];
      return e.type === C.ParticipantTypes.USER && e.speaking && n.push("SPEAKING"), e.type === C.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push("VIDEO"), !e.localVideoDisabled && n.push("FILTERED")) : (0, C.isStreamParticipant)(e) && (n.push("STREAM"), e.type !== C.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push("FILTERED")), e.type === C.ParticipantTypes.ACTIVITY && n.push("ACTIVITY"), n
    }, D), this.channelId = e
  }
}