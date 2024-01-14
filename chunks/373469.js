"use strict";
let r, i, l, u;
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007"), n("424973"), n("808653");
var a = n("446674"),
  o = n("913144"),
  d = n("76393"),
  s = n("374014"),
  E = n("223913"),
  _ = n("537429"),
  c = n("271938"),
  I = n("42203"),
  S = n("305961"),
  T = n("42887"),
  f = n("957255"),
  p = n("945956"),
  N = n("568307"),
  C = n("18494"),
  A = n("800762"),
  R = n("49111"),
  h = n("706530");
let O = null,
  L = {},
  g = null;

function P() {
  r = new Map, i = {}, l = {}, u = {}, L = {}
}
P();

function m(e) {
  r.delete(e)
}

function y() {
  let e = [];
  for (let t in i) {
    let n = i[t];
    for (let r in n) e.push(i[t][r])
  }
  return e
}

function v(e) {
  let {
    streamKey: t,
    region: n,
    viewerIds: i,
    paused: u
  } = e;
  r.set(t, {
    ...(0, s.decodeStreamKey)(t),
    state: u ? R.ApplicationStreamStates.PAUSED : R.ApplicationStreamStates.ACTIVE
  }), l[t] = {
    streamKey: t,
    region: n,
    viewerIds: i
  }
}

function D(e, t) {
  return e === h.StreamTypes.CALL || f.default.canWithPartialContext(R.Permissions.VIEW_CHANNEL, {
    channelId: t
  })
}

