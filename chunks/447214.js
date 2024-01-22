"use strict";
n.r(t), n.d(t, {
  ConnectionState: function() {
    return i
  },
  default: function() {
    return s
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("424973"), n("860677");
var i, s, r, a = n("627445"),
  o = n.n(a),
  l = n("181905"),
  u = n("981980"),
  d = n("102053"),
  c = n("432710"),
  f = n("446674"),
  _ = n("872717"),
  h = n("913144"),
  g = n("288206"),
  m = n("605250"),
  E = n("155084"),
  p = n("410912"),
  v = n("313915"),
  S = n("599110"),
  T = n("922932"),
  I = n("718517"),
  C = n("773336"),
  A = n("286235"),
  y = n("265912"),
  N = n("799600"),
  R = n("705215"),
  O = n("342797"),
  D = n("340115"),
  P = n("289362"),
  b = n("571420"),
  L = n("797785"),
  M = n("49111");
let U = new m.default("GatewaySocket"),
  k = new R.default;

function w() {}(r = i || (i = {})).CLOSED = "CLOSED", r.WILL_RECONNECT = "WILL_RECONNECT", r.CONNECTING = "CONNECTING", r.IDENTIFYING = "IDENTIFYING", r.RESUMING = "RESUMING", r.SESSION_ESTABLISHED = "SESSION_ESTABLISHED";
let V = 30 * I.default.Millis.SECOND,
  G = 3 * I.default.Millis.MINUTE,
  F = 1 * I.default.Millis.MINUTE;

function x(e) {
  return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
}
let B = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
s = class extends D.default {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    U.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
  }
  hasQueuedDispatches() {
    return this.queuedDispatches.length > 0
  }
  processFirstQueuedDispatch(e) {
    if (!this.hasQueuedDispatches()) return !1;
    for (; this.queuedDispatches.length > 0 && e.has(this.queuedDispatches[0].type);) {
      let {
        data: e,
        type: t,
        compressionAnalytics: n
      } = this.queuedDispatches.shift();
      this._handleDispatchWithoutQueueing(e, t, n)
    }
    return !0
  }
  processDispatchQueue() {
    if (this.isDeferringDispatches = !1, this.hasQueuedDispatches()) {
      for (let {
          data: e,
          type: t,
          compressionAnalytics: n
        }
        of this.queuedDispatches) this._handleDispatchWithoutQueueing(e, t, n);
      this.queuedDispatches.length = 0
    }
  }
  clearDispatchQueue() {
    this.isDeferringDispatches = !1, this.queuedDispatches.length = 0
  }
  addAnalytics(e) {
    this.analytics = {
      ...this.analytics,
      ...e
    }
  }
  setResumeUrl(e) {
    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && U.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
  }
  _connect() {
    var e, t;
    let n;
    if (!this.willReconnect()) {
      U.verbose("Skipping _connect because willReconnect is false");
      return
    }
    if (b.getIsPaused()) {
      U.info("Skipping _connect because socket is paused");
      return
    }
    this.connectionState = "CONNECTING", this.nextReconnectIsImmediate = !1;
    let i = this.compressionHandler.getAlgorithm(),
      s = k.getName(),
      r = this._getGatewayUrl(),
      a = window.GLOBAL_ENV.API_VERSION;
    d.default.mark("\uD83C\uDF10", "Socket._connect"), U.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(s, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != i ? i : "none")), null !== this.webSocket && (U.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
    }, V);
    let o = new URL(r);
    o.searchParams.append("encoding", s), o.searchParams.append("v", a.toString()), null != i && o.searchParams.append("compress", i);
    ! function(e) {
      let t, {
          gatewayURL: n,
          newCallback: i,
          onOpen: s,
          onMessage: r,
          onError: a,
          onClose: o
        } = e,
        l = window._ws,
        u = !1,
        d = !1,
        c = null,
        f = null;
      if (window._ws = null, null != l) {
        if (t = l.ws, l.state.gateway !== n) U.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
        else {
          var _;
          let e = {
            ...l.state
          };
          null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
            ...e,
            data: e.data.substring(0, 100)
          } : e)), U.log("[FAST CONNECT] successfully took over websocket, state:", {
            ...e,
            messages: null === (_ = e.messages) || void 0 === _ ? void 0 : _.length
          }), u = l.state.open, d = l.state.identify, c = l.state.messages, f = l.state.clientState
        }
      }
      null == t && ((t = (0, L.default)(n)).binaryType = "arraybuffer"), i(t), u && s(d, f), null != c && c.forEach(r), t.onopen = () => s(d, f), t.onmessage = r, t.onclose = o, t.onerror = a
    }({
      gatewayURL: o.toString(),
      newCallback: e => {
        this.webSocket = e, this.compressionHandler.bindWebSocket(e)
      },
      onOpen: (e, t) => {
        d.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
        let n = Date.now() - this.connectionStartTime;
        U.info("[CONNECTED] ".concat(o.toString(), " in ").concat(n, " ms")), this.isFastConnect = e, this.lastIdentifyClientState = t, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
      },
      onMessage: (e = this.compressionHandler, t = (e, t) => {
        let n = Date.now(),
          {
            op: i,
            s: s,
            t: r,
            d: a
          } = k.unpack(e);
        i !== D.Opcode.DISPATCH && d.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(D.Opcode[i]));
        let o = Date.now() - n;
        switch ("READY" === r ? p.default.parseReady.set(n, o) : "READY_SUPPLEMENTAL" === r ? p.default.parseReadySupplemental.set(n, o) : o > 10 && d.default.mark("\uD83C\uDF10", "Parse " + r, o), null != s && (this.seq = s), i) {
          case D.Opcode.HELLO:
            this._clearHelloTimeout(), this._handleHello(a);
            break;
          case D.Opcode.RECONNECT:
            this._handleReconnect();
            break;
          case D.Opcode.INVALID_SESSION:
            this._handleInvalidSession(a);
            break;
          case D.Opcode.HEARTBEAT:
            this._sendHeartbeat();
            break;
          case D.Opcode.HEARTBEAT_ACK:
            this._handleHeartbeatAck(a);
            break;
          case D.Opcode.DISPATCH:
            this._handleDispatch(a, r, "READY" === r ? {
              compressed_byte_size: t,
              uncompressed_byte_size: x(e),
              compression_algorithm: this.compressionHandler.getAlgorithm(),
              packing_algorithm: k.getName(),
              unpack_duration_ms: o
            } : null);
            break;
          default:
            U.info("Unhandled op ".concat(i))
        }
      }, n = 0, e.dataReady(e => {
        try {
          return t(e, n)
        } finally {
          n = 0
        }
      }), t => {
        let i = t.data;
        null != t.raw_length ? n += t.raw_length : n += x(i), e.feed(i)
      }),
      onError: () => {
        this.setResumeUrl(null), T.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
      },
      onClose: e => {
        let {
          wasClean: t,
          code: n,
          reason: i
        } = e;
        return this._handleClose(t, n, i)
      }
    })
  }
  _handleHello(e) {
    let t = this.heartbeatInterval = e.heartbeat_interval,
      n = Date.now() - this.connectionStartTime;
    U.verbose("[HELLO] via ".concat((0, O.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    U.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = "WILL_RECONNECT", this._connect()
  }
  _handleInvalidSession(e) {
    U.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let i = performance.now();
    if ("RESUMING" === this.connectionState) {
      let e = i - this.resumeAnalytics.lastUpdateTime;
      0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = i, this.resumeAnalytics.numEvents += 1, f.default.Emitter.pause(150)
    }
    this.isDeferringDispatches ? this.queuedDispatches.push({
      data: e,
      type: t,
      compressionAnalytics: n
    }) : this._handleDispatchWithoutQueueing(e, t, n), "RESUMING" === this.connectionState && (this.resumeAnalytics.dispatchTime += performance.now() - i)
  }
  _handleDispatchWithoutQueueing(e, t, n) {
    if ("READY" === t) return this._handleReady(e, n);
    if ("READY_SUPPLEMENTAL" === t) {
      f.default.Emitter.resume();
      let e = Date.now() - this.connectionStartTime;
      U.info("[READY_SUPPLEMENTAL] took ".concat(e, "ms")), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
    } else if ("RESUMED" === t) {
      f.default.Emitter.resume();
      let t = Date.now() - this.connectionStartTime;
      U.info("[RESUMED] took ".concat(t, "ms, replayed ").concat(this.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq)), U.verbose((0, O.getConnectionPath)(e)), (0, O.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, O.createResumeAnalytics)(), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
    }
    return this._handleGenericDispatch(e, t)
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : B
  }
  _handleReady(e, t) {
    let n = Date.now();
    f.default.Emitter.resume();
    let i = Date.now() - this.connectionStartTime,
      s = e.session_id;
    this.sessionId = s;
    let r = (0, O.getConnectionPath)(e);
    d.default.setServerTrace(r), U.info("[READY] took ".concat(i, "ms, as ").concat(s)), U.verbose("".concat(r)), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0;
    let a = (0, O.getReadyPayloadByteSizeAnalytics)(e);
    this._handleGenericDispatch(e, "READY"), (0, O.logReadyPayloadReceived)(this, e, n, t, a), this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0, this.setResumeUrl(e.resume_gateway_url)
  }
  _handleGenericDispatch(e, t) {
    v.default.isLoggingGatewayEvents && U.verbose("<~", t, e);
    try {
      this.emit("dispatch", t, e)
    } catch (e) {
      this.resetSocketOnError(e, t)
    }
  }
  _handleHeartbeatAck(e) {
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, U.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = "WILL_RECONNECT";
    let e = this.gatewayBackoff.fail(() => this._connect());
    U.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || !1, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), 4004 === t) return this.connectionState = "CLOSED", U.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = "WILL_RECONNECT", this.nextReconnectIsImmediate) U.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
    else {
      let i = this.gatewayBackoff.fail(() => this._connect());
      U.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, C.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && _.default.get({
      url: M.Endpoints.ME,
      headers: {
        authorization: this.token
      }
    }).then(e => {
      let {
        status: t
      } = e;
      S.default.track(M.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = "CLOSED", U.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), S.default.track(M.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }))
  }
  _reset(e, t, n) {
    this.sessionId = null, this.seq = 0, U.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
      wasClean: e,
      code: t,
      reason: n
    })
  }
  _startHeartbeater() {
    let {
      heartbeatInterval: e
    } = this;
    o(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
    let t = () => {
      this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
    };
    this.initialHeartbeatTimeout = setTimeout(() => {
      this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(t, e), t()
    }, Math.floor(Math.random() * e))
  }
  _stopHeartbeater() {
    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
  }
  _clearHelloTimeout() {
    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
  }
  _cleanup(e) {
    f.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = w, t.onmessage = w, t.onerror = w, t.onclose = w, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new N.default(k)
  }
  _doResume() {
    var e;
    this.connectionState = "RESUMING", this.resumeAnalytics = (0, O.createResumeAnalytics)(Date.now() - this.connectionStartTime), U.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(D.Opcode.RESUME, {
      token: this.token,
      session_id: this.sessionId,
      seq: this.seq
    }, !1)
  }
  async _doIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) {
      this._handleClose(!0, 4004, "No connection info provided");
      return
    }
    this.connectionState = "IDENTIFYING";
    let t = Date.now();
    this.identifyStartTime = t;
    let n = await g.default.getClientState();
    if ("IDENTIFYING" !== this.connectionState || this.identifyStartTime !== t) {
      U.warn("Skipping identify because connectionState or identifyStartTime has changed");
      return
    }
    let {
      token: i,
      properties: s = {},
      presence: r
    } = e;
    this.token = i, U.verbose("[IDENTIFY]");
    let a = {
        token: i,
        capabilities: y.default,
        properties: s,
        presence: r,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: (0, P.toGatewayClientState)(n)
      },
      o = JSON.stringify(a);
    this.identifyUncompressedByteSize = o.length, this.identifyCompressedByteSize = l.deflate(o).length, this.lastIdentifyClientState = a.client_state, this.identifyCount += 1, this.send(D.Opcode.IDENTIFY, a, !1)
  }
  _doFastConnectIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) {
      this._handleClose(!0, 4004, "No connection info provided");
      return
    }
    let {
      token: t
    } = e;
    this.token = t, this.connectionState = "IDENTIFYING", this.identifyStartTime = Date.now(), this.identifyCount += 1, U.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
  }
  _doResumeOrIdentify() {
    let e = Date.now(),
      t = null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= G);
    t ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
  }
  _updateLastHeartbeatAckTime() {
    this.lastHeartbeatAckTime = Date.now()
  }
  _sendHeartbeat() {
    this.send(D.Opcode.HEARTBEAT, this.seq, !1)
  }
  getLogger() {
    return U
  }
  willReconnect() {
    return "WILL_RECONNECT" === this.connectionState
  }
  isClosed() {
    return "CLOSED" === this.connectionState
  }
  isSessionEstablished() {
    return "SESSION_ESTABLISHED" === this.connectionState || "RESUMING" === this.connectionState
  }
  isConnected() {
    return "IDENTIFYING" === this.connectionState || "RESUMING" === this.connectionState || "SESSION_ESTABLISHED" === this.connectionState
  }
  connect() {
    return this.isClosed() ? (U.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = "WILL_RECONNECT", this._connect(), !0) : (U.error("Cannot start a new connection, connection state is not closed"), !1)
  }
  getIdentifyInitialGuildId() {
    var e;
    return null === (e = this.lastIdentifyClientState) || void 0 === e ? void 0 : e.initial_guild_id
  }
  resetSocketOnError(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      sentry: !0,
      immediate: !1
    };
    U.error("resetSocketOnError", e.stack);
    let i = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
    E.default.increment({
      name: c.MetricEvents.SOCKET_CRASHED,
      tags: ["action:".concat(t)]
    }, !0), n.sentry = n.sentry && !i, n.immediate = n.immediate || i, n.sentry && A.default.captureException(e, {
      tags: {
        socketCrashedAction: t
      }
    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.clearDispatchQueue(), this.connectionState = "WILL_RECONNECT", this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && n.immediate ? (U.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, h.default.dispatch({
      type: "CLEAR_GUILD_CACHE"
    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * F)
  }
  close() {
    if (this.isClosed()) {
      U.verbose("close() called, but socket is already closed.");
      return
    }
    U.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = "CLOSED", setImmediate(() => {
      this._reset(!0, 1e3, "Disconnect requested by user")
    })
  }
  networkStateChange(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    this.expeditedHeartbeat(e, t, n, !1)
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (!this.isClosed()) {
      if (this.isConnected()) {
        U.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
          this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
        }, e);
        return
      }
      n ? this.resetBackoff(t, i) : U.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
    }
  }
  resetBackoff() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    U.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && "SESSION_ESTABLISHED" !== this.connectionState && this._handleClose(!0, 0, e)
  }
  constructor() {
    super(), this.dispatchExceptionBackoff = new u.default(1e3, F), this.dispatchSuccessTimer = 0, this.resumeAnalytics = (0, O.createResumeAnalytics)(), this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.isDeferringDispatches = !0, this.queuedDispatches = [], this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
      v.default.isLoggingGatewayEvents && U.verbose("~>", e, t);
      let i = k.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket ? this.webSocket.send(i) : U.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
      } catch (e) {} else U.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }, this.gatewayBackoff = new u.default(1e3, 6e4), this.connectionState_ = "CLOSED", this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new N.default(k), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}