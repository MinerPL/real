"use strict";
let s, i;
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var r = n("714617"),
  a = n.n(r),
  o = n("917351"),
  d = n.n(o),
  u = n("446674"),
  l = n("913144"),
  f = n("429928"),
  _ = n("837374"),
  c = n("662285"),
  g = n("845579"),
  m = n("374363"),
  h = n("233069"),
  v = n("964889"),
  E = n("271938"),
  p = n("546463"),
  y = n("603699"),
  T = n("686470"),
  C = n("52028"),
  S = n("824563"),
  I = n("235660"),
  A = n("49111");
let D = !1,
  N = A.StatusTypes.ONLINE,
  O = A.StatusTypes.UNKNOWN,
  b = 0,
  P = [],
  V = !1,
  R = !0,
  k = Object.freeze([]),
  M = [];

function w(e) {
  return (0, v.shouldShareApplicationActivity)(e, T.default)
}

function L(e) {
  switch (e.type) {
    case A.ActivityTypes.LISTENING:
      if ((0, f.default)(e)) return c.default.shouldShowActivity();
      if (null != e.application_id) return w(e.application_id);
      return !1;
    case A.ActivityTypes.PLAYING:
      return null != e.application_id ? w(e.application_id) : function(e) {
        let t = p.default.getGameByName(e);
        return null != t ? w(t.id) : g.ShowCurrentGame.getSetting()
      }(e.name);
    case A.ActivityTypes.STREAMING:
    case A.ActivityTypes.WATCHING:
    default:
      return null == e.application_id || w(e.application_id)
  }
}

function U() {
  var e;
  b = null !== (e = y.default.getIdleSince()) && void 0 !== e ? e : 0, V = y.default.isAFK(), R ? (N = O, G()) : N = D ? A.StatusTypes.INVISIBLE : g.StatusSetting.getSetting(), N === A.StatusTypes.ONLINE && b > 0 && (N = A.StatusTypes.IDLE);
  let t = !1,
    n = R || N === A.StatusTypes.INVISIBLE ? [] : C.default.getActivities().filter(L);
  !a(P, n) && (P = n, t = !0);
  let s = I.default.getRemoteActivities();
  if (k !== s && (k = s, t = !0), t) {
    let e = P.find(e => e.type === A.ActivityTypes.CUSTOM_STATUS),
      t = P.filter(e => e.type !== A.ActivityTypes.CUSTOM_STATUS);
    M = t.length > 0 ? P : null != e ? [e, ...d(k).filter(e => e.type !== A.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : d.uniqBy(k, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
  }
}

function G() {
  s = void 0, i = void 0
}

function F() {
  R = !1, O = A.StatusTypes.UNKNOWN, U(), S.default.setCurrentUserOnConnectionOpen(N, M)
}
class x extends u.default.Store {
  initialize() {
    this.waitFor(y.default, m.default, C.default, I.default, T.default, p.default), this.syncWith([C.default], U)
  }
  getLocalPresence() {
    return {
      status: N,
      since: b,
      activities: P,
      afk: V,
      broadcast: i
    }
  }
  getStatus() {
    return N
  }
  getActivities() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? M : P
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? M[0] : P[0]
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
    return s
  }
}
x.displayName = "SelfPresenceStore";
var B = new x(l.default, {
  START_SESSION: U,
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  OVERLAY_INITIALIZE: F,
  CONNECTION_CLOSED: U,
  IDLE: U,
  AFK: U,
  RUNNING_GAMES_CHANGE: U,
  STREAMING_UPDATE: U,
  USER_SETTINGS_PROTO_UPDATE: U,
  LOCAL_ACTIVITY_UPDATE: U,
  SPOTIFY_PLAYER_STATE: U,
  SPOTIFY_PLAYER_PLAY: U,
  USER_CONNECTIONS_UPDATE: U,
  SESSIONS_REPLACE: U,
  RPC_APP_DISCONNECTED: U,
  LIBRARY_FETCH_SUCCESS: U,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: U,
  LOGOUT: function() {
    R = !0, O = N, U()
  },
  EMBEDDED_ACTIVITY_CLOSE: U,
  EMBEDDED_ACTIVITY_OPEN: U,
  FORCE_INVISIBLE: function(e) {
    return D = e.invisible, U()
  },
  WINDOW_FOCUS: function() {
    return D = !1, U()
  },
  BROADCAST_START: function(e) {
    s = e.broadcast, i = (0, _.broadcastToServer)(e.broadcast)
  },
  BROADCAST_STOP: G,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t instanceof h.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === E.default.getId() && (s = void 0, i = void 0)
  }
})