function U(e) {
  let t = I.default.getChannel(e.channelId);
  return !!D(e.streamType, e.channelId) || null != t && (0, E.canWatchStream)(t, A.default, S.default, f.default, d.default)[0]
}
class M extends a.default.Store {
  initialize() {
    this.syncWith([f.default], () => !0), this.waitFor(N.default, f.default)
  }
  isSelfStreamHidden(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t && t
  }
  getLastActiveStream() {
    var e;
    return (0, _.default)(T.default) ? null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null : null
  }
  getAllActiveStreams() {
    return (0, _.default)(T.default) ? Array.from(r.values()) : []
  }
  getAllActiveStreamsForChannel(e) {
    return (0, _.default)(T.default) ? Array.from(r.values()).filter(t => t.channelId === e) : []
  }
  getActiveStreamForStreamKey(e) {
    var t;
    return (0, _.default)(T.default) ? null !== (t = r.get(e)) && void 0 !== t ? t : null : null
  }
  getActiveStreamForApplicationStream(e) {
    var t;
    if (!(0, _.default)(T.default) || null == e) return null;
    let n = (0, s.encodeStreamKey)(e);
    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
  }
  getCurrentUserActiveStream() {
    let e = C.default.getVoiceChannelId(),
      t = I.default.getChannel(e);
    return null == t ? null : this.getActiveStreamForUser(c.default.getId(), t.getGuildId())
  }
  getActiveStreamForUser(e, t) {
    var n;
    let r = this.getStreamForUser(e, t);
    return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
  }
  getStreamerActiveStreamMetadata() {
    var e;
    let t = C.default.getVoiceChannelId(),
      n = I.default.getChannel(t);
    if (null == n) return null;
    let r = this.getActiveStreamForUser(c.default.getId(), n.getGuildId());
    return null == r ? null : null !== (e = u[(0, s.encodeStreamKey)(r)]) && void 0 !== e ? e : null
  }
  getAnyStreamForUser(e) {
    var t;
    if (!(0, _.default)(T.default)) return null;
    let n = i[e];
    return null == n ? null : null !== (t = Object.values(n).find(e => U(e))) && void 0 !== t ? t : null
  }
  getStreamForUser(e, t) {
    var n;
    if (!(0, _.default)(T.default)) return null;
    let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
    return null != r && U(r) ? r : null
  }
  getRTCStream(e) {
    var t;
    return (0, _.default)(T.default) ? null !== (t = l[e]) && void 0 !== t ? t : null : null
  }
  getAllApplicationStreams() {
    return (0, _.default)(T.default) ? y().filter(e => null != e && D(e.streamType, e.channelId)) : []
  }
  getAllApplicationStreamsForChannel(e) {
    return (0, _.default)(T.default) ? y().filter(t => null != t && t.channelId === e && D(t.streamType, t.channelId)) : []
  }
  getViewerIds(e) {
    if (!(0, _.default)(T.default)) return [];
    let t = null;
    t = "string" == typeof e ? e : (0, s.encodeStreamKey)(e);
    let n = null != t ? l[t] : null;
    return null != n ? n.viewerIds : []
  }
  getCurrentAppIntent() {
    return g
  }
  getState() {
    return (0, _.default)(T.default) ? {
      activeStreams: Array.from(r.entries()),
      streamsByUserAndGuild: i,
      rtcStreams: l,
      streamerActiveStreamMetadatas: u
    } : {
      activeStreams: [],
      streamsByUserAndGuild: {},
      rtcStreams: {},
      streamerActiveStreamMetadatas: {}
    }
  }
}
M.displayName = "ApplicationStreamingStore";
var G = new M(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      applicationStreamState: t
    } = e;
    i = t.streamsByUserAndGuild, r = new Map(t.activeStreams), l = t.rtcStreams, u = t.streamerActiveStreamMetadatas
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n, r, l, u, a;
      let {
        userId: o,
        guildId: d,
        channelId: s,
        sessionId: E,
        selfStream: _
      } = t;
      if (_ && null != s) {
        ;
        return null == i[(n = {
          streamType: null != d ? h.StreamTypes.GUILD : h.StreamTypes.CALL,
          ownerId: o,
          guildId: d,
          channelId: s
        }).ownerId] && (i[n.ownerId] = {}), i[n.ownerId][null !== (r = n.guildId) && void 0 !== r ? r : "null"] = n, !0
      } {
        ;
        let t = c.default.getSessionId();
        if (o === c.default.getId() && E !== t && null != p.default.getChannelId()) return e;
        return l = o, u = null != (u = d) ? u : "null", (null === (a = i[l]) || void 0 === a ? void 0 : a[u]) != null && (delete i[l][u], !0) || e
      }
    }, !1)
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t
    } = e, n = (0, s.decodeStreamKey)(t);
    r.delete(t), r.set(t, {
      ...n,
      state: R.ApplicationStreamStates.CONNECTING
    }), n.ownerId === c.default.getId() && (L[n.channelId] = !1)
  },
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: i,
      pid: l,
      sourceName: a
    } = e, o = (0, s.encodeStreamKey)({
      streamType: t,
      guildId: n,
      channelId: i,
      ownerId: c.default.getId()
    }), d = null != l ? N.default.getGameForPID(l) : null;
    u[o] = {
      id: null == d ? void 0 : d.id,
      pid: l,
      sourceName: a
    }, r.delete(o), r.set(o, {
      streamType: t,
      guildId: n,
      channelId: i,
      ownerId: c.default.getId(),
      state: R.ApplicationStreamStates.CONNECTING
    })
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    u[t] = null
  },
  STREAM_CREATE: v,
  STREAM_UPDATE: v,
  STREAM_TIMED_OUT: function(e) {
    let {
      streamKey: t
    } = e, n = r.get(t);
    if (null == n) return !1;
    r.set(t, {
      ...n,
      state: R.ApplicationStreamStates.FAILED
    })
  },
  STREAM_DELETE: function(e) {
    let {
      streamKey: t,
      unavailable: i,
      reason: u
    } = e;
    delete l[t];
    let a = r.get(t);
    if (null == a) return !1;
    let o = R.ApplicationStreamStates.ENDED;
    if (i) o = R.ApplicationStreamStates.RECONNECTING;
    else if (u === R.ApplicationStreamDeleteReasons.UNAUTHORIZED) o = R.ApplicationStreamStates.FAILED;
    else if (u === R.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
      let {
        guildId: e
      } = (0, s.decodeStreamKey)(t);
      n.el("772545").then(n.bind(n, "772545")).then(t => {
        let {
          default: n
        } = t;
        n(e)
      }), o = R.ApplicationStreamStates.ENDED
    }
    r.set(t, {
      ...a,
      state: o
    }), o === R.ApplicationStreamStates.ENDED && O !== t && m(t)
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    m(t)
  },
  STREAM_UPDATE_SELF_HIDDEN: function(e) {
    let {
      channelId: t,
      selfStreamHidden: n
    } = e, r = (0, s.isStreamKey)(O);
    r && (null == O ? void 0 : O.includes(c.default.getId())) && !1 === L[t] && !0 === n && (O = null), L[t] = n
  },
  SET_STREAM_APP_INTENT: function(e) {
    let {
      intent: t
    } = e;
    g = t
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n
    } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === R.ApplicationStreamStates.ENDED) return !1;
    let l = i.state;
    switch (n) {
      case R.RTCConnectionStates.DISCONNECTED:
        l = R.ApplicationStreamStates.RECONNECTING;
        break;
      case R.RTCConnectionStates.RTC_CONNECTED:
        l = R.ApplicationStreamStates.ACTIVE
    }
    if (l === i.state) return !1;
    r.set(t, {
      ...i,
      state: l
    })
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    if (O = t, Array.from(r.values()).forEach(e => {
        (0, s.encodeStreamKey)(e) !== O && e.state === R.ApplicationStreamStates.ENDED && m((0, s.encodeStreamKey)(e))
      }), null == t) return;
    let i = (0, s.isStreamKey)(t);
    i && t.includes(c.default.getId()) && (L[n] = !1)
  },
  CONNECTION_OPEN: P,
  CONNECTION_CLOSED: P,
  LOGOUT: P
})