"use strict";
let s, i, r;
n.r(t), n.d(t, {
  default: function() {
    return ev
  }
}), n("222007"), n("424973"), n("808653"), n("781738"), n("702976");
var a, o, d = n("917351"),
  u = n.n(d),
  l = n("981980"),
  f = n("446674"),
  _ = n("233736"),
  c = n("862337"),
  g = n("913144"),
  m = n("899633"),
  h = n("376556"),
  v = n("823704"),
  E = n("605250"),
  p = n("271938"),
  y = n("47319"),
  T = n("603699"),
  C = n("824563"),
  S = n("568307"),
  I = n("280168"),
  A = n("800762"),
  D = n("599110"),
  N = n("550368"),
  O = n("718517"),
  b = n("613691"),
  P = n("450484"),
  R = n("49111");
let V = h.default.get(R.PlatformTypes.SPOTIFY),
  k = "hm://pusher/v1/connections/",
  M = 30 * O.default.Millis.SECOND,
  w = 30 * O.default.Millis.SECOND,
  L = 5 * O.default.Millis.MINUTE,
  U = 5 * O.default.Millis.SECOND,
  G = 1.5 * O.default.Millis.SECOND,
  F = 1 * O.default.Millis.MINUTE,
  x = 3 * O.default.Millis.SECOND;
(o = a || (a = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", o.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
let B = {
    MESSAGE: "message",
    PING: "ping",
    PONG: "pong"
  },
  H = {
    SINGLE: "single"
  },
  Y = new E.default("Spotify"),
  j = new c.Timeout,
  K = new c.Timeout,
  W = new c.Timeout,
  z = new c.Timeout,
  q = new c.Timeout,
  X = {},
  Q = {},
  Z = {},
  J = !1,
  $ = null;

function ee() {
  for (let e in X) {
    let t = X[e];
    if (!t.connected || null == Q[e]) continue;
    let n = Q[e].find(e => e.is_active);
    if (null != n) return {
      socket: t,
      device: n
    }
  }
}

function et(e) {
  g.default.dispatch({
    type: "SPOTIFY_PLAYER_STATE",
    accountId: e,
    track: null,
    volumePercent: 0,
    isPlaying: !1,
    repeat: !1,
    position: 0,
    context: null
  })
}

function en(e) {
  return C.default.findActivity(e, e => null != e.party && null != e.party.id && (0, P.isSpotifyParty)(e.party.id))
}
let es = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class ei {
  get connected() {
    return null != this.socket && es.has(this.socket.readyState)
  }
  connect() {
    !this.connected && !this._requestedConnect && (Y.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, eg(this.accountId, this.accessToken).then(() => {
      this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
    }).catch(e => {
      Y.error(e), this._requestedConnect = !1, this.handleClose()
    }))
  }
  disconnect() {
    this._requestedDisconnect = !0, this.backoff.cancel();
    try {
      var e;
      null === (e = this.socket) || void 0 === e || e.close()
    } catch (e) {}
  }
  ping() {
    var e;
    this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({
      type: B.PING
    })))
  }
  handleOpen() {
    Y.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(M, () => this.ping()), (0, b.getProfile)(this.accountId, this.accessToken), (0, b.getDevices)(this.accountId, this.accessToken)
  }
  handleMessage(e) {
    let {
      data: t
    } = e;
    if ("string" != typeof t) return;
    let {
      type: n,
      uri: s,
      payloads: i
    } = JSON.parse(t);
    switch (n) {
      case B.MESSAGE:
        if ("string" == typeof s && s.startsWith(k)) this.connectionId = decodeURIComponent(s.split(k)[1]), (0, b.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
        else if (Array.isArray(i)) {
          for (let {
              events: e
            }
            of i)
            if (null != e)
              for (let t of e) this.handleEvent(t)
        }
      case B.PONG:
    }
  }
  handleClose() {
    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
      let e = this.backoff.fail(() => {
        !this._requestedDisconnect && this.connect()
      });
      Y.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
    } catch (e) {}
  }
  handleEvent(e) {
    let {
      type: t,
      event: n
    } = e;
    switch (t) {
      case "PLAYER_STATE_CHANGED":
        null != n && null != n.state && ec(this.accountId, this.accessToken, n.state);
        break;
      case "DEVICE_STATE_CHANGED":
        this.handleDeviceStateChange()
    }
  }
  constructor(e, t) {
    this._requestedDisconnect = !1, this._requestedConnect = !1, this.handleDeviceStateChange = u.throttle(() => {
      (0, b.getDevices)(this.accountId, this.accessToken), eg(this.accountId, this.accessToken)
    }, x), this.accountId = e, this.accessToken = t, this.pingInterval = new c.Interval, this.backoff = new l.default(void 0, F), this.connect()
  }
}

