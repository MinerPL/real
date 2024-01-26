"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("808653"), n("70102");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("987317"),
  l = n("723939"),
  u = n("605250"),
  d = n("374014"),
  c = n("374363"),
  f = n("271938"),
  _ = n("950104"),
  h = n("42203"),
  g = n("260320"),
  m = n("42887"),
  E = n("945956"),
  p = n("590401"),
  v = n("18494"),
  S = n("101125"),
  T = n("205817"),
  I = n("41642"),
  C = n("518916"),
  A = n("571420"),
  y = n("399010"),
  N = n("49111"),
  R = n("397336");
let O = window.DiscordNative;
C.socket.dispatcher.dispatchSocketMessage = y.default;
let D = new u.default("ConnectionStore"),
  P = 0,
  b = null,
  L = !0;
async function M(e) {
  P = Date.now(), b = e.sessionId, C.localPresenceState.handleConnectionOpen();
  let t = {},
    n = v.default.getVoiceChannelId();
  if (null != n) {
    var i, s, r, a, l, u, d, c;
    let e = (null === (l = window) || void 0 === l ? void 0 : null === (a = l.performance) || void 0 === a ? void 0 : null === (r = a.getEntriesByType) || void 0 === r ? void 0 : null === (s = r.call(a, "navigation")) || void 0 === s ? void 0 : null === (i = s[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (u = await (null == O ? void 0 : null === (c = O.processUtils) || void 0 === c ? void 0 : null === (d = c.getLastCrash) || void 0 === d ? void 0 : d.call(c))) || void 0 === u ? void 0 : u.rendererCrashReason) != null;
    if (e || !L) {
      let e = h.default.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      })
    } else E.default.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null)
  }
  C.localVoiceState.update(t, !0), C.localLobbyVoiceStates.update({}, !0), L = !1
}

function U() {
  C.localVoiceState.update()
}

function k() {
  return C.localVoiceState.update(), C.localLobbyVoiceStates.update(), !1
}

function w() {
  return C.localPresenceState.update(), !1
}

function V() {
  return C.localLobbyVoiceStates.update(), !1
}

