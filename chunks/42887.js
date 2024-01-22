"use strict";
let i, s, r, a;
n.r(t), n.d(t, {
  default: function() {
    return tS
  }
}), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
var o, l, u, d, c = n("627445"),
  f = n.n(c),
  _ = n("917351"),
  h = n.n(_),
  g = n("570277"),
  m = n.n(g),
  E = n("446674"),
  p = n("773364"),
  v = n("95410"),
  S = n("862337"),
  T = n("913144"),
  I = n("49671"),
  C = n("6193"),
  A = n("386045"),
  y = n("18346"),
  N = n("605250"),
  R = n("808122"),
  O = n("733589"),
  D = n("933034"),
  P = n("746800"),
  b = n("584687"),
  L = n("636243"),
  M = n("705500"),
  U = n("238847"),
  k = n("981699"),
  w = n("352705"),
  V = n("140622"),
  G = n("16001"),
  F = n("631508"),
  x = n("368765"),
  B = n("403770"),
  H = n("940146"),
  Y = n("353500"),
  j = n("103979"),
  W = n("665862"),
  K = n("122530"),
  z = n("928609"),
  q = n("891760"),
  X = n("801290"),
  Q = n("374363"),
  Z = n("599110"),
  J = n("922932"),
  $ = n("718517"),
  ee = n("773336"),
  et = n("286235"),
  en = n("50885"),
  ei = n("13798"),
  es = n("271938"),
  er = n("366679"),
  ea = n("881719"),
  eo = n("42203"),
  el = n("760190"),
  eu = n("855867"),
  ed = n("945956"),
  ec = n("568307"),
  ef = n("123647"),
  e_ = n("49111"),
  eh = n("706530"),
  eg = n("180524"),
  em = n("397336"),
  eE = n("353927"),
  ep = n("782340");
