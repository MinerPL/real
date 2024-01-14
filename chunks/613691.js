"use strict";
n.r(t), n.d(t, {
  SpotifyAPI: function() {
    return _
  },
  getAccessToken: function() {
    return c
  },
  subscribePlayerStateNotifications: function() {
    return function e(t, n, s) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
      return _.put(t, n, {
        url: u.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
        query: {
          connection_id: s
        }
      }).catch(a => r <= 0 ? Promise.reject(a) : (0, i.timeoutPromise)(5e3).then(() => e(t, n, s, r - 1)))
    }
  },
  getProfile: function() {
    return g
  },
  getDevices: function() {
    return m
  },
  play: function() {
    return h
  },
  pause: function() {
    return v
  },
  fetchIsSpotifyProtocolRegistered: function() {
    return E
  },
  setActiveDevice: function() {
    return p
  }
}), n("860677");
var s = n("872717"),
  i = n("862337"),
  r = n("913144"),
  a = n("269180"),
  o = n("773336"),
  d = n("155815"),
  u = n("450484"),
  l = n("49111");

function f(e, t, n, s) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
  return e(s = {
    ...s,
    headers: {
      authorization: "Bearer ".concat(n)
    }
  }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
    let a = !0 !== s.onlyRetryOnAuthorizationErrors && 202 === n.status;
    return (401 === n.status || a) && r > 0 ? (202 === n.status ? (0, i.timeoutPromise)(5e3) : Promise.resolve()).then(() => c(t)).then(n => {
      let {
        body: {
          access_token: i
        }
      } = n;
      return f(e, t, i, s, r - 1)
    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
  })
}
let _ = {
  get: f.bind(null, s.default.get),
  put: f.bind(null, s.default.put)
};

function c(e) {
  return s.default.get({
    url: l.Endpoints.CONNECTION_ACCESS_TOKEN(l.PlatformTypes.SPOTIFY, e),
    oldFormErrors: !0
  }).catch(t => {
    if (401 === t.status) r.default.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
      accountId: e
    });
    else if (429 === t.status) {
      let n = 1e3 * t.headers["retry-after"],
        s = isNaN(n) || 0 === n ? 5e3 : n;
      return (0, i.timeoutPromise)(s).then(() => c(e))
    }
    return Promise.reject(t)
  }).then(t => {
    let {
      access_token: n
    } = t.body;
    return r.default.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
      accountId: e,
      accessToken: n
    }), t
  })
}

function g(e, t) {
  return _.get(e, t, {
    url: u.SpotifyEndpoints.PROFILE
  }).then(t => (r.default.dispatch({
    type: "SPOTIFY_PROFILE_UPDATE",
    accountId: e,
    isPremium: "premium" === t.body.product
  }), t))
}

function m(e, t) {
  return _.get(e, t, {
    url: u.SpotifyEndpoints.PLAYER_DEVICES
  }).then(t => (t.body && r.default.dispatch({
    type: "SPOTIFY_SET_DEVICES",
    accountId: e,
    devices: t.body.devices
  }), t))
}

function h(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    i = u.SpotifyEndpoints.PLAYER_OPEN(u.SpotifyResourceTypes.TRACK, n, !1),
    {
      deviceId: a,
      position: o,
      contextUri: d,
      repeat: l
    } = s;
  return _.put(e, t, {
    url: u.SpotifyEndpoints.PLAYER_PLAY,
    query: {
      device_id: a
    },
    body: {
      context_uri: null != d ? d : void 0,
      uris: null == d ? [i] : void 0,
      offset: null != d ? {
        uri: i
      } : void 0,
      position_ms: null != o ? o : 0
    }
  }).then(n => null == l ? n : _.put(e, t, {
    url: u.SpotifyEndpoints.PLAYER_REPEAT,
    query: {
      device_id: a,
      state: l ? "context" : "off"
    }
  })).then(e => (r.default.dispatch({
    type: "SPOTIFY_PLAYER_PLAY",
    id: n,
    position: null != o ? o : 0
  }), e))
}

function v(e, t) {
  return _.put(e, t, {
    url: u.SpotifyEndpoints.PLAYER_PAUSE
  }).then(e => (r.default.dispatch({
    type: "SPOTIFY_PLAYER_PAUSE"
  }), e))
}

function E() {
  !d.default.isProtocolRegistered() && (0, o.isDesktop)() && a.default.isProtocolRegistered(u.SPOTIFY_APP_PROTOCOL).then(e => {
    r.default.dispatch({
      type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
      isRegistered: e
    })
  })
}

function p(e, t) {
  r.default.dispatch({
    type: "SPOTIFY_SET_ACTIVE_DEVICE",
    accountId: e,
    deviceId: t
  })
}