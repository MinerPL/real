"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("860677");
var i, s = n("627445"),
  r = n.n(s),
  a = n("181905"),
  o = n("981980"),
  l = n("102053"),
  u = n("432710"),
  d = n("446674"),
  c = n("872717"),
  f = n("913144"),
  _ = n("288206"),
  h = n("605250"),
  g = n("155084"),
  m = n("410912"),
  E = n("313915"),
  p = n("599110"),
  v = n("922932"),
  S = n("718517"),
  T = n("773336"),
  I = n("286235"),
  C = n("41642"),
  A = n("265912"),
  y = n("799600"),
  N = n("705215"),
  R = n("342797"),
  O = n("123265"),
  D = n("340115"),
  P = n("289362"),
  b = n("571420"),
  L = n("797785"),
  M = n("49111");
let U = new h.default("GatewaySocket"),
  k = new N.default;

function w() {}
let V = 30 * S.default.Millis.SECOND,
  G = 3 * S.default.Millis.MINUTE,
  F = 1 * S.default.Millis.MINUTE;

function x(e) {
  return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
}
let B = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
i = class extends D.default {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    U.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
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
    this.connectionState = C.default.CONNECTING, this.nextReconnectIsImmediate = !1;
    let i = this.compressionHandler.getAlgorithm(),
      s = k.getName(),
      r = this._getGatewayUrl(),
      a = window.GLOBAL_ENV.API_VERSION;
    l.default.mark("\uD83C\uDF10", "Socket._connect"), U.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(s, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != i ? i : "none")), null !== this.webSocket && (U.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
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
        l.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
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
        i !== D.Opcode.DISPATCH && l.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(D.Opcode[i]));
        let o = Date.now() - n;
        switch ("READY" === r ? m.default.parseReady.set(n, o) : "READY_SUPPLEMENTAL" === r ? m.default.parseReadySupplemental.set(n, o) : o > 10 && l.default.mark("\uD83C\uDF10", "Parse " + r, o), null != s && (this.seq = s), i) {
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
        this.setResumeUrl(null), v.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
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
    U.verbose("[HELLO] via ".concat((0, R.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    U.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = C.default.WILL_RECONNECT, this._connect()
  }
  _handleInvalidSession(e) {
    U.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let i = Date.now() - this.connectionStartTime;
    if ("READY" === t) {
      let t = e.session_id;
      this.sessionId = t;
      let n = (0, R.getConnectionPath)(e);
      l.default.setServerTrace(n), U.info("[READY] took ".concat(i, "ms, as ").concat(t)), U.verbose("".concat(n)), this.connectionState = C.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
    } else "READY_SUPPLEMENTAL" === t ? (U.info("[READY_SUPPLEMENTAL] took ".concat(i, "ms")), this.connectionState = C.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (U.verbose((0, R.getConnectionPath)(e)), this.connectionState = C.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
    this.dispatcher.receiveDispatch(e, t, n)
  }
  handleResumeDispatched() {
    let e = Date.now() - this.connectionStartTime;
    U.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
  }
  handleReadyDispatched() {
    this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : B
  }
  _handleHeartbeatAck(e) {
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, U.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = C.default.WILL_RECONNECT;
    let e = this.gatewayBackoff.fail(() => this._connect());
    U.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || !1, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), 4004 === t) return this.connectionState = C.default.CLOSED, U.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = C.default.WILL_RECONNECT, this.nextReconnectIsImmediate) U.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
    else {
      let i = this.gatewayBackoff.fail(() => this._connect());
      U.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, T.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && c.default.get({
      url: M.Endpoints.ME,
      headers: {
        authorization: this.token
      }
    }).then(e => {
      let {
        status: t
      } = e;
      p.default.track(M.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = C.default.CLOSED, U.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), p.default.track(M.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
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
    r(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
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
    d.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = w, t.onmessage = w, t.onerror = w, t.onclose = w, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new y.default(k)
  }
  _doResume() {
    var e;
    this.connectionState = C.default.RESUMING, this.dispatcher.resumeAnalytics = (0, R.createResumeAnalytics)(Date.now() - this.connectionStartTime), U.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(D.Opcode.RESUME, {
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
    this.connectionState = C.default.IDENTIFYING;
    let t = Date.now();
    this.identifyStartTime = t;
    let n = await _.default.getClientState();
    if (this.connectionState !== C.default.IDENTIFYING || this.identifyStartTime !== t) {
      U.warn("Skipping identify because connectionState or identifyStartTime has changed");
      return
    }
    let {
      token: i,
      properties: s = {},
      presence: r
    } = e;
    this.token = i, U.verbose("[IDENTIFY]");
    let o = {
        token: i,
        capabilities: A.default,
        properties: s,
        presence: r,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: (0, P.toGatewayClientState)(n)
      },
      l = JSON.stringify(o);
    this.identifyUncompressedByteSize = l.length, this.identifyCompressedByteSize = a.deflate(l).length, this.lastIdentifyClientState = o.client_state, this.identifyCount += 1, this.send(D.Opcode.IDENTIFY, o, !1)
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
    this.token = t, this.connectionState = C.default.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, U.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
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
    return this.connectionState === C.default.WILL_RECONNECT
  }
  isClosed() {
    return this.connectionState === C.default.CLOSED
  }
  isSessionEstablished() {
    return this.connectionState === C.default.SESSION_ESTABLISHED || this.connectionState === C.default.RESUMING
  }
  isConnected() {
    return this.connectionState === C.default.IDENTIFYING || this.connectionState === C.default.RESUMING || this.connectionState === C.default.SESSION_ESTABLISHED
  }
  connect() {
    return this.isClosed() ? (U.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = C.default.WILL_RECONNECT, this._connect(), !0) : (U.error("Cannot start a new connection, connection state is not closed"), !1)
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
    g.default.increment({
      name: u.MetricEvents.SOCKET_CRASHED,
      tags: ["action:".concat(t)]
    }, !0), n.sentry = n.sentry && !i, n.immediate = n.immediate || i, n.sentry && I.default.captureException(e, {
      tags: {
        socketCrashedAction: t
      }
    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = C.default.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && n.immediate ? (U.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, f.default.dispatch({
      type: "CLEAR_GUILD_CACHE"
    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * F)
  }
  close() {
    if (this.isClosed()) {
      U.verbose("close() called, but socket is already closed.");
      return
    }
    U.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = C.default.CLOSED, setImmediate(() => {
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
    U.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== C.default.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
  }
  constructor() {
    super(), this.dispatchExceptionBackoff = new o.default(1e3, F), this.dispatchSuccessTimer = 0, this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
      E.default.isLoggingGatewayEvents && U.verbose("~>", e, t);
      let i = k.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket ? this.webSocket.send(i) : U.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
      } catch (e) {} else U.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }, this.dispatcher = new O.default(this), this.gatewayBackoff = new o.default(1e3, 6e4), this.connectionState_ = C.default.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new y.default(k), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}