"use strict";
n.r(t), n.d(t, {
  initSessionHeartbeatScheduler: function() {
    return m
  }
}), n("70102");
var a = n("976255"),
  s = n("95410"),
  i = n("913144"),
  l = n("945956"),
  r = n("599110"),
  o = n("718517"),
  u = n("872507"),
  d = n("286235"),
  c = n("49111");
let E = "LATEST_HEARTBEAST_EVENT_TIMESTAMP",
  f = null,
  _ = null,
  h = null,
  C = !1;
async function T() {
  if (C) return;
  C = !0, (0, a.setSessionExtendingEnabled)(!0), d.default.addBreadcrumb({
    message: "Start Analytics Heartbeat"
  });
  let e = await s.default.getAfterRefresh(E).then(a.timestampOrZero);
  if (!C) return;
  let t = Date.now(),
    n = 15 * o.default.Millis.MINUTE + e - t;
  n > o.default.Millis.HOUR && d.default.addBreadcrumb({
    message: "Received invalid Date.now() when generating a heartbeat. Date.now() = ".concat(t, ", timeUntilNextHeartbeat = ").concat(n, ", latestHeartbeatEventTimestamp = ").concat(e)
  }), e > t && (n = 0), d.default.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(n / 1e3, " seconds. Scheduling Heartbeat")
  }), I(!1), _ = setTimeout(() => {
    S(), f = setInterval(() => {
      S()
    }, 15 * o.default.Millis.MINUTE)
  }, Math.max(n, 0))
}

function I() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  null != _ && (clearTimeout(_), _ = null), null != f && (clearInterval(f), f = null), null != h && e && (clearTimeout(h), h = null)
}
async function S() {
  let e = Date.now(),
    t = await (0, a.getSession)(),
    n = Date.now();
  if (null == t) {
    d.default.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
    return
  }
  if (!C) {
    d.default.captureException(Error("Heartbeat scheduler not started when tracking session heartbeat.")), I();
    return
  }
  d.default.addBreadcrumb({
    message: "Tracking Heartbeat",
    data: {
      initialized: t.initialized
    }
  });
  let i = {
      client_heartbeat_initialization_timestamp: t.initialized,
      client_heartbeat_version: 17
    },
    l = u.default.getMemoryUsageElectronRenderer();
  null != l && (i.client_heartbeat_renderer_memory = l);
  let o = u.default.getMemoryUsageElectronRendererUsedHeapSize();
  null != o && (i.client_heartbeat_renderer_memory_used_heap = o), r.default.track(c.AnalyticEvents.CLIENT_HEARTBEAT, i), s.default.set(E, Date.now().toString())
}
let N = null,
  A = !0;

function p() {
  if (A || null != N && N !== c.RTCConnectionStates.DISCONNECTED && N !== c.RTCConnectionStates.RTC_DISCONNECTED) try {
    T()
  } catch (e) {
    d.default.captureException(e)
  } else !C || (C = !1, d.default.addBreadcrumb({
    message: "Stopping Analytics Heartbeat"
  }), (0, a.setSessionExtendingEnabled)(!1), I())
}

function m() {
  d.default.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), l.default.addChangeListener(R), i.default.subscribe("WINDOW_FOCUS", O), i.default.subscribe("APP_STATE_UPDATE", L), i.default.subscribe("LOGIN_SUCCESS", g), p()
}

function g() {
  S()
}

function R() {
  let e = l.default.getState();
  N !== e && (N = e, p())
}

function O(e) {
  let {
    focused: t
  } = e;
  A = t, p()
}

function L(e) {
  let {
    state: t
  } = e;
  A = t === c.AppStates.ACTIVE, p()
}