function er(e, t) {
  e in X ? (X[e].accessToken = t, Y.info("Updated account access token: ".concat(e))) : (X[e] = new ei(e, t), Y.info("Added account: ".concat(e)))
}

function ea(e) {
  if (!(e in X)) return;
  X[e].disconnect(), delete X[e];
  let t = Z[e];
  null != t && null != s && t.track.id === s.track.id && (s = null), delete Z[e], Y.info("Removed account: ".concat(e))
}

function eo(e, t) {
  for (let n of Q[e]) n.is_active = n.id === t
}

function ed(e, t, n) {
  let s = ee();
  if (null == s) return !1;
  let {
    socket: r,
    device: a
  } = s, {
    sync_id: o,
    party: d,
    timestamps: u
  } = t;
  if (null == o || null == d || null == d.id || !(0, P.isSpotifyParty)(d.id)) return !1;
  let l = null != u && null != u.start ? u.start : Date.now(),
    f = Math.max(0, Date.now() - l),
    _ = !1,
    c = Z[r.accountId];
  null != c && !1 === c.repeat && (_ = null), (0, b.play)(r.accountId, r.accessToken, o, {
    position: +f,
    deviceId: a.id,
    repeat: _
  }), i = {
    userId: e,
    partyId: d.id,
    trackId: o,
    startTime: l
  };
  let g = "presence change";
  n && (g = "started", D.default.track(R.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
    party_id: d.id,
    other_user_id: e
  })), Y.info("Listen along ".concat(g, ": ").concat(r.accountId, " to ").concat(e, " playing ").concat(o, " on ").concat(a.name))
}

function eu() {
  D.default.track(R.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
    party_id: null != i ? i.partyId : null,
    other_user_id: null != i ? i.userId : null
  });
  let e = null != i ? i.trackId : null;
  i = null, Y.info("Listen along stopped");
  let t = ee();
  if (null == t) return;
  let {
    socket: n
  } = t, s = Z[n.accountId];
  null != s && s.track.id === e && (0, b.pause)(n.accountId, n.accessToken)
}

function el() {
  let e = Object.keys(X),
    t = y.default.getAccounts().filter(e => {
      let {
        type: t
      } = e;
      return t === R.PlatformTypes.SPOTIFY
    });
  if (null == t) return !1;
  let n = t.map(e => {
    let {
      id: t
    } = e;
    return t
  });
  for (let t of e) !n.includes(t) && ea(t);
  let i = !1;
  for (let n of t)
    if (null != s && s.account.id === n.id && (s.account = n, i = !0), !e.includes(n.id)) {
      if (null != n.accessToken) {
        er(n.id, n.accessToken);
        continue
      }(0, b.getAccessToken)(n.id)
    } return i
}

function ef() {
  if (null == s) return;
  let e = ee();
  if (null == e) return;
  let {
    socket: t
  } = e;
  J = !0, (0, b.pause)(t.accountId, t.accessToken), D.default.track(R.AnalyticEvents.SPOTIFY_AUTO_PAUSED), Y.info("Playback auto paused")
}

function e_(e) {
  if (e === p.default.getId()) {
    let t = A.default.isCurrentClientInVoiceChannel(),
      n = (0, m.getIsSpeaking)({
        userId: e,
        checkSoundSharing: !0,
        checkSoundboardSounds: !1
      });
    t && n && null != s ? (j.start(w, ef, !1), K.stop()) : K.start(100, () => j.stop(), !1)
  }
  return !1
}

