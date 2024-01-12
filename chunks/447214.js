            "use strict";
            n.r(t), n.d(t, {
                ConnectionState: function() {
                    return s
                },
                default: function() {
                    return i
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("424973"), n("860677");
            var s, i, r, a = n("627445"),
                o = n.n(a),
                d = n("181905"),
                u = n("981980"),
                l = n("102053"),
                f = n("432710"),
                _ = n("446674"),
                c = n("872717"),
                g = n("913144"),
                m = n("288206"),
                h = n("605250"),
                v = n("155084"),
                E = n("410912"),
                p = n("313915"),
                y = n("599110"),
                T = n("922932"),
                C = n("773336"),
                S = n("286235"),
                I = n("265912"),
                A = n("799600"),
                D = n("705215"),
                N = n("342797"),
                O = n("340115"),
                b = n("289362"),
                P = n("571420"),
                R = n("797785"),
                V = n("49111");
            let k = new h.default("GatewaySocket"),
                M = new D.default;

            function w() {}(r = s || (s = {})).CLOSED = "CLOSED", r.WILL_RECONNECT = "WILL_RECONNECT", r.CONNECTING = "CONNECTING", r.IDENTIFYING = "IDENTIFYING", r.RESUMING = "RESUMING", r.SESSION_ESTABLISHED = "SESSION_ESTABLISHED";

            function L(e) {
                return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
            }
            let U = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
            i = class extends O.default {
                get connectionState() {
                    return this.connectionState_
                }
                set connectionState(e) {
                    k.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
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
                    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && k.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
                }
                _connect() {
                    var e, t;
                    let n;
                    if (!this.willReconnect()) {
                        k.verbose("Skipping _connect because willReconnect is false");
                        return
                    }
                    if (P.getIsPaused()) {
                        k.info("Skipping _connect because socket is paused");
                        return
                    }
                    this.connectionState = "CONNECTING", this.nextReconnectIsImmediate = !1;
                    let s = this.compressionHandler.getAlgorithm(),
                        i = M.getName(),
                        r = this._getGatewayUrl(),
                        a = window.GLOBAL_ENV.API_VERSION;
                    l.default.mark("\uD83C\uDF10", "Socket._connect"), k.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(i, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != s ? s : "none")), null !== this.webSocket && (k.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                        let e = Date.now() - this.connectionStartTime;
                        this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
                    }, 3e4);
                    let o = new URL(r);
                    o.searchParams.append("encoding", i), o.searchParams.append("v", a.toString()), null != s && o.searchParams.append("compress", s);
                    ! function(e) {
                        let t, {
                                gatewayURL: n,
                                newCallback: s,
                                onOpen: i,
                                onMessage: r,
                                onError: a,
                                onClose: o
                            } = e,
                            d = window._ws,
                            u = !1,
                            l = !1,
                            f = null,
                            _ = null;
                        if (window._ws = null, null != d) {
                            if (t = d.ws, d.state.gateway !== n) k.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(d.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
                            else {
                                var c;
                                let e = {
                                    ...d.state
                                };
                                null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                                    ...e,
                                    data: e.data.substring(0, 100)
                                } : e)), k.log("[FAST CONNECT] successfully took over websocket, state:", {
                                    ...e,
                                    messages: null === (c = e.messages) || void 0 === c ? void 0 : c.length
                                }), u = d.state.open, l = d.state.identify, f = d.state.messages, _ = d.state.clientState
                            }
                        }
                        null == t && ((t = (0, R.default)(n)).binaryType = "arraybuffer"), s(t), u && i(l, _), null != f && f.forEach(r), t.onopen = () => i(l, _), t.onmessage = r, t.onclose = o, t.onerror = a
                    }({
                        gatewayURL: o.toString(),
                        newCallback: e => {
                            this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                        },
                        onOpen: (e, t) => {
                            l.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                            let n = Date.now() - this.connectionStartTime;
                            k.info("[CONNECTED] ".concat(o.toString(), " in ").concat(n, " ms")), this.isFastConnect = e, this.lastIdentifyClientState = t, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                        },
                        onMessage: (e = this.compressionHandler, t = (e, t) => {
                            let n = Date.now(),
                                {
                                    op: s,
                                    s: i,
                                    t: r,
                                    d: a
                                } = M.unpack(e);
                            s !== O.Opcode.DISPATCH && l.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(s, " ").concat(O.Opcode[s]));
                            let o = Date.now() - n;
                            switch ("READY" === r ? E.default.parseReady.set(n, o) : "READY_SUPPLEMENTAL" === r ? E.default.parseReadySupplemental.set(n, o) : o > 10 && l.default.mark("\uD83C\uDF10", "Parse " + r, o), null != i && (this.seq = i), s) {
                                case O.Opcode.HELLO:
                                    this._clearHelloTimeout(), this._handleHello(a);
                                    break;
                                case O.Opcode.RECONNECT:
                                    this._handleReconnect();
                                    break;
                                case O.Opcode.INVALID_SESSION:
                                    this._handleInvalidSession(a);
                                    break;
                                case O.Opcode.HEARTBEAT:
                                    this._sendHeartbeat();
                                    break;
                                case O.Opcode.HEARTBEAT_ACK:
                                    this._handleHeartbeatAck(a);
                                    break;
                                case O.Opcode.DISPATCH:
                                    this._handleDispatch(a, r, "READY" === r ? {
                                        compressed_byte_size: t,
                                        uncompressed_byte_size: L(e),
                                        compression_algorithm: this.compressionHandler.getAlgorithm(),
                                        packing_algorithm: M.getName(),
                                        unpack_duration_ms: o
                                    } : null);
                                    break;
                                default:
                                    k.info("Unhandled op ".concat(s))
                            }
                        }, n = 0, e.dataReady(e => {
                            try {
                                return t(e, n)
                            } finally {
                                n = 0
                            }
                        }), t => {
                            let s = t.data;
                            null != t.raw_length ? n += t.raw_length : n += L(s), e.feed(s)
                        }),
                        onError: () => {
                            this.setResumeUrl(null), T.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
                        },
                        onClose: e => {
                            let {
                                wasClean: t,
                                code: n,
                                reason: s
                            } = e;
                            return this._handleClose(t, n, s)
                        }
                    })
                }
                _handleHello(e) {
                    let t = this.heartbeatInterval = e.heartbeat_interval,
                        n = Date.now() - this.connectionStartTime;
                    k.verbose("[HELLO] via ".concat((0, N.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
                }
                _handleReconnect() {
                    k.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = "WILL_RECONNECT", this._connect()
                }
                _handleInvalidSession(e) {
                    k.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
                }
                _handleDispatch(e, t, n) {
                    let s = performance.now();
                    if ("RESUMING" === this.connectionState) {
                        let e = s - this.resumeAnalytics.lastUpdateTime;
                        0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = s, this.resumeAnalytics.numEvents += 1, _.default.Emitter.pause(150)
                    }
                    this.isDeferringDispatches ? this.queuedDispatches.push({
                        data: e,
                        type: t,
                        compressionAnalytics: n
                    }) : this._handleDispatchWithoutQueueing(e, t, n), "RESUMING" === this.connectionState && (this.resumeAnalytics.dispatchTime += performance.now() - s)
                }
                _handleDispatchWithoutQueueing(e, t, n) {
                    if ("READY" === t) return this._handleReady(e, n);
                    if ("READY_SUPPLEMENTAL" === t) {
                        _.default.Emitter.resume();
                        let e = Date.now() - this.connectionStartTime;
                        k.info("[READY_SUPPLEMENTAL] took ".concat(e, "ms")), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    } else if ("RESUMED" === t) {
                        _.default.Emitter.resume();
                        let t = Date.now() - this.connectionStartTime;
                        k.info("[RESUMED] took ".concat(t, "ms, replayed ").concat(this.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq)), k.verbose((0, N.getConnectionPath)(e)), (0, N.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, N.createResumeAnalytics)(), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0
                    }
                    return this._handleGenericDispatch(e, t)
                }
                _getGatewayUrl() {
                    return null != this.resumeUrl ? this.resumeUrl : U
                }
                _handleReady(e, t) {
                    let n = Date.now();
                    _.default.Emitter.resume();
                    let s = Date.now() - this.connectionStartTime,
                        i = e.session_id;
                    this.sessionId = i;
                    let r = (0, N.getConnectionPath)(e);
                    l.default.setServerTrace(r), k.info("[READY] took ".concat(s, "ms, as ").concat(i)), k.verbose("".concat(r)), this.connectionState = "SESSION_ESTABLISHED", this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0;
                    let a = (0, N.getReadyPayloadByteSizeAnalytics)(e);
                    this._handleGenericDispatch(e, "READY"), (0, N.logReadyPayloadReceived)(this, e, n, t, a), this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0, this.setResumeUrl(e.resume_gateway_url)
                }
                _handleGenericDispatch(e, t) {
                    p.default.isLoggingGatewayEvents && k.verbose("<~", t, e);
                    try {
                        this.emit("dispatch", t, e)
                    } catch (e) {
                        this.resetSocketOnError(e, t)
                    }
                }
                _handleHeartbeatAck(e) {
                    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, k.verbose("Expedited heartbeat succeeded"))
                }
                _handleHeartbeatTimeout() {
                    this._cleanup(e => e.close(4e3)), this.connectionState = "WILL_RECONNECT";
                    let e = this.gatewayBackoff.fail(() => this._connect());
                    k.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
                }
                _handleClose(e, t, n) {
                    if (e = e || !1, this._cleanup(), this.emit("close", {
                            code: t,
                            reason: n
                        }), 4004 === t) return this.connectionState = "CLOSED", k.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
                    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = "WILL_RECONNECT", this.nextReconnectIsImmediate) k.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
                    else {
                        let s = this.gatewayBackoff.fail(() => this._connect());
                        k.warn("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((s / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
                    }
                }
                _tryDetectInvalidIOSToken(e, t, n) {
                    (0, C.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && c.default.get({
                        url: V.Endpoints.ME,
                        headers: {
                            authorization: this.token
                        }
                    }).then(e => {
                        let {
                            status: t
                        } = e;
                        y.default.track(V.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }, e => {
                        let {
                            status: t
                        } = e;
                        401 === t && (this.connectionState = "CLOSED", k.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), y.default.track(V.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }))
                }
                _reset(e, t, n) {
                    this.sessionId = null, this.seq = 0, k.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
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
                    _.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
                    let t = this.webSocket;
                    this.webSocket = null, null != t && (t.onopen = w, t.onmessage = w, t.onerror = w, t.onclose = w, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new A.default(M)
                }
                _doResume() {
                    var e;
                    this.connectionState = "RESUMING", this.resumeAnalytics = (0, N.createResumeAnalytics)(Date.now() - this.connectionStartTime), k.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(O.Opcode.RESUME, {
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
                        presence: s
                    } = e;
                    this.token = t, k.verbose("[IDENTIFY]");
                    let i = {
                            token: t,
                            capabilities: I.default,
                            properties: n,
                            presence: s,
                            compress: this.compressionHandler.usesLegacyCompression(),
                            client_state: (0, b.toGatewayClientState)(m.default.getClientState())
                        },
                        r = JSON.stringify(i);
                    this.identifyUncompressedByteSize = r.length, this.identifyCompressedByteSize = d.deflate(r).length, this.lastIdentifyClientState = i.client_state, this.identifyCount += 1, this.send(O.Opcode.IDENTIFY, i, !1)
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
                    this.token = t, this.connectionState = "IDENTIFYING", this.identifyStartTime = Date.now(), this.identifyCount += 1, k.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
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
                    this.send(O.Opcode.HEARTBEAT, this.seq, !1)
                }
                getLogger() {
                    return k
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
                    return this.isClosed() ? (k.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = "WILL_RECONNECT", this._connect(), !0) : (k.error("Cannot start a new connection, connection state is not closed"), !1)
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
                    k.error("resetSocketOnError", e.stack);
                    let s = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
                    v.default.increment({
                        name: f.MetricEvents.SOCKET_CRASHED,
                        tags: ["action:".concat(t)]
                    }, !0), n.sentry = n.sentry && !s, n.immediate = n.immediate || s, n.sentry && S.default.captureException(e, {
                        tags: {
                            socketCrashedAction: t
                        }
                    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.clearDispatchQueue(), this.connectionState = "WILL_RECONNECT", this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && n.immediate ? (k.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, g.default.dispatch({
                        type: "CLEAR_GUILD_CACHE"
                    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 12e4)
                }
                close() {
                    if (this.isClosed()) {
                        k.verbose("close() called, but socket is already closed.");
                        return
                    }
                    k.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = "CLOSED", setImmediate(() => {
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
                        s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    if (!this.isClosed()) {
                        if (this.isConnected()) {
                            k.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                                this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                            }, e);
                            return
                        }
                        n ? this.resetBackoff(t, s) : k.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
                    }
                }
                resetBackoff() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    k.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && "SESSION_ESTABLISHED" !== this.connectionState && this._handleClose(!0, 0, e)
                }
                constructor() {
                    super(), this.dispatchExceptionBackoff = new u.default(1e3, 6e4), this.dispatchSuccessTimer = 0, this.resumeAnalytics = (0, N.createResumeAnalytics)(), this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.isDeferringDispatches = !0, this.queuedDispatches = [], this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
                        p.default.isLoggingGatewayEvents && k.verbose("~>", e, t);
                        let s = M.pack({
                            op: e,
                            d: t
                        });
                        if (!n || this.isSessionEstablished()) try {
                            null != this.webSocket ? this.webSocket.send(s) : k.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                        } catch (e) {} else k.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
                    }, this.gatewayBackoff = new u.default(1e3, 6e4), this.connectionState_ = "CLOSED", this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new A.default(M), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
                }
            }