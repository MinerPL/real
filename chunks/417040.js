"use strict";
n.r(t), n.d(t, {
  SocketEvent: function() {
    return a
  },
  default: function() {
    return o
  }
}), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("702976");
var i, r, s, a, o, l, u, c, d, f = n("627445"),
  E = n.n(f),
  h = n("981980"),
  p = n("595275"),
  _ = n("605250"),
  S = n("313915"),
  m = n("773336"),
  T = n("353927");

function g() {}(l = i || (i = {}))[l.IDENTIFY = 0] = "IDENTIFY", l[l.SELECT_PROTOCOL = 1] = "SELECT_PROTOCOL", l[l.READY = 2] = "READY", l[l.HEARTBEAT = 3] = "HEARTBEAT", l[l.SELECT_PROTOCOL_ACK = 4] = "SELECT_PROTOCOL_ACK", l[l.SPEAKING = 5] = "SPEAKING", l[l.HEARTBEAT_ACK = 6] = "HEARTBEAT_ACK", l[l.RESUME = 7] = "RESUME", l[l.HELLO = 8] = "HELLO", l[l.RESUMED = 9] = "RESUMED", l[l.VIDEO = 12] = "VIDEO", l[l.CLIENT_DISCONNECT = 13] = "CLIENT_DISCONNECT", l[l.SESSION_UPDATE = 14] = "SESSION_UPDATE", l[l.MEDIA_SINK_WANTS = 15] = "MEDIA_SINK_WANTS", l[l.VOICE_BACKEND_VERSION = 16] = "VOICE_BACKEND_VERSION", l[l.CHANNEL_OPTIONS_UPDATE = 17] = "CHANNEL_OPTIONS_UPDATE", l[l.FLAGS = 18] = "FLAGS", l[l.SPEED_TEST = 19] = "SPEED_TEST", l[l.PLATFORM = 20] = "PLATFORM", l[l.SECURE_FRAMES_PREPARE_PROTOCOL_TRANSITION = 21] = "SECURE_FRAMES_PREPARE_PROTOCOL_TRANSITION", l[l.SECURE_FRAMES_EXECUTE_TRANSITION = 22] = "SECURE_FRAMES_EXECUTE_TRANSITION", l[l.SECURE_FRAMES_READY_FOR_TRANSITION = 23] = "SECURE_FRAMES_READY_FOR_TRANSITION", l[l.SECURE_FRAMES_PREPARE_EPOCH = 24] = "SECURE_FRAMES_PREPARE_EPOCH", l[l.MLS_EXTERNAL_SENDER_PACKAGE = 25] = "MLS_EXTERNAL_SENDER_PACKAGE", l[l.MLS_KEY_PACKAGE = 26] = "MLS_KEY_PACKAGE", l[l.MLS_PROPOSALS = 27] = "MLS_PROPOSALS", l[l.MLS_COMMIT_WELCOME = 28] = "MLS_COMMIT_WELCOME", l[l.MLS_PREPARE_COMMIT_TRANSITION = 29] = "MLS_PREPARE_COMMIT_TRANSITION", l[l.MLS_WELCOME = 30] = "MLS_WELCOME", (u = r || (r = {}))[u.AUTHENTICATION_FAILED = 4004] = "AUTHENTICATION_FAILED", u[u.INVALID_SESSION = 4006] = "INVALID_SESSION", u[u.SERVER_NOT_FOUND = 4011] = "SERVER_NOT_FOUND", u[u.SERVER_CRASH = 4015] = "SERVER_CRASH", u[u.CANCELED = 4016] = "CANCELED", u[u.HEARTBEAT_TIMEOUT = 4800] = "HEARTBEAT_TIMEOUT", u[u.UNRESUMABLE = 4801] = "UNRESUMABLE", u[u.RESET_BACKOFF = 4802] = "RESET_BACKOFF", (c = s || (s = {}))[c.DISCONNECTED = 0] = "DISCONNECTED", c[c.CONNECTING = 1] = "CONNECTING", c[c.IDENTIFYING = 2] = "IDENTIFYING", c[c.RESUMING = 3] = "RESUMING", c[c.CONNECTED = 4] = "CONNECTED", c[c.RECONNECTING = 5] = "RECONNECTING";

