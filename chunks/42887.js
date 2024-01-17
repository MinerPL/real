"use strict";
let i, r, s, a;
n.r(t), n.d(t, {
  default: function() {
    return tm
  }
}), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
var o, l, u, c, d = n("627445"),
  f = n.n(d),
  E = n("917351"),
  h = n.n(E),
  p = n("570277"),
  _ = n.n(p),
  S = n("446674"),
  m = n("773364"),
  T = n("95410"),
  g = n("862337"),
  I = n("913144"),
  C = n("49671"),
  v = n("6193"),
  A = n("386045"),
  R = n("18346"),
  N = n("605250"),
  O = n("808122"),
  D = n("733589"),
  y = n("933034"),
  P = n("746800"),
  L = n("584687"),
  b = n("705500"),
  M = n("238847"),
  U = n("981699"),
  G = n("352705"),
  w = n("140622"),
  k = n("16001"),
  x = n("631508"),
  F = n("368765"),
  V = n("403770"),
  B = n("940146"),
  H = n("353500"),
  j = n("103979"),
  Y = n("665862"),
  W = n("122530"),
  K = n("928609"),
  z = n("891760"),
  q = n("374363"),
  X = n("599110"),
  Q = n("922932"),
  Z = n("718517"),
  J = n("773336"),
  $ = n("286235"),
  ee = n("50885"),
  et = n("13798"),
  en = n("271938"),
  ei = n("366679"),
  er = n("533222"),
  es = n("42203"),
  ea = n("760190"),
  eo = n("855867"),
  el = n("945956"),
  eu = n("568307"),
  ec = n("123647"),
  ed = n("49111"),
  ef = n("706530"),
  eE = n("180524"),
  eh = n("397336"),
  ep = n("353927"),
  e_ = n("782340");
let eS = new N.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let em = "MediaEngineStore",
  eT = {
    left: 1,
    right: 1
  };

function eg() {
  let e = {
    mode: ed.InputModes.VOICE_ACTIVITY,
    modeOptions: {
      threshold: -60,
      autoThreshold: J.isPlatformEmbedded || __OVERLAY__,
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
    inputVolume: ep.DEFAULT_VOLUME,
    outputVolume: ep.DEFAULT_VOLUME,
    inputDeviceId: ep.DEFAULT_DEVICE_ID,
    outputDeviceId: ep.DEFAULT_DEVICE_ID,
    videoDeviceId: ep.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: eI.supports(ep.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let eI = (0, m.initializeMediaEngine)((0, m.determineMediaEngine)()),
  eC = {},
  ev = new Set([ep.MediaEngineContextTypes.DEFAULT]),
  eA = eI.supports(ep.Features.AUTO_ENABLE),
  eR = !1,
  eN = ep.MediaEngineContextTypes.STREAM,
  eO = {
    [ep.DEFAULT_DEVICE_ID]: tr(e_.default.Messages.NO_INPUT_DEVICES)
  },
  eD = {
    [ep.DEFAULT_DEVICE_ID]: tr(e_.default.Messages.NO_OUTPUT_DEVICES)
  },
  ey = {
    [ep.DEFAULT_DEVICE_ID]: tr(e_.default.Messages.NO_VIDEO_DEVICES)
  },
  eP = !1,
  eL = !1,
  eb = !1,
  eM = !1,
  eU = !1,
  eG = ep.DISABLED_DEVICE_ID,
  ew = !1,
  ek = !1,
  ex = !1,
  eF = null,
  eV = !1,
  eB = !1,
  eH = !1,
  ej = !1,
  eY = !1,
  eW = null,
  eK = !1,
  ez = ed.SoundshareEnableState.NOT_ENABLED,
  eq = !1,
  eX = !1;
K.default.hasPermission(eE.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), K.default.hasPermission(eE.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let eQ = new Set,
  eZ = !1,
  eJ = !1,
  e$ = {},
  e0 = {},
  e1 = 5 * Z.default.Millis.SECOND;

function e2() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT,
    t = eC[e];
  return null == t && (t = eg(), eC[e] = t), t
}

function e4(e) {
  let t = e2(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return eY || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e3(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.DEFAULT_VOLUME;
  return h.clamp(e, 0, t)
}

function e6(e) {
  let t = e2(e.context),
    n = !eA || t.mute || t.deaf;
  e.context === ep.MediaEngineContextTypes.DEFAULT && (n = n || eP || eL || eb || !K.default.didHavePermission(eE.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e5() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    o = s;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, J.isWindows)() && v.cancelAttachToProcess(o.desktopSource.soundshareId), eI.setGoLiveSource(null, eN)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eI.setGoLiveSource(null, eN), (eU || r) && (eG = (eU = r) ? ta(ey, e2().videoDeviceId) : ep.DISABLED_DEVICE_ID, eI.setVideoInputDevice(eG)), s = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        useQuartzCapturer: t
      } = x.default.getCurrentConfig({
        location: "f627ab_1"
      }, {
        autoTrackExposure: !1
      }), {
        hdrCaptureMode: n
      } = U.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), r = e2().videoHook, s = eI.supports(ep.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = B.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = Y.default.getConfig(s && e9(), "e225cfdf5_wgc2", !0);
      eI.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: r,
          useGraphicsCapture: e9(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: t,
          allowScreenCaptureKit: te(!0),
          videoHookStaleFrameTimeoutMs: o,
          graphicsCaptureStaleFrameTimeoutMs: l,
          hdrCaptureMode: n
        },
        quality: e
      }, eN)
    }
    null != a.cameraSource && eI.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, eN)
  }
}

function e7(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e0[s] && (e0[s] = new Set);
  let a = null != t && !e0[s].has(t);
  a && e0[s].add(t), (null == t || a) && X.default.track(ed.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, y.default)(e)
  })
}

