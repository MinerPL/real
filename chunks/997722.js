"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("70102"), n("808653"), n("424973"), n("222007");
var i, r, s = n("552442"),
  a = n.n(s),
  o = n("210696"),
  l = n.n(o),
  u = n("746379"),
  c = n.n(u),
  d = n("748820"),
  f = n("981980"),
  E = n("595275"),
  h = n("773364"),
  p = n("398183"),
  _ = n("913144"),
  S = n("673777"),
  m = n("605250"),
  T = n("808122"),
  g = n("601222"),
  I = n("967039"),
  C = n("694845"),
  v = n("834604"),
  A = n("355014");
n("222920");
var R = n("901946"),
  N = n("42203"),
  O = n("42887"),
  D = n("661919"),
  y = n("590401"),
  P = n("599110"),
  L = n("35468"),
  b = n("773336"),
  M = n("49671"),
  U = n("199948"),
  G = n("422791"),
  w = n("642099"),
  k = n("417040"),
  x = n("716380"),
  F = n("157547"),
  V = n("88313"),
  B = n("531748"),
  H = n("760406"),
  j = n("478696"),
  Y = n("49111"),
  W = n("353927");
let K = /^https/.test((i = "https:", "https:")) ? "wss:" : "ws:";
r = class extends E.default {
  get quality() {
    let e = this.getLastPing();
    if (this.state !== Y.RTCConnectionStates.RTC_CONNECTED || void 0 === e) return Y.RTCConnectionQuality.UNKNOWN;
    if (e > 500 || null != this._outboundLossRate && this._outboundLossRate > 10) return Y.RTCConnectionQuality.BAD;
    if (e > 250 || null != this._outboundLossRate && this._outboundLossRate > 5) return Y.RTCConnectionQuality.AVERAGE;
    else return Y.RTCConnectionQuality.FINE
  }
  get endpoint() {
    return this._endpoint
  }
  set endpoint(e) {
    if (null == e) this._endpoint = null, this.hostname = null;
    else {
      e = "".concat(K, "//").concat(e);
      let {
        hostname: t,
        port: n
      } = c.parse(e), i = null != n ? parseInt(n) : NaN;
      null != t && (80 === i || 443 === i) && (e = "".concat(K, "//").concat(t)), this._endpoint = e + "/", this.hostname = t
    }
  }
  connect(e, t) {
    if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
    this._backoff.cancel();
    let {
      endpoint: n,
      token: i
    } = this;
    if (this.endpoint = e, this.token = t, (n !== this.endpoint || i !== t) && (this._cleanupSocket(), this._mediaSessionId = null, null != n && (this._rtcConnectionId = (0, d.v4)(), _.default.dispatch({
        type: "RTC_CONNECTION_UPDATE_ID",
        connection: this
      }))), null == this.endpoint) {
      this.setState(Y.RTCConnectionStates.AWAITING_ENDPOINT);
      return
    }
    let r = this._socket;
    null != r && this._cleanupSocket(), (r = this._socket = new k.default(this.endpoint)).on(k.SocketEvent.Connecting, this._handleConnecting.bind(this, r)), r.on(k.SocketEvent.Connect, this._handleConnect.bind(this, r)), r.on(k.SocketEvent.Disconnect, this._handleDisconnect.bind(this, r)), r.on(k.SocketEvent.Resuming, this._handleResuming.bind(this, r)), r.on(k.SocketEvent.Ready, this._handleReady.bind(this, r)), r.on(k.SocketEvent.Speaking, this._handleSpeaking.bind(this, r)), r.on(k.SocketEvent.Video, this._handleVideo.bind(this, r)), r.on(k.SocketEvent.Ping, this._handleControlPing.bind(this)), r.on(k.SocketEvent.ClientDisconnect, this._handleClientDisconnect.bind(this)), r.on(k.SocketEvent.Codecs, this._handleCodecs.bind(this)), r.on(k.SocketEvent.MediaSessionId, this._handleMediaSessionId.bind(this)), r.on(k.SocketEvent.MediaSinkWants, this._handleMediaSinkWants.bind(this)), r.on(k.SocketEvent.VoiceBackendVersion, this._handleCodeVersion.bind(this)), r.on(k.SocketEvent.KeyframeInterval, this._handleKeyframeInterval.bind(this)), r.on(k.SocketEvent.ChannelOptionsUpdateRtcLog, this._handleUpdateRtcLog.bind(this)), r.on(k.SocketEvent.Flags, this.handleFlags.bind(this)), r.on(k.SocketEvent.Platform, this.handlePlatform.bind(this)), r.on(k.SocketEvent.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), r.on(k.SocketEvent.SecureFramesInit, this._handleSecureFramesInit.bind(this)), r.on(k.SocketEvent.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), r.on(k.SocketEvent.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), r.on(k.SocketEvent.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), r.on(k.SocketEvent.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), r.on(k.SocketEvent.MLSProposals, this._handleMLSProposals.bind(this, r)), r.on(k.SocketEvent.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), r.on(k.SocketEvent.MLSWelcome, this._handleMLSWelcome.bind(this)), this._connectStartTime = (0, p.now)(), this._connectCount++, this._connecting = !0, null != r && this._socket === r && (this._trackVoiceConnectionConnecting(), this._encountered_socket_failure = !1, r.connect())
  }
  destroy() {
    var e, t, n, i, r;
    if (this.logger.info("Destroy RTCConnection"), L.default.removeOnlineCallback(this._handleNetworkOnline), L.default.removeOfflineCallback(this._handleNetworkOffline), (0, b.isDesktop)() && (null === (r = this.powerMonitorListener) || void 0 === r || r.call(this)), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, null === (t = this._voiceDuration) || void 0 === t || t.stop(), this._voiceDuration = null, null === (n = this._videoQuality) || void 0 === n || n.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.reset(), null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.removeAllListeners(), this._destroyed = !0
  }
  sendSpeaking(e, t) {
    let n = this._socket;
    if (null != n) {
      let i = O.default.getPacketDelay();
      n.speaking(e, i, t)
    }
  }
  sendVideo(e, t, n, i) {
    let r = this._socket;
    null != r && (0 !== t && (this._sentVideo = !0), this._sentVideo && r.video(e, t, n, i))
  }
  getPings() {
    return this._pings
  }
  getAveragePing() {
    let e = this._pings.slice(0, Math.min(this._pings.length, 20));
    return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length
  }
  getLastPing() {
    var e;
    return null === (e = this._pings[this._pings.length - 1]) || void 0 === e ? void 0 : e.value
  }
  getOutboundLossRate() {
    return this._outboundLossRate
  }
  getMediaSessionId() {
    return this._mediaSessionId
  }
  getRTCConnectionId() {
    return this._rtcConnectionId
  }
  getVoiceVersion() {
    return this.voiceVersion
  }
  getRtcWorkerVersion() {
    return this.rtcWorkerVersion
  }
  getDuration() {
    let e = this._connectCompletedTime > 0 ? (0, p.now)() - this._connectCompletedTime : 0;
    return e > 0 ? e : 0
  }
  getPacketStats() {
    var e;
    return null === (e = this._voiceQuality) || void 0 === e ? void 0 : e.getPacketStats()
  }
  getCreatedTime() {
    return this._createdTime
  }
  getVideoHealthManager() {
    return this._videoHealthManager
  }
  getBandwidthEstimationExperiment() {
    return this._bandwidthEstimationExperiment
  }
  pauseStatsCollectionForUser(e, t) {
    let n = this.getOrCreateVideoQuality();
    if (null == n) {
      this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
      return
    }
    t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e)
  }
  setState(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.stateHistory.update(this.state), this.emit(G.RTCConnectionEvent.State, e, {
      hostname: this.hostname,
      channelId: null != this.rtcServerId ? a(this.rtcServerId).prev().toString() : this.channelId,
      context: this.context,
      rtcLogEphemeralKey: this.rtcLogEphemeralKey
    }, t)
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = this._socket;
    null != i && i.expeditedHeartbeat(e, t, n) && this._backoff.cancel()
  }
  resetBackoff() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = this._socket;
    null != t && t.resetBackoff(e) && this._backoff.cancel()
  }
  setAppBackgrounded(e, t) {
    var n;
    null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setAppBackgrounded(e, t)
  }
  setSelectedParticipant(e) {
    var t;
    null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setSelectedParticipant(e)
  }
  setPipOpen(e) {
    var t;
    null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setPipOpen(e)
  }
  setRtcLogMarker(e) {
    var t;
    null === (t = this._connection) || void 0 === t || t.setRtcLogMarker(e)
  }
  setClipRecordUser(e, t, n) {
    var i;
    null === (i = this._connection) || void 0 === i || i.setClipRecordUser(e, t, n)
  }
  set channelId(e) {
    this._channelId = e, this.channelIds.add(e)
  }
  get channelId() {
    return this._channelId
  }
  _cleanupSocket() {
    let e = this._socket;
    null != e && (e.close(), e.removeAllListeners(), this._socket = null)
  }
  _chooseExperiments(e) {
    let t = [];
    if (this._recordingEnabled && t.push("connection_log"), O.default.supports(W.Features.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"), 0 !== this._supportedBandwidthEstimationExperiments.length) {
      let {
        enabled: e,
        fullname: n
      } = I.default.getConfig(!0, this._supportedBandwidthEstimationExperiments);
      e && t.push(n)
    }
    this._selectedExperiments = t
  }
  _handleConnecting(e) {
    null != this.endpoint && this.logger.info("Connecting to RTC server ".concat(this.endpoint, ", rtc-connection-id: ").concat(this.getRTCConnectionId())), this.setState(Y.RTCConnectionStates.CONNECTING)
  }
  _handleConnect(e) {
    var t, n;
    let i = this.token;
    if (null == i) throw Error("RTCConnection._handleConnect(...): Token is missing.");
    this.logger.info("Connected to RTC server."), e.identify({
      serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
      userId: this.userId,
      sessionId: this.sessionId,
      token: i,
      maxSecureFramesVersion: O.default.getSupportedSecureFramesProtocolVersion(this.guildId),
      video: O.default.supports(W.Features.VIDEO),
      streamParameters: O.default.getVideoStreamParameters(this.context)
    }), this.setState(Y.RTCConnectionStates.AUTHENTICATING)
  }
  _handleDisconnect(e, t, n, i) {
    var r, s, a, o, l;
    this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(n, ", reason: ").concat(i, ", state: ").concat(this.state)), !t && this._connecting && !this._encountered_socket_failure && (P.default.track(Y.AnalyticEvents.VOICE_CONNECTION_SOCKET_FAILURE, {
      ...this._getAnalyticsProperties(),
      hostname: this.hostname,
      connect_count: this._connectCount,
      code: n,
      reason: i
    }), this._encountered_socket_failure = !0);
    let u = "Force Close" !== i;
    if (u) {
      let e = this._backoff.fail(this.reconnect);
      this.logger.warn("Disconnect was not clean! reason=".concat(i, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
    }
    if (this.state !== Y.RTCConnectionStates.DISCONNECTED) {
      let e = this._videoQuality;
      if (null != e && this.context === W.MediaEngineContextTypes.DEFAULT) {
        if (e.stop(), this._sentVideo) {
          let t = e.getOutboundStats();
          t.forEach(t => {
            var n;
            let r = null !== (n = t.num_frames) && void 0 !== n ? n : 0;
            r > 0 && P.default.track(Y.AnalyticEvents.VIDEO_STREAM_ENDED, {
              ...this._getAnalyticsProperties(),
              media_session_id: this.getMediaSessionId(),
              sender_user_id: this.userId,
              reason: i,
              participant_type: "sender",
              guild_region: y.default.getRegion(this.hostname),
              hostname: this.hostname,
              ...t,
              ...e.getNetworkStats(),
              ...e.getCodecUsageStats("sender", this.userId),
              ...this._soundshareStats.getStats(),
              device_performance_class: (0, T.getMediaPerformanceClass)()
            })
          })
        }
        let t = e.getInboundParticipants();
        t.forEach(t => {
          var n;
          let r = e.getInboundStats(t),
            s = null !== (n = null == r ? void 0 : r.num_frames) && void 0 !== n ? n : 0;
          s > 0 && P.default.track(Y.AnalyticEvents.VIDEO_STREAM_ENDED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            sender_user_id: t,
            reason: i,
            participant_type: "receiver",
            guild_region: y.default.getRegion(this.hostname),
            hostname: this.hostname,
            ...r,
            ...e.getNetworkStats(),
            ...e.getCodecUsageStats("receiver", t)
          })
        })
      }
      let t = y.default.shouldIncludePreferredRegion() ? y.default.getPreferredRegion() : null,
        n = O.default.getSettings(),
        r = N.default.getChannel(this.channelId);
      P.default.track(Y.AnalyticEvents.VOICE_DISCONNECT, {
        ...this._getAnalyticsProperties(),
        hostname: this.hostname,
        port: this.port,
        protocol: this.protocol,
        reconnect: u,
        reason: i,
        duration: this.getDuration(),
        ...null != this._voiceQuality ? this._voiceQuality.getMosStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null,
        ...null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null,
        ...null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null,
        media_session_id: this.getMediaSessionId(),
        channel_bitrate: null != r ? r.bitrate : null,
        cloudflare_best_region: t,
        connect_count: this._connectCount,
        ping_average: Math.round(this.getAveragePing()),
        ping_bad_count: this._pingBadCount,
        ping_timeout: this._pingTimeouts.length,
        input_detected: this._inputDetected,
        no_input_detected_notice: O.default.getNoInputDetectedNotice(),
        audio_input_mode: n.mode,
        automatic_audio_input_sensitivity_enabled: n.modeOptions.autoThreshold,
        audio_input_sensitivity: n.modeOptions.threshold,
        echo_cancellation_enabled: n.echoCancellation,
        noise_suppression_enabled: n.noiseSuppression,
        noise_cancellation_enabled: n.noiseCancellation,
        automatic_gain_control_enabled: n.automaticGainControl,
        voice_output_volume: n.outputVolume,
        encryption_mode: this._encryptionMode,
        channel_count: this.channelIds.size,
        input_device: this.getInputDeviceName(),
        output_device: this.getOutputDeviceName(),
        device_performance_class: (0, T.getMediaPerformanceClass)(),
        num_fast_udp_reconnects: null != this._connection ? null === (l = this._connection) || void 0 === l ? void 0 : l.getNumFastUdpReconnects() : null,
        parent_media_session_id: this.parentMediaSessionId
      });
      let s = this.getMediaSessionId();
      O.default.getMediaEngine().getCodecSurvey().then(e => {
        let t = JSON.parse(e);
        if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error("codec survey is not available");
        P.default.track(Y.AnalyticEvents.VOICE_CODEC_DETECTED, {
          ...t,
          rtc_connection_id: this.getRTCConnectionId(),
          media_session_id: s
        })
      }).catch(e => {
        this.logger.warn(e)
      })
    }
    if (this._pingTimeouts = [], this._pings = [], this._connectCompletedTime = 0, this._pingBadCount = 0, this._inputDetected = !1, this._mediaSessionId = null, null === (r = this._voiceQuality) || void 0 === r || r.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, null === (s = this._voiceDuration) || void 0 === s || s.stop(), this._voiceDuration = null, null === (a = this._videoQuality) || void 0 === a || a.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (o = this._localMediaSinkWantsManager) || void 0 === o || o.reset(), null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.setState(Y.RTCConnectionStates.DISCONNECTED, {
      willReconnect: u
    })
  }
  _handleResuming(e) {
    var t, n;
    null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking()
  }
  _handleReady(e, t, n, i, r, s, o) {
    var l;
    this.setState(Y.RTCConnectionStates.RTC_CONNECTING), this.port = n, null != o && this._chooseExperiments(o), 0 === s.length && s.push({
      type: W.MediaTypes.VIDEO,
      rid: "100",
      ssrc: r + 1,
      rtxSsrc: r + 2,
      quality: 100,
      active: !1
    });
    let u = O.default.getMediaEngine(),
      c = u.connect(this.context, {
        userId: this.userId,
        channelId: null != this.rtcServerId ? a(this.rtcServerId).prev().toString() : this._channelId,
        guildId: null !== (l = this.rtcServerId) && void 0 !== l ? l : this.guildId
      }, {
        ssrc: r,
        address: t,
        port: n,
        modes: i,
        experiments: this._selectedExperiments,
        streamParameters: s,
        qosEnabled: O.default.getQoS(),
        ...this._getExtraConnectionOptions()
      });
    if (c.setUseElectronVideo(u.supports(W.Features.ELECTRON_VIDEO)), O.default.supports(W.Features.IMAGE_QUALITY_MEASUREMENT)) {
      let {
        enabled: e,
        measurement: t
      } = v.default.getConfig(!0), {
        extraOptions: n
      } = A.default.getCurrentConfig({
        location: "handleReady"
      }, {
        autoTrackExposure: !0
      });
      e && c.setVideoQualityMeasurement(t + n)
    }
    let d = ["unk"];
    if (O.default.supports(W.Features.AMD_EXPERIMENTAL_RATE_CONTROL) && d.push("amdRelaxRc"), this.context === W.MediaEngineContextTypes.STREAM) {
      let {
        nvMediumVbvSizeMs: e
      } = C.default.getCurrentConfig({
        location: "handleReady"
      }, {
        autoTrackExposure: !0
      });
      e > 0 && d.push("nvRelaxRc=" + e)
    }
    c.setVideoEncoderExperiments(d.join(",")), c.on(h.BaseConnectionEvent.Speaking, (e, t, n) => {
      this.userId === e && this.sendSpeaking(t, n), this.emit(G.RTCConnectionEvent.Speaking, e, t)
    }), c.on(h.BaseConnectionEvent.Video, (e, t, n, i, r, s) => {
      this._handleVideoStreamId({
        userId: e,
        streamId: t,
        audioSsrc: n,
        videoSsrc: null != i ? i : 0,
        rtxSsrc: r,
        videoStreamParameters: s
      }), this.userId === e && (this.sendVideo(null != n ? n : 0, null != i ? i : 0, null != r ? r : 0, s), null == s || s.forEach(t => {
        100 === t.quality && this.emit(G.RTCConnectionEvent.VideoSourceQualityChanged, this.guildId, this.channelId, e, t.maxResolution, t.maxFrameRate, this.context)
      }))
    }), c.on(h.BaseConnectionEvent.FirstFrame, (e, t, n) => {
      null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(G.RTCConnectionEvent.Video, this.guildId, this.channelId, e, n, this.rtcServerId))
    }), c.on(h.BaseConnectionEvent.Silence, e => {
      this._inputDetected = this._inputDetected || !e
    }), c.on(h.BaseConnectionEvent.Connected, (i, r) => {
      if (this.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== this._socket) {
        this.logger.warn("Socket mismatch, disconnecting");
        return
      }
      switch (this._voiceQuality = new j.default(c), this._voiceQuality.start(), this._voiceQualityPeriodicStatsSequenceId = 0, this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 3e5), this._voiceDuration = new H.default(this.userId, c), this._voiceDuration.start(), this.protocol = i, i) {
        case "udp":
          this.logger.info("Sending UDP info to RTC server.", r, this._selectedExperiments), e.once(k.SocketEvent.Encryption, (e, t) => {
            c === this._connection && (c.setEncryption(e, t), this._encryptionMode = e)
          }), e.selectProtocol(i, this.getRTCConnectionId(), r, this._selectedExperiments);
          break;
        case "webrtc":
          this.logger.info("Sending local SDP to RTC server."), e.once(k.SocketEvent.SDP, this._handleSDP.bind(this)), e.selectProtocol(i, this.getRTCConnectionId(), r);
          break;
        default:
          this.logger.error("Unable to determine protocol.");
          return
      }
      this._backoff.succeed()
    }), c.on(h.BaseConnectionEvent.VideoEncoderFallback, t => {
      let n = t.filter(e => "video" === e.type).map(e => e.name).join(",");
      this.logger.info("The originally selected video encoder is not working, fallback to the other available encoders:" + n), e.updateSession({
        codecs: t
      })
    }), c.on(h.BaseConnectionEvent.Error, t => {
      if (e !== this._socket) return;
      let n = y.default.shouldIncludePreferredRegion() ? y.default.getPreferredRegion() : null;
      this.logger.error("Error occurred while connecting to RTC server: ".concat(t)), P.default.track(Y.AnalyticEvents.VOICE_CONNECTION_FAILURE, {
        ...this._getAnalyticsProperties(),
        hostname: this.hostname,
        port: this.port,
        protocol: this.protocol,
        error: t,
        cloudflare_best_region: n,
        connect_count: this._connectCount
      })
    }), c.on(h.BaseConnectionEvent.ConnectionStateChange, t => {
      if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)), e !== this._socket) return;
      let n = this.state;
      switch (t) {
        case W.ConnectionStates.DISCONNECTED:
          this.setState(Y.RTCConnectionStates.RTC_DISCONNECTED);
          break;
        case W.ConnectionStates.CONNECTING:
          this.setState(Y.RTCConnectionStates.RTC_CONNECTING);
          break;
        case W.ConnectionStates.CONNECTED:
          this.setState(Y.RTCConnectionStates.RTC_CONNECTED);
          break;
        case W.ConnectionStates.NO_ROUTE:
          this.setState(Y.RTCConnectionStates.NO_ROUTE);
          break;
        case W.ConnectionStates.ICE_CHECKING:
          this.setState(Y.RTCConnectionStates.ICE_CHECKING);
          break;
        case W.ConnectionStates.DTLS_CONNECTING:
          this.setState(Y.RTCConnectionStates.DTLS_CONNECTING)
      }
      if (n === Y.RTCConnectionStates.RTC_CONNECTING && this.state === Y.RTCConnectionStates.RTC_DISCONNECTED ? this.reconnect() : this.state === Y.RTCConnectionStates.NO_ROUTE && this._backoff.fail(this.reconnect), this.state === Y.RTCConnectionStates.RTC_CONNECTED) {
        var i;
        let e = y.default.shouldIncludePreferredRegion() ? y.default.getPreferredRegion() : null;
        this._connecting && P.default.track(Y.AnalyticEvents.VOICE_CONNECTION_SUCCESS, {
          ...this._getAnalyticsProperties(),
          hostname: this.hostname,
          port: this.port,
          protocol: this.protocol,
          cloudflare_best_region: e,
          connect_time: (0, p.now)() - (this._connected ? this._connectStartTime : this._createdTime),
          connect_count: this._connectCount,
          audio_subsystem: O.default.getMediaEngine().getAudioSubsystem(),
          audio_layer: O.default.getMediaEngine().getAudioLayer(),
          media_session_id: this.getMediaSessionId(),
          ...this.stateHistory.getVoiceConnectionSuccessStats()
        }), null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setConnection(c), this._connectCompletedTime = (0, p.now)(), this._connected = !0, this._connecting = !1, this._encountered_socket_failure = !1
      } else n === Y.RTCConnectionStates.RTC_CONNECTED && this.stateHistory.reset(this.state)
    }), c.on(h.BaseConnectionEvent.Ping, this._handlePing.bind(this)), c.on(h.BaseConnectionEvent.PingTimeout, this._handlePingTimeout.bind(this)), c.on(h.BaseConnectionEvent.OutboundLossRate, this._handleOutboundLossRate.bind(this)), c.on(h.BaseConnectionEvent.SoundshareTrace, this._handleSoundshareTrace.bind(this)), c.on(h.BaseConnectionEvent.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)), c.on(h.BaseConnectionEvent.Stats, U.default.create()), c.on(h.BaseConnectionEvent.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)), c.setRemoteVideoSinkWants(this._remoteVideoSinkWants), this._connection = c
  }
  _handleSpeaking(e, t, n, i) {
    let r = this._connection;
    if (null != r && this.userId !== t) {
      var s;
      i !== W.SpeakingFlags.NONE && (r.createUser(t, n), _.default.dispatch({
        type: "RTC_CONNECTION_USER_CREATE",
        userId: t,
        context: this.context
      })), null === (s = this._localMediaSinkWantsManager) || void 0 === s || s.setAudioSSRC(t, n)
    }
  }
  handleFlags(e, t) {
    this.emit(G.RTCConnectionEvent.Flags, e, t)
  }
  handlePlatform(e, t) {
    this.emit(G.RTCConnectionEvent.Platform, e, t, this.channelId)
  }
  getOrCreateVideoQuality() {
    if (null != this._connection && null == this._videoQuality) {
      var e, t, n, i;
      this._videoQuality = new B.VideoQuality(this._connection), this._videoQuality.start()
    }
    return this._videoQuality
  }
  _handleVideoStreamId(e) {
    var t, n, i, r;
    let {
      userId: s,
      streamId: a,
      videoSsrc: o,
      videoStreamParameters: l
    } = e;
    if (this.emit(G.RTCConnectionEvent.Video, this.guildId, this.channelId, s, a, this.rtcServerId), null != a && null == this.getOrCreateVideoQuality() && this.logger.error("_handleVideoStreamId: Unable to create videoQuality."), null != this._videoQuality && this.userId === s && l.forEach(e => {
        var t, n;
        let i = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
        i > 0 && !0 === e.active && (null === (n = this._videoQuality) || void 0 === n || n.setOutboundSsrc(i))
      }), this.userId !== s) {
      let e = 0 === o && null === a,
        r = !e || e && (null === (t = this._videoQuality) || void 0 === t ? void 0 : t.getInboundParticipants().includes(s));
      r && (null === (n = this._videoQuality) || void 0 === n || n.setInboundUser(s, o), null === (i = this._videoHealthManager) || void 0 === i || i.createUser(s))
    }
    null != this._connection && this.userId !== s && (null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setStreamId(s, a))
  }
  _handleLocalVideoDisabled(e, t) {
    if (this.userId !== e) {
      let n = this.getOrCreateVideoQuality();
      if (null == n) {
        this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
        return
      }
      n.setUserVideoDisabled(e, t)
    }
  }
  _handleRemoteStreamsReady(e) {
    let t = (0, p.now)() - this._connectStartTime;
    P.default.track(Y.AnalyticEvents.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
      ...this._getAnalyticsProperties(),
      number_of_users: e,
      duration_ms: t
    })
  }
  _handleVideo(e, t, n, i, r) {
    let s = this._connection;
    if (null != s && this.userId !== t) {
      if (null != this._localMediaSinkWantsManager) {
        this._localMediaSinkWantsManager.setAudioSSRC(t, n);
        let e = r.map(e => ({
          type: W.MediaTypes.VIDEO,
          rid: e.rid,
          ssrc: e.ssrc,
          rtxSsrc: e.rtxSsrc,
          quality: e.quality,
          active: i > 0
        }));
        0 === e.length && e.push({
          type: W.MediaTypes.VIDEO,
          rid: "100",
          ssrc: i,
          rtxSsrc: i + 1,
          quality: 100,
          active: i > 0
        }), this._localMediaSinkWantsManager.setVideoSSRCs(t, e)
      } else s.createUser(t, n, [i]);
      null == r || r.forEach(e => {
        100 === e.quality && this.emit(G.RTCConnectionEvent.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context)
      })
    }
  }
  _handleControlPing(e) {
    !O.default.supports(W.Features.NATIVE_PING) && this._handlePing(e)
  }
  _handlePing(e) {
    if (void 0 !== e) {
      for (this._pings.push({
          time: Date.now(),
          value: e
        }); this._pings.length >= 200;) this._pings.shift();
      e > 500 && this._pingBadCount++, this.emit(G.RTCConnectionEvent.Ping, this._pings, this.quality)
    }
  }
  _handlePingTimeout(e, t) {
    this._pingTimeouts.push(e);
    let n = this._pingTimeouts.length;
    n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t)
  }
  _handleOutboundLossRate(e) {
    this._outboundLossRate = e, this.emit(G.RTCConnectionEvent.OutboundLossRate, e)
  }
  _handleSoundshareTrace(e) {
    this._soundshareStats.traceEvent(void 0, e)
  }
  _getAnalyticsProperties() {
    let e = N.default.getChannel(this.channelId),
      t = null != e ? e.type : null;
    return {
      guild_id: this.guildId,
      channel_id: this.channelId,
      channel_type: t,
      rtc_connection_id: this.getRTCConnectionId(),
      context: this.context,
      voice_backend_version: this.voiceVersion,
      rtc_worker_backend_version: this.rtcWorkerVersion
    }
  }
  _handleClientDisconnect(e) {
    var t, n, i;
    let r = this._videoQuality;
    if (null != r && this.context === W.MediaEngineContextTypes.DEFAULT) {
      let t = r.getInboundStats(e),
        s = null !== (n = null == t ? void 0 : t.num_frames) && void 0 !== n ? n : 0;
      null != t && s > 0 && (P.default.track(Y.AnalyticEvents.VIDEO_STREAM_ENDED, {
        ...this._getAnalyticsProperties(),
        media_session_id: this.getMediaSessionId(),
        sender_user_id: e,
        reason: "User disconnected",
        participant_type: "receiver",
        guild_region: y.default.getRegion(this.hostname),
        hostname: this.hostname,
        ...t,
        ...r.getNetworkStats(),
        ...r.getCodecUsageStats("receiver", e)
      }), r.destroyUser(e), null === (i = this._videoHealthManager) || void 0 === i || i.deleteUser(e))
    }
    let s = this._connection;
    null != s && s.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e)
  }
  _handleCodecs(e, t) {
    let n = this._connection;
    null != n && null != this.protocol ? n.setCodecs(null != e && "" !== e ? e : W.Codecs.OPUS, null != t && "" !== t ? t : W.Codecs.H264, this.context) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
  }
  _handleSDP(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
  }
  async _handleMediaSessionId(e) {
    this._mediaSessionId = e, this.logger.info("Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(this.getRTCConnectionId()));
    let t = await (0, g.default)();
    P.default.track(Y.AnalyticEvents.MEDIA_SESSION_JOINED, {
      ...this._getAnalyticsProperties(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      raw_thermal_state: t
    }), _.default.dispatch({
      type: "MEDIA_SESSION_JOINED",
      mediaSessionId: this.getMediaSessionId(),
      context: this.context
    })
  }
  _handleMediaSinkWants(e) {
    let t = this._connection;
    this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))), this._remoteVideoSinkWants = e, null == t || t.setRemoteVideoSinkWants(e)
  }
  _handleCodeVersion(e, t) {
    this.voiceVersion = e, this.rtcWorkerVersion = t
  }
  _handleKeyframeInterval(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn("Cannot set keyframe interval on connection with protocol:", this.protocol)
  }
  _handleUpdateRtcLog(e) {
    var t;
    this.rtcLogEphemeralKey = e, null === (t = this._connection) || void 0 === t || t.setRtcLogEphemeralKey(e)
  }
  _handleBandwidthEstimationExperiment(e) {
    this._bandwidthEstimationExperiment = e;
    let t = I.default.getMediaEngineExperiments(e);
    if (null !== t && 0 !== t.length) {
      var n;
      null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t)
    }
  }
  _trackSecureFrameTransition(e, t) {
    P.default.track(Y.AnalyticEvents.SECURE_FRAMES_TRANSITION, {
      ...this._getAnalyticsProperties(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: this.userId,
      transition_id: e,
      protocol_version: t
    })
  }
  _handleSecureFramesInit(e) {
    var t, n;
    e > 0 && this.logger.info("Secure frames init with protocol version: ".concat(e)), e >= 100 ? (null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch("1", e, this.channelId), this._sendMLSKeyPackage()) : null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(0, e, () => {
      var t;
      e > 0 && this._trackSecureFrameTransition(0, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(0)
    })
  }
  _handleSecureFramesPrepareTransition(e, t) {
    var n;
    this.logger.info("Preparing secure frames transition: ".concat(e, ", protocol version: ").concat(t)), null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(e, t, () => {
      this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t)
    })
  }
  _handleSecureFramesPrepareEpoch(e, t) {
    var n;
    this.logger.info("Preparing secure frames epoch: ".concat(e, ", protocol version: ").concat(t));
    let i = e.toString();
    null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(i, t, this.channelId), "1" === i && this._sendMLSKeyPackage()
  }
  _sendMLSKeyPackage() {
    var e;
    null === (e = this._connection) || void 0 === e || e.getMLSKeyPackage(e => {
      var t;
      this.logger.info("Got MLS key package, sending to RTC server"), null === (t = this._socket) || void 0 === t || t.sendMLSKeyPackage(e)
    })
  }
  _maybeSendSecureFramesTransitionReady(e) {
    if (0 !== e) {
      var t;
      this.logger.info("Sending secure frames ready for transition ID ".concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e)
    }
  }
  _handleSecureFramesExecuteTransition(e) {
    var t;
    this.logger.info("Executing secure frames transition: ".concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e)
  }
  _handleMLSExternalSenderPackage(e) {
    var t;
    this.logger.info("Received MLS external sender package"), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e)
  }
  _handleMLSProposals(e, t) {
    var n;
    this.logger.info("Received MLS proposals"), null === (n = this._connection) || void 0 === n || n.processMLSProposals(t, t => {
      this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(t)
    })
  }
  _handleMLSPrepareCommitTransition(e, t) {
    var n;
    this.logger.info("Received MLS commit for transition ID ".concat(e)), null === (n = this._connection) || void 0 === n || n.prepareMLSCommitTransition(e, t, (t, n) => {
      t ? (this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n)) : this.logger.warn("Failed to process MLS commit for transition ID ".concat(e))
    })
  }
  _handleMLSWelcome(e, t) {
    var n;
    this.logger.info("Received MLS welcome for transition ID ".concat(e)), null === (n = this._connection) || void 0 === n || n.processMLSWelcome(e, t, (t, n) => {
      t && (this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n))
    })
  }
  _getExtraConnectionOptions() {
    return {}
  }
  shouldReportPeriodicStats(e) {
    if (e.length > 10) return !1;
    let {
      enableSendingVoiceStats: t,
      percentageOfCalls: n
    } = R.default.getCurrentConfig({
      location: "104dee_3"
    }, {
      autoTrackExposure: !1
    });
    if (!t) return !1;
    let i = this.getMediaSessionId();
    if (null == i) return !1;
    let r = l.v3(i);
    return !!(r % 100 <= n) || !1
  }
  getInputDeviceName() {
    var e;
    let t = O.default.getInputDeviceId(),
      n = null === (e = O.default.getInputDevices()[t]) || void 0 === e ? void 0 : e.name;
    return n
  }
  getOutputDeviceName() {
    var e;
    let t = O.default.getOutputDeviceId(),
      n = null === (e = O.default.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name;
    return n
  }
  getGoLiveSource() {
    return O.default.getGoLiveSource()
  }
  constructor({
    userId: e,
    sessionId: t,
    guildId: n,
    channelId: i,
    context: r = W.MediaEngineContextTypes.DEFAULT,
    rtcServerId: s,
    parentMediaSessionId: a
  }) {
    var o, l;
    if (super(), this.reconnect = () => {
        let e = this._socket;
        null != e && (this._connected && (this._connectStartTime = (0, p.now)()), !this._connecting && (this._trackVoiceConnectionConnecting(), this._connecting = !0, this._encountered_socket_failure = !1), this._connectCount++, e.close(), e.connect())
      }, this._handleNetworkOnline = () => {
        this.expeditedHeartbeat(5e3, "network detected online.")
      }, this._handleNetworkOffline = () => {
        this.expeditedHeartbeat(15e3, "network detected offline.", !1)
      }, this._handlePowerResume = () => {
        this.expeditedHeartbeat(5e3, "power monitor resumed")
      }, this._handleVoiceQualityPeriodicsStats = () => {
        if (null != this._voiceQuality) {
          let e = this._voiceQuality.getPeriodicStats();
          if (this.shouldReportPeriodicStats(e))
            for (let t of e) P.default.track(Y.AnalyticEvents.VOICE_QUALITY_PERIODIC_STATS, {
              ...this._getAnalyticsProperties(),
              media_session_id: this.getMediaSessionId(),
              sender_user_id: t.userId,
              hostname: this.hostname,
              frame_op_silent: t.silent,
              frame_op_normal: t.normal,
              frame_op_merged: t.merged,
              frame_op_expanded: t.expanded,
              frame_op_accelerated: t.accelerated,
              frame_op_preemptive_expanded: t.preemptiveExpanded,
              frame_op_cng: t.cng,
              accelerate_rate: t.accelerateRate,
              expand_rate: t.expandRate,
              preemptive_expand_rate: t.preemptiveExpandRate,
              speech_expand_rate: t.speechExpandRate,
              duration_ms: t.durationMs,
              sequence_id: this._voiceQualityPeriodicStatsSequenceId,
              input_device: this.getInputDeviceName(),
              output_device: this.getOutputDeviceName(),
              ping_average: Math.round(this.getAveragePing()),
              ping_bad_count: this._pingBadCount,
              parent_media_session_id: this.parentMediaSessionId
            });
          this._voiceQualityPeriodicStatsSequenceId++
        }
      }, this._trackVoiceConnectionConnecting = () => {
        let e = N.default.getChannel(this.channelId),
          t = null != e ? e.type : null;
        P.default.track(Y.AnalyticEvents.VOICE_CONNECTION_CONNECTING, {
          guild_id: this.guildId,
          channel_id: this.channelId,
          rtc_connection_id: this.getRTCConnectionId(),
          hostname: this.hostname,
          connect_count: this._connectCount,
          context: this.context,
          channel_type: t
        })
      }, this.context = r, this.logger = new m.default("RTCConnection(".concat(null !== (o = null != s ? s : n) && void 0 !== o ? o : i, ", ").concat(this.context, ")")), this.userId = e, this.sessionId = t, this.guildId = n, this._channelId = i, this.channelIds = new Set([i]), this.rtcServerId = s, this.parentMediaSessionId = a, this._endpoint = null, this.hostname = null, this.port = null, this.token = null, this.voiceVersion = null, this.rtcWorkerVersion = null, this.state = Y.RTCConnectionStates.AWAITING_ENDPOINT, this.stateHistory = new w.StateHistory(this.state), this._socket = null, this._backoff = new f.default(1e3, 1e4), this._destroyed = !1, this._pings = [], this._pingBadCount = 0, this._pingTimeouts = [], this._mediaSessionId = null, this._voiceQuality = null, this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._voiceDuration = null, this._videoQuality = null, this._videoHealthManager = null, this._sentVideo = !1, this._outboundLossRate = null, this._createdTime = (0, p.now)(), this._connectStartTime = 0, this._connectCompletedTime = 0, this._rtcConnectionId = (0, d.v4)(), this._connectCount = 0, this._connected = !1, this._connecting = !1, this._encountered_socket_failure = !1, this._inputDetected = !1, this._selectedExperiments = [], r === W.MediaEngineContextTypes.DEFAULT) {
      let t = O.default.supports(W.Features.FIRST_FRAME_CALLBACK) && O.default.supports(W.Features.REMOTE_USER_MULTI_STREAM),
        n = (null === (l = N.default.getChannel(this.channelId)) || void 0 === l ? void 0 : l.type) === Y.ChannelTypes.GUILD_STAGE_VOICE;
      this._localMediaSinkWantsManager = new x.default(e, n, t), this._localMediaSinkWantsManager.on(x.RTCMediaSinkWantsManagerEvent.Update, e => {
        if (this.state === Y.RTCConnectionStates.RTC_CONNECTED && null != this._socket) {
          var t;
          this.logger.info("Media sink wants: ".concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e)
        }
      }), this._localMediaSinkWantsManager.on(x.RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, (e, t, n) => {
        var i;
        null === (i = this._connection) || void 0 === i || i.createUser(e, t, n)
      })
    }
    this._remoteVideoSinkWants = x.DEFAULT_WANTS_FULL, D.default.shouldRecordNextConnection() ? (this._recordingEnabled = !0, S.setShouldRecordNextConnection(!1)) : this._recordingEnabled = !1, this._soundshareStats = new F.default, L.default.addOnlineCallback(this._handleNetworkOnline), L.default.addOfflineCallback(this._handleNetworkOffline), (0, b.isDesktop)() && (this.powerMonitorListener = M.default.remotePowerMonitor.on("resume", this._handlePowerResume)), this._supportedBandwidthEstimationExperiments = [], this._bandwidthEstimationExperiment = null, O.default.getMediaEngine().getSupportedBandwidthEstimationExperiments(e => {
      this._supportedBandwidthEstimationExperiments = e
    })
  }
}