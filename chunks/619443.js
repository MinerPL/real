"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("808653"), n("70102");
var s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  a = n("913144"),
  o = n("987317"),
  d = n("723939"),
  u = n("605250"),
  l = n("374014"),
  f = n("374363"),
  _ = n("271938"),
  c = n("950104"),
  g = n("42203"),
  m = n("260320"),
  h = n("42887"),
  v = n("945956"),
  E = n("590401"),
  p = n("18494"),
  y = n("101125"),
  C = n("205817"),
  T = n("447214"),
  S = n("518916"),
  I = n("571420"),
  A = n("399010"),
  D = n("49111"),
  N = n("397336");
let O = window.DiscordNative;
(0, S.setDispatchSocketMessageFunction)(A.default);
let b = new u.default("ConnectionStore"),
  P = 0,
  k = null,
  R = !0;
async function V(e) {
  P = Date.now(), k = e.sessionId, S.localPresenceState.handleConnectionOpen();
  let t = {},
    n = p.default.getVoiceChannelId();
  if (null != n) {
    var s, i, r, a, d, u, l, f;
    let e = (null === (d = window) || void 0 === d ? void 0 : null === (a = d.performance) || void 0 === a ? void 0 : null === (r = a.getEntriesByType) || void 0 === r ? void 0 : null === (i = r.call(a, "navigation")) || void 0 === i ? void 0 : null === (s = i[0]) || void 0 === s ? void 0 : s.type) === "reload" || (null === (u = await (null == O ? void 0 : null === (f = O.processUtils) || void 0 === f ? void 0 : null === (l = f.getLastCrash) || void 0 === l ? void 0 : l.call(f))) || void 0 === u ? void 0 : u.rendererCrashReason) != null;
    if (e || !R) {
      let e = g.default.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      })
    } else v.default.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null)
  }
  S.localVoiceState.update(t, !0), S.localLobbyVoiceStates.update({}, !0), R = !1
}

function M() {
  S.localVoiceState.update()
}

function w() {
  return S.localVoiceState.update(), S.localLobbyVoiceStates.update(), !1
}

function L() {
  return S.localPresenceState.update(), !1
}

function U() {
  return S.localLobbyVoiceStates.update(), !1
}