function ec(e, t, n) {
  let s, i, {
    device: r,
    progress_ms: a,
    is_playing: o,
    repeat_state: d,
    item: u,
    context: l
  } = n;
  if (null != u && u.type === P.SpotifyResourceTypes.TRACK) {
    let e = u.id;
    null != u.linked_from && null != u.linked_from.id && (e = u.linked_from.id), s = {
      id: e,
      name: u.name,
      duration: u.duration_ms,
      album: {
        id: u.album.id,
        name: u.album.name,
        image: u.album.images[0]
      },
      artists: u.artists,
      isLocal: u.is_local || !1
    }
  }
  if (null != r && !0 !== r.is_active && (r = {
      ...r,
      is_active: !0
    }), null != l && [P.SpotifyResourceTypes.PLAYLIST, P.SpotifyResourceTypes.ALBUM].includes(l.type)) {
    let n = eh.getPlayerState(e);
    i = null != n && null != n.context && n.context.uri === l.uri ? Promise.resolve(n.context) : l.type === P.SpotifyResourceTypes.ALBUM ? Promise.resolve(l) : b.SpotifyAPI.get(e, t, {
      url: l.href
    }).then(e => {
      let {
        body: t
      } = e;
      return t
    }).catch(e => {
      if (e && 404 === e.status) return null;
      throw e
    })
  } else i = Promise.resolve(void 0);
  return i.then(t => {
    null != t && t.type === P.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), g.default.dispatch({
      type: "SPOTIFY_PLAYER_STATE",
      accountId: e,
      track: s,
      volumePercent: null != r ? r.volume_percent : 0,
      isPlaying: o,
      repeat: "off" !== d,
      position: a,
      context: t,
      device: r
    })
  })
}