let ev = new N.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (d = l || (l = {}))[d.FAILED = -1] = "FAILED", d[d.OK = 0] = "OK", d[d.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", d[d.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let eS = "MediaEngineStore",
  eT = {
    left: 1,
    right: 1
  };

function eI() {
  let e = {
    mode: e_.InputModes.VOICE_ACTIVITY,
    modeOptions: {
      threshold: -60,
      autoThreshold: ee.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: !0,
      vadLeading: 5,
      vadTrailing: 25,
      delay: 20,
      shortcut: []
    },
    vadUseKrispSettingVersion: 0,
    ncUseKrispSettingVersion: 0,
    ncUseKrispjsSettingVersion: 0,
    av1EnabledSettingVersion: 0,
    mute: !1,
    deaf: !1,
    echoCancellation: !0,
    noiseSuppression: !1,
    automaticGainControl: !0,
    noiseCancellation: !0,
    experimentalEncoders: !1,
    hardwareH264: !0,
    silenceWarning: !0,
    attenuation: 0,
    attenuateWhileSpeakingSelf: !1,
    attenuateWhileSpeakingOthers: !0,
    localMutes: {},
    disabledLocalVideos: {},
    videoToggleStateMap: {},
    localVolumes: {},
    localPans: {},
    inputVolume: eE.DEFAULT_VOLUME,
    outputVolume: eE.DEFAULT_VOLUME,
    inputDeviceId: eE.DEFAULT_DEVICE_ID,
    outputDeviceId: eE.DEFAULT_DEVICE_ID,
    videoDeviceId: eE.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: eC.supports(eE.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let eC = (0, p.initializeMediaEngine)((0, p.determineMediaEngine)()),
  eA = {},
  ey = new Set([eE.MediaEngineContextTypes.DEFAULT]),
  eN = eC.supports(eE.Features.AUTO_ENABLE),
  eR = !1,
  eO = eE.MediaEngineContextTypes.STREAM,
  eD = {
    [eE.DEFAULT_DEVICE_ID]: ta(ep.default.Messages.NO_INPUT_DEVICES)
  },
  eP = {
    [eE.DEFAULT_DEVICE_ID]: ta(ep.default.Messages.NO_OUTPUT_DEVICES)
  },
  eb = {
    [eE.DEFAULT_DEVICE_ID]: ta(ep.default.Messages.NO_VIDEO_DEVICES)
  },
  eL = !1,
  eM = !1,
  eU = !1,
  ek = !1,
  ew = !1,
  eV = eE.DISABLED_DEVICE_ID,
  eG = !1,
  eF = !1,
  ex = !1,
  eB = null,
  eH = !1,
  eY = !1,
  ej = !1,
  eW = !1,
  eK = !1,
  ez = null,
  eq = !1,
  eX = e_.SoundshareEnableState.NOT_ENABLED,
  eQ = !1,
  eZ = !1;
z.default.hasPermission(eg.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), z.default.hasPermission(eg.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let eJ = new Set,
  e$ = !1,
  e0 = !1,
  e1 = {},
  e2 = {},
  e3 = 5 * $.default.Millis.SECOND;

function e4() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT,
    t = eA[e];
  return null == t && (t = eI(), eA[e] = t), t
}

function e6(e) {
  let t = e4(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return eK || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e9(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.DEFAULT_VOLUME;
  return h.clamp(e, 0, t)
}

function e8(e) {
  let t = e4(e.context),
    n = !eN || t.mute || t.deaf;
  e.context === eE.MediaEngineContextTypes.DEFAULT && (n = n || eL || eM || eU || !z.default.didHavePermission(eg.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e7() {
  var e, t, n;
  let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
    o = r;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ee.isWindows)() && C.cancelAttachToProcess(o.desktopSource.soundshareId), eC.setGoLiveSource(null, eO)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eC.setGoLiveSource(null, eO), (ew || s) && (eV = (ew = s) ? tl(eb, e4().videoDeviceId) : eE.DISABLED_DEVICE_ID, eC.setVideoInputDevice(eV)), r = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        useQuartzCapturer: t
      } = F.default.getCurrentConfig({
        location: "f627ab_1"
      }, {
        autoTrackExposure: !1
      }), {
        hdrCaptureMode: n
      } = k.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), s = e4().videoHook, r = eC.supports(eE.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = H.default.getConfig(r && s, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = W.default.getConfig(r && tt(), "e225cfdf5_wgc2", !0);
      eC.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: s,
          useGraphicsCapture: tt(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: t,
          allowScreenCaptureKit: tn(!0),
          videoHookStaleFrameTimeoutMs: o,
          graphicsCaptureStaleFrameTimeoutMs: l,
          hdrCaptureMode: n
        },
        quality: e
      }, eO)
    }
    null != a.cameraSource && eC.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, eO)
  }
}

function e5(e, t, n, i) {
  var s;
  let r = null !== (s = null == e ? void 0 : e.soundshareSession) && void 0 !== s ? s : "";
  null == e2[r] && (e2[r] = new Set);
  let a = null != t && !e2[r].has(t);
  a && e2[r].add(t), (null == t || a) && Z.default.track(e_.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, D.default)(e)
  })
}

function te(e) {
  let t = e4(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ea.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function tt() {
  return (0, ee.isWindows)() && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, eh.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function tn(e) {
  return !!((0, ee.isMac)() && eC.supports(eE.Features.SCREEN_CAPTURE_KIT) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, eh.DARWIN_SCKIT_VERSION)) && x.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let ti = new class {
  start() {
    !this.started && (this.started = !0, eC.on(p.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eC.removeListener(p.MediaEngineEvent.Silence, this.handleSilence), T.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e4();
    !eH && ed.default.getState() === e_.RTCConnectionStates.RTC_CONNECTED && e.mode === e_.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (T.default.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (eY = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    }
  }
};

function ts(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e4(t);
  return Object.assign(i, e), !__OVERLAY__ && n && v.default.set(eS, eA), i
}

function tr() {
  !eN && eC.enable().then(() => T.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function ta(e) {
  return {
    id: eE.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function to(e, t) {
  if (0 === e.length) {
    let e = ta(t);
    return {
      [e.id]: e
    }
  }
  return h(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function tl(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : h(e).values().first();
  return null != i ? i.id : t
}

function tu() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = Q.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let s = e === em.ProtoAudioSettingsContextTypes.USER ? eE.MediaEngineContextTypes.DEFAULT : eE.MediaEngineContextTypes.STREAM,
      r = s === eE.MediaEngineContextTypes.STREAM ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e4(s);
    for (let [e, t] of Object.entries(a)) null == (0, X.getPendingAudioSettings)(e, s) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== r ? l[e] = t.volume : delete l[e], eC.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, s));
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], eC.eachConnection(e => {
        e.setLocalVolume(t, r), e.setLocalMute(t, !1)
      }, s))
    }
    ts({
      localMutes: o,
      localVolumes: l
    }, s)
  }
}

function td(e) {
  if (null == i) return ev.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : J.default.getAudioPid(e),
      n = "";
    return null != t && (n = J.default.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tc(e, t) {
  (0, ee.isWindows)() && C.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !ec.default.shouldContinueWithoutElevatedProcessForPID(e) && T.default.wait(() => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tf(e) {
  let t = e4();
  Z.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function t_() {
  let e = e4(),
    t = e.inputDeviceId,
    n = ea.default.hasEchoCancellation(t) || e.echoCancellation,
    i = ea.default.hasNoiseSuppression(t) || e.noiseSuppression,
    s = ea.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    r = e.noiseCancellation;
  eC.setLoopback(e0, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: s,
    noiseCancellation: r
  })
}

function th() {
  return eK || !1
}
async function tg() {
  try {
    await en.default.ensureModule("discord_krisp"), en.default.requireModule("discord_krisp"), eK = !0, i.emitChange()
  } catch (t) {
    ev.warn("Failed to load Krisp module: ".concat(t.message)), et.default.captureException(t);
    let e = eE.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eE.NoiseCancellerError.INITIALIZED : n
    }
    Z.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ts({
      noiseCancellation: !1
    })
  } finally {
    eW = !1
  }
}

function tm(e) {
  let {
    section: t
  } = e;
  return t === e_.UserSettingsSections.VOICE && tr(), !1
}

function tE(e) {
  eX = 0 === e ? e_.SoundshareEnableState.ENABLED : 5 === e ? e_.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? e_.SoundshareEnableState.FAILED_TO_ENABLE : e_.SoundshareEnableState.NOT_ENABLED
}
async function tp() {
  if (eX === e_.SoundshareEnableState.ENABLING) return;
  eX = e_.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await eC.enableSoundshare();
    tE(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    ev.warn("Failed to enable macOS soundshare: ".concat(t)), tE(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), Z.default.track(e_.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tv extends E.default.Store {
  initialize() {
    eC.on(p.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = G.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eC.setMaxSyncDelayOverride(t), e6(e), e8(e), te(e);
      let n = e4();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: s
      } = Y.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      s && e.setExperimentFlag(eE.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      {
        let {
          signalH265DesktopDecode: t
        } = L.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        t && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
        let {
          signalH265SupportMacOS: n
        } = M.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        n && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportNvenc: i
        } = U.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        i && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
      }
      let {
        signalAV1Support: a
      } = P.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = V.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && eC.setHasFullbandPerformance((0, R.hasPerformanceForKrispFullband)()), (0, y.default)(i)) {
        let t = A.default.getSettings();
        e.setExperimentFlag(eE.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = j.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n);
        let i = ed.default.getGuildId(),
          s = 0;
        null != i && e.context === eE.MediaEngineContextTypes.STREAM && (s = w.default.getCurrentConfig({
          guildId: i,
          location: "MediaEngineStore_SetupMediaEngine"
        }, {
          autoTrackExposure: !0
        }).keyFrameIntervalMs), e.setClipsKeyFrameInterval(n && t.viewerClipsEnabled ? eE.VIEWERSIDE_CLIP_KFI_MS : s)
      }
      for (let t of (n = e4(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== es.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== es.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(p.BaseConnectionEvent.Speaking, (t, n) => {
        T.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === eE.MediaEngineContextTypes.DEFAULT && (eG = !1, e.on(p.BaseConnectionEvent.SpeakingWhileMuted, () => {
        eG = !0, i.emitChange()
      })), e.on(p.BaseConnectionEvent.DesktopSourceEnd, () => {
        T.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(p.BaseConnectionEvent.SoundshareAttached, () => {
        (null == r ? void 0 : r.desktopSource) != null && Z.default.track(e_.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, D.default)(null == r ? void 0 : r.desktopSource))
      }), e.on(p.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e5(null == r ? void 0 : r.desktopSource, t, n, i)
      }), e.on(p.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == r ? void 0 : r.desktopSource) != null && (Z.default.track(e_.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, D.default)(null == r ? void 0 : r.desktopSource)), null != eu.default.getHookError(e_.MediaEngineHookTypes.SOUND) && T.default.wait(() => T.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new S.Timeout;
      e.on(p.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            l.start(e3, () => {
              T.default.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == r ? void 0 : r.desktopSource) != null && (e5(null == r ? void 0 : r.desktopSource, n, t, i), !i && (l.stop(), T.default.wait(() => T.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (l.stop(), T.default.wait(() => T.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(p.BaseConnectionEvent.InteractionRequired, e => {
        T.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(p.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, s, a) => {
        (null == r ? void 0 : r.desktopSource) != null && Z.default.track(e_.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: s,
          reinitialization: a,
          ...(0, D.default)(null == r ? void 0 : r.desktopSource)
        })
      }), e.on(p.BaseConnectionEvent.NoiseCancellationError, e => {
        ev.warn("noisecancellererror event: ".concat(e)), eq = !0, Z.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), T.default.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), T.default.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), T.default.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(p.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        ev.warn("voiceactivitydetectorerror event: ".concat(e)), Z.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), T.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: eE.MediaEngineContextTypes.DEFAULT,
          mode: e_.InputModes.VOICE_ACTIVITY,
          options: {
            ...e4(eE.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), T.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(p.BaseConnectionEvent.VideoState, t => {
        T.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(p.BaseConnectionEvent.Destroy, () => {
        l.stop()
      }), e.setBitRate(er.default.bitrate), e.applyVideoQualityMode(ef.default.mode)
    }), eC.on(p.MediaEngineEvent.DeviceChange, (e, t, n) => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eC.on(p.MediaEngineEvent.VolumeChange, (e, t) => {
      T.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eC.on(p.MediaEngineEvent.DesktopSourceEnd, () => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eC.on(p.MediaEngineEvent.AudioPermission, e => {
      eZ = !0, T.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eC.on(p.MediaEngineEvent.VideoPermission, e => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eC.on(p.MediaEngineEvent.WatchdogTimeout, async () => {
      let e;
      try {
        await J.default.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      ev.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Z.default.track(e_.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eC.on(p.MediaEngineEvent.VideoInputInitialized, e => {
      Z.default.track(e_.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eC.on(p.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      T.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eC.on(p.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      T.default.wait(() => {
        T.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eC.on(p.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == r ? void 0 : null === (i = r.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && C.cancelAttachToProcess(t), a = null)
    }), ti.reset(), ! function() {
      var e;
      let t = v.default.get("audio");
      null != t && (v.default.set(eS, {
          [eE.MediaEngineContextTypes.DEFAULT]: t
        }), v.default.remove("audio")), eA = null !== (e = v.default.get(eS)) && void 0 !== e ? e : {}, h.each(eA, e => {
          if (h.defaultsDeep(e, eI()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e4();
          eC.setAudioInputDevice(e.inputDeviceId), eC.setAudioOutputDevice(e.outputDeviceId), e7(), eC.setInputVolume(e.inputVolume), eC.setOutputVolume(e.outputVolume), eC.setH264Enabled(e.openH264), eC.setAv1Enabled(e.av1Enabled), eC.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, ee.isDesktop)() || __OVERLAY__ || eW || eK ? (0, ee.isWeb)() && eC.supports(eE.Features.NOISE_CANCELLATION) ? (eK = !0, i.emitChange()) : (0, ee.isWeb)() && ts({
      noiseCancellation: !1
    }) : (eW = !0, tg()), (0, ee.isMac)() && eC.supports(eE.Features.SOUNDSHARE) ? eC.getSoundshareStatus().then(e => {
      tE(e)
    }).catch(e => {
      ev.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : eX = e_.SoundshareEnableState.ENABLED, e1 = {
      [eE.Features.VIDEO]: eC.supports(eE.Features.VIDEO),
      [eE.Features.DESKTOP_CAPTURE]: eC.supports(eE.Features.DESKTOP_CAPTURE),
      [eE.Features.HYBRID_VIDEO]: eC.supports(eE.Features.HYBRID_VIDEO)
    }, this.waitFor(es.default, ea.default, eo.default, eu.default, ed.default, ec.default, z.default.storage, Q.default, el.default, A.default)
  }
  supports(e) {
    return eC.supports(e)
  }
  supportsInApp(e) {
    return e1[e] || eC.supports(e)
  }
  isSupported() {
    return eC.supported()
  }
  isExperimentalEncodersSupported() {
    return eC.supports(eE.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eC.supports(eE.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eK || !1
  }
  isNoiseCancellationError() {
    return eq
  }
  isAutomaticGainControlSupported() {
    return eC.supports(eE.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eK || !1
  }
  isAecDumpSupported() {
    return eC.supports(eE.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eC.supports(eE.Features.VIDEO) && eC.supports(eE.Features.SIMULCAST)
  }
  getAecDump() {
    return e4().aecDumpEnabled
  }
  getMediaEngine() {
    return eC
  }
  getVideoComponent() {
    return eC.supports(eE.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Video
  }
  getCameraComponent() {
    return eC.supports(eE.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Camera
  }
  isEnabled() {
    return eN
  }
  isMute() {
    return this.isSelfMute() || eL
  }
  isDeaf() {
    return this.isSelfDeaf() || ek
  }
  hasContext(e) {
    return null != eA[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return e === eE.MediaEngineContextTypes.DEFAULT && eM
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e4(e).mute || !z.default.didHavePermission(eg.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eE.MediaEngineContextTypes.DEFAULT && eU
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e4(e).deaf
  }
  isVideoEnabled() {
    return ew && ex
  }
  isVideoAvailable() {
    return Object.values(eb).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.STREAM;
    return eO === e && null != r
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.STREAM;
    return eO === t && null != r && (null === (e = r.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
    return e !== es.default.getId() && (e4(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eC.supports(eE.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : e_.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
    return t === eE.MediaEngineContextTypes.DEFAULT && eJ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return e === eE.MediaEngineContextTypes.DEFAULT && eJ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eQ
  }
  isNativeAudioPermissionReady() {
    return eZ
  }
  getGoLiveSource() {
    return r
  }
  getGoLiveContext() {
    return eO
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
      n = e4(t).localPans[e];
    return null != n ? n : eT
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
      n = t === eE.MediaEngineContextTypes.STREAM,
      i = n ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
      s = e4(t).localVolumes[e];
    return null != s ? s : i
  }
  getInputVolume() {
    return e4().inputVolume
  }
  getOutputVolume() {
    return e4().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return e4(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return e4(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return h.each(eA, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: s
        }
      } = t;
      i === e_.InputModes.PUSH_TO_TALK && ey.has(n) && (e[n] = s)
    }), e
  }
  getInputDeviceId() {
    return tl(eD, e4().inputDeviceId)
  }
  getOutputDeviceId() {
    return tl(eP, e4().outputDeviceId)
  }
  getVideoDeviceId() {
    return tl(eb, e4().videoDeviceId)
  }
  getInputDevices() {
    return eD
  }
  getOutputDevices() {
    return eP
  }
  getVideoDevices() {
    return eb
  }
  getEchoCancellation() {
    let e = e4();
    return ea.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e4().h265Enabled
  }
  getLoopback() {
    return eC.getLoopback()
  }
  getNoiseSuppression() {
    let e = e4();
    return ea.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e4();
    return ea.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e4().noiseCancellation
  }
  getExperimentalEncoders() {
    return e4().experimentalEncoders
  }
  getHardwareH264() {
    return e4().hardwareH264
  }
  getEnableSilenceWarning() {
    return e4().silenceWarning
  }
  getDebugLogging() {
    return eC.getDebugLogging()
  }
  getQoS() {
    return e4().qos
  }
  getAttenuation() {
    return e4().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e4().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e4().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eC.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
    return e4(e)
  }
  getState() {
    return {
      settingsByContext: eA,
      inputDevices: eD,
      outputDevices: eP,
      appSupported: e1,
      krispModuleLoaded: eK,
      goLiveSource: r,
      goLiveContext: eO
    }
  }
  getInputDetected() {
    return eB
  }
  getNoInputDetectedNotice() {
    return eY
  }
  getPacketDelay() {
    return ee.isPlatformEmbedded || this.getMode() !== e_.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eC.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eR
  }
  getVideoHook() {
    return e4().videoHook
  }
  supportsVideoHook() {
    return eC.supports(eE.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e4().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eC.supports(eE.Features.EXPERIMENTAL_SOUNDSHARE) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, eh.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e4().openH264
  }
  getAv1Enabled() {
    return e4().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return eG
  }
  getSoundshareEnabled() {
    return eX
  }
  supportsEnableSoundshare() {
    return (0, ee.isMac)() && eC.supports(eE.Features.SOUNDSHARE) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, eh.DARWIN_SOUNDSHARE_VERSION) && !(m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, eh.DARWIN_SCKIT_AUDIO_VERSION) && tn(!1))
  }
  supportsScreenSoundshare() {
    return (0, ee.isMac)() && eC.supports(eE.Features.SOUNDSHARE) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, eh.DARWIN_SCKIT_AUDIO_VERSION) && tn(!1) || (0, ee.isWindows)() && eC.supports(eE.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT,
      t = this.supports(eE.Features.VIDEO) ? [{
        rid: "100",
        type: e === eE.MediaEngineContextTypes.DEFAULT ? eE.MediaTypes.VIDEO : eE.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && e === eE.MediaEngineContextTypes.DEFAULT && t.push({
      rid: "50",
      type: eE.MediaTypes.VIDEO,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    let t = eC.getSupportedSecureFramesProtocolVersion(),
      n = B.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      i = null != e ? B.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      s = n.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
      r = !(0, ee.isIOS)() && !(0, ee.isAndroid)() && (n.canSupportMls || (null == i ? void 0 : i.canSupportMls));
    return s ? r ? t : t % 100 : 0
  }
  hasClipsSource() {
    return null != a
  }
}
tv.displayName = "MediaEngineStore";
var tS = i = new tv(T.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: s
    } = e;
    if (i !== n && e7(s, null), null != t || null == n) {
      ej = !1;
      return
    }
    if (ej) return;
    ej = !0;
    let r = e4();
    (r.mute || r.deaf) && (ts({
      deaf: !1,
      mute: !1
    }), eC.eachConnection(e8))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (s === t.sessionId) {
        eL = t.mute || t.suppress, ek = t.deaf, eC.eachConnection(e8);
        let e = null != t.guildId && null != t.channelId && null != ez && ez !== t.channelId,
          n = !e && ew;
        return e7(n), ez = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === es.default.getId() && null == ed.default.getChannelId() && e7(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    s = e.sessionId, eL = !1, ek = !1, (0, q.shouldReadWriteAudioSettings)() && tu()
  },
  CONNECTION_CLOSED: function() {
    s = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case e_.RTCConnectionStates.CONNECTING:
        tr();
        break;
      case e_.RTCConnectionStates.RTC_CONNECTING:
        eH = !1, eY = !1;
        break;
      case e_.RTCConnectionStates.RTC_CONNECTED:
        e7();
        break;
      case e_.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eJ.size) return;
          let e = eE.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e4(e);
          eJ.forEach(n => {
            f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eC.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eJ.clear(), ts({
            disabledLocalVideos: t
          }, e, !1)
        })()
    }
    ti.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eM = t, eC.eachConnection(e8)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e4(t);
    if (t === eE.MediaEngineContextTypes.DEFAULT && (z.default.requestPermission(eg.NativePermissionTypes.AUDIO), eU)) return !1;
    !(n = !i && !n) && (i = !1), ts({
      mute: n,
      deaf: i
    }, t), eC.eachConnection(e8)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e4(t);
    ts({
      deaf: !n.deaf
    }, t), eC.eachConnection(e8)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === es.default.getId()) return;
    let {
      localMutes: i
    } = e4(t);
    i[n] ? delete i[n] : i[n] = !0, ts({
      localMutes: i
    }, t), eC.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, s, r, a, o;
    let {
      context: l,
      userId: u,
      videoToggleState: d,
      persist: c,
      isAutomatic: _
    } = e;
    f(!(c && _), "These are not allowed to both be true.");
    let h = d === e_.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: g
      } = e4(l),
      m = null !== (t = g[u]) && void 0 !== t && t,
      E = eJ.has(u),
      p = d === e_.VideoToggleState.AUTO_ENABLED || d === e_.VideoToggleState.MANUAL_ENABLED;
    ev.info("disableVideo=".concat(h, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(E, ", isVideoShown=").concat(p)), f(!(E && !m), "If you are auto-disabled, then you are also disabled.");
    let v = h !== m,
      S = l === eE.MediaEngineContextTypes.DEFAULT,
      T = _ && v && S,
      I = c && v && S;
    ev.info("changed=".concat(v, " isDefaultContext=").concat(S, " isUpdateCausedByVideoHealthManager=").concat(T, " isManualToggleByUser=").concat(I));
    let {
      videoToggleStateMap: C
    } = e4(l);
    if (C[u] === e_.VideoToggleState.AUTO_PROBING && d === e_.VideoToggleState.AUTO_ENABLED && (0, K.default)(u, h ? eE.VideoToggleReason.AUTO_DISABLE : eE.VideoToggleReason.AUTO_ENABLE, p), C[u] = d, ts({
        videoToggleStateMap: C
      }, l, c), d === e_.VideoToggleState.AUTO_PROBING ? null === (n = ed.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ed.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e$ && (ev.info("isAutoDisableAllowed=".concat(e$, " - disabling VideoHealthManager")), null === (r = ed.default.getRTCConnection()) || void 0 === r || null === (s = r.getVideoHealthManager()) || void 0 === s || s.disable()), T) {
      if (!h && !E || h && !e$) return;
      (0, K.default)(u, h ? eE.VideoToggleReason.AUTO_DISABLE : eE.VideoToggleReason.AUTO_ENABLE, p), h ? eJ.add(u) : eJ.delete(u)
    } else I && (E && !h ? (ev.info("disallowing auto-disable for this session because of manual override by user"), e$ = !1, null === (o = ed.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, K.default)(u, eE.VideoToggleReason.MANUAL_REENABLE, p)) : (0, K.default)(u, h ? eE.VideoToggleReason.MANUAL_DISABLE : eE.VideoToggleReason.MANUAL_ENABLE, p));
    S && !h && eJ.delete(u), h ? g[u] = !0 : delete g[u], ts({
      disabledLocalVideos: g
    }, l, c), eC.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = g[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === es.default.getId()) return;
    let s = t === eE.MediaEngineContextTypes.STREAM,
      r = s ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e4(t);
    i === r ? delete a[n] : a[n] = i, ts({
      localVolumes: a
    }, t), eC.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: s
    } = e, {
      localPans: r
    } = e4(t);
    r[n] = {
      left: i,
      right: s
    }, ts({
      localPans: r
    }, t), eC.eachConnection(e => e.setLocalPan(n, i, s), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    ts({
      mode: n,
      modeOptions: i
    }, t), eC.eachConnection(e6), ti.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      inputVolume: e9(t)
    }), eC.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      outputVolume: t
    }), eC.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      inputDeviceId: t = tl(eD, t)
    }), eC.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      outputDeviceId: t = tl(eP, t)
    }), eC.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ts({
      echoCancellation: e.enabled
    });
    eC.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), t_(), tf(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = ts({
      h265Enabled: e.enabled
    });
    eC.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e0 = t, t_()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ts({
      noiseSuppression: e.enabled
    });
    eC.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), t_(), tf(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ts({
      automaticGainControl: e.enabled
    });
    eC.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), t_(), tf(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ts({
      noiseCancellation: e.enabled
    });
    eC.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), t_(), tf(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ts({
      silenceWarning: e.enabled
    }), ti.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eC.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    ts({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    ts({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, s = ts({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eC.eachConnection(e => e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ts({
      qos: t
    }), eC.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eD;
      if (eD = to(e, ep.default.Messages.NO_INPUT_DEVICES), !h.isEqual(eD, t)) {
        let e = e4(),
          t = tl(eD, e.inputDeviceId);
        eC.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eP;
      if (eP = to(e, ep.default.Messages.NO_OUTPUT_DEVICES), !h.isEqual(eP, t)) {
        let e = e4(),
          t = tl(eP, e.outputDeviceId);
        eC.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      ex = e.length > 0;
      let t = eb;
      if (eb = to(e, ep.default.Messages.NO_VIDEO_DEVICES), ew && !h.isEqual(eb, t)) {
        var n;
        let e = void 0 !== eb[eV],
          i = eV === eE.DEFAULT_DEVICE_ID && (null === (n = t[eE.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e7(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    ts({
      inputVolume: e9(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    v.default.remove(eS), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eB = t, !eH && eB && (eH = !0, ti.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eC.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eN = e.enabled, e.unmute && ts({
      mute: !1,
      deaf: !1
    }), eC.eachConnection(e8)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    z.default.requestPermission(eg.NativePermissionTypes.CAMERA), e7(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eN = !1, eC.eachConnection(e8);
        break;
      case "video":
        e7(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, s, a;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      ;
      let e = null,
        i = null,
        {
          sourceId: s,
          sound: l
        } = o.desktopSettings,
        u = null !== (t = o.context) && void 0 !== t ? t : eE.MediaEngineContextTypes.DEFAULT,
        d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        c = J.default.getPidFromDesktopSource(s);
      ee.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = td(c), null != e && tc(e, i)), (a = u) !== eO && (null != r && eC.setGoLiveSource(null, eO), eO = a);
      let f = u === eE.MediaEngineContextTypes.STREAM && ew;
      e7(f, {
        desktopSource: {
          id: s,
          sourcePid: c,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: d.resolution,
          frameRate: d.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : eE.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        r = e === eE.MediaEngineContextTypes.STREAM && ew,
        a = null !== (s = o.qualityOptions) && void 0 !== s ? s : {
          resolution: 720,
          frameRate: 30
        };
      e7(r, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else e7(ew, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      videoDeviceId: t = tl(eb, t)
    }), e7()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ts({
      experimentalEncoders: e.enabled
    });
    eC.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eR !== e.required && (eR = e.required, !e.required && eC.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tm,
  USER_SETTINGS_MODAL_SET_SECTION: tm,
  CERTIFIED_DEVICES_SET: function() {
    return eC.eachConnection(te), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    ey.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    ey.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eA = t.settingsByContext, eD = t.inputDevices, eP = t.outputDevices, e1 = t.appSupported, eK = t.krispModuleLoaded, eO = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      openH264: t
    });
    eC.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      hardwareH264: t
    });
    eC.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      av1Enabled: t
    });
    eC.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = O.default.isEnabled();
    if (t === e_.AppStates.BACKGROUND && ew && !n) eF = !0, e7(!1);
    else {
      if (t !== e_.AppStates.ACTIVE || !eF) return !1;
      eF = !1, e7(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eC.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eU) return !1;
    eU = n, eC.eachConnection(e8)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eg.NativePermissionStates.ACCEPTED;
    switch (n) {
      case eg.NativePermissionTypes.AUDIO:
        eZ = !0, eC.eachConnection(e8);
        break;
      case eg.NativePermissionTypes.CAMERA:
        !i && ew && e7(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eC.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      aecDumpEnabled: t
    });
    eC.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ew && null == r || null != ed.default.getRTCConnectionId()) return !1;
    e7(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eq && (eq = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    tp(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        s = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != s) {
        let e = null !== (t = s.soundshareId) && void 0 !== t ? t : 0,
          r = i.getExperimentalSoundshare();
        n && eC.setSoundshareSource(e, r, eO)
      }
    }()
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eC.applyMediaFilterSettings(t).finally(() => {
      eQ = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    eQ = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    eQ = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, q.shouldReadWriteAudioSettings)() || t !== em.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tu(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: s
    } = e, {
      enableDecoupledGameClipping: r
    } = b.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = A.default.getSettings().decoupledClipsEnabled;
    if (!r || !o || null == I.default) return;
    let l = null,
      u = null,
      d = J.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = td(d));
    let c = {
      desktopSource: {
        id: t,
        sourcePid: d,
        soundshareId: l,
        soundshareSession: u
      },
      quality: s
    };
    null != a && a.desktopSource.id !== c.desktopSource.id && (eC.setClipsSource(null), (0, ee.isWindows)() && null != a.desktopSource.soundshareId && C.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = c;
    let {
      useQuartzCapturer: f
    } = F.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: _
    } = k.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), h = e4().videoHook, g = eC.supports(eE.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: m
    } = H.default.getConfig(g && h, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: E
    } = W.default.getConfig(g && tt(), "e225cfdf5_wgc2", !1);
    eC.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: h,
        useGraphicsCapture: tt(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: f,
        allowScreenCaptureKit: tn(!1),
        videoHookStaleFrameTimeoutMs: m,
        graphicsCaptureStaleFrameTimeoutMs: E,
        hdrCaptureMode: _
      },
      quality: s,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    void 0 !== t.viewerClipsEnabled && eC.eachConnection(e => e.setClipsKeyFrameInterval(A.default.getSettings().viewerClipsEnabled ? eE.VIEWERSIDE_CLIP_KFI_MS : 0), eE.MediaEngineContextTypes.STREAM)
  }
})