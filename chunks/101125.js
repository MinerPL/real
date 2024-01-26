"use strict";
let i, s;
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var r = n("714617"),
  a = n.n(r),
  o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  d = n("913144"),
  c = n("429928"),
  f = n("837374"),
  _ = n("662285"),
  h = n("845579"),
  g = n("374363"),
  m = n("233069"),
  E = n("599110"),
  p = n("964889"),
  v = n("271938"),
  S = n("546463"),
  T = n("603699"),
  I = n("686470"),
  C = n("52028"),
  A = n("824563"),
  y = n("235660"),
  N = n("49111");
let R = !1,
  O = N.StatusTypes.ONLINE,
  D = N.StatusTypes.UNKNOWN,
  P = 0,
  b = [],
  L = !1,
  M = !0,
  U = Object.freeze([]),
  k = [];

function w(e) {
  return (0, p.shouldShareApplicationActivity)(e, I.default)
}

function V(e) {
  switch (e.type) {
    case N.ActivityTypes.LISTENING:
      if ((0, c.default)(e)) return _.default.shouldShowActivity();
      if (null != e.application_id) return w(e.application_id);
      return !1;
    case N.ActivityTypes.PLAYING:
      return null != e.application_id ? w(e.application_id) : function(e) {
        let t = S.default.getGameByName(e);
        return null != t ? w(t.id) : h.ShowCurrentGame.getSetting()
      }(e.name);
    case N.ActivityTypes.STREAMING:
    case N.ActivityTypes.WATCHING:
    default:
      return null == e.application_id || w(e.application_id)
  }
}

function G() {
  var e;
  P = null !== (e = T.default.getIdleSince()) && void 0 !== e ? e : 0, L = T.default.isAFK(), M ? (O = D, F()) : O = R ? N.StatusTypes.INVISIBLE : h.StatusSetting.getSetting(), O === N.StatusTypes.ONLINE && P > 0 && (O = N.StatusTypes.IDLE);
  let t = !1,
    n = M || O === N.StatusTypes.INVISIBLE ? [] : C.default.getActivities().filter(V);
  !a(b, n) && (b = n, t = !0);
  let i = y.default.getRemoteActivities();
  if (U !== i && (U = i, t = !0), t) {
    let e = b.find(e => e.type === N.ActivityTypes.CUSTOM_STATUS),
      t = b.filter(e => e.type !== N.ActivityTypes.CUSTOM_STATUS);
    k = t.length > 0 ? b : null != e ? [e, ...l(U).filter(e => e.type !== N.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : l.uniqBy(U, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
  }
}

function F() {
  i = void 0, s = void 0
}

function x() {
  M = !1, D = N.StatusTypes.UNKNOWN, G(), A.default.setCurrentUserOnConnectionOpen(O, k)
}
class B extends u.default.Store {
  initialize() {
    this.waitFor(T.default, g.default, C.default, y.default, I.default, S.default), this.syncWith([C.default], G)
  }
  getLocalPresence() {
    return {
      status: O,
      since: P,
      activities: b,
      afk: L,
      broadcast: s
    }
  }
  getStatus() {
    return O
  }
  getActivities() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? k : b
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? k[0] : b[0]
  }
  getApplicationActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.findActivity(t => t.application_id === e, t)
  }
  findActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.getActivities(t).find(e)
  }
  getBroadcast() {
    return i
  }
}
B.displayName = "SelfPresenceStore";
var H = new B(d.default, {
  START_SESSION: G,
  CONNECTION_OPEN: function() {
    x(), .001 > Math.random() && E.default.track(N.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
      reason: "status_on_connection",
      rating: O
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: x,
  OVERLAY_INITIALIZE: x,
  CONNECTION_CLOSED: G,
  IDLE: G,
  AFK: G,
  RUNNING_GAMES_CHANGE: G,
  STREAMING_UPDATE: G,
  USER_SETTINGS_PROTO_UPDATE: G,
  LOCAL_ACTIVITY_UPDATE: G,
  SPOTIFY_PLAYER_STATE: G,
  SPOTIFY_PLAYER_PLAY: G,
  USER_CONNECTIONS_UPDATE: G,
  SESSIONS_REPLACE: G,
  RPC_APP_DISCONNECTED: G,
  LIBRARY_FETCH_SUCCESS: G,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: G,
  LOGOUT: function() {
    M = !0, D = O, G()
  },
  EMBEDDED_ACTIVITY_CLOSE: G,
  EMBEDDED_ACTIVITY_OPEN: G,
  FORCE_INVISIBLE: function(e) {
    return R = e.invisible, G()
  },
  WINDOW_FOCUS: function() {
    return R = !1, G()
  },
  BROADCAST_START: function(e) {
    i = e.broadcast, s = (0, f.broadcastToServer)(e.broadcast)
  },
  BROADCAST_STOP: F,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t instanceof m.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === v.default.getId() && (i = void 0, s = void 0)
  }
})