function G(e) {
  C.socket.isSessionEstablished() && C.socket.streamDelete(e)
}
class F extends r.default.Store {
  initialize() {
    this.waitFor(f.default, v.default, h.default, _.default, g.default, c.default), this.syncWith([m.default], k), this.syncWith([S.default], w)
  }
  getSocket() {
    return C.socket
  }
  isTryingToConnect() {
    return !C.socket.isClosed()
  }
  isConnected() {
    return C.socket.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return C.socket.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return P
  }
}
F.displayName = "GatewayConnectionStore";
var x = new F(a.default, {
  START_SESSION: function() {
    return C.socket.isClosed() ? (D.verbose("Socket is reconnecting because of starting new session"), C.socket.connect()) : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
  },
  LOGIN_SUCCESS: function() {
    return D.verbose("session refresh dispatched", {
      isEstablished: C.socket.isSessionEstablished()
    }), !!C.socket.isSessionEstablished() && (C.socket.close(), C.socket.connect())
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount && C.localPresenceState.handleAccountSwitch(), D.verbose("Closing socket because of logout"), C.socket.close()
  },
  CLEAR_CACHES: function(e) {
    return C.socket.close(), C.socket.dispatcher.clear(), C.socket.connect(), !1
  },
  CONNECTION_OPEN: e => {
    M(e)
  },
  CONNECTION_CLOSED: function() {
    D.verbose("connection closed dispatched"), P = Date.now()
  },
  RTC_CONNECTION_STATE: function(e) {
    if (e.state !== N.RTCConnectionStates.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? C.socket.streamPing(e.streamKey) : C.socket.voiceServerPing())
  },
  VOICE_CHANNEL_SELECT: function(e) {
    return C.localVoiceState.update({
      guildId: e.guildId,
      channelId: e.channelId
    }), !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (f.default.getId() !== t.userId) return e;
      if (t.sessionId === b) C.localVoiceState.setState({
        guildId: t.guildId,
        channelId: t.channelId
      });
      else {
        if (t.guildId !== C.localVoiceState.guildId) return e;
        C.localVoiceState.setState({
          guildId: null,
          channelId: null
        })
      }
      return !0
    }, !1)
  },
  GUILD_DELETE: function(e) {
    e.guild.id === C.localVoiceState.guildId && C.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t.id === C.localVoiceState.channelId && C.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    t === C.localVoiceState.channelId && C.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  APP_STATE_UPDATE: function(e) {
    return e.state === N.AppStates.ACTIVE && (A.setIsPaused(!1), f.default.isAuthenticated() && C.socket.resetBackoff("App state is active")), !1
  },
  GUILD_MEMBERS_REQUEST: function(e) {
    return C.socket.isSessionEstablished() && ("userIds" in e ? s(e.userIds).chunk(100).forEach(t => {
      C.socket.requestGuildMembers(e.guildIds, {
        userIds: t,
        presences: !!e.presences
      })
    }) : C.socket.requestGuildMembers(e.guildIds, {
      query: e.query,
      limit: e.limit,
      presences: !!e.presences
    })), !1
  },
  GUILD_SEARCH_RECENT_MEMBERS: function(e) {
    let {
      guildId: t,
      query: n,
      continuationToken: i
    } = e;
    C.socket.isSessionEstablished() && C.socket.searchRecentMembers(t, {
      query: n,
      continuationToken: i
    })
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
    let {
      subscriptions: t
    } = e;
    return C.socket.isSessionEstablished() && C.socket.updateGuildSubscriptions(t), !1
  },
  CALL_CONNECT: function(e) {
    let {
      channelId: t
    } = e;
    return C.socket.isSessionEstablished() && C.socket.callConnect(t), !1
  },
  CALL_CONNECT_MULTIPLE: function(e) {
    let {
      channelIds: t
    } = e;
    return C.socket.isSessionEstablished() && t.forEach(e => {
      C.socket.callConnect(e)
    }), !1
  },
  LOBBY_CONNECT: function(e) {
    let {
      lobbyId: t,
      lobbySecret: n
    } = e;
    return C.socket.isSessionEstablished() && C.socket.lobbyConnect(t, n), !1
  },
  LOBBY_DISCONNECT: function(e) {
    let {
      lobbyId: t
    } = e;
    return C.socket.isSessionEstablished() && C.socket.lobbyDisconnect(t), C.localLobbyVoiceStates.update(), !1
  },
  LOBBY_VOICE_CONNECT: V,
  LOBBY_VOICE_DISCONNECT: V,
  RPC_APP_DISCONNECTED: V,
  STREAM_CREATE: U,
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: i
    } = e;
    if (C.socket.isSessionEstablished()) {
      var s, r;
      let e = null != n ? null === (s = h.default.getChannel(i)) || void 0 === s ? void 0 : s.rtcRegion : null === (r = _.default.getCall(i)) || void 0 === r ? void 0 : r.region;
      C.socket.streamCreate(t, n, i, null != e ? e : p.default.getPreferredRegion())
    }
    return !1
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t,
      allowMultiple: n
    } = e;
    return C.socket.isSessionEstablished() && (n || ! function() {
      let e = function() {
        return T.default.getAllActiveStreamKeys().find(e => (0, d.decodeStreamKey)(e).ownerId === f.default.getId())
      }();
      T.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => G(e))
    }(), C.socket.streamWatch(t)), !1
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    return G(t), U(), !1
  },
  STREAM_SET_PAUSED: function(e) {
    let {
      streamKey: t,
      paused: n
    } = e;
    C.socket.isSessionEstablished() && C.socket.streamSetPaused(t, n)
  },
  PUSH_NOTIFICATION_CLICK: function() {
    return C.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
    var t, n;
    let {
      channelId: i,
      applicationId: s
    } = e, r = null !== (n = null === (t = h.default.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
    C.socket.embeddedActivityClose(r, i, s)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      guildId: t,
      channelId: n,
      threads: i
    } = e;
    C.socket.requestForumUnreads(t, n, i)
  },
  REQUEST_SOUNDBOARD_SOUNDS: function(e) {
    let {
      guildIds: t
    } = e;
    C.socket.requestSoundboardSounds(t)
  },
  REMOTE_COMMAND: function(e) {
    let {
      sessionId: t,
      payload: n
    } = e;
    return C.socket.isSessionEstablished() && C.socket.remoteCommand(t, n), !1
  },
  RESET_CONNECTION: function(e) {
    C.socket.connectionState !== I.default.WILL_RECONNECT && (e.badCache ? (l.default.replaceDisableAllDatabases("RESET_CONNECTION"), C.socket.resetSocketOnError(Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")) : C.socket.resetSocketOnError(Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION"))
  },
  RTC_SPEED_TEST_START_TEST: function() {
    return C.socket.isSessionEstablished() && C.socket.speedTestCreate(p.default.getPreferredRegion()), !1
  },
  RTC_SPEED_TEST_STOP_TEST: function() {
    return C.socket.isSessionEstablished() && C.socket.speedTestDelete(), !1
  },
  CLIPS_SETTINGS_UPDATE: U,
  RUNNING_GAMES_CHANGE: U,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    e.settings.type === R.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && U()
  }
})