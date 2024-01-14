"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("446674"),
  o = n("408166"),
  u = n("191225"),
  d = n("76393"),
  c = n("374014"),
  E = n("32346"),
  f = n("808422"),
  _ = n("233069"),
  h = n("373469"),
  C = n("271938"),
  T = n("42203"),
  I = n("305961"),
  S = n("42887"),
  N = n("385649"),
  A = n("945956"),
  p = n("18494"),
  m = n("280168"),
  g = n("800762"),
  R = n("316133"),
  O = n("449008"),
  L = n("709681"),
  v = n("49111");

function M(e, t, n, a) {
  s.useEffect(() => {
    let s = t(),
      i = new r.BatchedStoreListener(e, () => {
        let e = t(),
          i = n(s, e);
        null != i && !N.default.isSoundDisabled(i) && (0, L.playSound)(i, null != a ? a : .4), s = e
      });
    return i.attach("useSound"), () => i.detach()
  })
}

function P() {
  return M([S.default, p.default], () => ({
    inVoiceChannel: null != p.default.getVoiceChannelId(),
    selfMute: S.default.isSelfMute(),
    selfDeaf: S.default.isSelfDeaf(),
    audioPermissionReady: S.default.isNativeAudioPermissionReady()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: a,
      selfDeaf: s,
      audioPermissionReady: i
    } = t;
    return e.selfDeaf !== s ? s ? "deafen" : "undeafen" : i ? (n || e.audioPermissionReady) && e.selfMute !== a ? a ? "mute" : "unmute" : void 0 : void 0
  }), null
}

function D() {
  return M([T.default, A.default, p.default, d.default], () => {
    let e = T.default.getChannel(p.default.getVoiceChannelId()),
      t = null == e ? void 0 : e.type,
      n = null == e ? void 0 : e.getGuildId(),
      a = A.default.getWasEverRtcConnected(),
      s = A.default.getState();
    return {
      channelType: t,
      guildId: n,
      connected: s === v.RTCConnectionStates.RTC_CONNECTED,
      connectHasStarted: !a && s !== v.RTCConnectionStates.DISCONNECTED || s === v.RTCConnectionStates.RTC_CONNECTED,
      awaitingRemote: null != d.default.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != d.default.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: a,
      connectHasStarted: s,
      awaitingRemote: i,
      connectedRemote: l
    } = t, r = e.channelType, o = e.connectedRemote, u = e.connected, d = e.connectHasStarted;
    if (!d && s || l && !o) {
      if (null != n && _.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n)) return;
      return "user_join"
    }
    if (u && !a) {
      if (i || l || null != r && _.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(r)) return;
      return "disconnect"
    }
  }), null
}