function eg(e, t) {
  return b.SpotifyAPI.get(e, t, {
    url: P.SpotifyEndpoints.PLAYER,
    onlyRetryOnAuthorizationErrors: !0
  }).then(n => {
    let s = n.body;
    null != s ? ec(e, t, s).then(() => n) : et(e)
  }).catch(() => et(e))
}
class em extends f.default.Store {
  initialize() {
    this.waitFor(y.default, I.default), this.syncWith([C.default], () => (function() {
      if (null == i) return !1;
      let e = ee();
      if (null == e) return !1;
      let {
        userId: t
      } = i, n = en(t);
      if (null == n) return W.start(L, () => {
        null != i && i.userId === t && (0, v.default)()
      }), !1;
      W.stop();
      let {
        sync_id: s,
        timestamps: r,
        party: a
      } = n, o = null != s && i.trackId !== s, d = null != r && i.startTime !== r.start;
      return o || d ? ed(t, n, !1) : null != a && a.id !== i.partyId && (i.partyId = a.id, !0)
    })()), (0, b.fetchIsSpotifyProtocolRegistered)()
  }
  hasConnectedAccount() {
    return Object.keys(X).length > 0
  }
  getActiveSocketAndDevice() {
    return ee()
  }
  getPlayableComputerDevices() {
    let e = [];
    for (let t in X) {
      let n = X[t];
      if (!n.connected || null == Q[t]) continue;
      let s = Q[t].find(e => !e.is_restricted && "Computer" === e.type);
      null != s && e.push({
        socket: n,
        device: s
      })
    }
    return e
  }
  canPlay(e) {
    let {
      sync_id: t,
      party: n
    } = e;
    return null != ee() && null != t && null != n && null != n.id && (0, P.isSpotifyParty)(n.id)
  }
  getSyncingWith() {
    return i
  }
  wasAutoPaused() {
    return J
  }
  getLastPlayedTrackId() {
    return r
  }
  getTrack() {
    return null != s ? s.track : null
  }
  getPlayerState(e) {
    return Z[e]
  }
  shouldShowActivity() {
    return null != s && s.account.showActivity && !T.default.isIdle()
  }
  getActivity() {
    let e, t, n;
    if (null == s) return null != i ? en(i.userId) : null;
    let {
      track: {
        artists: r,
        album: a,
        name: o,
        id: d,
        duration: u,
        isLocal: l
      },
      startTime: f,
      context: _
    } = s, c = r.slice(0, 5);
    r.length > 0 && (e = c.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let g = {},
      m = null != a.image ? (0, N.getAssetFromImageURL)(R.PlatformTypes.SPOTIFY, a.image.url) : null;
    null != a.image && null != m && (g.large_image = m), "single" !== a.type && (g.large_text = a.name), null != _ && (t = _.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(P.SPOTIFY_PARTY_PREFIX).concat(p.default.getId());
    let h = o.length > 128 ? o.substring(0, 125) + "..." : o,
      v = {
        name: V.name,
        assets: g,
        details: h,
        state: e,
        timestamps: {
          start: f,
          end: f + u
        },
        party: {
          id: n
        }
      };
    return !l && (v.sync_id = d, v.flags = R.ActivityFlags.PLAY | R.ActivityFlags.SYNC, v.metadata = {
      context_uri: t,
      album_id: a.id,
      artist_ids: c.map(e => {
        let {
          id: t
        } = e;
        return t
      })
    }), v
  }
}
em.displayName = "SpotifyStore";
let eh = new em(g.default, {
  USER_CONNECTIONS_UPDATE: el,
  CONNECTION_OPEN: el,
  SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
    let {
      accountId: t,
      accessToken: n
    } = e;
    return er(t, n), !1
  },
  SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
    let {
      accountId: t
    } = e;
    ea(t)
  },
  SPOTIFY_PROFILE_UPDATE: function(e) {
    let {
      accountId: t,
      isPremium: n
    } = e, s = X[t];
    if (null == s) return !1;
    s.isPremium = n, Y.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
  },
  SPOTIFY_PLAYER_STATE: function(e) {
    let {
      accountId: t,
      isPlaying: n,
      repeat: r,
      track: a,
      position: o,
      device: d,
      context: l
    } = e, f = !1;
    if (null != d) {
      if (null != Q[t]) {
        let e = Q[t].find(e => {
          let {
            id: t
          } = e;
          return t === d.id
        });
        null == e ? (Q[t].push(d), f = !0) : !(0, _.default)(e, d) && (Object.assign(e, d), f = !0), eo(t, d.id)
      } else Q[t] = [d], f = !0
    }
    n ? null == $ || $.start(w, ef) : (a = null, null == $ || $.stop());
    let c = y.default.getAccount(t, R.PlatformTypes.SPOTIFY);
    if (null == c) return f;
    let g = Z[t],
      m = null != a ? {
        account: c,
        track: a,
        startTime: function(e, t) {
          let n = Date.now(),
            s = null != e ? e.startTime : 0,
            i = n - t;
          return Math.abs(i - s) > G ? i : s
        }(g, o),
        context: l,
        repeat: r
      } : null,
      h = null != d && null != i && 0 === o && !n;
    !h && (Z[t] = m);
    let E = s;
    if (s = u.values(Z).find(e => null != e), e_(p.default.getId()), null == a || h ? z.stop() : z.start(a.duration - o + U, () => et(c.id)), null != i && (!n && o > 0 || null == d || null != m && i.trackId !== m.track.id) ? (Y.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(U, "ms")), q.start(U, () => {
        Y.info("Stopping listening along"), (0, v.default)(), et(c.id)
      })) : q.isStarted() && (Y.info("Listen along stop cancelled as playback of track resumed"), q.stop()), E === s || null == g && null == m || null != g && null != m && g.track.id === m.track.id && g.startTime === m.startTime) return f;
    null != a && D.default.track(R.AnalyticEvents.ACTIVITY_UPDATED, {
      party_platform: R.PlatformTypes.SPOTIFY,
      track_id: a.id,
      has_images: !0
    })
  },
  SPOTIFY_PLAYER_PLAY: function(e) {
    let {
      id: t
    } = e;
    r = t
  },
  ACTIVITY_PLAY: function(e) {
    let t, {
        activity: n,
        metadata: s
      } = e,
      r = ee();
    if (null == r) return !1;
    let {
      socket: a,
      device: o
    } = r, {
      sync_id: d,
      party: u
    } = n;
    if (null == d || null == u || null == u.id || !(0, P.isSpotifyParty)(u.id)) return !1;
    null != s && (t = s.context_uri), null != i && eu(), (0, b.play)(a.accountId, a.accessToken, d, {
      contextUri: t,
      deviceId: o.id
    }), Y.info("Play started: ".concat(a.accountId, " playing ").concat(d, " on ").concat(o.name))
  },
  ACTIVITY_SYNC: function(e) {
    let {
      activity: t,
      userId: n
    } = e;
    return ed(n, t, !0)
  },
  ACTIVITY_SYNC_STOP: eu,
  SPOTIFY_SET_DEVICES: function(e) {
    let {
      accountId: t,
      devices: n
    } = e;
    Q[t] = n, Y.info("Devices updated for ".concat(t, ":"), n)
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
    let {
      accountId: t,
      deviceId: n
    } = e;
    eo(t, n)
  },
  SPEAKING: function(e) {
    let {
      userId: t
    } = e;
    return e_(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: n
      } = t;
      return e_(n) || e
    }, !1)
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    let {
      settings: t
    } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
      null == $ || $.stop();
      let {
        sourceId: e,
        sound: n
      } = null == t ? void 0 : t.desktopSettings, s = null != e && S.default.getObservedAppNameForWindow(e) === V.name;
      s && n ? ($ = new c.Interval).start(w, ef) : $ = null
    }
  }
});
var ev = eh