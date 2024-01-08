            "use strict";
            n.r(t), n.d(t, {
                ConnectionState: function() {
                    return i
                },
                default: function() {
                    return a
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("424973"), n("860677");
            var i, a, l, s = n("627445"),
                r = n.n(s),
                u = n("181905"),
                o = n("981980"),
                d = n("102053"),
                c = n("432710"),
                _ = n("446674"),
                E = n("872717"),
                f = n("913144"),
                h = n("288206"),
                p = n("605250"),
                T = n("155084"),
                C = n("410912"),
                m = n("313915"),
                S = n("599110"),
                I = n("922932"),
                g = n("773336"),
                A = n("286235"),
                N = n("265912"),
                O = n("799600"),
                R = n("705215"),
                y = n("342797"),
                v = n("340115"),
                M = n("289362"),
                D = n("571420"),
                L = n("797785"),
                U = n("49111");
            let P = new p.default("GatewaySocket"),
                b = new R.default;

            function G() {}(l = i || (i = {})).CLOSED = "CLOSED", l.WILL_RECONNECT = "WILL_RECONNECT", l.CONNECTING = "CONNECTING", l.IDENTIFYING = "IDENTIFYING", l.RESUMING = "RESUMING", l.SESSION_ESTABLISHED = "SESSION_ESTABLISHED";

            function k(e) {
                return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
            }
            let F = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
            a = class extends v.default {
                get connectionState() {
                    return this.connectionState_
                }
                set connectionState(e) {
                    P.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
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
                    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && P.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
                }
                _connect() {
                    var e, t;
                    let n;
                    if (!this.willReconnect()) {
                        P.verbose("Skipping _connect because willReconnect is false");
                        return
                    }
                    if (D.getIsPaused()) {
                        P.info("Skipping _connect because socket is paused");
                        return
                    }
                    this.connectionState = "CONNECTING", this.nextReconnectIsImmediate = !1;
                    let i = this.compressionHandler.getAlgorithm(),
                        a = b.getName(),
                        l = this._getGatewayUrl(),
                        s = window.GLOBAL_ENV.API_VERSION;
                    d.default.mark("\uD83C\uDF10", "Socket._connect"), P.info("[CONNECT] ".concat(l, ", ") + "encoding: ".concat(a, ", ") + "version: ".concat(s, ", ") + "compression: ".concat(null != i ? i : "none")), null !== this.webSocket && (P.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                        let e = Date.now() - this.connectionStartTime;
                        this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
                    }, 3e4);
                    let r = new URL(l);
                    r.searchParams.append("encoding", a), r.searchParams.append("v", s.toString()), null != i && r.searchParams.append("compress", i);
                    ! function(e) {
                        let t, {
                                gatewayURL: n,
                                newCallback: i,
                                onOpen: a,
                                onMessage: l,
                                onError: s,
                                onClose: r
                            } = e,
                            u = window._ws,
                            o = !1,
                            d = !1,
                            c = null,
                            _ = null;
                        if (window._ws = null, null != u) {
                            if (t = u.ws, u.state.gateway !== n) P.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(u.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
                            else {
                                var E;
                                let e = {
                                    ...u.state
                                };
                                null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                                    ...e,
                                    data: e.data.substring(0, 100)
                                } : e)), P.log("[FAST CONNECT] successfully took over websocket, state:", {
                                    ...e,
                                    messages: null === (E = e.messages) || void 0 === E ? void 0 : E.length
                                }), o = u.state.open, d = u.state.identify, c = u.state.messages, _ = u.state.clientState
                            }
                        }
                        null == t && ((t = (0, L.default)(n)).binaryType = "arraybuffer"), i(t), o && a(d, _), null != c && c.forEach(l), t.onopen = () => a(d, _), t.onmessage = l, t.onclose = r, t.onerror = s
                    }({
                        gatewayURL: r.toString(),
                        newCallback: e => {
                            this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                        },
                        onOpen: (e, t) => {
                            d.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                            let n = Date.now() - this.connectionStartTime;
                            P.info("[CONNECTED] ".concat(r.toString(), " in ").concat(n, " ms")), this.isFastConnect = e, this.lastIdentifyClientState = t, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                        },
                        onMessage: (e = this.compressionHandler, t = (e, t) => {
                            let n = Date.now(),
                                {
                                    op: i,
                                    s: a,
                                    t: l,
                                    d: s
                                } = b.unpack(e);
                            i !== v.Opcode.DISPATCH && d.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(v.Opcode[i]));
                            let r = Date.now() - n;
                            switch ("READY" === l ? C.default.parseReady.set(n, r) : "READY_SUPPLEMENTAL" === l ? C.default.parseReadySupplemental.set(n, r) : r > 10 && d.default.mark("\uD83C\uDF10", "Parse " + l, r), null != a && (this.seq = a), i) {
                                case v.Opcode.HELLO:
                                    this._clearHelloTimeout(), this._handleHello(s);
                                    break;
                                case v.Opcode.RECONNECT:
                                    this._handleReconnect();
                                    break;
                                case v.Opcode.INVALID_SESSION:
                                    this._handleInvalidSession(s);
                                    break;
                                case v.Opcode.HEARTBEAT:
                                    this._sendHeartbeat();
                                    break;
                                case v.Opcode.HEARTBEAT_ACK:
                                    this._handleHeartbeatAck(s);
                                    break;
                                case v.Opcode.DISPATCH:
                                    this._handleDispatch(s, l, "READY" === l ? {
                                        compressed_byte_size: t,
                                        uncompressed_byte_size: k(e),
                                        compression_algorithm: this.compressionHandler.getAlgorithm(),
                                        packing_algorithm: b.getName(),
                                        unpack_duration_ms: r
                                    } : null);
                                    break;
                                default:
                                    P.info("Unhandled op ".concat(i))
                            }
                        }, n = 0, e.dataReady(e => {
                            try {
                                return t(e, n)
                            } finally {
                                n = 0
                            }
                        }), t => {
                            let i = t.data;
                            null != t.raw_length ? n += t.raw_length : n += k(i), e.feed(i)
                        }),
                        onError: () => {
                            this.setResumeUrl(null), I.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
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
                    P.verbose("[HELLO] via ".concat((0, y.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
                }
                _handleReconnect() {
                    P.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = "WILL_RECONNECT", this._connect()
                }
                _handleInvalidSession(e) {
                    P.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
                }
                _handleDispatch(e, t, n) {
                    let i = performance.now();
                    if ("RESUMING" === this.connectionState) {
                        let e = i - this.resumeAnalytics.lastUpdateTime;
                        0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = i, this.resumeAnalytics.numEvents += 1, _.default.Emitter.pause(150)
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
                        _.default.Emitter.resume();
                        let e = Date.now() - this.connectionStartTime;
                        P.info("[READY_SUPPLEMENTAL] took ".concat(e, "ms")), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    } else if ("RESUMED" === t) {
                        _.default.Emitter.resume();
                        let t = Date.now() - this.connectionStartTime;
                        P.info("[RESUMED] took ".concat(t, "ms, replayed ").concat(this.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq)), P.verbose((0, y.getConnectionPath)(e)), (0, y.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, y.createResumeAnalytics)(), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    }
                    return this._handleGenericDispatch(e, t)
                }
                _getGatewayUrl() {
                    return null != this.resumeUrl ? this.resumeUrl : F
                }
                _handleReady(e, t) {
                    let n = Date.now();
                    _.default.Emitter.resume();
                    let i = Date.now() - this.connectionStartTime,
                        a = e.session_id;
                    this.sessionId = a;
                    let l = (0, y.getConnectionPath)(e);
                    d.default.setServerTrace(l), P.info("[READY] took ".concat(i, "ms, as ").concat(a)), P.verbose("".concat(l)), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0;
                    let s = (0, y.getReadyPayloadByteSizeAnalytics)(e);
                    this._handleGenericDispatch(e, "READY"), (0, y.logReadyPayloadReceived)(this, e, n, t, s), this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0, this.setResumeUrl(e.resume_gateway_url)
                }
                _handleGenericDispatch(e, t) {
                    m.default.isLoggingGatewayEvents && P.verbose("<~", t, e);
                    try {
                        this.emit("dispatch", t, e)
                    } catch (e) {
                        this.resetSocketOnError(e, t)
                    }
                }
                _handleHeartbeatAck(e) {
                    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, P.verbose("Expedited heartbeat succeeded"))
                }
                _handleHeartbeatTimeout() {
                    this._cleanup(e => e.close(4e3)), this.connectionState = "WILL_RECONNECT";
                    let e = this.gatewayBackoff.fail(() => this._connect());
                    P.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
                }
                _handleClose(e, t, n) {
                    if (e = e || !1, this._cleanup(), this.emit("close", {
                            code: t,
                            reason: n
                        }), 4004 === t) return this.connectionState = "CLOSED", P.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
                    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = "WILL_RECONNECT", this.nextReconnectIsImmediate) P.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
                    else {
                        let i = this.gatewayBackoff.fail(() => this._connect());
                        P.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
                    }
                }
                _tryDetectInvalidIOSToken(e, t, n) {
                    (0, g.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && E.default.get({
                        url: U.Endpoints.ME,
                        headers: {
                            authorization: this.token
                        }
                    }).then(e => {
                        let {
                            status: t
                        } = e;
                        S.default.track(U.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }, e => {
                        let {
                            status: t
                        } = e;
                        401 === t && (this.connectionState = "CLOSED", P.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), S.default.track(U.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }))
                }
                _reset(e, t, n) {
                    this.sessionId = null, this.seq = 0, P.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
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
                    _.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
                    let t = this.webSocket;
                    this.webSocket = null, null != t && (t.onopen = G, t.onmessage = G, t.onerror = G, t.onclose = G, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new O.default(b)
                }
                _doResume() {
                    var e;
                    this.connectionState = "RESUMING", this.resumeAnalytics = (0, y.createResumeAnalytics)(Date.now() - this.connectionStartTime), P.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(v.Opcode.RESUME, {
                        token: this.token,
                        session_id: this.sessionId,
                        seq: this.seq
                    }, !1)
                }
                _doIdentify() {
                    this.seq = 0, this.sessionId = null;
                    let e = this.handleIdentify();
                    if (null === e) {
                        this._handleClose(!0, 4004, "No connection info provided");
                        return
                    }
                    this.connectionState = "IDENTIFYING", this.identifyStartTime = Date.now();
                    let {
                        token: t,
                        properties: n = {},
                        presence: i
                    } = e;
                    this.token = t, P.verbose("[IDENTIFY]");
                    let a = {
                            token: t,
                            capabilities: N.default,
                            properties: n,
                            presence: i,
                            compress: this.compressionHandler.usesLegacyCompression(),
                            client_state: (0, M.toGatewayClientState)(h.default.getClientState())
                        },
                        l = JSON.stringify(a);
                    this.identifyUncompressedByteSize = l.length, this.identifyCompressedByteSize = u.deflate(l).length, this.lastIdentifyClientState = a.client_state, this.identifyCount += 1, this.send(v.Opcode.IDENTIFY, a, !1)
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
                    this.token = t, this.connectionState = "IDENTIFYING", this.identifyStartTime = Date.now(), this.identifyCount += 1, P.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
                }
                _doResumeOrIdentify() {
                    let e = Date.now(),
                        t = null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= 18e4);
                    t ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
                }
                _updateLastHeartbeatAckTime() {
                    this.lastHeartbeatAckTime = Date.now()
                }
                _sendHeartbeat() {
                    this.send(v.Opcode.HEARTBEAT, this.seq, !1)
                }
                getLogger() {
                    return P
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
                    return this.isClosed() ? (P.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = "WILL_RECONNECT", this._connect(), !0) : (P.error("Cannot start a new connection, connection state is not closed"), !1)
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
                    P.error("resetSocketOnError", e.stack);
                    let i = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
                    T.default.increment({
                        name: c.MetricEvents.SOCKET_CRASHED,
                        tags: ["action:".concat(t)]
                    }, !0), n.sentry = n.sentry && !i, n.immediate = n.immediate || i, n.sentry && A.default.captureException(e, {
                        tags: {
                            socketCrashedAction: t
                        }
                    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.clearDispatchQueue(), this.connectionState = "WILL_RECONNECT", this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && n.immediate ? (P.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, f.default.dispatch({
                        type: "CLEAR_GUILD_CACHE"
                    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 12e4)
                }
                close() {
                    if (this.isClosed()) {
                        P.verbose("close() called, but socket is already closed.");
                        return
                    }
                    P.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = "CLOSED", setImmediate(() => {
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
                            P.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                                this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                            }, e);
                            return
                        }
                        n ? this.resetBackoff(t, i) : P.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
                    }
                }
                resetBackoff() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    P.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && "SESSION_ESTABLISHED" !== this.connectionState && this._handleClose(!0, 0, e)
                }
                constructor() {
                    super(), this.dispatchExceptionBackoff = new o.default(1e3, 6e4), this.dispatchSuccessTimer = 0, this.resumeAnalytics = (0, y.createResumeAnalytics)(), this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.isDeferringDispatches = !0, this.queuedDispatches = [], this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
                        m.default.isLoggingGatewayEvents && P.verbose("~>", e, t);
                        let i = b.pack({
                            op: e,
                            d: t
                        });
                        if (!n || this.isSessionEstablished()) try {
                            null != this.webSocket ? this.webSocket.send(i) : P.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                        } catch (e) {} else P.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
                    }, this.gatewayBackoff = new o.default(1e3, 6e4), this.connectionState_ = "CLOSED", this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new O.default(b), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
                }
            }