function y() {
  return M([m.default], () => m.default.isCurrentUserSpeaking(), (e, t) => {
    if (e !== t) {
      let e = S.default.isSelfMute(),
        n = S.default.getMode();
      if (n === v.InputModes.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function x() {
  return M([S.default], () => S.default.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = S.default.isSelfMute(),
        n = S.default.getMode();
      if (n === v.InputModes.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function b() {
  return M([g.default], () => g.default.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function U() {
  return M([p.default, g.default], () => {
    let e = p.default.getVoiceChannelId();
    if (null == e) return f.RequestToSpeakStates.NONE;
    let t = g.default.getVoiceStateForChannel(e);
    return (0, f.getAudienceRequestToSpeakState)(t)
  }, (e, t) => {
    if (e !== t && t === f.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function G() {
  return M([p.default, h.default, C.default, g.default, T.default], () => {
    let e, t;
    let n = p.default.getVoiceChannelId(),
      a = C.default.getId();
    let s = [],
      i = null,
      l = 0,
      r = h.default.getAllActiveStreams();
    if (null != n) {
      let a = T.default.getChannel(n);
      null != a && (e = a.type, t = R.default.countVoiceStatesForChannel(a.id) - (g.default.isInChannel(a.id) ? 1 : 0), s = h.default.getAllApplicationStreamsForChannel(a.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === r.length ? r[0] : h.default.getCurrentUserActiveStream()) ? void 0 : o.state) === v.ApplicationStreamStates.CONNECTING && (o = null), null != o && (i = (0, c.encodeStreamKey)(o), l = h.default.getViewerIds(i).filter(e => e !== a).length), {
      channelType: e,
      voiceChannelId: n,
      voiceChannelUserCount: t,
      streamingUserIds: s,
      singleActiveStreamKey: i,
      singleActiveStreamViewerCount: l,
      currentUserId: a,
      allActiveStreams: r
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: a,
      voiceChannelUserCount: s,
      streamingUserIds: i,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: r,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== a || null == a || function(e) {
        let t = T.default.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let a = I.default.getGuild(n);
        return null != a && a.afkChannelId === t.id
      }(a) || null != n && _.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n)) return;
    let u = null != l && e.singleActiveStreamKey === l,
      d = i.some(t => !e.streamingUserIds.includes(t)),
      c = e.allActiveStreams.map(e => e.ownerId),
      E = e.streamingUserIds.some(e => !i.includes(e) && (e === o || c.includes(e)));
    if (d) return "stream_started";
    if (E) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && u && r > e.singleActiveStreamViewerCount) return "stream_user_joined";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s > e.voiceChannelUserCount) return "user_join";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && u && r < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function j() {
  return M([p.default, u.default, C.default], () => {
    let e = p.default.getVoiceChannelId(),
      t = C.default.getId(),
      n = (0, O.isNotNullish)(e) ? u.default.getEmbeddedActivitiesForChannel(e) : u.NO_ACTIVITIES;
    return {
      voiceChannelId: e,
      currentUserId: t,
      channelActivities: n
    }
  }, (e, t) => {
    let n, {
      voiceChannelId: a,
      currentUserId: s,
      channelActivities: i
    } = t;
    if (null == a) return;
    let {
      enabled: l
    } = o.ActivitiesSoundsExperiment.getCurrentConfig({
      location: "5ef733_1"
    }, {
      autoTrackExposure: !1
    }), r = !1;
    e.channelActivities.length < i.length && (n = "activity_launch", r = !0);
    let u = e.channelActivities.find(e => e.userIds.has(s)),
      d = i.find(e => e.userIds.has(s));
    if (void 0 === d && (0, O.isNotNullish)(u) && (n = "activity_end", r = !0), void 0 === u && (0, O.isNotNullish)(d) && d.userIds.size > 1 && (n = "activity_user_join", r = !0), (0, O.isNotNullish)(d) && (0, O.isNotNullish)(u) && (d.userIds.size > u.userIds.size && (n = "activity_user_join", r = !0), d.userIds.size < u.userIds.size && (n = "activity_user_left", r = !0)), r && o.ActivitiesSoundsExperiment.trackExposure({
        location: "5ef733_2"
      }), l) return n
  }), null
}

function k() {
  return M([E.default, p.default], () => ({
    hangStatus: E.default.getCurrentHangStatus(),
    customHangStatus: E.default.getCustomHangStatus(),
    inVoice: null != p.default.getVoiceChannelId()
  }), (e, t) => {
    var n, a;
    let {
      hangStatus: s,
      customHangStatus: i
    } = t;
    if (e.inVoice && (null != s && s !== e.hangStatus || null != i && (i.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !l.isEqual(i.emoji, null === (a = e.customHangStatus) || void 0 === a ? void 0 : a.emoji)))) return "hang_status_select"
  }, .15), null
}

function w() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(P, {}), (0, a.jsx)(D, {}), (0, a.jsx)(y, {}), (0, a.jsx)(x, {}), (0, a.jsx)(b, {}), (0, a.jsx)(G, {}), (0, a.jsx)(U, {}), (0, a.jsx)(j, {}), (0, a.jsx)(k, {})]
  })
}