function e8(e) {
  let t = e2(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(er.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, J.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function e9() {
  return (0, J.isWindows)() && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ef.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function te(e) {
  return !!((0, J.isMac)() && eI.supports(ep.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ef.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let tt = new class {
  start() {
    !this.started && (this.started = !0, eI.on(m.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eI.removeListener(m.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e2();
    !eV && el.default.getState() === ed.RTCConnectionStates.RTC_CONNECTED && e.mode === ed.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (I.default.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (eB = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    }
  }
};

function tn(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e2(t);
  return Object.assign(i, e), !__OVERLAY__ && n && T.default.set(em, eC), i
}

function ti() {
  !eA && eI.enable().then(() => I.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function tr(e) {
  return {
    id: ep.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function ts(e, t) {
  if (0 === e.length) {
    let e = tr(t);
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

function ta(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : h(e).values().first();
  return null != i ? i.id : t
}

function to() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = q.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eh.ProtoAudioSettingsContextTypes.USER ? ep.MediaEngineContextTypes.DEFAULT : ep.MediaEngineContextTypes.STREAM,
      s = r === ep.MediaEngineContextTypes.STREAM ? ep.DEFAULT_STREAM_VOLUME : ep.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e2(r);
    for (let [e, t] of Object.entries(a)) t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eI.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r);
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], eI.eachConnection(e => {
        e.setLocalVolume(t, s), e.setLocalMute(t, !1)
      }, r))
    }
    tn({
      localMutes: o,
      localVolumes: l
    }, r)
  }
}

function tl(e) {
  if (null == i) return eS.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : Q.default.getAudioPid(e),
      n = "";
    return null != t && (n = Q.default.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tu(e, t) {
  (0, J.isWindows)() && v.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !eu.default.shouldContinueWithoutElevatedProcessForPID(e) && I.default.wait(() => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tc(e) {
  let t = e2();
  X.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function td() {
  let e = e2(),
    t = e.inputDeviceId,
    n = er.default.hasEchoCancellation(t) || e.echoCancellation,
    i = er.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = er.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  eI.setLoopback(eJ, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function tf() {
  return eY || !1
}
async function tE() {
  try {
    await ee.default.ensureModule("discord_krisp"), ee.default.requireModule("discord_krisp"), eY = !0, i.emitChange()
  } catch (t) {
    eS.warn("Failed to load Krisp module: ".concat(t.message)), $.default.captureException(t);
    let e = ep.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? ep.NoiseCancellerError.INITIALIZED : n
    }
    X.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), tn({
      noiseCancellation: !1
    })
  } finally {
    ej = !1
  }
}

function th(e) {
  let {
    section: t
  } = e;
  return t === ed.UserSettingsSections.VOICE && ti(), !1
}

function tp(e) {
  ez = 0 === e ? ed.SoundshareEnableState.ENABLED : 5 === e ? ed.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? ed.SoundshareEnableState.FAILED_TO_ENABLE : ed.SoundshareEnableState.NOT_ENABLED
}
async function t_() {
  if (ez === ed.SoundshareEnableState.ENABLING) return;
  ez = ed.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await eI.enableSoundshare();
    tp(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    eS.warn("Failed to enable macOS soundshare: ".concat(t)), tp(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), X.default.track(ed.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tS extends S.default.Store {
  initialize() {
    eI.on(m.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = k.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eI.setMaxSyncDelayOverride(t), e4(e), e6(e), e8(e);
      let n = e2();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = H.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(ep.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      {
        let {
          signalH265SupportMacOS: t
        } = b.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        t && e.setExperimentFlag(ep.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportNvenc: n
        } = M.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        n && e.setExperimentFlag(ep.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
      }
      let {
        signalAV1Support: a
      } = P.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(ep.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = w.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && eI.setHasFullbandPerformance((0, O.hasPerformanceForKrispFullband)()), (0, R.default)(i)) {
        let t = A.default.getSettings();
        e.setExperimentFlag(ep.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = j.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n);
        let i = el.default.getGuildId(),
          r = 0;
        null != i && e.context === ep.MediaEngineContextTypes.STREAM && (r = G.default.getCurrentConfig({
          guildId: i,
          location: "MediaEngineStore_SetupMediaEngine"
        }, {
          autoTrackExposure: !0
        }).keyFrameIntervalMs), e.setClipsKeyFrameInterval(n && t.viewerClipsEnabled ? ep.VIEWERSIDE_CLIP_KFI_MS : r)
      }
      for (let t of (n = e2(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== en.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== en.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(m.BaseConnectionEvent.Speaking, (t, n) => {
        I.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === ep.MediaEngineContextTypes.DEFAULT && (ew = !1, e.on(m.BaseConnectionEvent.SpeakingWhileMuted, () => {
        ew = !0, i.emitChange()
      })), e.on(m.BaseConnectionEvent.DesktopSourceEnd, () => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(m.BaseConnectionEvent.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && X.default.track(ed.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, y.default)(null == s ? void 0 : s.desktopSource))
      }), e.on(m.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e7(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(m.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (X.default.track(ed.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, y.default)(null == s ? void 0 : s.desktopSource)), null != eo.default.getHookError(ed.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new g.Timeout;
      e.on(m.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            l.start(e1, () => {
              I.default.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == s ? void 0 : s.desktopSource) != null && (e7(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), I.default.wait(() => I.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (l.stop(), I.default.wait(() => I.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(m.BaseConnectionEvent.InteractionRequired, e => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(m.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
        (null == s ? void 0 : s.desktopSource) != null && X.default.track(ed.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: a,
          ...(0, y.default)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(m.BaseConnectionEvent.NoiseCancellationError, e => {
        eS.warn("noisecancellererror event: ".concat(e)), eK = !0, X.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), I.default.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), I.default.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(m.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        eS.warn("voiceactivitydetectorerror event: ".concat(e)), X.default.track(ed.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: ep.MediaEngineContextTypes.DEFAULT,
          mode: ed.InputModes.VOICE_ACTIVITY,
          options: {
            ...e2(ep.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), I.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(m.BaseConnectionEvent.VideoState, t => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(m.BaseConnectionEvent.Destroy, () => {
        l.stop()
      }), e.setBitRate(ei.default.bitrate), e.applyVideoQualityMode(ec.default.mode)
    }), eI.on(m.MediaEngineEvent.DeviceChange, (e, t, n) => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eI.on(m.MediaEngineEvent.VolumeChange, (e, t) => {
      I.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eI.on(m.MediaEngineEvent.DesktopSourceEnd, () => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eI.on(m.MediaEngineEvent.AudioPermission, e => {
      eX = !0, I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eI.on(m.MediaEngineEvent.VideoPermission, e => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eI.on(m.MediaEngineEvent.WatchdogTimeout, async () => {
      let e;
      try {
        await Q.default.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      eS.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), X.default.track(ed.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eI.on(m.MediaEngineEvent.VideoInputInitialized, e => {
      X.default.track(ed.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Z.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eI.on(m.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      I.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eI.on(m.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      I.default.wait(() => {
        I.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eI.on(m.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && v.cancelAttachToProcess(t), a = null)
    }), tt.reset(), ! function() {
      var e;
      let t = T.default.get("audio");
      null != t && (T.default.set(em, {
          [ep.MediaEngineContextTypes.DEFAULT]: t
        }), T.default.remove("audio")), eC = null !== (e = T.default.get(em)) && void 0 !== e ? e : {}, h.each(eC, e => {
          if (h.defaultsDeep(e, eg()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, J.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e2();
          eI.setAudioInputDevice(e.inputDeviceId), eI.setAudioOutputDevice(e.outputDeviceId), e5(), eI.setInputVolume(e.inputVolume), eI.setOutputVolume(e.outputVolume), eI.setH264Enabled(e.openH264), eI.setAv1Enabled(e.av1Enabled), eI.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, J.isDesktop)() || __OVERLAY__ || ej || eY ? (0, J.isWeb)() && eI.supports(ep.Features.NOISE_CANCELLATION) ? (eY = !0, i.emitChange()) : (0, J.isWeb)() && tn({
      noiseCancellation: !1
    }) : (ej = !0, tE()), (0, J.isMac)() && eI.supports(ep.Features.SOUNDSHARE) ? eI.getSoundshareStatus().then(e => {
      tp(e)
    }).catch(e => {
      eS.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : ez = ed.SoundshareEnableState.ENABLED, e$ = {
      [ep.Features.VIDEO]: eI.supports(ep.Features.VIDEO),
      [ep.Features.DESKTOP_CAPTURE]: eI.supports(ep.Features.DESKTOP_CAPTURE),
      [ep.Features.HYBRID_VIDEO]: eI.supports(ep.Features.HYBRID_VIDEO)
    }, this.waitFor(en.default, er.default, es.default, eo.default, el.default, eu.default, K.default.storage, q.default, ea.default, A.default)
  }
  supports(e) {
    return eI.supports(e)
  }
  supportsInApp(e) {
    return e$[e] || eI.supports(e)
  }
  isSupported() {
    return eI.supported()
  }
  isExperimentalEncodersSupported() {
    return eI.supports(ep.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eI.supports(ep.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eY || !1
  }
  isNoiseCancellationError() {
    return eK
  }
  isAutomaticGainControlSupported() {
    return eI.supports(ep.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eY || !1
  }
  isAecDumpSupported() {
    return eI.supports(ep.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eI.supports(ep.Features.VIDEO) && eI.supports(ep.Features.SIMULCAST)
  }
  getAecDump() {
    return e2().aecDumpEnabled
  }
  getMediaEngine() {
    return eI
  }
  getVideoComponent() {
    return eI.supports(ep.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Video
  }
  getCameraComponent() {
    return eI.supports(ep.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Camera
  }
  isEnabled() {
    return eA
  }
  isMute() {
    return this.isSelfMute() || eP
  }
  isDeaf() {
    return this.isSelfDeaf() || eM
  }
  hasContext(e) {
    return null != eC[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return e === ep.MediaEngineContextTypes.DEFAULT && eL
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e2(e).mute || !K.default.didHavePermission(eE.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === ep.MediaEngineContextTypes.DEFAULT && eb
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e2(e).deaf
  }
  isVideoEnabled() {
    return eU && ex
  }
  isVideoAvailable() {
    return Object.values(ey).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.STREAM;
    return eN === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.STREAM;
    return eN === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT;
    return e !== en.default.getId() && (e2(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eI.supports(ep.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e2(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e2(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT;
    return t === ep.MediaEngineContextTypes.DEFAULT && eQ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return e === ep.MediaEngineContextTypes.DEFAULT && eQ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eq
  }
  isNativeAudioPermissionReady() {
    return eX
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return eN
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT,
      n = e2(t).localPans[e];
    return null != n ? n : eT
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.MediaEngineContextTypes.DEFAULT,
      n = t === ep.MediaEngineContextTypes.STREAM,
      i = n ? ep.DEFAULT_STREAM_VOLUME : ep.DEFAULT_VOLUME,
      r = e2(t).localVolumes[e];
    return null != r ? r : i
  }
  getInputVolume() {
    return e2().inputVolume
  }
  getOutputVolume() {
    return e2().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return e2(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return e2(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return h.each(eC, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === ed.InputModes.PUSH_TO_TALK && ev.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return ta(eO, e2().inputDeviceId)
  }
  getOutputDeviceId() {
    return ta(eD, e2().outputDeviceId)
  }
  getVideoDeviceId() {
    return ta(ey, e2().videoDeviceId)
  }
  getInputDevices() {
    return eO
  }
  getOutputDevices() {
    return eD
  }
  getVideoDevices() {
    return ey
  }
  getEchoCancellation() {
    let e = e2();
    return er.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e2().h265Enabled
  }
  getLoopback() {
    return eI.getLoopback()
  }
  getNoiseSuppression() {
    let e = e2();
    return er.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e2();
    return er.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e2().noiseCancellation
  }
  getExperimentalEncoders() {
    return e2().experimentalEncoders
  }
  getHardwareH264() {
    return e2().hardwareH264
  }
  getEnableSilenceWarning() {
    return e2().silenceWarning
  }
  getDebugLogging() {
    return eI.getDebugLogging()
  }
  getQoS() {
    return e2().qos
  }
  getAttenuation() {
    return e2().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e2().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e2().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eI.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT;
    return e2(e)
  }
  getState() {
    return {
      settingsByContext: eC,
      inputDevices: eO,
      outputDevices: eD,
      appSupported: e$,
      krispModuleLoaded: eY,
      goLiveSource: s,
      goLiveContext: eN
    }
  }
  getInputDetected() {
    return eF
  }
  getNoInputDetectedNotice() {
    return eB
  }
  getPacketDelay() {
    return J.isPlatformEmbedded || this.getMode() !== ed.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eI.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eR
  }
  getVideoHook() {
    return e2().videoHook
  }
  supportsVideoHook() {
    return eI.supports(ep.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e2().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eI.supports(ep.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ef.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e2().openH264
  }
  getAv1Enabled() {
    return e2().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return ew
  }
  getSoundshareEnabled() {
    return ez
  }
  supportsEnableSoundshare() {
    return (0, J.isMac)() && eI.supports(ep.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ef.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ef.DARWIN_SCKIT_AUDIO_VERSION) && te(!1))
  }
  supportsScreenSoundshare() {
    return (0, J.isMac)() && eI.supports(ep.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ef.DARWIN_SCKIT_AUDIO_VERSION) && te(!1) || (0, J.isWindows)() && eI.supports(ep.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.MediaEngineContextTypes.DEFAULT,
      t = this.supports(ep.Features.VIDEO) ? [{
        rid: "100",
        type: e === ep.MediaEngineContextTypes.DEFAULT ? ep.MediaTypes.VIDEO : ep.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && e === ep.MediaEngineContextTypes.DEFAULT && t.push({
      rid: "50",
      type: ep.MediaTypes.VIDEO,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    let t = eI.getSupportedSecureFramesProtocolVersion(),
      n = V.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      i = null != e ? V.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      r = n.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
      s = !(0, J.isIOS)() && !(0, J.isAndroid)() && (n.canSupportMls || (null == i ? void 0 : i.canSupportMls));
    return r ? s ? t : t % 100 : 0
  }
  hasClipsSource() {
    return null != a
  }
}
tS.displayName = "MediaEngineStore";
var tm = i = new tS(I.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && e5(r, null), null != t || null == n) {
      eH = !1;
      return
    }
    if (eH) return;
    eH = !0;
    let s = e2();
    (s.mute || s.deaf) && (tn({
      deaf: !1,
      mute: !1
    }), eI.eachConnection(e6))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (r === t.sessionId) {
        eP = t.mute || t.suppress, eM = t.deaf, eI.eachConnection(e6);
        let e = null != t.guildId && null != t.channelId && null != eW && eW !== t.channelId,
          n = !e && eU;
        return e5(n), eW = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === en.default.getId() && null == el.default.getChannelId() && e5(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eP = !1, eM = !1, (0, z.shouldReadWriteAudioSettings)() && to()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ed.RTCConnectionStates.CONNECTING:
        ti();
        break;
      case ed.RTCConnectionStates.RTC_CONNECTING:
        eV = !1, eB = !1;
        break;
      case ed.RTCConnectionStates.RTC_CONNECTED:
        e5();
        break;
      case ed.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eQ.size) return;
          let e = ep.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e2(e);
          eQ.forEach(n => {
            f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eI.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eQ.clear(), tn({
            disabledLocalVideos: t
          }, e, !1)
        })()
    }
    tt.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eL = t, eI.eachConnection(e6)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e2(t);
    if (t === ep.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(eE.NativePermissionTypes.AUDIO), eb)) return !1;
    !(n = !i && !n) && (i = !1), tn({
      mute: n,
      deaf: i
    }, t), eI.eachConnection(e6)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e2(t);
    tn({
      deaf: !n.deaf
    }, t), eI.eachConnection(e6)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === en.default.getId()) return;
    let {
      localMutes: i
    } = e2(t);
    i[n] ? delete i[n] : i[n] = !0, tn({
      localMutes: i
    }, t), eI.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, r, s, a, o;
    let {
      context: l,
      userId: u,
      videoToggleState: c,
      persist: d,
      isAutomatic: E
    } = e;
    f(!(d && E), "These are not allowed to both be true.");
    let h = c === ed.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: p
      } = e2(l),
      _ = null !== (t = p[u]) && void 0 !== t && t,
      S = eQ.has(u),
      m = c === ed.VideoToggleState.AUTO_ENABLED || c === ed.VideoToggleState.MANUAL_ENABLED;
    eS.info("disableVideo=".concat(h, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), f(!(S && !_), "If you are auto-disabled, then you are also disabled.");
    let T = h !== _,
      g = l === ep.MediaEngineContextTypes.DEFAULT,
      I = E && T && g,
      C = d && T && g;
    eS.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
    let {
      videoToggleStateMap: v
    } = e2(l);
    if (v[u] === ed.VideoToggleState.AUTO_PROBING && c === ed.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, h ? ep.VideoToggleReason.AUTO_DISABLE : ep.VideoToggleReason.AUTO_ENABLE, m), v[u] = c, tn({
        videoToggleStateMap: v
      }, l, d), c === ed.VideoToggleState.AUTO_PROBING ? null === (n = el.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = el.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eZ && (eS.info("isAutoDisableAllowed=".concat(eZ, " - disabling VideoHealthManager")), null === (s = el.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
      if (!h && !S || h && !eZ) return;
      (0, W.default)(u, h ? ep.VideoToggleReason.AUTO_DISABLE : ep.VideoToggleReason.AUTO_ENABLE, m), h ? eQ.add(u) : eQ.delete(u)
    } else C && (S && !h ? (eS.info("disallowing auto-disable for this session because of manual override by user"), eZ = !1, null === (o = el.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, ep.VideoToggleReason.MANUAL_REENABLE, m)) : (0, W.default)(u, h ? ep.VideoToggleReason.MANUAL_DISABLE : ep.VideoToggleReason.MANUAL_ENABLE, m));
    g && !h && eQ.delete(u), h ? p[u] = !0 : delete p[u], tn({
      disabledLocalVideos: p
    }, l, d), eI.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = p[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === en.default.getId()) return;
    let r = t === ep.MediaEngineContextTypes.STREAM,
      s = r ? ep.DEFAULT_STREAM_VOLUME : ep.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e2(t);
    i === s ? delete a[n] : a[n] = i, tn({
      localVolumes: a
    }, t), eI.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: r
    } = e, {
      localPans: s
    } = e2(t);
    s[n] = {
      left: i,
      right: r
    }, tn({
      localPans: s
    }, t), eI.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    tn({
      mode: n,
      modeOptions: i
    }, t), eI.eachConnection(e4), tt.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    tn({
      inputVolume: e3(t)
    }), eI.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    tn({
      outputVolume: t
    }), eI.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tn({
      inputDeviceId: t = ta(eO, t)
    }), eI.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tn({
      outputDeviceId: t = ta(eD, t)
    }), eI.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = tn({
      echoCancellation: e.enabled
    });
    eI.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), td(), tc(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = tn({
      h265Enabled: e.enabled
    });
    eI.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return eJ = t, td()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = tn({
      noiseSuppression: e.enabled
    });
    eI.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), td(), tc(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = tn({
      automaticGainControl: e.enabled
    });
    eI.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), td(), tc(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = tn({
      noiseCancellation: e.enabled
    });
    eI.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), td(), tc(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    tn({
      silenceWarning: e.enabled
    }), tt.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eI.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    tn({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    tn({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = tn({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eI.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    tn({
      qos: t
    }), eI.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eO;
      if (eO = ts(e, e_.default.Messages.NO_INPUT_DEVICES), !h.isEqual(eO, t)) {
        let e = e2(),
          t = ta(eO, e.inputDeviceId);
        eI.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eD;
      if (eD = ts(e, e_.default.Messages.NO_OUTPUT_DEVICES), !h.isEqual(eD, t)) {
        let e = e2(),
          t = ta(eD, e.outputDeviceId);
        eI.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      ex = e.length > 0;
      let t = ey;
      if (ey = ts(e, e_.default.Messages.NO_VIDEO_DEVICES), eU && !h.isEqual(ey, t)) {
        var n;
        let e = void 0 !== ey[eG],
          i = eG === ep.DEFAULT_DEVICE_ID && (null === (n = t[ep.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e5(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    tn({
      inputVolume: e3(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    T.default.remove(em), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eF = t, !eV && eF && (eV = !0, tt.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eI.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eA = e.enabled, e.unmute && tn({
      mute: !1,
      deaf: !1
    }), eI.eachConnection(e6)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    K.default.requestPermission(eE.NativePermissionTypes.CAMERA), e5(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eA = !1, eI.eachConnection(e6);
        break;
      case "video":
        e5(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, r, a;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      ;
      let e = null,
        i = null,
        {
          sourceId: r,
          sound: l
        } = o.desktopSettings,
        u = null !== (t = o.context) && void 0 !== t ? t : ep.MediaEngineContextTypes.DEFAULT,
        c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        d = Q.default.getPidFromDesktopSource(r);
      J.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = tl(d), null != e && tu(e, i)), (a = u) !== eN && (null != s && eI.setGoLiveSource(null, eN), eN = a);
      let f = u === ep.MediaEngineContextTypes.STREAM && eU;
      e5(f, {
        desktopSource: {
          id: r,
          sourcePid: d,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: c.resolution,
          frameRate: c.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : ep.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === ep.MediaEngineContextTypes.STREAM && eU,
        a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      e5(s, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else e5(eU, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tn({
      videoDeviceId: t = ta(ey, t)
    }), e5()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = tn({
      experimentalEncoders: e.enabled
    });
    eI.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eR !== e.required && (eR = e.required, !e.required && eI.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: th,
  USER_SETTINGS_MODAL_SET_SECTION: th,
  CERTIFIED_DEVICES_SET: function() {
    return eI.eachConnection(e8), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    ev.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    ev.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eC = t.settingsByContext, eO = t.inputDevices, eD = t.outputDevices, e$ = t.appSupported, eY = t.krispModuleLoaded, eN = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = tn({
      openH264: t
    });
    eI.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = tn({
      hardwareH264: t
    });
    eI.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = tn({
      av1Enabled: t
    });
    eI.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = D.default.isEnabled();
    if (t === ed.AppStates.BACKGROUND && eU && !n) ek = !0, e5(!1);
    else {
      if (t !== ed.AppStates.ACTIVE || !ek) return !1;
      ek = !1, e5(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eI.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eb) return !1;
    eb = n, eI.eachConnection(e6)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eE.NativePermissionStates.ACCEPTED;
    switch (n) {
      case eE.NativePermissionTypes.AUDIO:
        eX = !0, eI.eachConnection(e6);
        break;
      case eE.NativePermissionTypes.CAMERA:
        !i && eU && e5(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eI.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = tn({
      aecDumpEnabled: t
    });
    eI.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!eU && null == s || null != el.default.getRTCConnectionId()) return !1;
    e5(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eK && (eK = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    t_(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != r) {
        let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
          s = i.getExperimentalSoundshare();
        n && eI.setSoundshareSource(e, s, eN)
      }
    }()
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eI.applyMediaFilterSettings(t).finally(() => {
      eq = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    eq = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    eq = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, z.shouldReadWriteAudioSettings)() || t !== eh.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    to(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: s
    } = L.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = A.default.getSettings().decoupledClipsEnabled;
    if (!s || !o || null == C.default) return;
    let l = null,
      u = null,
      c = Q.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = tl(c));
    let d = {
      desktopSource: {
        id: t,
        sourcePid: c,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eI.setClipsSource(null), (0, J.isWindows)() && null != a.desktopSource.soundshareId && v.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tu(l, u), a = d;
    let {
      useQuartzCapturer: f
    } = x.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: E
    } = U.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), h = e2().videoHook, p = eI.supports(ep.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: _
    } = B.default.getConfig(p && h, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: S
    } = Y.default.getConfig(p && e9(), "e225cfdf5_wgc2", !1);
    eI.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: h,
        useGraphicsCapture: e9(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: f,
        allowScreenCaptureKit: te(!1),
        videoHookStaleFrameTimeoutMs: _,
        graphicsCaptureStaleFrameTimeoutMs: S,
        hdrCaptureMode: E
      },
      quality: r,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    void 0 !== t.viewerClipsEnabled && eI.eachConnection(e => e.setClipsKeyFrameInterval(A.default.getSettings().viewerClipsEnabled ? ep.VIEWERSIDE_CLIP_KFI_MS : 0), ep.MediaEngineContextTypes.STREAM)
  }
})