function I(e) {
  return e.map(e => ({
    name: e.name,
    type: e.type,
    priority: 1e3 * e.priority,
    payload_type: e.payloadType,
    rtx_payload_type: e.rtxPayloadType,
    encode: e.encode,
    decode: e.decode
  }))
}

function C(e) {
  return null == e ? void 0 : e.map(e => ({
    type: e.type,
    rid: e.rid,
    ssrc: e.ssrc,
    active: e.active,
    quality: e.quality,
    rtx_ssrc: e.rtxSsrc,
    max_bitrate: e.maxBitrate,
    max_framerate: e.maxFrameRate,
    max_resolution: null != e.maxResolution ? {
      type: e.maxResolution.type,
      width: e.maxResolution.width,
      height: e.maxResolution.height
    } : void 0
  }))
}

function v(e) {
  var t;
  return null !== (t = null == e ? void 0 : e.map(e => ({
    type: function(e) {
      if ("audio" === e) return T.MediaTypes.AUDIO;
      if ("test" === e) return T.MediaTypes.TEST;
      if ("screen" === e) return T.MediaTypes.SCREEN;
      else return T.MediaTypes.VIDEO
    }(e.type),
    rid: e.rid,
    ssrc: e.ssrc,
    rtxSsrc: e.rtx_ssrc,
    active: e.active,
    quality: e.quality,
    maxBitrate: e.max_bitrate,
    maxFrameRate: e.max_framerate,
    maxResolution: null != e.max_resolution ? {
      type: e.max_resolution.type,
      width: e.max_resolution.width,
      height: e.max_resolution.height
    } : void 0
  }))) && void 0 !== t ? t : []
}(d = a || (a = {})).Connecting = "connecting", d.Connect = "connect", d.Disconnect = "disconnect", d.Resuming = "resuming", d.Ready = "ready", d.Speaking = "speaking", d.Video = "video", d.Ping = "ping", d.ClientDisconnect = "client-disconnect", d.Codecs = "codecs", d.MediaSessionId = "media-session-id", d.MediaSinkWants = "media-sink-wants", d.VoiceBackendVersion = "voice-backend-version", d.KeyframeInterval = "keyframe-interval", d.ChannelOptionsUpdateRtcLog = "channel-options-update-rtc-log", d.ChannelOptionsUpdateSecureFramesProtocol = "update-secure-frames-protocol", d.Flags = "flags", d.Platform = "platform", d.SDP = "sdp", d.Encryption = "encryption", d.SpeedTest = "speed-test", d.BandwidthEstimationExperiment = "bandwidth-estimation-experiment", d.SecureFramesInit = "secure-frames-init", d.SecureFramesPrepareTransition = "secure-frames-prepare-transition", d.SecureFramesExecuteTransition = "secure-frames-execute-transition", d.SecureFramesPrepareEpoch = "secure-frames-prepare-epoch", d.MLSExternalSenderPackage = "mls-external-sender-package", d.MLSProposals = "mls-proposals", d.MLSPrepareCommitTransition = "mls-prepare-commit-transition", d.MLSWelcome = "mls-welcome", o = class extends p.default {
  createWebSocket() {
    this.logger.info("[CONNECT] ".concat(this.url)), null !== this.webSocket && (this.logger.error("Connect called with already existing websocket"), this.cleanupWebSocket(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this.handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time."))
    }, 2e4);
    let e = this.webSocket = new WebSocket("".concat(this.url, "?v=").concat(7));
    e.binaryType = "arraybuffer", e.onopen = () => {
      1 === this.connectionState ? this.emit("connect") : 5 === this.connectionState && this.doResumeOrClose(), this.connectionState = 4;
      let e = Date.now() - this.connectionStartTime;
      this.logger.info("[CONNECTED] ".concat(this.url, " in ").concat(e, " ms")), this.emit("ping", Math.round(e / 2))
    }, e.onmessage = e => {
      let {
        op: t,
        d: n
      } = this.parseWebSocketMessage(e);
      if (S.default.isLoggingGatewayEvents) {
        if (n instanceof Uint8Array) {
          let e = [...n].map(e => e.toString(16).padStart(2, "0")).join("");
          this.logger.info("~> ".concat(t, ": 0x").concat(e))
        } else this.logger.info("~> ".concat(t, ": ").concat(JSON.stringify(n)))
      }
      switch (t) {
        case 8:
          this.clearHelloTimeout(), this.handleHello(n);
          break;
        case 2:
          this.handleReady(n);
          break;
        case 9:
          this.handleResumed(n);
          break;
        case 4:
          n.bandwidth_estimation_experiment && this.emit("bandwidth-estimation-experiment", n.bandwidth_estimation_experiment), this.emit("codecs", n.audio_codec, n.video_codec), n.media_session_id && this.emit("media-session-id", n.media_session_id), n.sdp ? this.emit("sdp", n.sdp) : n.mode && this.emit("encryption", n.mode, n.secret_key), n.keyframe_interval && this.emit("keyframe-interval", n.keyframe_interval), this.emit("secure-frames-init", n.secure_frames_version || 0), this.resumable = !0;
          break;
        case 5:
          let i = n.speaking;
          "boolean" == typeof i && (i = i ? T.SpeakingFlags.VOICE : T.SpeakingFlags.NONE), this.emit("speaking", n.user_id, n.ssrc, i);
          break;
        case 3:
          this.sendHeartbeat();
          break;
        case 6:
          this.emit("ping", Date.now() - n), this.handleHeartbeatAck(n);
          break;
        case 12:
          this.emit("video", n.user_id, n.audio_ssrc, n.video_ssrc, v(n.streams));
          break;
        case 13:
          this.emit("client-disconnect", n.user_id);
          break;
        case 14:
          (null != n.audio_codec || null != n.video_codec) && this.emit("codecs", n.audio_codec, n.video_codec), null != n.media_session_id && this.emit("media-session-id", n.media_session_id), n.keyframe_interval && this.emit("keyframe-interval", n.keyframe_interval);
          break;
        case 15:
          this.emit("media-sink-wants", n);
          break;
        case 16:
          null != n.voice && null != n.rtc_worker && this.emit("voice-backend-version", n.voice, n.rtc_worker);
          break;
        case 17:
          n.rtc_log_ephemeral_key && this.emit("channel-options-update-rtc-log", n.rtc_log_ephemeral_key);
          break;
        case 19:
          this.emit("speed-test", n.op, n);
          break;
        case 18:
          null != n.flags && null != n.user_id && this.emit("flags", n.user_id, n.flags);
          break;
        case 20:
          null != n.platform && null != n.user_id && this.emit("platform", n.user_id, n.platform);
          break;
        case 21:
          null != n.transition_id && null != n.protocol_version && this.emit("secure-frames-prepare-transition", n.transition_id, n.protocol_version);
          break;
        case 22:
          null != n.transition_id && this.emit("secure-frames-execute-transition", n.transition_id);
          break;
        case 24:
          null != n.epoch && null != n.protocol_version && this.emit("secure-frames-prepare-epoch", n.epoch, n.protocol_version);
          break;
        case 25:
          this.emit("mls-external-sender-package", n);
          break;
        case 27:
          this.emit("mls-proposals", n);
          break;
        case 29: {
          let e = new DataView(n.buffer, n.byteOffset, 2),
            t = e.getUint16(0, !1),
            i = n.slice(2);
          this.emit("mls-prepare-commit-transition", t, i);
          break
        }
        case 30: {
          let e = new DataView(n.buffer, n.byteOffset, 2),
            t = e.getUint16(0, !1),
            i = n.slice(2);
          this.emit("mls-welcome", t, i);
          break
        }
        default:
          this.logger.info("Unhandled op ".concat(t))
      }
    }, e.onerror = () => this.handleClose(!1, 0, "An error with the websocket occurred"), e.onclose = e => {
      let {
        wasClean: t,
        code: n,
        reason: i
      } = e;
      return this.handleClose(t, n, i)
    }
  }
  send(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = this.webSocket;
    if (null == n || n.readyState !== WebSocket.OPEN) return;
    let i = JSON.stringify({
      op: e,
      d: t
    });
    S.default.isLoggingGatewayEvents && this.logger.info("<~ ".concat(i));
    try {
      n.send(i)
    } catch (e) {}
  }
  sendBinary(e, t) {
    let n = this.webSocket;
    if (null == n || n.readyState !== WebSocket.OPEN) return;
    let i = new Uint8Array(t.byteLength + 1);
    i[0] = e, i.set(t, 1);
    try {
      n.send(i.buffer)
    } catch (e) {}
  }
  ping() {
    this.sendHeartbeat()
  }
  doResumeOrClose() {
    let e = Date.now(),
      t = null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= 6e4);
    t ? (this.doResume(), this.lastHeartbeatAckTime = e) : this.disconnect(!1, 4801, "Cannot resume connection.")
  }
  doResume() {
    var e, t;
    this.logger.info("[RESUME] resuming session. serverId=".concat(null !== (e = this.serverId) && void 0 !== e ? e : "", " sessionId=").concat(null !== (t = this.sessionId) && void 0 !== t ? t : "")), this.emit("resuming"), this.connectionState = 3, this.send(7, {
      token: this.token,
      session_id: this.sessionId,
      server_id: this.serverId
    })
  }
  handleHello(e) {
    var t, n, i;
    if (this.serverVersion = null !== (t = e.v) && void 0 !== t ? t : 3, this.serverVersion <= 3) {
      let t = m.isPlatformEmbedded ? .25 : .1;
      this.heartbeatInterval = e.heartbeat_interval * t
    } else this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier, !m.isPlatformEmbedded && (this.heartbeatInterval = Math.min(5e3, null !== (n = this.heartbeatInterval) && void 0 !== n ? n : NaN));
    let r = Date.now() - this.connectionStartTime;
    this.logger.info("[HELLO] heartbeat interval: ".concat(null !== (i = this.heartbeatInterval) && void 0 !== i ? i : "??", ", version: ").concat(this.serverVersion, ", took ").concat(r, " ms")), this.startHeartbeater()
  }
  handleReady(e) {
    this.backoff.succeed();
    let t = Date.now() - this.connectionStartTime;
    this.logger.info("[READY] took ".concat(t, " ms")), this.serverVersion >= 6 && this.send(16, {}), this.emit("ready", e.ip, e.port, e.modes, e.ssrc, v(e.streams), e.experiments)
  }
  handleResumed(e) {
    this.backoff.succeed()
  }
  handleClose(e, t, n) {
    if (this.connectionState = 0, e = e || !1, this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t) return this.disconnect(e, t, n);
    if (this.backoff.fails > 3) this.logger.warn("[WS CLOSED] Backoff exceed. Resetting."), this.disconnect(e, t, n);
    else {
      let i = this.backoff.fail(() => this.reconnect(e, t, n));
      this.logger.warn("[WS CLOSED] (clean: ".concat(e.toString(), ", code: ").concat(t, ", reason: ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds."))
    }
  }
  disconnect(e, t, n) {
    this.logger.warn("[DISCONNECT] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.cleanupWebSocket(), this.cleanupState(), this.connectionState = 0, this.emit("disconnect", e, t, n)
  }
  reconnect(e, t, n) {
    this.logger.info("[RECONNECT] wasClean=".concat(e.toString(), " code=").concat(t, " reason=").concat(n)), this.cleanupWebSocket(e => e.close(4e3)), this.connectionState = 5, this.createWebSocket()
  }
  cleanupWebSocket(e) {
    this.stopHeartbeater(), this.clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = g, t.onmessage = g, t.onerror = g, t.onclose = g, null == e || e(t)), this.backoff.cancel()
  }
  cleanupState() {
    this.serverId = null, this.sessionId = null, this.token = null, this.resumable = !1
  }
  parseWebSocketMessage(e) {
    if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
    {
      let t = new Uint8Array(e.data);
      return {
        op: t[0],
        d: t.subarray(1)
      }
    }
  }
  clearHelloTimeout() {
    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
  }
  handleHeartbeatAck(e) {
    this.logger.info("Heartbeat ACK received"), this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, this.logger.info("Expedited heartbeat succeeded"))
  }
  handleHeartbeatTimeout() {
    this.cleanupWebSocket(e => e.close(4e3));
    let e = this.backoff.fail(() => this.reconnect(!1, 4800, "Heartbeat timeout."));
    this.logger.warn("[HEARTBEAT ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  startHeartbeater() {
    E(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here."), this.logger.info("Starting heartbeat with interval: ".concat(this.heartbeatInterval)), null !== this.heartbeater && clearInterval(this.heartbeater), this.heartbeatAck = !0, this.heartbeater = setInterval(() => {
      this.heartbeatAck ? (this.heartbeatAck = !1, this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout()
    }, this.heartbeatInterval)
  }
  sendHeartbeat() {
    this.logger.info("Sending heartbeat"), this.send(3, Date.now())
  }
  stopHeartbeater() {
    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
  }
  connect() {
    return 0 !== this.connectionState ? (this.logger.error("Cannot start a new connection, connection state is not disconnected"), !1) : (this.connectionState = 1, this.createWebSocket(), this.emit("connecting"), !0)
  }
  identify(e) {
    let {
      serverId: t,
      userId: n,
      sessionId: i,
      token: r,
      maxSecureFramesVersion: s,
      video: a = !1,
      streamParameters: o
    } = e;
    this.serverId = t, this.sessionId = i, this.token = r, this.connectionState = 2, this.send(0, {
      server_id: t,
      user_id: n,
      session_id: i,
      token: r,
      max_secure_frames_version: s,
      video: a,
      streams: C(o)
    })
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null != this.webSocket) this.logger.info("Performing an expedited heartbeat ".concat("" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this.sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
      this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this.handleHeartbeatTimeout()
    }, e);
    else {
      if (n) return this.resetBackoff(t);
      this.logger.info("Expedited heartbeat requested, but is disconnected and a reset was not " + "requested ".concat("" !== t ? "reason: " + t : ""))
    }
    return !1
  }
  resetBackoff() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return !!(this.backoff.fails > 0) && null == this.webSocket && (this.logger.info("Connection backoff reset ".concat("" !== e ? "for reason: " + e : "")), this.backoff.succeed(), this.reconnect(!1, 4802, "Reset backoff."), !0)
  }
  close() {
    this.logger.info("CLOSE"), this.cleanupWebSocket(e => e.close(4e3)), this.cleanupState(), this.connectionState = 0, this.emit("disconnect", !0, 1e3, "Force Close")
  }
  destroy() {
    this.close()
  }
  selectProtocol(e, t, n, i) {
    let r;
    let s = {};
    null == n ? r = null : "sdp" in n && null != n.sdp && "" !== n.sdp ? (r = n.sdp, s = {
      ...n,
      codecs: I(n.codecs),
      rtc_connection_id: t
    }) : "address" in n && null != n.address && "" !== n.address && n.port && null != n.mode && "" !== n.mode && (r = {
      address: n.address,
      port: n.port,
      mode: n.mode
    }, s = {
      ...n,
      codecs: I(n.codecs),
      rtc_connection_id: t,
      experiments: i
    }), this.send(1, {
      protocol: e,
      data: r,
      ...s
    })
  }
  updateSession(e) {
    this.send(14, {
      codecs: I(e.codecs)
    })
  }
  speaking(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    this.send(5, {
      speaking: this.serverVersion <= 3 ? !!e : e,
      delay: t,
      ssrc: n
    })
  }
  video(e, t, n, i) {
    this.send(12, {
      audio_ssrc: e,
      video_ssrc: t,
      rtx_ssrc: n,
      streams: C(i)
    })
  }
  mediaSinkWants(e) {
    this.serverVersion >= 5 && this.send(15, e)
  }
  speedTest(e, t) {
    this.send(19, {
      op: e,
      ...t
    })
  }
  secureFramesReadyForTransition(e) {
    this.send(23, {
      transition_id: e
    })
  }
  sendMLSKeyPackage(e) {
    this.logger.info("Sending MLS key package"), this.sendBinary(26, new Uint8Array(e))
  }
  sendMLSCommitWelcome(e) {
    this.logger.info("Sending MLS commit + welcome message"), this.sendBinary(28, new Uint8Array(e))
  }
  setHeartbeatIntervalModifier(e) {
    this.heartbeatIntervalModifier = e
  }
  constructor(e) {
    super(), this.logger = new _.default("RTCControlSocket"), this.backoff = new h.default(1e3, 5e3), this.serverVersion = 0, this.url = e, this.webSocket = null, this.connectionState = 0, this.helloTimeout = null, this.lastHeartbeatAckTime = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.expeditedHeartbeatTimeout = null, this.heartbeatIntervalModifier = 1, this.connectionStartTime = 0, this.sessionId = null, this.serverId = null, this.token = null, this.resumable = !1
  }
}