"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("70102");
var s = n("917351"),
  i = n.n(s),
  l = n("446674"),
  r = n("913144"),
  o = n("997722"),
  u = n("422791"),
  d = n("271938"),
  c = n("260320"),
  f = n("42887"),
  E = n("49111");
let _ = {};

function h() {
  i.forEach(_, (e, t) => {
    e.destroy(), delete _[t]
  })
}

function C(e, t, n) {
  let a = _[e];
  return null != a ? t(a) : n
}

function I(e) {
  let {
    lobbyId: t
  } = e, n = _[t];
  if (null == n) return !1;
  n.destroy(), delete _[t]
}

function T() {
  return !0
}
class S extends l.default.Store {
  forEach(e) {
    i.each(_, e)
  }
  getState(e) {
    return C(e, e => e.state, E.RTCConnectionStates.DISCONNECTED)
  }
  isConnected(e) {
    return this.getState(e) === E.RTCConnectionStates.RTC_CONNECTED
  }
  isDisconnected(e) {
    return this.getState(e) === E.RTCConnectionStates.DISCONNECTED
  }
  getHostname(e) {
    return C(e, e => e.hostname, null)
  }
  getQuality(e) {
    return C(e, e => e.quality, E.RTCConnectionQuality.UNKNOWN)
  }
  getPings(e) {
    return C(e, e => e.getPings(), [])
  }
  getAveragePing(e) {
    return C(e, e => e.getAveragePing(), 0)
  }
  getLastPing(e) {
    return C(e, e => e.getLastPing(), 0)
  }
  getOutboundLossRate(e) {
    return C(e, e => e.getOutboundLossRate(), 0)
  }
  getMediaSessionId(e) {
    return C(e, e => e.getMediaSessionId(), null)
  }
  getRTCConnectionId(e) {
    return C(e, e => e.getRTCConnectionId(), null)
  }
  getDuration(e) {
    return C(e, e => e.getDuration(), 0)
  }
}
S.displayName = "RTCConnectionStore";
var m = new S(r.default, f.default.isSupported() ? {
  CONNECTION_OPEN: function(e) {
    a = e.sessionId, h()
  },
  CONNECTION_CLOSED: function() {
    a = null, h()
  },
  RTC_CONNECTION_STATE: T,
  RTC_CONNECTION_PING: T,
  RTC_CONNECTION_LOSS_RATE: T,
  RTC_CONNECTION_UPDATE_ID: function(e) {
    return i.some(_, t => t === e.connection)
  },
  LOBBY_VOICE_STATE_UPDATE: function(e) {
    if (d.default.getId() !== e.userId || e.sessionId !== a) return !1;
    let t = _[e.lobbyId];
    null != t && null == e.channelId ? (t.destroy(), delete _[e.lobbyId]) : null != t ? t.channelId = e.channelId : null != e.channelId && (t = function(e, t) {
      if (null == a) throw Error("Creating RTCConnection without session.");
      let n = c.default.getLobby(e);
      if (null == n) throw Error("Creating RTCConnection without lobby.");
      let s = n.application_id,
        i = new o.default({
          userId: d.default.getId(),
          sessionId: a,
          guildId: e,
          channelId: t,
          context: s
        });
      return i.on(u.RTCConnectionEvent.State, (t, n, a) => {
        r.default.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: t,
          ...n,
          ...a,
          lobbyId: e
        })
      }), i.on(u.RTCConnectionEvent.Ping, (t, n) => {
        r.default.dispatch({
          type: "RTC_CONNECTION_PING",
          pings: t,
          quality: n,
          lobbyId: e
        })
      }), i.on(u.RTCConnectionEvent.OutboundLossRate, t => {
        r.default.dispatch({
          type: "RTC_CONNECTION_LOSS_RATE",
          lossRate: t,
          lobbyId: e
        })
      }), i
    }(e.lobbyId, e.channelId), _[e.lobbyId] = t)
  },
  LOBBY_VOICE_SERVER_UPDATE: function(e) {
    let t = _[e.lobbyId];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token)
  },
  LOBBY_DELETE: I,
  LOBBY_DISCONNECT: I
} : {})