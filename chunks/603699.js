"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("446674"),
  i = n("913144"),
  r = n("987317"),
  a = n("49671"),
  o = n("845579"),
  d = n("718517"),
  u = n("773336"),
  l = n("271938"),
  f = n("49111"),
  _ = n("353927");
let c = Date.now(),
  g = !1,
  m = !1,
  h = !1,
  v = !1,
  E = !1;

function p() {
  return h || v || (0, u.isAndroid)() && E
}

function y() {
  Date.now() - c > f.IDLE_DURATION || p() ? g || i.default.dispatch({
    type: "IDLE",
    idle: !0,
    idleSince: c
  }) : g && i.default.dispatch({
    type: "IDLE",
    idle: !1
  }), Date.now() - c > Math.min(o.AfkTimeout.getSetting() * d.default.Millis.SECOND, f.IDLE_DURATION) || p() ? m || i.default.dispatch({
    type: "AFK",
    afk: !0
  }) : m && i.default.dispatch({
    type: "AFK",
    afk: !1
  })
}!__OVERLAY__ && (u.isPlatformEmbedded && (null === a.default || void 0 === a.default ? void 0 : a.default.remotePowerMonitor) != null ? (! function e() {
  var t;
  let n = t => {
    c = Math.max(Date.now() - t, c), y(), setTimeout(e, 10 * d.default.Millis.SECOND)
  };
  if ((null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
    let e = a.default.remotePowerMonitor.getSystemIdleTimeMs();
    e instanceof Promise ? e.then(n) : n(e)
  }
}(), a.default.remotePowerMonitor.on("resume", () => {
  h = !1, C({})
}), a.default.remotePowerMonitor.on("suspend", () => {
  h = !0, C({}), r.default.disconnect()
}), a.default.remotePowerMonitor.on("lock-screen", () => {
  v = !0, C({})
}), a.default.remotePowerMonitor.on("unlock-screen", () => {
  v = !1, C({})
})) : setInterval(y, .25 * f.IDLE_DURATION));

function C(e) {
  let {
    timestamp: t,
    type: n
  } = e, s = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!s || !(t <= c)) && (c = s ? t : Date.now(), __OVERLAY__ ? i.default.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: c
  }) : y(), !1)
}
class T extends s.default.Store {
  isIdle() {
    return g
  }
  isAFK() {
    return m
  }
  getIdleSince() {
    return g ? c : null
  }
}
T.displayName = "IdleStore";
var S = new T(i.default, {
  IDLE: function(e) {
    g = e.idle
  },
  AFK: function(e) {
    m = e.afk
  },
  SPEAKING: function(e) {
    let {
      userId: t,
      speakingFlags: n
    } = e;
    return n !== _.SpeakingFlags.NONE && t === l.default.getId() && C({}), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    return E = t === f.AppStates.BACKGROUND, c = Date.now(), y(), !1
  },
  OVERLAY_SET_NOT_IDLE: C,
  CHANNEL_SELECT: C,
  VOICE_CHANNEL_SELECT: C,
  WINDOW_FOCUS: C,
  OVERLAY_INITIALIZE: C,
  OVERLAY_SET_INPUT_LOCKED: C,
  USER_SETTINGS_PROTO_UPDATE: C
})