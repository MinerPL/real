"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("424973"), s("222007");
var a = s("446674"),
  n = s("872717"),
  l = s("913144"),
  i = s("605250"),
  r = s("271938"),
  o = s("42887"),
  d = s("985365"),
  u = s("590401"),
  c = s("800762"),
  S = s("456931"),
  E = s("868391"),
  f = s("414074"),
  T = s("84908"),
  m = s("49111"),
  _ = s("353927");
new i.default("RTCSpeedTestStore");
let g = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: T.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: T.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: T.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: T.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: T.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: T.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: T.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: T.SpeedTestDirections.SERVER_TO_CLIENT
  }],
  h = g.length,
  I = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: T.SpeedTestLifecycles.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function N(e, t, s) {
  e === m.RTCConnectionStates.RTC_CONNECTED ? I.connected = !0 : (e === m.RTCConnectionStates.DISCONNECTED || e === m.RTCConnectionStates.RTC_DISCONNECTED) && (I.lifecycle === T.SpeedTestLifecycles.TESTING && (I.failed = !0, D(), L()), I.connected = !1)
}

function p() {
  I.lifecycle === T.SpeedTestLifecycles.TESTING && (I.failed = !0, D(), L())
}

function C() {
  if (I.lifecycle === T.SpeedTestLifecycles.CONNECTING) {
    var e;
    M(T.SpeedTestLifecycles.PINGING), null === (e = I.connection) || void 0 === e || e.setPingInterval(500), x()
  }
}

function A(e, t) {
  if (null != I.currentTest) !0 !== I.failed && (I.currentTest = I.currentTest + 1, I.results.push({
    payload: e,
    summary: t
  }), I.currentTest === h ? (M(T.SpeedTestLifecycles.UPLOADING), L()) : v())
}

function O(e) {
  void 0 !== e && I.pings.length < 10 && (I.pings.push(e), I.pings.length < 10 && M(T.SpeedTestLifecycles.PINGING), x())
}

function x() {
  if (I.lifecycle === T.SpeedTestLifecycles.PINGING && 10 === I.pings.length) {
    var e;
    null === (e = I.connection) || void 0 === e || e.setPingInterval(5e3), I.currentTest = 0, v()
  }
}

function R() {
  if (null == I.connection) return !1;
  I.connection.destroy(), I.connection = null
}

function M(e) {
  I.lifecycle = e, l.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function v() {
  var e, t;
  null !== I.currentTest && (g[I.currentTest].direction === T.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = I.connection) || void 0 === e || e.startClientToServerSpeedTest(g[I.currentTest]) : g[I.currentTest].direction === T.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = I.connection) || void 0 === t || t.startServerToClientSpeedTest(g[I.currentTest])), M(T.SpeedTestLifecycles.TESTING))
}

function D() {
  if (I.lifecycle === T.SpeedTestLifecycles.TESTING && null != I.currentTest) {
    var e, t;
    let s = g[I.currentTest].direction;
    s === T.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = I.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = I.connection) || void 0 === t || t.stopServerToClientSpeedTest()
  }
}
async function L() {
  var e, t;
  let s = new Date().toISOString(),
    a = {
      date: s,
      endpoint: I.endpoint,
      networkOverhead: null === (e = I.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: d.default.getType(),
      networkEffectiveConnectionSpeed: d.default.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (t = d.default.getServiceProvider()) && void 0 !== t ? t : "unknown",
      notes: I.notes
    },
    l = {
      info: a,
      ping: (0, f.speedTestPingInfo)(I.pings),
      tests: []
    },
    i = {
      info: a,
      pings: I.pings,
      tests: []
    };
  for (let e = 0; e < g.length; e++) {
    let t = {
        params: null,
        results: null
      },
      s = {
        params: null,
        results: null
      };
    t.params = g[e], s.params = g[e], e < I.results.length && (t.results = I.results[e].summary, s.results = I.results[e].payload), l.tests.push(t), i.tests.push(s)
  }
  await Promise.all([n.default.post({
    url: m.Endpoints.DEBUG_LOG(m.DebugLogCategory.SPEED_TEST, "speed_test_summary_".concat(s, ".json")),
    body: JSON.stringify(l, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), n.default.post({
    url: m.Endpoints.DEBUG_LOG(m.DebugLogCategory.SPEED_TEST, "speed_test_results_".concat(s, ".json")),
    body: JSON.stringify(i, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), M(T.SpeedTestLifecycles.COMPLETED), R(), S.default.stopSpeedTest(), I.running = !1, I.notes = ""
}
class P extends a.default.Store {
  initialize() {
    this.waitFor(r.default, o.default, u.default, c.default)
  }
  getAvailable() {
    return !c.default.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return I.running
  }
  getEndpoint() {
    return I.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = I.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return I.lifecycle
  }
  getFailed() {
    return I.failed
  }
  getCurrentTest() {
    return I.currentTest
  }
  getTestCases() {
    return g
  }
  getTestResults() {
    return I.results
  }
  getPings() {
    return I.pings
  }
  getNotes() {
    return I.notes
  }
  setNotes(e) {
    I.notes = e
  }
  isSupported() {
    return o.default.supports(_.Features.SPEED_TEST)
  }
}
P.displayName = "RTCSpeedTestStore";
var j = new P(l.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !I.running && (M(T.SpeedTestLifecycles.AWAITING_ENDPOINT), I.running = !0, I.currentTest = null, I.results = [], I.failed = !1, I.pings = [], I.connected = !1, R())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    I.running = !1, R(), I.lifecycle !== T.SpeedTestLifecycles.COMPLETED && M(T.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!I.running) {
      S.default.stopSpeedTest();
      return
    }
    I.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    R(), I.running = !1, I.lifecycle !== T.SpeedTestLifecycles.COMPLETED && M(T.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    R(), I.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, I.connection = new E.default({
      userId: r.default.getId(),
      sessionId: r.default.getSessionId(),
      rtcServerId: I.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), I.connection.on("state", N), I.connection.on("resuming", p), I.connection.on("ready", C), I.connection.on("speed-test-completed", A), I.connection.on("ping", O), I.connection.on("ping-timeout", O), I.connection.connect(), M(T.SpeedTestLifecycles.CONNECTING)
  }
})