function G(e) {
  S.socket.isSessionEstablished() && S.socket.streamDelete(e)
}
class F extends r.default.Store {
  initialize() {
    this.waitFor(_.default, p.default, g.default, c.default, m.default, f.default), this.syncWith([h.default], w), this.syncWith([y.default], L)
  }
  getSocket() {
    return S.socket
  }
  isTryingToConnect() {
    return !S.socket.isClosed()
  }
  isConnected() {
    return S.socket.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return S.socket.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return P
  }
}
F.displayName = "GatewayConnectionStore";
var x = new F(a.default, {
  START_SESSION: function() {
    return S.socket.isClosed() ? (b.verbose("Socket is reconnecting because of starting new session"), S.socket.connect()) : (b.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
  },
  LOGIN_SUCCESS: function() {
    return b.verbose("session refresh dispatched", {
      isEstablished: S.socket.isSessionEstablished()
    }), !!S.socket.isSessionEstablished() && (S.socket.close(), S.socket.connect())
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount && S.localPresenceState.handleAccountSwitch(), b.verbose("Closing socket because of logout"), S.socket.close()
  },
  CLEAR_CACHES: function(e) {
    return S.socket.close(), S.socket.clearDispatchQueue(), S.socket.connect(), !1
  },
  CONNECTION_OPEN: e => {
    V(e)
  },
  CONNECTION_CLOSED: function() {
    b.verbose("connection closed dispatched"), P = Date.now()
  },
  RTC_CONNECTION_STATE: function(e) {
    if (e.state !== D.RTCConnectionStates.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? S.socket.streamPing(e.streamKey) : S.socket.voiceServerPing())
  },
  VOICE_CHANNEL_SELECT: function(e) {
    return S.localVoiceState.update({
      guildId: e.guildId,
      channelId: e.channelId
    }), !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (_.default.getId() !== t.userId) return e;
      if (t.sessionId === k) S.localVoiceState.setState({
        guildId: t.guildId,
        channelId: t.channelId
      });
      else {
        if (t.guildId !== S.localVoiceState.guildId) return e;
        S.localVoiceState.setState({
          guildId: null,
          channelId: null
        })
      }
      return !0
    }, !1)
  },
  GUILD_DELETE: function(e) {
    e.guild.id === S.localVoiceState.guildId && S.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t.id === S.localVoiceState.channelId && S.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    t === S.localVoiceState.channelId && S.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  APP_STATE_UPDATE: function(e) {
    return e.state === D.AppStates.ACTIVE && (I.setIsPaused(!1), _.default.isAuthenticated() && S.socket.resetBackoff("App state is active")), !1
  },
  GUILD_MEMBERS_REQUEST: function(e) {
    return S.socket.isSessionEstablished() && ("userIds" in e ? i(e.userIds).chunk(100).forEach(t => {
      S.socket.requestGuildMembers(e.guildIds, {
        userIds: t,
        presences: !!e.presences
      })
    }) : S.socket.requestGuildMembers(e.guildIds, {
      query: e.query,
      limit: e.limit,
      presences: !!e.presences
    })), !1
  },
  GUILD_SEARCH_RECENT_MEMBERS: function(e) {
    let {
      guildId: t,
      query: n,
      continuationToken: s
    } = e;
    S.socket.isSessionEstablished() && S.socket.searchRecentMembers(t, {
      query: n,
      continuationToken: s
    })
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
    let {
      subscriptions: t
    } = e;
    return S.socket.isSessionEstablished() && S.socket.updateGuildSubscriptions(t), !1
  },
  CALL_CONNECT: function(e) {
    let {
      channelId: t
    } = e;
    return S.socket.isSessionEstablished() && S.socket.callConnect(t), !1
  },
  CALL_CONNECT_MULTIPLE: function(e) {
    let {
      channelIds: t
    } = e;
    return S.socket.isSessionEstablished() && t.forEach(e => {
      S.socket.callConnect(e)
    }), !1
  },
  LOBBY_CONNECT: function(e) {
    let {
      lobbyId: t,
      lobbySecret: n
    } = e;
    return S.socket.isSessionEstablished() && S.socket.lobbyConnect(t, n), !1
  },
  LOBBY_DISCONNECT: function(e) {
    let {
      lobbyId: t
    } = e;
    return S.socket.isSessionEstablished() && S.socket.lobbyDisconnect(t), S.localLobbyVoiceStates.update(), !1
  },
  LOBBY_VOICE_CONNECT: U,
  LOBBY_VOICE_DISCONNECT: U,
  RPC_APP_DISCONNECTED: U,
  STREAM_CREATE: M,
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: s
    } = e;
    if (S.socket.isSessionEstablished()) {
      var i, r;
      let e = null != n ? null === (i = g.default.getChannel(s)) || void 0 === i ? void 0 : i.rtcRegion : null === (r = c.default.getCall(s)) || void 0 === r ? void 0 : r.region;
      S.socket.streamCreate(t, n, s, null != e ? e : E.default.getPreferredRegion())
    }
    return !1
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t,
      allowMultiple: n
    } = e;
    return S.socket.isSessionEstablished() && (n || ! function() {
      let e = function() {
        return C.default.getAllActiveStreamKeys().find(e => (0, l.decodeStreamKey)(e).ownerId === _.default.getId())
      }();
      C.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => G(e))
    }(), S.socket.streamWatch(t)), !1
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    return G(t), M(), !1
  },
  STREAM_SET_PAUSED: function(e) {
    let {
      streamKey: t,
      paused: n
    } = e;
    S.socket.isSessionEstablished() && S.socket.streamSetPaused(t, n)
  },
  PUSH_NOTIFICATION_CLICK: function() {
    return S.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
    var t, n;
    let {
      channelId: s,
      applicationId: i
    } = e, r = null !== (n = null === (t = g.default.getChannel(s)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
    S.socket.embeddedActivityClose(r, s, i)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      guildId: t,
      channelId: n,
      threads: s
    } = e;
    S.socket.requestForumUnreads(t, n, s)
  },
  REQUEST_SOUNDBOARD_SOUNDS: function(e) {
    let {
      guildIds: t
    } = e;
    S.socket.requestSoundboardSounds(t)
  },
  REMOTE_COMMAND: function(e) {
    let {
      sessionId: t,
      payload: n
    } = e;
    return S.socket.isSessionEstablished() && S.socket.remoteCommand(t, n), !1
  },
  RESET_CONNECTION: function(e) {
    S.socket.connectionState !== T.ConnectionState.WILL_RECONNECT && (e.badCache ? (d.default.replaceDisableAllDatabases("RESET_CONNECTION"), S.socket.resetSocketOnError(Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")) : S.socket.resetSocketOnError(Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION"))
  },
  RTC_SPEED_TEST_START_TEST: function() {
    return S.socket.isSessionEstablished() && S.socket.speedTestCreate(E.default.getPreferredRegion()), !1
  },
  RTC_SPEED_TEST_STOP_TEST: function() {
    return S.socket.isSessionEstablished() && S.socket.speedTestDelete(), !1
  },
  CLIPS_SETTINGS_UPDATE: M,
  RUNNING_GAMES_CHANGE: M,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    e.settings.type === N.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && M()
  }
})