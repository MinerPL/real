"use strict";
let s, i;
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("424973");
var r = n("627445"),
  a = n.n(r),
  o = n("917351"),
  d = n.n(o),
  u = n("446674"),
  l = n("773364"),
  f = n("913144"),
  _ = n("583702"),
  c = n("374014"),
  g = n("582415"),
  m = n("537429"),
  h = n("773336"),
  v = n("373469"),
  E = n("271938"),
  p = n("42203"),
  y = n("42887"),
  T = n("824563"),
  C = n("945956"),
  S = n("568307"),
  I = n("49111"),
  A = n("353927");
let D = {},
  N = {},
  O = {},
  b = {},
  P = I.StreamLayouts.THEATRE,
  k = {},
  R = [];

function V() {
  d.forEach(k, (e, t) => {
    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete k[t]
  })
}

function M(e) {
  e.filter(e => {
    let {
      connection: t
    } = e;
    return t.context === A.MediaEngineContextTypes.STREAM
  }).forEach(e => {
    let {
      stats: t
    } = e;
    f.default.dispatch({
      type: "STREAM_STATS_UPDATE",
      stats: t
    })
  })
}

function w() {
  return !0
}
class L extends u.default.Store {
  getActiveStreamKey() {
    return (0, m.default)(y.default) ? i : null
  }
  getAllActiveStreamKeys() {
    return Object.keys(k)
  }
  getRTCConnection(e) {
    return k[e]
  }
  getStatsHistory(e, t, n) {
    if (!(0, m.default)(y.default) || null == t) return null;
    if (n) {
      let n = v.default.getActiveStreamForUser(t, e);
      if (null == n || 0 === v.default.getViewerIds(n).length) return null
    }
    return R.map(e => n ? function(e) {
      var t, n, s, i, r;
      let a = e.find(e => "video" === e.type);
      return null != a && "video" === a.type ? {
        type: "streamer",
        packetsSentOrReceived: null !== (n = a.packetsSent) && void 0 !== n ? n : 0,
        packetsLost: null !== (s = a.packetsLost) && void 0 !== s ? s : 0,
        frameRate: null !== (i = a.frameRateEncode) && void 0 !== i ? i : 0,
        resolution: null !== (r = null === (t = a.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== r ? r : 0,
        bitrate: 0
      } : null
    }(e.rtp.outbound) : function(e) {
      var t, n, s, i, r, a;
      if (null == e) return null;
      let o = e.find(e => "video" === e.type);
      return null != o && "video" === o.type ? {
        type: "spectator",
        packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
        packetsLost: null !== (s = o.packetsLost) && void 0 !== s ? s : 0,
        frameRate: null !== (i = o.frameRateDecode) && void 0 !== i ? i : 0,
        bitrate: null !== (r = o.bitrate) && void 0 !== r ? r : 0,
        resolution: null !== (a = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
      } : null
    }(e.rtp.inbound[t]))
  }
  getQuality() {
    if (!(0, m.default)(y.default)) return I.RTCConnectionQuality.UNKNOWN;
    let e = this.getActiveStreamKey(),
      t = null != e ? k[e] : null;
    return null != t ? t.quality : I.RTCConnectionQuality.UNKNOWN
  }
  getMediaSessionId(e) {
    if (null == e) return null;
    let t = k[e];
    if (null != t) return null != t ? t.getMediaSessionId() : null
  }
  getRtcConnectionId(e) {
    if (null == e) return null;
    let t = k[e];
    if (null != t) return null != t ? t.getRTCConnectionId() : null
  }
  getVideoStats(e) {
    if (null == e) return null;
    let t = k[e];
    return null != t ? t.getVideoStats() : null
  }
  getHostname(e) {
    if (null == e) return "";
    let t = k[e];
    return null != t ? null != t.hostname ? t.hostname : "" : ""
  }
  getRegion(e) {
    if (null == e) return null;
    let t = k[e];
    return null != t ? t.getRegion() : null
  }
  getMaxViewers(e) {
    if (null == e) return null;
    let t = k[e];
    return null != t ? t.getMaxViewers() : null
  }
  getStreamSourceId(e) {
    return b[e]
  }
}
L.displayName = "StreamRTCConnectionStore";
var U = new L(f.default, !y.default.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: function(e) {
    s = e.sessionId, i = null, V()
  },
  CONNECTION_CLOSED: function() {
    s = null, i = null, V()
  },
  RTC_CONNECTION_STATE: w,
  RTC_CONNECTION_PING: w,
  RTC_CONNECTION_LOSS_RATE: w,
  RTC_CONNECTION_UPDATE_ID: function(e) {
    return d.some(k, t => t === e.connection)
  },
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: s,
      appContext: i,
      pid: r,
      sourceId: a
    } = e, o = (0, c.encodeStreamKey)({
      streamType: t,
      guildId: n,
      channelId: s,
      ownerId: E.default.getId()
    });
    if (D[o] = i, d.forEach(k, e => {
        let {
          analyticsContext: t
        } = e;
        t.setActionContext(i)
      }), b[o] = a, O[o] = r, null != r) {
      let e = S.default.getGameForPID(r);
      null != e && (N[o] = {
        name: e.name,
        id: e.id,
        exe: e.exeName
      })
    }
  },
  STREAM_STOP: function(e) {
    let {
      appContext: t,
      streamKey: n
    } = e;
    D[n] = t, d.forEach(k, e => {
      let {
        analyticsContext: n
      } = e;
      n.setActionContext(t)
    }), b[n] = null, O[n] = null
  },
  STREAM_CREATE: function(e) {
    let {
      streamKey: t,
      rtcServerId: n,
      region: r,
      viewerIds: o
    } = e;
    i = t;
    let d = k[t];
    if (null == d && null != n) {
      var u, f, m;
      null == O[t] && (N[t] = null);
      let e = (0, c.decodeStreamKey)(t);
      null == N[t] && null == b[t] && (N[t] = (0, g.getStreamerApplication)(e, T.default));
      let i = p.default.getChannel(e.channelId),
        l = null != i && i.isBroadcastChannel(),
        v = new _.StreamRTCAnalyticsContext({
          streamRegion: r,
          streamApplication: N[t],
          streamSourceType: function(e) {
            var t, n, s;
            if (null == e) return "unknown";
            if (h.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
              if (e.startsWith("web-contents-media-stream:")) return "tab";
              if (e.startsWith("window:")) return "window";
              else if (e.startsWith("screen:")) return "screen"
            } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
            else if ((null === (s = platform) || void 0 === s ? void 0 : s.name) === "Safari") return "window";
            return "unknown"
          }(b[t]),
          actionContext: D[t],
          numViewers: null != o ? o.length : 0,
          isBroadcast: l
        });
      u = t, f = n, m = v, a(null != s, "Creating RTCConnection without session."), d = new _.default({
        sessionId: s,
        streamKey: u,
        serverId: f,
        initialLayout: P,
        analyticsContext: m,
        isStreamer: null != N[u],
        parentMediaSessionId: C.default.getMediaSessionId()
      }), k[t] = d
    }
    R = [], y.default.getMediaEngine().on(l.MediaEngineEvent.ConnectionStats, M)
  },
  STREAM_SERVER_UPDATE: function(e) {
    let t = k[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token)
  },
  STREAM_UPDATE: function(e) {
    let {
      streamKey: t,
      viewerIds: n,
      paused: s
    } = e, i = k[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(s)
  },
  STREAM_DELETE: function(e) {
    let {
      streamKey: t
    } = e, n = k[t];
    if (null == n) return !1;
    t === i && (i = null, y.default.getMediaEngine().off(l.MediaEngineEvent.ConnectionStats, M)), n.destroy("stream-end"), delete k[t]
  },
  STREAM_STATS_UPDATE: function(e) {
    let {
      stats: t
    } = e;
    if (null == t) return !1;
    R.push(t), R.length > 30 && R.shift()
  },
  STREAM_LAYOUT_UPDATE: function(e) {
    let {
      layout: t
    } = e;
    P = t, Object.values(k).forEach(e => e.layoutChange(t))
  }
})