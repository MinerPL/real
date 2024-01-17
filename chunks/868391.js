"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("70102"), s("781738");
var a, n, l = s("552442"),
  i = s.n(l),
  r = s("44170"),
  o = s("746379"),
  d = s.n(o),
  u = s("748820"),
  c = s("981980"),
  S = s("773364"),
  E = s("417040"),
  f = s("605250"),
  T = s("42887"),
  m = s("718517"),
  _ = s("773336"),
  g = s("414074"),
  h = s("84908"),
  I = s("49111"),
  N = s("353927");
let p = /^https/.test((a = "https:", "https:")) ? "wss:" : "ws:";
n = class extends r.EventEmitter {
  connect() {
    this._backoff.cancel();
    let e = this._socket = new E.default(this._endpoint);
    e.on(E.SocketEvent.Connecting, this._handleConnecting.bind(this, e)), e.on(E.SocketEvent.Connect, this._handleConnect.bind(this, e)), e.on(E.SocketEvent.Disconnect, this._handleDisconnect.bind(this, e)), e.on(E.SocketEvent.Resuming, this._handleResuming.bind(this, e)), e.on(E.SocketEvent.Ready, this._handleReady.bind(this, e)), e.on(E.SocketEvent.Speaking, this._handleSpeaking.bind(this, e)), e.on(E.SocketEvent.Video, this._handleVideo.bind(this, e)), e.on(E.SocketEvent.Ping, this._handleControlPing.bind(this)), e.on(E.SocketEvent.ClientDisconnect, this._handleClientDisconnect.bind(this)), e.on(E.SocketEvent.Codecs, this._handleCodecs.bind(this)), e.on(E.SocketEvent.MediaSessionId, this._handleMediaSessionId.bind(this)), e.on(E.SocketEvent.MediaSinkWants, this._handleMediaSinkWants.bind(this)), e.on(E.SocketEvent.VoiceBackendVersion, this._handleCodeVersion.bind(this)), e.on(E.SocketEvent.KeyframeInterval, this._handleKeyframeInterval.bind(this)), e.on(E.SocketEvent.ChannelOptionsUpdateRtcLog, this._handleUpdateRtcLog.bind(this)), e.on(E.SocketEvent.SpeedTest, this._handleSpeedTest.bind(this)), e.setHeartbeatIntervalModifier(2), e.connect()
  }
  destroy() {
    if (this._backoff.cancel(), this._cleanupSocket(), null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.removeAllListeners(), this._destroyed = !0
  }
  _cleanupSocket() {
    let e = this._socket;
    null != e && (e.close(), e.removeAllListeners(), this._socket = null)
  }
  setState(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.emit("state", e, {
      hostname: this.hostname,
      channelId: i(this.rtcServerId).prev().toString()
    }, t)
  }
  startClientToServerSpeedTest(e) {
    this.state === I.RTCConnectionStates.RTC_CONNECTED && (this._speedTestParams = e, this._speedTestDirection = h.SpeedTestDirections.CLIENT_TO_SERVER, this._setSpeedTestState(h.SpeedTestStates.STARTING_RECEIVER), this._speedTest(h.SpeedTestOpcodes.CLIENT_TO_SERVER_START, {}))
  }
  startServerToClientSpeedTest(e) {
    let t = this._connection;
    this.state === I.RTCConnectionStates.RTC_CONNECTED && null != t && (this._speedTestParams = e, this._speedTestDirection = h.SpeedTestDirections.SERVER_TO_CLIENT, this._setSpeedTestState(h.SpeedTestStates.STARTING_RECEIVER), t.startSpeedTestReceiver(() => {
      var e, t, s;
      this._setSpeedTestState(h.SpeedTestStates.SENDING), this._speedTest(h.SpeedTestOpcodes.SERVER_TO_CLIENT_START, {
        cluster_size: null === (e = this._speedTestParams) || void 0 === e ? void 0 : e.clusterSize,
        cluster_interval_ms: null === (t = this._speedTestParams) || void 0 === t ? void 0 : t.clusterIntervalMs,
        num_clusters: null === (s = this._speedTestParams) || void 0 === s ? void 0 : s.numClusters
      })
    }, -1))
  }
  stopClientToServerSpeedTest() {
    this._speedTest(h.SpeedTestOpcodes.CLIENT_TO_SERVER_END, {}), null != this._connection && this._connection.stopSpeedTestSender()
  }
  stopServerToClientSpeedTest() {
    this._speedTest(h.SpeedTestOpcodes.SERVER_TO_CLIENT_END, {}), null != this._connection && this._connection.stopSpeedTestReceiver(() => {})
  }
  getNetworkOverhead() {
    return this._networkOverhead
  }
  setPingInterval(e) {
    null != this._connection && this._connection.setPingInterval(e)
  }
  _setSpeedTestState(e) {
    this._speedTestState = e, this.emit("speed-test-state", e)
  }
  _completeSpeedTests(e, t) {
    this._speedTestState = h.SpeedTestStates.COMPLETED, this.emit("speed-test-completed", e, t)
  }
  _speedTest(e, t) {
    let s = this._socket;
    null != s && s.speedTest(e, t)
  }
  _handleConnecting(e) {
    null != this._endpoint && this.logger.info("Connecting to RTC server ".concat(this._endpoint, ", rtc-connection-id: ").concat(this._rtcConnectionId)), this.setState(I.RTCConnectionStates.CONNECTING)
  }
  _handleConnect(e) {
    let t = this.token;
    if (null == t) throw Error("RTCConnection._handleConnect(...): Token is missing.");
    {
      this.logger.info("Connected to RTC server.");
      let s = [{
        rid: "100",
        type: N.MediaTypes.TEST,
        quality: 100
      }];
      e.identify({
        serverId: this.rtcServerId,
        userId: this.userId,
        sessionId: this.sessionId,
        token: t,
        maxSecureFramesVersion: T.default.getSupportedSecureFramesProtocolVersion(this.rtcServerId),
        video: !1,
        streamParameters: s
      }), this.setState(I.RTCConnectionStates.AUTHENTICATING)
    }
  }
  _handleDisconnect(e, t, s, a) {
    this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(s, ", reason: ").concat(a, ", state: ").concat(this.state));
    let n = "Force Close" !== a;
    if (n) {
      let e = this._backoff.fail(this.reconnect);
      this.logger.warn("Disconnect was not clean! reason=".concat(a, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
    }
    if (null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.setState(I.RTCConnectionStates.DISCONNECTED, {
      willReconnect: n
    })
  }
  _handleResuming(e) {
    this.emit("resuming")
  }
  _handleReady(e, t, s, a, n, l, r) {
    this.setState(I.RTCConnectionStates.RTC_CONNECTING), this.mediaEnginePort = s, this.mediaEngineAddress = t;
    let o = T.default.getMediaEngine(),
      d = o.speedTester({
        userId: this.userId,
        channelId: i(this.rtcServerId).prev().toString(),
        guildId: this.rtcServerId
      }, {
        ssrc: n,
        address: t,
        port: s,
        modes: a,
        experiments: [],
        streamParameters: l,
        qosEnabled: T.default.getQoS()
      });
    d.on(S.BaseSpeedTesterEvent.Connected, this._handleMediaEngineConnected.bind(this, e, d)), d.on(S.BaseSpeedTesterEvent.Error, this._handleMediaEngineError.bind(this, e, d)), d.on(S.BaseSpeedTesterEvent.ConnectionStateChange, this._handleMediaEngineConnectionStateChange.bind(this, e, d)), d.on(S.BaseSpeedTesterEvent.Ping, this._handleMediaEnginePing.bind(this, e)), d.on(S.BaseSpeedTesterEvent.PingTimeout, this._handleMediaEnginePingTimeout.bind(this, e)), this._connection = d
  }
  _handleSpeaking(e, t, s, a) {}
  _handleVideo(e, t, s, a, n) {}
  _handleControlPing(e) {}
  _handleClientDisconnect(e) {}
  _handleCodecs(e, t) {
    let s = this._connection;
    null != s && null != this.protocol ? (s.setCodecs(null != e && "" !== e ? e : N.Codecs.OPUS, "TEST"), this.emit("ready")) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
  }
  _handleSpeedTest(e, t) {
    let s = this._connection;
    if (null != s && null != e) {
      if (this._speedTestState === h.SpeedTestStates.STARTING_RECEIVER && this._speedTestDirection === h.SpeedTestDirections.CLIENT_TO_SERVER && e === h.SpeedTestOpcodes.CLIENT_TO_SERVER_START) {
        var a;
        this._setSpeedTestState(h.SpeedTestStates.SENDING), s.startSpeedTestSender((e, t) => {
          this._speedTest(h.SpeedTestOpcodes.CLIENT_TO_SERVER_END, {}), this._setSpeedTestState(h.SpeedTestStates.AWAITING_RESULTS)
        }, this._speedTestParams.clusterSize, this._speedTestParams.clusterIntervalMs, this._speedTestParams.numClusters)
      }
      if (this._speedTestState === h.SpeedTestStates.AWAITING_RESULTS && this._speedTestDirection === h.SpeedTestDirections.CLIENT_TO_SERVER && e === h.SpeedTestOpcodes.CLIENT_TO_SERVER_END) {
        let e = t.results,
          s = (0, g.speedTestSummary)(e, this._speedTestParams, null !== (a = this._networkOverhead) && void 0 !== a ? a : 0);
        this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(e, s)
      }
      this._speedTestState === h.SpeedTestStates.SENDING && this._speedTestDirection === h.SpeedTestDirections.SERVER_TO_CLIENT && e === h.SpeedTestOpcodes.SERVER_TO_CLIENT_END && (this._setSpeedTestState(h.SpeedTestStates.AWAITING_RESULTS), s.stopSpeedTestReceiver((e, t) => {
        var s;
        let a = (0, g.speedTestSummary)(t, this._speedTestParams, null !== (s = this._networkOverhead) && void 0 !== s ? s : 0);
        this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(t, a)
      }))
    }
  }
  _handleMediaSessionId(e) {}
  _handleMediaSinkWants(e) {}
  _handleCodeVersion(e, t) {}
  _handleKeyframeInterval(e) {}
  _handleUpdateRtcLog(e) {}
  _handleMediaEngineConnected(e, t, s, a) {
    if (this.logger.info("RTC connected to media server: ".concat(this.mediaEngineAddress, ":").concat(this.mediaEnginePort)), e !== this._socket) {
      this.logger.warn("Socket mismatch, disconnecting");
      return
    }
    switch (this.protocol = s, s) {
      case "udp":
        this.logger.info("Sending UDP info to RTC server.", a, []), e.once(E.SocketEvent.Encryption, (e, s) => {
          t === this._connection && (t.setEncryption(e, s), t.getNetworkOverhead(e => this._networkOverhead = e))
        }), e.selectProtocol(s, this._rtcConnectionId, a, []);
        break;
      case "webrtc":
        this.logger.info("Sending local SDP to RTC server."), e.once(E.SocketEvent.SDP, this._handleSDP.bind(this)), e.selectProtocol(s, this._rtcConnectionId, a);
        break;
      default:
        this.logger.error("Unable to determine protocol.");
        return
    }
    this._backoff.succeed()
  }
  _handleMediaEngineError(e, t, s) {
    e === this._socket && this.logger.error("Error occurred while connecting to RTC server: ".concat(s))
  }
  _handleMediaEngineConnectionStateChange(e, t, s) {
    if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(s)), e !== this._socket) return;
    let a = this.state;
    switch (s) {
      case N.ConnectionStates.DISCONNECTED:
        this.setState(I.RTCConnectionStates.RTC_DISCONNECTED);
        break;
      case N.ConnectionStates.CONNECTING:
        this.setState(I.RTCConnectionStates.RTC_CONNECTING);
        break;
      case N.ConnectionStates.CONNECTED:
        this.setState(I.RTCConnectionStates.RTC_CONNECTED);
        break;
      case N.ConnectionStates.NO_ROUTE:
        this.setState(I.RTCConnectionStates.NO_ROUTE);
        break;
      case N.ConnectionStates.ICE_CHECKING:
        this.setState(I.RTCConnectionStates.ICE_CHECKING);
        break;
      case N.ConnectionStates.DTLS_CONNECTING:
        this.setState(I.RTCConnectionStates.DTLS_CONNECTING)
    }
    a === I.RTCConnectionStates.RTC_CONNECTING && this.state === I.RTCConnectionStates.RTC_DISCONNECTED ? this.reconnect() : this.state === I.RTCConnectionStates.NO_ROUTE && this._backoff.fail(this.reconnect)
  }
  _handleMediaEnginePing(e, t) {
    this.emit("ping", t)
  }
  _handleMediaEnginePingTimeout(e, t, s) {
    this.emit("ping-timeout", s)
  }
  _handleSDP(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
  }
  constructor({
    userId: e,
    sessionId: t,
    rtcServerId: s,
    endpoint: a,
    token: n
  }) {
    super(), this.reconnect = () => {
      let e = this._socket;
      null != e && (e.close(), e.connect())
    }, this._rtcConnectionId = (0, u.v4)(), this.logger = new f.default("RTCSpeedTestRTCConnection(".concat(s, ")")), this.userId = e, this.sessionId = t, this.rtcServerId = s, this.mediaEnginePort = null, this.mediaEngineAddress = null, this._speedTestState = null, this._speedTestDirection = null, this._speedTestParams = null, this.state = I.RTCConnectionStates.AWAITING_ENDPOINT, this._socket = null, this.token = n, this._destroyed = !1, this._connection = null, this._backoff = new c.default(1 * m.default.Millis.SECOND, 10 * m.default.Millis.SECOND), a = "".concat(p, "//").concat(a), (0, _.isAndroid)() && (a = (a = a.replace(".gg", ".media")).replace(":80", ":443"));
    let {
      hostname: l,
      port: i
    } = d.parse(a), r = null != i ? parseInt(i) : NaN;
    null != l && (80 === r || 443 === r) && (a = "".concat(p, "//").concat(l)), this._endpoint = a + "/", this.hostname = l, this._networkOverhead = null
  }
}