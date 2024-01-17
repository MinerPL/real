"use strict";
n.r(t), n.d(t, {
  SpotifyAPI: function() {
    return c
  },
  getAccessToken: function() {
    return g
  },
  subscribePlayerStateNotifications: function() {
    return function e(t, n, s) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
      return c.put(t, n, {
        url: l.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
        query: {
          connection_id: s
        }
      }).catch(a => r <= 0 ? Promise.reject(a) : (0, i.timeoutPromise)(5e3).then(() => e(t, n, s, r - 1)))
    }
  },
  getProfile: function() {
    return m
  },
  getDevices: function() {
    return h
  },
  play: function() {
    return v
  },
  pause: function() {
    return E
  },
  fetchIsSpotifyProtocolRegistered: function() {
    return p
  },
  setActiveDevice: function() {
    return y
  }
}), n("860677");
var s = n("872717"),
  i = n("862337"),
  r = n("913144"),
  a = n("718517"),
  o = n("269180"),
  d = n("773336"),
  u = n("155815"),
  l = n("450484"),
  f = n("49111");

function _(e, t, n, s) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
  return e(s = {
    ...s,
    headers: {
      authorization: "Bearer ".concat(n)
    }
  }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
    let a = !0 !== s.onlyRetryOnAuthorizationErrors && 202 === n.status;
    return (401 === n.status || a) && r > 0 ? (202 === n.status ? (0, i.timeoutPromise)(5e3) : Promise.resolve()).then(() => g(t)).then(n => {
      let {
        body: {
          access_token: i
        }
      } = n;
      return _(e, t, i, s, r - 1)
    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
  })
}
let c = {
  get: _.bind(null, s.default.get),
  put: _.bind(null, s.default.put)
};

function g(e) {
  return s.default.get({
    url: f.Endpoints.CONNECTION_ACCESS_TOKEN(f.PlatformTypes.SPOTIFY, e),
    oldFormErrors: !0
  }).catch(t => {
    if (401 === t.status) r.default.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
      accountId: e
    });
    else if (429 === t.status) {
      let n = t.headers["retry-after"] * a.default.Millis.SECOND,
        s = isNaN(n) || 0 === n ? 5e3 : n;
      return (0, i.timeoutPromise)(s).then(() => g(e))
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

function m(e, t) {
  return c.get(e, t, {
    url: l.SpotifyEndpoints.PROFILE
  }).then(t => (r.default.dispatch({
    type: "SPOTIFY_PROFILE_UPDATE",
    accountId: e,
    isPremium: "premium" === t.body.product
  }), t))
}

function h(e, t) {
  return c.get(e, t, {
    url: l.SpotifyEndpoints.PLAYER_DEVICES
  }).then(t => (t.body && r.default.dispatch({
    type: "SPOTIFY_SET_DEVICES",
    accountId: e,
    devices: t.body.devices
  }), t))
}

function v(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    i = l.SpotifyEndpoints.PLAYER_OPEN(l.SpotifyResourceTypes.TRACK, n, !1),
    {
      deviceId: a,
      position: o,
      contextUri: d,
      repeat: u
    } = s;
  return c.put(e, t, {
    url: l.SpotifyEndpoints.PLAYER_PLAY,
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
  }).then(n => null == u ? n : c.put(e, t, {
    url: l.SpotifyEndpoints.PLAYER_REPEAT,
    query: {
      device_id: a,
      state: u ? "context" : "off"
    }
  })).then(e => (r.default.dispatch({
    type: "SPOTIFY_PLAYER_PLAY",
    id: n,
    position: null != o ? o : 0
  }), e))
}

function E(e, t) {
  return c.put(e, t, {
    url: l.SpotifyEndpoints.PLAYER_PAUSE
  }).then(e => (r.default.dispatch({
    type: "SPOTIFY_PLAYER_PAUSE"
  }), e))
}

function p() {
  !u.default.isProtocolRegistered() && (0, d.isDesktop)() && o.default.isProtocolRegistered(l.SPOTIFY_APP_PROTOCOL).then(e => {
    r.default.dispatch({
      type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
      isRegistered: e
    })
  })
}

function y(e, t) {
  r.default.dispatch({
    type: "SPOTIFY_SET_ACTIVE_DEVICE",
    accountId: e,
    deviceId: t
  })
}