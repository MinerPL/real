"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("506083"), n("70102"), n("222007"), n("369198");
var i, r = n("383536"),
  s = n.n(r),
  a = n("811022"),
  o = n("595275"),
  l = n("662697"),
  u = n.n(l),
  c = n("947279"),
  d = n("773364"),
  f = n("953161"),
  E = n("793722"),
  h = n("657869"),
  p = n("560550"),
  _ = n("820127"),
  S = n("861001"),
  m = n("899676"),
  T = n("13379"),
  g = n("238372"),
  I = n("232125"),
  C = n("353927"),
  v = n("53452");
let A = new a.default("MediaEngineWebRTC");
i = class extends o.default {
  destroy() {
    null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(e => e.destroy()), this.emit(d.MediaEngineEvent.Destroy), this.removeAllListeners()
  }
  interact() {
    !this.interacted && (document.createElement("audio").play(), this.interacted = !0), this.eachConnection(e => e.interact())
  }
  static supported() {
    return !__OVERLAY__ && (v.BROWSER_SUPPORTS_VOICE && null != window.AudioContext && null != window.RTCPeerConnection ? (n("231638"), !0) : (A.info("WebRTC is not supported on", s.name, s.version), !1))
  }
  supported() {
    return !0
  }
  supports(e) {
    switch (e) {
      case C.Features.AUDIO_INPUT_DEVICE:
        return S.CAN_SET_DEVICES;
      case C.Features.AUDIO_OUTPUT_DEVICE:
        return S.CAN_SET_OUTPUT_DEVICES;
      case C.Features.VIDEO:
        return v.BROWSER_SUPPORTS_VIDEO;
      case C.Features.DESKTOP_CAPTURE:
        var t;
        return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
      case C.Features.VOICE_PROCESSING:
        return "Chrome" === s.name;
      case C.Features.NATIVE_PING:
      case C.Features.DIAGNOSTICS:
        return v.BROWSER_SUPPORTS_DIAGNOSTICS;
      case C.Features.DESKTOP_CAPTURE_APPLICATIONS:
      case C.Features.LOOPBACK:
      case C.Features.NOISE_SUPPRESSION:
      case C.Features.AUTOMATIC_GAIN_CONTROL:
        return "Safari" !== s.name;
      case C.Features.NOISE_CANCELLATION:
        return u();
      case C.Features.QOS:
      case C.Features.ATTENUATION:
      case C.Features.AUTOMATIC_VAD:
      case C.Features.LEGACY_AUDIO_SUBSYSTEM:
      case C.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
      case C.Features.DEBUG_LOGGING:
      case C.Features.VOICE_PANNING:
      case C.Features.AUTO_ENABLE:
      case C.Features.DESKTOP_CAPTURE_FORMAT:
      case C.Features.VIDEO_HOOK:
      case C.Features.OPEN_H264:
      case C.Features.AEC_DUMP:
      case C.Features.DISABLE_VIDEO:
      case C.Features.CONNECTION_REPLAY:
      case C.Features.SIMULCAST:
      case C.Features.SCREEN_CAPTURE_KIT:
      default:
        return !1
    }
  }
  getAudioContext() {
    return null == this._audioContext && (this._audioContext = new AudioContext), this._audioContext
  }
  connect(e, t, n) {
    let {
      ssrc: i,
      address: r,
      port: s,
      modes: a,
      streamUserId: o,
      streamParameters: l
    } = n, u = (0, p.makeConnection)(e, t, this.getAudioContext(), l);
    return u.streamUserId = o, u.setOutputVolume(this.outputVolume), u.setSinkId(this.sinkId), u.once(c.BaseConnectionEvent.Destroy, e => this.connections.delete(e)), u.on(c.BaseConnectionEvent.Silence, e => this.emit(d.MediaEngineEvent.Silence, e)), u.on(c.BaseConnectionEvent.DesktopSourceEnd, this.handleDesktopSourceEnd), u.on(c.BaseConnectionEvent.AudioPermission, this.handleAudioPermission), u.on(c.BaseConnectionEvent.VideoPermission, this.handleVideoPermission), this.interacted && u.interact(), e === C.MediaEngineContextTypes.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()), this.connections.add(u), this.emit(d.MediaEngineEvent.Connection, u), u
  }
  findConnection(e) {
    return Array.from(this.connections).find(t => null == e || t.context === e)
  }
  eachConnection(e, t) {
    this.connections.forEach(n => {
      (null == t || n.context === t) && e(n)
    })
  }
  enable() {
    return null == this.enablePromise && (this.enablePromise = this._enable().finally(() => {
      this.enablePromise = null
    })), this.enablePromise
  }
  async _enable() {
    if (this.enabled) return;
    await this.getAudioContext().audioWorklet.addModule(m);
    let e = new h.default(this.getAudioContext());
    e.on("permission", this.handleAudioPermission);
    try {
      var t;
      await e.enable(), "Firefox" === s.name && await this.handleDeviceChange(), this.enabled = !0, this.eachConnection(e => e.input.enableAudioInput(), C.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable()
    } finally {
      e.destroy()
    }
  }
  setInputVolume(e) {}
  setOutputVolume(e) {
    this.outputVolume = e, this.connections.forEach(t => t.setOutputVolume(e))
  }
  getAudioInputDevices() {
    return (0, S.getAudioInputDevices)()
  }
  setAudioInputDevice(e) {
    var t, n;
    this.sourceId = e, this.eachConnection(t => t.setAudioSource(e), C.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e)
  }
  getAudioOutputDevices() {
    return (0, S.getAudioOutputDevices)()
  }
  setAudioOutputDevice(e) {
    var t;
    this.sinkId = e, this.connections.forEach(t => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e)
  }
  getVideoInputDevices() {
    return (0, S.getVideoInputDevices)()
  }
  setVideoInputDevice(e) {
    this.eachConnection(t => t.setVideoSource(e), C.MediaEngineContextTypes.DEFAULT)
  }
  getSupportedVideoCodecs(e) {
    e([])
  }
  getCodecCapabilities(e) {
    e("")
  }
  async getDesktopSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = await _.default.get(e, t);
    return this.pendingDesktopInputs[n.id] = n, n.id
  }
  getDesktopSources() {
    return Promise.reject(Error("NO_STREAM"))
  }
  getScreenPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  getWindowPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setClipBufferLength(e) {}
  saveClip(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  saveClipForUser(e, t, n) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  updateClipMetadata(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  exportClip(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setGoLiveSource(e, t) {
    if (null == e) this.eachConnection(e => e.setDesktopInput(null), t);
    else if (null != e.desktopDescription && null != this.findConnection(t)) {
      let n = this.pendingDesktopInputs[e.desktopDescription.id];
      delete this.pendingDesktopInputs[e.desktopDescription.id], null != n && this.eachConnection(e => e.setDesktopInput(n), t)
    }
  }
  setClipsSource(e) {}
  setSoundshareSource(e, t, n) {}
  setAudioSubsystem(e) {}
  getAudioSubsystem() {
    return C.AudioSubsystems.STANDARD
  }
  getAudioLayer() {
    return ""
  }
  getDebugLogging() {
    return !1
  }
  setDebugLogging(e) {}
  writeAudioDebugState() {
    return Promise.reject(Error("Audio debug state is not supported."))
  }
  setExperimentalAdm(e) {}
  setLoopback(e, t) {
    e && null == this.loopback ? (this.enable(), this.loopback = new T.default(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), this.loopback = null)
  }
  getLoopback() {
    return null != this.loopback
  }
  setH264Enabled(e) {}
  setAv1Enabled(e) {}
  setH265Enabled(e) {}
  getCodecSurvey() {
    return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."))
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {}
  createReplayConnection(e, t) {
    throw Error("Connection replay is not supported.")
  }
  setUseDirectVideo(e) {}
  setMaxSyncDelayOverride(e) {}
  rankRtcRegions(e) {
    return Promise.reject(Error("RTC region latency test is not supported."))
  }
  getSoundshareStatus() {
    return Promise.reject(Error("getSoundshareStatus is not supported."))
  }
  enableSoundshare() {
    return Promise.reject(Error("enableSoundshare is not supported."))
  }
  applyMediaFilterSettings(e) {
    return Promise.resolve()
  }
  startLocalAudioRecording() {
    return Promise.reject(Error("startLocalAudioRecording is not supported."))
  }
  stopLocalAudioRecording(e) {}
  speedTester(e, t) {
    throw Error("speedTester is not supported.")
  }
  setHasFullbandPerformance(e) {}
  getSupportedSecureFramesProtocolVersion() {
    return 0
  }
  getSupportedBandwidthEstimationExperiments(e) {
    e([])
  }
  constructor() {
    super(), this.Video = I.default, this.Camera = g.default, this._audioContext = null, this.outputVolume = C.DEFAULT_VOLUME, this.sourceId = C.DEFAULT_DEVICE_ID, this.sinkId = C.DEFAULT_DEVICE_ID, this.enabled = !1, this.connections = new Set, this.interacted = !1, this.loopback = null, this.voiceActivityInput = null, this.pendingDesktopInputs = {}, this.enablePromise = null, this.handleActiveSinksChange = (e, t) => {
      this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
    }, this.handleNewListener = e => {
      switch (e) {
        case d.MediaEngineEvent.DeviceChange:
          null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = () => {
            this.handleDeviceChange()
          }, this.handleDeviceChange());
          break;
        case d.MediaEngineEvent.VoiceActivity:
          null == this.voiceActivityInput && (this.voiceActivityInput = new h.default(this.getAudioContext()), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable())
      }
    }, this.handleRemoveListener = e => {
      switch (e) {
        case d.MediaEngineEvent.DeviceChange:
          var t;
          (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(d.MediaEngineEvent.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
          break;
        case d.MediaEngineEvent.VoiceActivity:
          null != this.voiceActivityInput && 0 === this.listenerCount(d.MediaEngineEvent.VoiceActivity) && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null)
      }
    }, this.handleDeviceChange = () => (0, S.getDevices)().then(e => {
      let [t, n, i] = e;
      return this.emit(d.MediaEngineEvent.DeviceChange, t, n, i)
    }), this.handleVoiceActivity = e => {
      this.emit(d.MediaEngineEvent.VoiceActivity, e, 0)
    }, this.handleDesktopSourceEnd = () => {
      this.emit(d.MediaEngineEvent.DesktopSourceEnd)
    }, this.handleAudioPermission = e => {
      this.emit(d.MediaEngineEvent.AudioPermission, e)
    }, this.handleVideoPermission = e => {
      this.emit(d.MediaEngineEvent.VideoPermission, e)
    }, this.on("newListener", this.handleNewListener), this.on("removeListener", this.handleRemoveListener), (0, E.setActiveSinksChangeCallback)(this.handleActiveSinksChange), (0, f.default)(this)
  }
}